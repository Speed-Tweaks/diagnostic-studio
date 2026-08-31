import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy notice for The Diagnostic Studio website and diagnostic enquiry form.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#eef4f7] text-[#0b2034]">
      <header className="border-b border-[#d7e1e8] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-10">
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
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#11c7e8]">
            Your information
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Privacy notice
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            A straightforward explanation of the information we receive through
            this website and how we use it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-3xl border border-[#d3dee6] bg-white p-6 shadow-[0_12px_35px_rgba(11,32,52,0.06)] sm:p-9">
          <div className="space-y-8 text-[15px] leading-7 text-[#536577]">
            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                Information you send us
              </h2>
              <p className="mt-3">
                When you use our diagnostic enquiry form, we may receive your
                name, email address, telephone number, vehicle registration,
                vehicle make or model, details of the vehicle problem, work
                already carried out and your preferred contact method.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                Why we use it
              </h2>
              <p className="mt-3">
                We use the information you provide to understand your enquiry,
                contact you about the vehicle and provide or discuss the
                diagnostic services you have asked us about.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                Who we share it with
              </h2>
              <p className="mt-3">
                We do not sell your personal information. Information may be
                handled by service providers used to operate our website and
                email service where this is necessary to receive and respond to
                your enquiry, or disclosed where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                How long we keep it
              </h2>
              <p className="mt-3">
                We keep enquiry information only for as long as it is reasonably
                needed for the enquiry, our business records and any legal or
                regulatory requirements that apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                Your choices and rights
              </h2>
              <p className="mt-3">
                You can contact us if you want to ask what personal information
                we hold about you, request that inaccurate information is
                corrected, or ask us to consider deleting information we no
                longer need. Other data-protection rights may also apply
                depending on the circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                Contact us about privacy
              </h2>
              <p className="mt-3">
                For questions about this notice or how we handle your
                information, email{" "}
                <a
                  href="mailto:hello@thediagnosticstudio.co.uk"
                  className="font-semibold text-[#0b2034] underline decoration-[#11c7e8] underline-offset-4"
                >
                  hello@thediagnosticstudio.co.uk
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b2034] text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-7 text-sm md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-bold">The Diagnostic Studio</p>
          <p className="text-white/55">
            © The Diagnostic Studio 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
