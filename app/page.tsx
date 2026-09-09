type TradeIconName = "diagnostics" | "programming" | "security" | "support";
type StrengthIconName = "access" | "expertise" | "precision" | "trusted";

function StrengthIcon({ name }: { name: StrengthIconName }) {
  const common = "h-10 w-10 shrink-0 text-[#11c7e8]";

  if (name === "access") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <rect
          x="12"
          y="10"
          width="24"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="16"
          width="12"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M8 16H12M8 24H12M8 32H12" stroke="currentColor" strokeWidth="2" />
        <path d="M36 16H40M36 24H40M36 32H40" stroke="currentColor" strokeWidth="2" />
        <path d="M18 6V10M24 6V10M30 6V10" stroke="currentColor" strokeWidth="2" />
        <path d="M18 38V42M24 38V42M30 38V42" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21H27M21 25H27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "expertise") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <path
          d="M4 25H12L16 13L22 36L28 8L34 30L38 21H44"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "precision") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <circle
          cx="21"
          cy="21"
          r="11"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M29 29L41 41"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 48 48" fill="none">
      <path
        d="M18 17L23 22L18 27L10 19L14 15C15.1 13.9 16.9 13.9 18 15L20 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 17L25 22L30 27L38 19L34 15C32.9 13.9 31.1 13.9 30 15L28 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27L27 36C28.1 37.1 29.9 37.1 31 36C32.1 34.9 32.1 33.1 31 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 27L21 36C19.9 37.1 18.1 37.1 17 36C15.9 34.9 15.9 33.1 17 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 17L24 14L28 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TradeIcon({ name }: { name: TradeIconName }) {
  const common = "h-9 w-9 shrink-0 text-[#11bfe0]";

  if (name === "diagnostics") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <circle cx="22" cy="22" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M30 30L40 40" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 22H18L21 17L25 27L28 22H31"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "programming") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <rect x="10" y="12" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M17 39H31" stroke="currentColor" strokeWidth="2" />
        <path d="M24 34V39" stroke="currentColor" strokeWidth="2" />
        <path d="M18 19L14 23L18 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 19L34 23L30 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 17L21 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "security") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none">
        <path d="M24 6L38 11V22C38 31 32.5 38.5 24 42C15.5 38.5 10 31 10 22V11L24 6Z" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="21" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M20 21V18C20 15.8 21.8 14 24 14C26.2 14 28 15.8 28 18V21" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 48 48" fill="none">
      <path d="M18 13L23 18L18 23L13 18L18 13Z" stroke="currentColor" strokeWidth="2" />
      <path d="M30 25L35 30L30 35L25 30L30 25Z" stroke="currentColor" strokeWidth="2" />
      <path d="M21 20L28 27" stroke="currentColor" strokeWidth="2" />
      <path d="M10 28C13 25 16 24 20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 20C35 23 32 24 28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 32L16 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M37 16L32 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg className="h-14 w-14 shrink-0 text-[#11bfe0]" viewBox="0 0 64 64" fill="none">
      <path d="M8 27L32 10L56 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 24V54H51V24" stroke="currentColor" strokeWidth="2" />
      <rect x="21" y="32" width="22" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M21 39H43" stroke="currentColor" strokeWidth="2" />
      <path d="M21 46H43" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function WorkshopPeopleIcon() {
  return (
    <svg className="h-12 w-12 shrink-0 text-[#11c7e8]" viewBox="0 0 64 64" fill="none">
      <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="41" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 45C12 37.8 17.4 33 24 33C30.6 33 36 37.8 36 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M33 45C33 39.3 36.8 35 42 35C47.2 35 52 39.3 52 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 19H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M7 3L10 7L8 9C9.5 12 12 14.5 15 16L17 14L21 17C21 19.2 19.2 21 17 21C9.3 20.2 3.8 14.7 3 7C3 4.8 4.8 3 7 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 8H17V4.5C16.6 4.4 15.2 4.3 13.6 4.3C10.4 4.3 8.2 6.3 8.2 9.9V13H5V17H8.2V24H12.2V17H15.5L16 13H12.2V10.3C12.2 9.1 12.5 8 14.5 8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const services = [
    {
      number: "01",
      title: "Advanced diagnostics",
      text: "Complex, intermittent and difficult faults investigated properly.",
      image: "/images/diagnostics.png",
    },
    {
      number: "02",
      title: "Programming & coding",
      text: "Manufacturer-level programming, coding and module configuration.",
      image: "/images/programming.png",
    },
    {
      number: "03",
      title: "Nightmare fault finding",
      text: "For vehicles that have already been elsewhere or had parts fitted without a fix.",
      image: "/images/nightmare-faults.png",
    },
    {
      number: "04",
      title: "Keys & security",
      text: "Support with keys, immobiliser systems, module replacement and security-related faults.",
      image: "/images/keys-security.png",
    },
  ];

  const strengths: {
    title: string;
    text: string;
    icon: StrengthIconName;
  }[] = [
    {
      title: "Manufacturer-level access",
      text: "Official tools. Deeper insight.",
      icon: "access",
    },
    {
      title: "Deep technical expertise",
      text: "Complex systems. Real solutions.",
      icon: "expertise",
    },
    {
      title: "Precision diagnostics",
      text: "Test. Prove. Fix.",
      icon: "precision",
    },
    {
      title: "Trusted by private & trade",
      text: "A collaborative approach.",
      icon: "trusted",
    },
  ];

  const tradeServices: {
    title: string;
    text: string;
    icon: TradeIconName;
  }[] = [
    {
      title: "Difficult diagnostics",
      text: "Complex and intermittent faults solved.",
      icon: "diagnostics",
    },
    {
      title: "Module programming",
      text: "Coding, configuration and module replacement.",
      icon: "programming",
    },
    {
      title: "Vehicle security",
      text: "Keys, modules and security-system support.",
      icon: "security",
    },
    {
      title: "Trade support",
      text: "Work with your testing and take it further.",
      icon: "support",
    },
  ];

  return (
    <main className="min-h-screen bg-[#eef4f7] text-[#0b2034]">
      <header className="sticky top-0 z-50 border-b border-[#d7e1e8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-[#0b2034] text-xl font-black tracking-tight text-white">
              TD<span className="text-[#11c7e8]">S</span>
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold uppercase tracking-[0.22em]">The Diagnostic</p>
              <p className="text-sm font-bold uppercase tracking-[0.34em]">Studio</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#home" className="hover:text-[#11aecd]">Home</a>
            <a href="#services" className="hover:text-[#11aecd]">Services</a>
            <a href="#approach" className="hover:text-[#11aecd]">Our Approach</a>
            <a href="#trade" className="hover:text-[#11aecd]">For Trade</a>
            <a href="/contact" className="hover:text-[#11aecd]">Contact</a>
          </nav>

          <a
            href="/contact"
            className="rounded-full border-2 border-[#11c7e8] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#11c7e8] hover:text-[#071824]"
          >
            Book a Diagnostic
          </a>
        </div>
      </header>

      <section id="home" className="bg-white">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#119bb8]">
              Advanced vehicle diagnostics
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Advanced diagnostics.
              <span className="mt-2 block text-[#11bfe0]">Definitive answers.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#425466]">
              Proper fault-finding, manufacturer-level programming and difficult
              diagnostic work for both motorists and the motor trade.
            </p>

            <div
              className="mt-6 -rotate-[1deg] leading-tight"
              style={{
                fontFamily: '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',
              }}
            >
              <p className="text-2xl font-semibold text-[#11aecd]">
                You explain the problem.
              </p>
              <p className="mt-1 text-2xl font-semibold text-[#0b2034]">
                We’ll work through the rest.
              </p>
              <div className="mt-2 h-[2px] w-56 bg-[#11c7e8]/70" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-[#0b2034] px-6 py-3 font-semibold text-white transition hover:bg-[#15344f]"
              >
                Discuss a vehicle
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#a9bac6] bg-white px-6 py-3 font-semibold transition hover:border-[#11bfe0]"
              >
                View services
              </a>
            </div>
          </div>

          <div className="relative min-h-[470px] overflow-hidden bg-[#0b2034]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(7,24,36,0.08)), url('/images/hero-workshop.png')",
              }}
            />

            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/70 to-transparent" />

            <div className="absolute bottom-6 right-6 flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-[#0b2034]/88 p-5 text-white shadow-2xl backdrop-blur">
              <WorkshopPeopleIcon />
              <p className="text-sm leading-6 text-white/80">
                Most work is carried out at the workshop, with mobile visits
                available where suitable at additional cost.
              </p>
            </div>
          </div>
        </div>

        <div className="border-y border-[#17384f] bg-[#0b2034]">
          <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-5 px-7 py-5 text-white ${
                  index < strengths.length - 1
                    ? "lg:border-r lg:border-white/20"
                    : ""
                }`}
              >
                <StrengthIcon name={item.icon} />

                <div>
                  <h3 className="text-base font-bold leading-[1.15]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#119bb8]">
              Our services
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em]">
              More than a fault-code reader.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#536577]">
            Modern vehicles are complex. Good diagnostics comes down to proper
            testing, experience and the right information.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-[#d3dee6] bg-white shadow-[0_10px_30px_rgba(11,32,52,0.06)]"
            >
              <div
                className="h-40 bg-[#0b2034] bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              <div className="flex min-h-[235px] flex-col p-5">
                <p className="text-lg font-black text-[#11b9d8]">{service.number}</p>
                <h3 className="mt-1 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5d6c79]">{service.text}</p>

                <div className="mt-auto flex justify-end pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#11b9d8] text-[#11b9d8]">
                    →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-[#d7e1e8] bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.8fr_1fr_1.2fr]">
          <div
            className="min-h-[360px] bg-[#0b2034] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/approach.png')" }}
          />

          <div className="bg-[#0b2034] px-7 py-10 text-white lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#11c7e8]">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">
              Modern tools.
              <span className="block">Old-school values.</span>
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              We use current diagnostic equipment and manufacturer-level access.
              But the principles stay the same.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p>✓ Test before replacing</p>
              <p>✓ Clear explanations</p>
              <p>✓ Honest advice</p>
              <p>✓ Fair and transparent</p>
            </div>
          </div>

          <div id="trade" className="bg-[#edf5f8] px-7 py-10 lg:px-9">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#119bb8]">
              For the motor trade
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">
              A technical resource for the awkward ones.
            </h2>

            <p className="mt-5 leading-7 text-[#526372]">
              We can work alongside garages and workshops when a vehicle needs
              deeper investigation, specialist programming or simply another
              pair of experienced eyes.
            </p>

            <div className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {tradeServices.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <TradeIcon name={item.icon} />

                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#62717e]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#11aecd]">
              Contact
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-[-0.035em]">
              Got a vehicle that needs proper investigation?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#536577]">
              Tell us what the vehicle is doing, what has already been tried and
              any information you already have. We’ll take it from there.
            </p>
          </div>

          <div className="grid gap-5 rounded-2xl border border-[#d3dee6] bg-[#f9fbfc] p-5 shadow-[0_8px_24px_rgba(11,32,52,0.04)] sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="flex gap-4">
              <GarageIcon />

              <div>
                <p className="text-sm font-bold">Workshop appointments available</p>
                <p className="mt-2 text-xs leading-5 text-[#62717e]">
                  Mobile visits can be arranged where appropriate and are
                  charged additionally.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:07927336199"
                className="flex items-center justify-between rounded-xl bg-[#0b2034] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15344f]"
              >
                <span className="flex items-center gap-3">
                  <PhoneIcon />
                  07927 336199
                </span>
                <span className="text-xl">→</span>
              </a>

              <a
                href="/contact"
                className="flex items-center justify-between rounded-xl border border-[#9fb4c1] bg-white px-5 py-3 text-sm font-semibold transition hover:border-[#11bfe0]"
              >
                <span className="flex items-center gap-3">
                  <MailIcon />
                  Send an enquiry
                </span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b2034] text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-7 md:grid-cols-[0.9fr_1.35fr_0.85fr_auto] md:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-14 items-center justify-center rounded-lg bg-white/10 font-black">
              TD<span className="text-[#11c7e8]">S</span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">The Diagnostic</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em]">Studio</p>
            </div>
          </div>

          <div className="text-xs leading-5 text-white/65">
            <p>Based in East Devon</p>
            <p className="mt-1">
              <a href="tel:07927336199" className="transition hover:text-[#11c7e8]">
                07927 336199
              </a>
              <span className="px-2 text-white/30">•</span>
              <a
                href="mailto:hello@thediagnosticstudio.co.uk"
                className="transition hover:text-[#11c7e8]"
              >
                hello@thediagnosticstudio.co.uk
              </a>
            </p>
            <p className="mt-1">Monday–Friday, 8:00am–5:30pm</p>
          </div>

          <p className="text-xs leading-5 text-white/55">
            © The Diagnostic Studio 2026
            <br />
            All rights reserved.
            <br />
            <a href="/privacy" className="transition hover:text-[#11c7e8]">
              Privacy notice
            </a>
            <span className="px-2 text-white/30">•</span>
            <a href="/terms" className="transition hover:text-[#11c7e8]">
              Terms & Conditions
            </a>
          </p>

          <div className="flex items-center gap-5 text-white">
            <a href="#" aria-label="Facebook" className="transition hover:text-[#11c7e8]">
              <FacebookIcon />
            </a>

            <a href="#" aria-label="Instagram" className="transition hover:text-[#11c7e8]">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}