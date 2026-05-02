import Image from "next/image";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { ButtonLink } from "@/components/landing/ButtonLink";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { siteConfig, whatsappLink } from "@/lib/site";

const benefits = [
  "אבחון אישי לעור שלך",
  "אווירה רגועה ומוקפדת",
  "תוצאה זוהרת שנראית לעין",
];

const treatmentBenefits = [
  "ניקוי עמוק ועדין",
  "החזרת לחות וברק טבעי",
  "התאמה למצב העור בזמן אמת",
  "תחושת רוגע והתחדשות",
];

const testimonials = [
  {
    quote:
      "מקום מהמם, אווירה נעימה וטיפול ברמה גבוהה מאוד. מאיה הייתה מקצועית, עדינה ומדויקת, והעור שלי פשוט נראה הרבה יותר טוב אחרי הטיפול.",
    name: "שירן ל.",
  },
  {
    quote:
      "ממליצה מכל הלב. היחס אישי, המקום נקי ומרגיע, והטיפול עצמו היה פשוט מושלם. הרגשתי שמבינים בדיוק מה העור שלי צריך.",
    name: "דניאל א.",
  },
  {
    quote:
      "חוויה מדהימה מההתחלה ועד הסוף. מקום יפייפה, טיפול מוקפד, ותוצאה שממש רואים. בהחלט אחזור שוב.",
    name: "מורן ק.",
  },
];

const treatmentResults = [
  "זוהר טבעי ומראה מטופח",
  "עור נקי ורענן יותר",
  "תחושת רוגע והתחדשות",
  "חוויה אישית, שקטה ומפנקת",
];

const phoneHref = `tel:${siteConfig.phone.replace(/\D/g, "")}`;

