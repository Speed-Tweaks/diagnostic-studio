import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const previous = requestLog.get(ip) || [];

  const recent = previous.filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);

  return false;
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many enquiries have been submitted. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const companyWebsite = cleanText(body.companyWebsite, 250);

    /*
      Honeypot:
      real visitors never see this field.
      If it contains anything, pretend the form succeeded
      but do not send an email.
    */
    if (companyWebsite) {
      return NextResponse.json({ success: true });
    }

    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 150);
    const phone = cleanText(body.phone, 40);
    const registration = cleanText(body.registration, 20).toUpperCase();
    const vehicle = cleanText(body.vehicle, 120);
    const problem = cleanText(body.problem, 5000);
    const tried = cleanText(body.tried, 5000);
    const contactPreference = cleanText(body.contactPreference, 20);

    if (!name || !email || !phone || !problem) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const allowedContactPreferences = ["Either", "Phone", "Email"];

    const safeContactPreference =
      allowedContactPreferences.includes(contactPreference)
        ? contactPreference
        : "Either";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPass ||
      !contactEmail ||
      Number.isNaN(smtpPort)
    ) {
      console.error("Diagnostic Studio contact form: SMTP not configured.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const displayRegistration = registration || "Not provided";
    const displayVehicle = vehicle || "Not provided";
    const displayTried = tried || "Nothing provided";

    const htmlName = escapeHtml(name);
    const htmlEmail = escapeHtml(email);
    const htmlPhone = escapeHtml(phone);
    const htmlRegistration = escapeHtml(displayRegistration);
    const htmlVehicle = escapeHtml(displayVehicle);
    const htmlProblem = escapeHtml(problem);
    const htmlTried = escapeHtml(displayTried);
    const htmlContactPreference = escapeHtml(safeContactPreference);

    await transporter.sendMail({
      from: `"The Diagnostic Studio Website" <${smtpUser}>`,
      to: contactEmail,

      /*
        This means pressing Reply on the enquiry email
        replies directly to the customer.
      */
      replyTo: email,

      subject: registration
        ? `New diagnostic enquiry - ${registration}`
        : "New diagnostic enquiry",

      text: `
New enquiry from The Diagnostic Studio website

Name:
${name}

Email:
${email}

Phone:
${phone}

Preferred contact method:
${safeContactPreference}

Vehicle registration:
${displayRegistration}

Vehicle make / model:
${displayVehicle}

What is the vehicle doing?
${problem}

What has already been tried?
${displayTried}
      `.trim(),

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            color: #0b2034;
          "
        >
          <div
            style="
              background: #0b2034;
              padding: 24px;
              color: white;
            "
          >
            <div
              style="
                font-size: 13px;
                font-weight: bold;
                letter-spacing: 2px;
                color: #11c7e8;
              "
            >
              THE DIAGNOSTIC STUDIO
            </div>

            <h1
              style="
                margin: 10px 0 0;
                font-size: 28px;
              "
            >
              New diagnostic enquiry
            </h1>
          </div>

          <div
            style="
              background: #f7fafc;
              padding: 24px;
            "
          >
            <p>
              <strong>Name:</strong><br>
              ${htmlName}
            </p>

            <p>
              <strong>Email:</strong><br>
              <a href="mailto:${htmlEmail}">
                ${htmlEmail}
              </a>
            </p>

            <p>
              <strong>Phone:</strong><br>
              ${htmlPhone}
            </p>

            <p>
              <strong>Preferred contact method:</strong><br>
              ${htmlContactPreference}
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #d8e2e8;
                margin: 24px 0;
              "
            >

            <p>
              <strong>Vehicle registration:</strong><br>
              ${htmlRegistration}
            </p>

            <p>
              <strong>Vehicle make / model:</strong><br>
              ${htmlVehicle}
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #d8e2e8;
                margin: 24px 0;
              "
            >

            <p>
              <strong>What is the vehicle doing?</strong>
            </p>

            <div
              style="
                white-space: pre-wrap;
                line-height: 1.6;
              "
            >
              ${htmlProblem}
            </div>

            <p style="margin-top: 24px;">
              <strong>What has already been tried?</strong>
            </p>

            <div
              style="
                white-space: pre-wrap;
                line-height: 1.6;
              "
            >
              ${htmlTried}
            </div>
          </div>

          <div
            style="
              padding: 16px 24px;
              background: #eef4f7;
              color: #62717e;
              font-size: 12px;
              line-height: 1.5;
            "
          >
            Submitted through thediagnosticstudio.co.uk
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Diagnostic Studio contact form error:", error);

    return NextResponse.json(
      {
        error:
          "We couldn't send your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}