import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Diagnostic Studio",
  description:
    "Terms and conditions for diagnostic, programming, repair and related vehicle services supplied by The Diagnostic Studio.",
};

export default function TermsPage() {
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
            Customer information
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            These terms explain how we carry out diagnostic, programming,
            repair and related vehicle work, how payment and parts are handled,
            and what you can expect when a vehicle is entrusted to us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-3xl border border-[#d3dee6] bg-white p-6 shadow-[0_12px_35px_rgba(11,32,52,0.06)] sm:p-9">
          <div className="space-y-9 text-[15px] leading-7 text-[#536577]">
            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                1. About these terms
              </h2>
              <p className="mt-3">
                These terms apply to work supplied by The Diagnostic Studio,
                including vehicle diagnostics, electrical and electronic fault
                finding, programming, coding, software operations, module
                replacement or adaptation, security-related work, repairs and
                associated services.
              </p>
              <p className="mt-3">
                Nothing in these terms is intended to exclude or restrict any
                rights or remedies that cannot lawfully be excluded or
                restricted. Consumers retain their statutory rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                2. Estimates, diagnosis and authorisation
              </h2>
              <p className="mt-3">
                Diagnostic work is an investigation and does not guarantee that
                every fault can be identified within an initial period of
                labour. Where further testing, dismantling, specialist
                procedures or additional labour are reasonably required, we
                will seek further authorisation where appropriate before
                materially increasing the agreed work or cost.
              </p>
              <p className="mt-3">
                An estimate is our reasonable assessment of likely cost based
                on the information available at the time. Additional faults,
                previous repairs, modifications, corrosion, damaged wiring,
                inaccessible components or other conditions discovered during
                the work may affect the final cost.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                3. Programming, coding and software operations
              </h2>
              <p className="mt-3">
                Programming, coding, flashing, software updating, module
                adaptation and similar operations can carry inherent technical
                risks. These may include interruption during a programming
                operation, pre-existing or latent control-unit defects,
                communication or network faults, low-voltage events,
                incompatible or previously modified software, damaged memory,
                or a control unit becoming unresponsive during or after the
                procedure.
              </p>
              <p className="mt-3">
                We will take reasonable care and use appropriate equipment and
                procedures when carrying out this work. The existence of an
                inherent technical risk does not exclude our responsibility
                where loss or damage results from our failure to exercise the
                care and skill required by law.
              </p>
              <p className="mt-3">
                If a problem occurs during programming or coding and
                responsibility is not immediately clear, we will investigate
                the circumstances reasonably before deciding how the matter
                should be resolved. Pre-existing faults, prior modifications
                and failures that would have occurred independently of our work
                remain the customer's responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                4. Parts and replacement modules
              </h2>
              <p className="mt-3">
                We may supply new, remanufactured or used components where
                appropriate. Where a used or replacement control module or
                similar significant component is supplied, its status will be
                disclosed where reasonably practicable.
              </p>
              <p className="mt-3">
                We generally do not accept customer-supplied used parts or used
                electronic modules. This is because their history, condition,
                compatibility and authenticity may be impossible for us to
                verify. Any exception must be agreed by us in advance.
              </p>
              <p className="mt-3">
                Where we agree to fit a customer-supplied part, our
                responsibility for the quality or suitability of that part may
                differ from a part supplied by us, but this does not affect
                rights that cannot lawfully be excluded.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                5. Parts payments and special orders
              </h2>
              <p className="mt-3">
                For retail customers, parts with a value of £500 or more will
                normally require payment in full before ordering. We may also
                require full or partial payment in advance for lower-value
                parts where they are special-order, non-returnable, coded,
                programmed, VIN-specific, imported, unusual or otherwise carry
                a significant financial risk if the customer cancels.
              </p>
              <p className="mt-3">
                We will explain any required advance payment before the order is
                placed. Cancellation and refund rights will be dealt with in
                accordance with applicable law and the nature of the goods or
                services concerned.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                6. Used parts and warranties
              </h2>
              <p className="mt-3">
                Where we provide a specific warranty on a used part, the
                duration and scope of that warranty will be stated separately
                where appropriate. Any such warranty is an additional
                commercial warranty and does not replace, shorten or remove a
                consumer's statutory rights.
              </p>
              <p className="mt-3">
                A warranty claim relates to the part or work covered by that
                warranty. A later fault is not automatically a continuation of
                the original fault simply because symptoms appear similar.
                Unrelated faults, subsequent failures and damage caused by
                external factors may require separate diagnosis and repair.
              </p>
              <p className="mt-3">
                Where replacement of a warranted component requires further
                programming or coding, we may reduce or waive associated labour
                charges as a matter of goodwill depending on the circumstances.
                Unless required by law or expressly agreed otherwise, this is
                not an unlimited promise to provide repeated programming or
                coding without charge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                7. Payment
              </h2>
              <p className="mt-3">
                Retail invoices are normally payable when the vehicle is
                collected or when the work is completed, unless another
                arrangement has been agreed.
              </p>
              <p className="mt-3">
                Approved trade or account customers may be offered credit
                terms. Any credit facility is subject to an agreed credit limit
                and payment period and may be changed, suspended or withdrawn
                for future work. Where 30-day terms have specifically been
                agreed for an approved trade customer, payment is due within
                that agreed period.
              </p>
              <p className="mt-3">
                The payment due date shown on an invoice applies to that
                invoice. Queries about an invoice should be raised promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                8. Vehicle collection and storage
              </h2>
              <p className="mt-3">
                Customers should arrange collection promptly once advised that
                a vehicle is ready. If a vehicle is left with us for an
                unreasonable period after completion without prior agreement,
                we may give notice that reasonable storage charges will apply.
                Any such charge will be communicated before it begins to accrue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                9. Customer information and vehicle history
              </h2>
              <p className="mt-3">
                Please tell us about relevant previous work, modifications,
                known electrical or software issues, non-standard equipment,
                security devices and other information that could reasonably
                affect diagnosis or repair. We are entitled to rely on
                information provided to us unless there is an obvious reason
                not to do so.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                10. Responsibility for our work
              </h2>
              <p className="mt-3">
                We will carry out our services with the level of care and skill
                required by law. If you believe there is a problem with work we
                have carried out, please contact us promptly and give us a
                reasonable opportunity to inspect the vehicle and investigate
                the concern.
              </p>
              <p className="mt-3">
                We are not responsible for faults or losses caused solely by
                matters outside our reasonable control, pre-existing defects,
                inaccurate information supplied to us, unauthorised subsequent
                work, misuse or unrelated component failure. Nothing in these
                terms excludes liability where doing so would be unlawful.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                11. Trade customers
              </h2>
              <p className="mt-3">
                Where our customer is a garage, dealer or other business, that
                business remains responsible for its own relationship with its
                end customer. Trade pricing, credit arrangements and other
                commercial terms may be agreed separately and may differ from
                our standard retail arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-[#0b2034]">
                12. Complaints and queries
              </h2>
              <p className="mt-3">
                If you have a concern about our work, an invoice or these
                terms, please contact us so that we can investigate it.
              </p>
              <p className="mt-3">
                Email{" "}
                <a
                  href="mailto:hello@thediagnosticstudio.co.uk"
                  className="font-semibold text-[#0b2034] underline decoration-[#11c7e8] underline-offset-4"
                >
                  hello@thediagnosticstudio.co.uk
                </a>{" "}
                or telephone{" "}
                <a
                  href="tel:07927336199"
                  className="font-semibold text-[#0b2034] underline decoration-[#11c7e8] underline-offset-4"
                >
                  07927 336199
                </a>
                .
              </p>
            </section>

            <section className="rounded-2xl bg-[#eef4f7] p-5">
              <p className="font-bold text-[#0b2034]">
                The Diagnostic Studio
              </p>
              <p className="mt-2 text-sm">
                Unit 3 Block E, Flightway Business Park, Dunkeswell, EX14 4PP
              </p>
              <p className="mt-1 text-sm">
                Last updated: September 2026
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