export function LandingPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#120405] text-rose-50">
      <div className="page-backdrop" aria-hidden="true" />

      <section
        id="why-choose-us"
        className="relative min-h-screen px-4 pb-10 pt-4 sm:px-6 lg:px-8"
      >
        <header
          aria-label="Beauty By Maya"
          className="relative z-20 mx-auto max-w-6xl overflow-hidden border border-white/10 bg-black/22 px-4 py-3 text-xs text-rose-50/78 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-10 w-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,220,0.18),rgba(240,24,87,0.08)_42%,transparent_72%)] blur-2xl sm:left-10 sm:w-40"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-10 w-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,220,0.18),rgba(240,24,87,0.08)_42%,transparent_72%)] blur-2xl sm:right-10 sm:w-40"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-1/2 hidden h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(255,210,220,0.28),transparent)] sm:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-1/2 hidden h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(255,210,220,0.28),transparent)] sm:block"
          />
          <div className="relative grid items-center gap-3 text-center sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
            <a
              href={phoneHref}
              className="hidden justify-self-center text-sm font-semibold tracking-[0.08em] text-rose-50/72 transition hover:text-rose-50 sm:block sm:justify-self-start"
            >
              {siteConfig.phone}
            </a>
            <span className="brand-wordmark justify-self-center">Beauty By Maya</span>
            <ButtonLink
              href={phoneHref}
              className="min-h-0 justify-self-center px-5 py-2.5 text-xs sm:justify-self-end sm:px-6 sm:text-sm"
            >
              התקשרי עכשיו
            </ButtonLink>
          </div>
        </header>

        <div
          className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center pb-10 pt-14 text-center"
        >
          <p className="hero-copy hero-delay-1 text-[0.58rem] font-bold tracking-[0.44em] text-rose-50/62">
            טיפולי פנים פרימיום בהתאמה אישית
          </p>
          <h1 className="beauty-display hero-headline hero-copy hero-delay-2 mt-6 max-w-4xl text-balance text-[3.45rem] font-light text-white sm:text-7xl lg:text-8xl">
            <span className="hero-headline-line">את הגרסה</span>
            <span className="hero-headline-accent block bg-[linear-gradient(120deg,#fff9fa_0%,#ffd3dc_42%,#ff86a2_100%)] bg-clip-text font-semibold italic text-transparent">
              הטובה ביותר
            </span>
            <span className="hero-headline-line">שלך</span>
          </h1>
          <p className="hero-copy hero-delay-3 mx-auto mt-6 max-w-xl text-pretty text-sm leading-7 text-rose-50/78 sm:text-base sm:leading-8">
            טיפול פנים אישי, רגוע ומדויק ב־Beauty By Maya, לחוויית יופי יוקרתית
            ולעור שנראה נקי, רענן וזוהר.
          </p>

          <div className="hero-copy hero-delay-4 mt-7 flex flex-wrap justify-center gap-2">
            {benefits.map((benefit) => (
              <span
                key={benefit}
                className="micro-card rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold text-rose-50/82 shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="hero-copy hero-delay-5 mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink href="#contact" className="min-w-60">
              קבעי ייעוץ חינם עכשיו
            </ButtonLink>
            <ButtonLink href={whatsappLink} variant="secondary" target="_blank" rel="noreferrer">
              שלחי הודעה בוואטסאפ
            </ButtonLink>
          </div>

          <a
            href="#services"
            className="hero-copy hero-delay-6 mt-8 text-lg text-rose-100/50 transition hover:translate-y-1 hover:text-rose-100"
            aria-label="גלילה להמשך"
          >
            ˅
          </a>
        </div>
      </section>

      <AnimatedSection
        id="services"
        className="relative z-10 px-4 py-12 sm:px-6 lg:py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <article className="treatment-card flex flex-col justify-center border border-white/12 bg-[#21090d]/58 p-7 shadow-[0_32px_100px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold tracking-[0.34em] text-[#ff8da7]">
              הטיפול המוביל
            </p>
            <h2 className="beauty-display text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              טיפול פנים אישי שמחזיר לעור מראה נקי, חי וזוהר
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-rose-50/68">
              טיפול מדויק ועדין שנבנה לפי מצב העור שלך, משלב ניקוי, הזנה ומגע
              מרגיע, ומשאיר תחושה יוקרתית של רעננות והתחדשות.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {treatmentBenefits.map((item) => (
                <div
                  className="micro-card flex items-center gap-3 border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-rose-50/80"
                  key={item}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff8da7] shadow-[0_0_18px_rgba(255,141,167,0.75)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#contact">לקביעת תור</ButtonLink>
              <ButtonLink href={whatsappLink} variant="ghost" target="_blank" rel="noreferrer">
                התייעצות בוואטסאפ
              </ButtonLink>
            </div>
          </article>

          <aside
            id="results"
            data-scroll-anchor
            className="treatment-card relative min-h-[360px] overflow-hidden border border-white/12 bg-[#2b1114]/38 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-[url('/images/beauty-by-maya-background.png')] bg-cover bg-center opacity-72" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,13,17,0.22),rgba(10,1,3,0.84)),radial-gradient(circle_at_50%_18%,rgba(255,218,226,0.24),transparent_19rem),radial-gradient(circle_at_20%_90%,rgba(255,95,134,0.18),transparent_16rem)]" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6 sm:p-8">
              <div className="flex justify-end">
                <span className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] font-bold tracking-[0.24em] text-[#ffb2c4] backdrop-blur">
                  תוצאות הטיפול
                </span>
              </div>
              <div className="border border-white/12 bg-black/34 p-5 backdrop-blur-xl sm:p-6">
                <h3 className="beauty-display text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  מה אפשר להרגיש ולראות אחרי הטיפול
                </h3>
                <p className="mt-4 text-sm leading-7 text-rose-50/68">
                  הטיפול נועד להעניק לעור מראה רענן, נקי ומטופח יותר, יחד עם
                  תחושת רוגע, חידוש והתחדשות.
                </p>
                <div className="mt-6 grid gap-2">
                  {treatmentResults.map((result) => (
                    <div
                      className="micro-card flex items-center gap-3 border border-white/10 bg-white/[0.075] px-4 py-3 text-sm font-semibold text-rose-50/82"
                      key={result}
                    >
                      <span className="h-px w-6 bg-[linear-gradient(90deg,#ff8da7,rgba(255,255,255,0.1))]" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </AnimatedSection>

      <AnimatedSection id="testimonials" className="relative z-10 px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="חוות דעת לקוחות"
            title="נשים שכבר הרגישו את ההבדל"
            text="שלוש חוויות קצרות שמספרות על היחס, האווירה והתוצאה."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                className="testimonial-card border border-white/12 bg-[#1b070a]/62 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                key={testimonial.name}
              >
                <div className="mb-5 tracking-[0.16em] text-[#ff5f86]" aria-hidden="true">
                  ★★★★★
                </div>
                <p className="text-pretty text-sm leading-7 text-rose-50/70">
                  “{testimonial.quote}”
                </p>
                <p className="mt-5 font-bold text-white">— {testimonial.name}</p>
                <span className="mt-6 block h-px w-12 bg-[#ff5f86]/55" />
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="contact"
        className="relative z-10 px-4 pb-8 pt-10 sm:px-6 lg:pb-10 lg:pt-12"
      >
        <div className="cta-card mx-auto grid max-w-5xl gap-8 border border-[#ffb3c4]/18 bg-[#190508]/68 px-5 py-10 shadow-[0_38px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="cta-emblem-wrap overflow-hidden rounded-full border border-[#e9b9ad]/30 bg-[#fffaf8]/96 p-2 shadow-[0_22px_80px_rgba(255,177,195,0.12)]">
              <Image
                src="/images/beauty-by-maya-emblem.png"
                alt="BM Beauty By Maya"
                width={156}
                height={156}
                className="h-28 w-28 rounded-full object-contain transition duration-500 ease-out hover:scale-[1.03] sm:h-36 sm:w-36"
              />
            </div>
            <p className="mt-6 text-xs font-bold tracking-[0.34em] text-[#ff8da7]">
              בואי נתחיל
            </p>
            <h2 className="beauty-display mt-3 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              ייעוץ חינם
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-rose-50/60">
              השאירי פרטים או שלחי הודעה, ונתאם לך טיפול באווירה רגועה ומפנקת.
            </p>
          </div>

          <form className="grid gap-4 self-center" aria-label="טופס ייעוץ חינם">
            <label className="grid gap-2 text-sm text-rose-50/72">
              שם מלא
              <input
                className="h-14 border border-white/12 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-rose-100/28 focus:border-[#ff6f91]/65"
                name="name"
                placeholder="איך קוראים לך?"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm text-rose-50/72">
              טלפון
              <input
                className="h-14 border border-white/12 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-rose-100/28 focus:border-[#ff6f91]/65"
                name="phone"
                placeholder="050-0000000"
                type="tel"
              />
            </label>
            <ButtonLink href={whatsappLink} target="_blank" rel="noreferrer" className="mt-1 w-full">
              שלחי לי פרטים
            </ButtonLink>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-rose-100/38">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.location}</span>
              <span>{siteConfig.hours}</span>
            </div>
          </form>
        </div>
      </AnimatedSection>

      <footer className="relative z-10 px-4 pb-10 pt-4 text-center sm:px-6">
        <p className="brand-wordmark text-base opacity-70">Beauty By Maya</p>
        <p className="mt-3 text-xs text-rose-100/28">© 2026 Beauty By Maya</p>
      </footer>
    </main>
  );
}
