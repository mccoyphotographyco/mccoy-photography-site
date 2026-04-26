import { useEffect, useMemo, useState } from "react";

function IconBase({ children, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z" />
      <circle cx="12" cy="10" r="2" />
    </IconBase>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </IconBase>
  );
}

function PhoneIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7 9.9a16 16 0 0 0 7.1 7.1l1.8-1.9a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2z" />
    </IconBase>
  );
}

function InstagramIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

const defaultData = {
  site: {
    brandName: "McCoy Photography Co.",
    photographerName: "Carson McCoy",
    location: "Birmingham, Alabama",
    instagram: "@mccoy.photographyco",
    heroTagline: "Event Photography · Senior & Prom Photos · Brand Storytelling · Headshots",
    heroTitle: "Photography that feels polished, authentic, and built to tell your story.",
    brandNameImage:
      "https://lh3.googleusercontent.com/pw/AP1GczM-h7HCowRZmNQJEjrVtqQRnSB-_me1GhPxwO2slSB6c8e1l6mLRayj__y-kdxA5jECMzarxePFddTd9tkLUP_aauFbmlk1OG7aiOiA1zM70T2PpcjcaUDcEOj6dG-ywm5G00dfmZc0S1Gm2MItaOVyFg=w2084-h1488-s-no-gm",
    heroDescription:
      "McCoy Photography Co. creates professional photography for people, events, and businesses that want images that feel authentic and personal, while looking excellent.",
    heroImage:
      "https://lh3.googleusercontent.com/pw/AP1GczMoMVuRPIdFH6AcV0RlSmc2m0NtJriepDhpT3N38j0zb1ay-pfTm77Soj4cHNHMUdpqw2S5AMA2KJpDvz1MtIQGUCS9QfzG3SR_utDOX-47YNLPJzJkqFNFYThInVfW8-6grrdtkAqSYrQOF_RmUYREpA=w2232-h1488-s-no-gm",
    aboutTitle:
      "Hi, I’m Carson McCoy — the Samford University student behind McCoy Photography Co., based in Birmingham, Alabama.",
    aboutDescription:
      "My approach is simple: create images that feel professional, natural, and useful. Whether I’m covering an event, photographing senior or prom portraits, capturing headshots, or documenting a business in action, I focus on making people look confident and helping brands tell a clear story. Please consider supporting a current Samford student with your business!",
    aboutImage:
      "https://lh3.googleusercontent.com/pw/AP1GczONRx8w6l5_ZHXqTyIA8BfmMJA9K83qyuNjpDtKJ2DHdNGzX65U2Tb-wqJDdmixYm5x1DW-yG5_uyxecui7rJ2U7nQljF0qbRsagI-I_4Y3jMQR-4pmvDOtWbaaBhp4UDSfjNt00rivosmRbGGHcoPxpg=w1122-h1402-s-no-gm",
    email: "mccoyphotoco@gmail.com",
    phone: "678-662-9001",
    bookingText:
      "Now booking event photography, senior and prom sessions, headshots, business marketing, and more! Call, text, or email with details of your event to receive a quote quickly!",
  },
  gallery: [
    {
      title: "Engagements",
      category: "Portraits",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMHoOWWWaBC3H1m060EZTJQsWDkh9ywTN34EuSi4l7RALCTuEi39E88YqMrGkqkNntS_vNHIY_9cDYUIizszW2bCRD9iwcVZ0SVIuUgp-5Bqd19gWz1ctImpSe6vUFPNNOGdN546Mhccvsa7xTgIQoyqg=w992-h1488-s-no-gm",
    },
    {
      title: "Fraternity & Sorority Functions",
      category: "Event",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczM5H7TOoDIJ20uU7bbIV5YMlc2m9J8TRhZRQ-dhKsT-ZIXVM5eE4PF_oKVmSUuByMuaITjDSgloxQ60kYxizxGyel-HXAkSXyT8ax4gZ9yiYjTtOOhWgzbWBk5yuJTcrRKYHfTTX_jpNiEhbiVdYAYkCA=w992-h1488-s-no-gm",
    },
    {
      title: "Professional Headshots",
      category: "Headshot",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOXagEmTg0iP94jfzW85Ht1CtIIV4LgMXSi0bk1K_N7VbYYtNZ6tvv3xR0c7DnRb5UelPMf883ALbgtNxSCO5G1zxUkLVfaUT_wesRhr2-1x6vNk5ckNtV9DJUj0J5vm1616kFMJk8f3DxtxKayKXUi-g=w992-h1488-s-no-gm",
    },
    {
      title: "Fishing",
      category: "Lifestyle",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczN0RJk4r7tiTdLaAXrZxR3szq_ydvhUtTwTR5Ld2UkGpFoWTa6JpWBRbycz0l8gfOvl6c0rFtowvdbta2_Jibnu-j89iVdppvpgEEZCuSe-HQsHyArPgvX1VwS7KUHvz9OaCeKxjgsd0Jp7CWJrCPEbMQ=w992-h1488-s-no-gm",
    },
    {
      title: "Graduation Pictures",
      category: "Senior & Prom",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNesBaXf3Jbv0XPYGuCKV4bwwML_5hpoUd4_IlfY6wd-pKzO4YTcUHnupcLUNIfq4pyTB3E_1pADt5yZgmzfiH6W2T6ooO2B8tGF_p8LdcvIOILN7IEEpkXyfaaLa98Ixf3rQZao4bNfhEuJ7KViXtWcg=w874-h1488-s-no-gm",
    },
    {
      title: "Hunting",
      category: "Lifestyle",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczP1sGbsxKiAaREvaTQYVN9Wr4VQMLeb9og-Vkb6k7Tf9O3Pj8on0nnve9GCqoJOOn-cLA4cAkpDdgBVT8olC94Vc3-0FGAud-MHZBWEeFUmKiyDqFAJ7moeL1FRniwYT0MOYk22OBU74r4XolgwIK2J1g=w1210-h1488-s-no-gm",
    },
    {
      title: "Sporting Events",
      category: "EVENT",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNZ9EMrEDUVI0jicVSuasRGXcmvkZ-JlLI39-39N4uiLGB1iv2yYVWFAGXLhs_56XAqK3sbDssqjhxItlKv-h1eJrXK2FhqLEsZViBrF9fSgoJVEB9dRCNWSKjJYx13RQCAvXMDve6UFdKefXez-cY6QQ=w994-h1490-s-no-gm",
    },
  ],
  services: [
    {
      title: "Family, Senior, & Prom Photos",
      description:
        "Portrait sessions of to capture your family, special occasions, or milestone moments!",
    },
    {
      title: "Event Photography",
      description:
        "Coverage for events, parties, celebrations, and special occasions that are perfect for social media or marketing use!",
    },
    {
      title: "Headshots & Brand Storytelling",
      description:
        "Professional headshots and business marketing photography that shows your team, workspace, and company in action for websites, social media, and promotions.",
    },
  ],
};

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = useMemo(
    () => [
      { value: "Professional", label: "Photo coverage for individuals, events, and brands, big or small!" },
      { value: "Birmingham", label: "Based in Birmingham, Alabama" },
      { value: "Versatile", label: "Portrait, event, and business-focused work" },
      { value: "Fast", label: "Responsive communication and booking" },
    ],
    []
  );

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isMobileViewport = typeof window !== "undefined" && window.innerWidth < 640;
  const maxGrowthScroll = 300;
  const growthProgress = Math.min(scrollY / maxGrowthScroll, 1);
  const headerScale = 1 + growthProgress * 0.25;
  const headerPaddingY = 6 * headerScale;
  const logoHeight = (isMobileViewport ? 88 : 108) * headerScale;
  const logoMaxWidth = (isMobileViewport ? 405 : 495) * headerScale;
  const brandTextSize = 14 * headerScale;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header
        className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl transition-all duration-200"
        style={{
          paddingTop: `${headerPaddingY}px`,
          paddingBottom: `${headerPaddingY}px`,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          <a href="#home" onClick={scrollToSection("home")} className="text-white/90">
            {defaultData.site.brandNameImage ? (
              <img
                src={defaultData.site.brandNameImage}
                alt={defaultData.site.brandName}
                className="w-auto object-contain transition-all duration-200"
                style={{
                  height: `${logoHeight}px`,
                  maxWidth: `${logoMaxWidth}px`,
                }}
              />
            ) : (
              <span
                className="font-semibold uppercase text-white/90 transition-all duration-200"
                style={{
                  fontSize: `${brandTextSize}px`,
                  letterSpacing: "0.25em",
                }}
              >
                {defaultData.site.brandName}
              </span>
            )}
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#work" onClick={scrollToSection("work")} className="transition hover:text-white">
              Work
            </a>
            <a href="#about" onClick={scrollToSection("about")} className="transition hover:text-white">
              About
            </a>
            <a href="#services" onClick={scrollToSection("services")} className="transition hover:text-white">
              Services
            </a>
            <a href="#contact" onClick={scrollToSection("contact")} className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:scale-[1.02] sm:px-5"
            >
              Book a Session
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />
          <div
            className="h-[78vh] min-h-[760px] bg-cover bg-center sm:min-h-0"
            style={{ backgroundImage: `url('${defaultData.site.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-5 pb-10 sm:px-6 sm:pb-16 lg:px-10 lg:pb-24">
            <div className="max-w-3xl pt-10 sm:pt-0">
              <p className="mb-3 hidden text-[11px] uppercase tracking-[0.3em] text-white/70 sm:block">
                {defaultData.site.heroTagline}
              </p>
              <h1 className="text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl md:leading-[1.05]">
                {defaultData.site.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-8 text-white/75 sm:mt-6 sm:max-w-2xl sm:text-base md:text-lg">
                {defaultData.site.heroDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#work"
                  onClick={scrollToSection("work")}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] sm:px-6"
                >
                  View Portfolio
                </a>
                <a
                  href="#about"
                  onClick={scrollToSection("about")}
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:px-6"
                >
                  Meet the Photographer
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-10 text-sm text-white/60 sm:grid-cols-2 md:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xl font-semibold text-white sm:text-2xl">{stat.value}</p>
              <p className="mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Selected Work</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                A portfolio built around people, events, and brands.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
              A mix of clean portraits, real moments, and professional brand imagery designed to help clients look their best.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {defaultData.gallery.map((shot) => (
              <article
                key={`${shot.title}-${shot.image}`}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/65">{shot.category}</p>
                    <h3 className="mt-2 text-xl font-medium text-white">{shot.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <img
              src={defaultData.site.aboutImage}
              alt="Photographer portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{defaultData.site.aboutTitle}</h2>
            <p className="mt-6 text-base leading-8 text-white/70">{defaultData.site.aboutDescription}</p>
            <p className="mt-4 text-base leading-8 text-white/70">
              Based in {defaultData.site.location}, and available for local and regional projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                onClick={scrollToSection("contact")}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02] sm:px-6"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                onClick={scrollToSection("services")}
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:px-6"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Services</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Photography tailored to your event, milestone, or business.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {defaultData.services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/10"
              >
                <h3 className="text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let’s create something people remember.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/70">{defaultData.site.bookingText}</p>
              <div className="mt-8 space-y-4 text-sm text-white/70">
                <p className="flex items-center gap-3">
                  <MailIcon className="h-4 w-4" /> {defaultData.site.email}
                </p>
                <p className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4" /> {defaultData.site.phone}
                </p>
                <p className="flex items-center gap-3">
                  <InstagramIcon className="h-4 w-4" /> {defaultData.site.instagram}
                </p>
                <p className="flex items-center gap-3">
                  <MapPinIcon className="h-4 w-4" /> {defaultData.site.location}
                </p>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xlgavpvq"
              method="POST"
              className="grid gap-4"
            >
              <input type="hidden" name="_subject" value="New website inquiry" />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                  required
                />
              </div>

              <input
                type="text"
                name="service"
                placeholder="What are you looking for?"
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Tell me about your event, session, or business project"
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                required
              />

              <button
                type="submit"
                className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-white/45 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {defaultData.site.brandName}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}