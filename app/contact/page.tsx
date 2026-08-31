"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      registration: formData.get("registration"),
      vehicle: formData.get("vehicle"),
      problem: formData.get("problem"),
      tried: formData.get("tried"),
      contactPreference: formData.get("contactPreference"),
      companyWebsite: formData.get("companyWebsite"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#eef4f7] text-[#0b2034]">
      <header className="border-b border-[#d7e1e8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-[#0b2034] text-xl font-black tracking-tight text-white">
              TD<span className="text-[#11c7e8]">S</span>
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold uppercase tracking-[0.22em]">
                The Diagnostic
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.34em]">
                Studio
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#a9bac6] bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[#11bfe0]"
          >
            ← Back to website
          </a>
        </div>
      </header>

      <section className="bg-[#0b2034] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#11c7e8]">
            Diagnostic enquiry
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
            Tell us what the vehicle is doing.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Give us as much useful information as you can. If the vehicle has
            already been investigated or had parts fitted, tell us that too.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#119bb8]">
            Before you send
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">
            The more we know, the better.
          </h2>

          <p className="mt-5 leading-7 text-[#536577]">
            You do not need to diagnose the vehicle yourself. Just describe
            what is happening as clearly as you can.
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl border border-[#d3dee6] bg-white p-5">
              <p className="font-bold">Vehicle details</p>
              <p className="mt-2 text-sm leading-6 text-[#62717e]">
                Registration and make/model help us understand what we're
                dealing with before we speak.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d3dee6] bg-white p-5">
              <p className="font-bold">Describe the actual symptoms</p>
              <p className="mt-2 text-sm leading-6 text-[#62717e]">
                Warning lights, poor running, non-starting, intermittent faults,
                noises or anything else you have noticed.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d3dee6] bg-white p-5">
              <p className="font-bold">Tell us what's already been tried</p>
              <p className="mt-2 text-sm leading-6 text-[#62717e]">
                Previous diagnostic work, parts replaced, fault codes or advice
                from another garage can all be useful.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#0b2034] p-6 text-white">
            <p className="font-bold text-[#11c7e8]">Prefer to email us?</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              You can also contact us directly at:
            </p>
            <a
              href="mailto:hello@thediagnosticstudio.co.uk"
              className="mt-3 inline-block font-semibold text-white underline decoration-[#11c7e8] underline-offset-4"
            >
              hello@thediagnosticstudio.co.uk
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#d3dee6] bg-white p-6 shadow-[0_12px_35px_rgba(11,32,52,0.07)] sm:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="companyWebsite">Company website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold">
                Your name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-bold">
                Phone number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={40}
                autoComplete="tel"
                className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={150}
                autoComplete="email"
                className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
              />
            </div>

            <div>
              <label
                htmlFor="registration"
                className="mb-2 block text-sm font-bold"
              >
                Vehicle registration
              </label>
              <input
                id="registration"
                name="registration"
                type="text"
                maxLength={20}
                autoCapitalize="characters"
                className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 uppercase outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="vehicle" className="mb-2 block text-sm font-bold">
              Vehicle make / model
            </label>
            <input
              id="vehicle"
              name="vehicle"
              type="text"
              maxLength={120}
              placeholder="e.g. BMW 330d"
              className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="problem" className="mb-2 block text-sm font-bold">
              What is the vehicle doing? *
            </label>
            <textarea
              id="problem"
              name="problem"
              required
              maxLength={5000}
              rows={6}
              placeholder="Describe the symptoms, warning lights, when the problem happens and anything else you've noticed."
              className="w-full resize-y rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 leading-6 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="tried" className="mb-2 block text-sm font-bold">
              What has already been tried?
            </label>
            <textarea
              id="tried"
              name="tried"
              maxLength={5000}
              rows={4}
              placeholder="Previous diagnostics, fault codes, parts replaced, other garages visited, etc."
              className="w-full resize-y rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 leading-6 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="contactPreference"
              className="mb-2 block text-sm font-bold"
            >
              Preferred contact method
            </label>
            <select
              id="contactPreference"
              name="contactPreference"
              defaultValue="Either"
              className="w-full rounded-xl border border-[#b8c7d1] bg-white px-4 py-3 outline-none transition focus:border-[#11bfe0] focus:ring-2 focus:ring-[#11bfe0]/15"
            >
              <option>Either</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-7 w-full rounded-xl bg-[#0b2034] px-6 py-4 font-bold text-white transition hover:bg-[#15344f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending enquiry..." : "Send diagnostic enquiry"}
          </button>

          {status === "success" && (
            <div className="mt-5 rounded-xl border border-[#a9d9ca] bg-[#eefaf6] p-4 text-sm font-semibold text-[#135c48]">
              Thank you. Your enquiry has been sent to The Diagnostic Studio.
            </div>
          )}

          {status === "error" && (
            <div className="mt-5 rounded-xl border border-[#e1b1b1] bg-[#fff3f3] p-4 text-sm font-semibold text-[#8b2f2f]">
              We couldn't send the enquiry. Please try again or email
              hello@thediagnosticstudio.co.uk.
            </div>
          )}

          <p className="mt-5 text-center text-xs leading-5 text-[#71808d]">
            Please don't include passwords, PINs or other sensitive security
            information in this form. By sending an enquiry, you agree that we
            may use the information you provide to respond to your request.{" "}
            <a
              href="/privacy"
              className="font-semibold text-[#0b2034] underline decoration-[#11c7e8] underline-offset-2"
            >
              Privacy notice
            </a>
          </p>
        </form>
      </section>

      <footer className="bg-[#0b2034] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-bold">The Diagnostic Studio</p>
          <p className="text-white/55">
            © The Diagnostic Studio 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}