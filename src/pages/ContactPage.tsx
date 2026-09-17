import { ArrowUpRight, Check } from "lucide-react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ActionLink, Eyebrow, FaqList, SectionLead } from "../components/StackComponents";
import { contactCopy, productPages, strategyCallUrl } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";
import "./contact-premium.css";

const contactFaqs = [
  ...(productPages.talks.faqs ?? []).slice(0, 2),
  ...(productPages.vision.faqs ?? []).slice(0, 2),
];

const startingPoints = [
  { title: "AIORA Talks", body: "Map the inbound call flow that keeps costing your team time or demand.", href: "/talks", label: "VOICE / CONVERSATION" },
  { title: "AIORA Vision", body: "Assess one camera zone and the review workflow around it.", href: "/vision", label: "VISION / REVIEW" },
  { title: "AIORA OS", body: "Connect the customer and operating handoffs that keep falling between tools.", href: "/os", label: "SYSTEM / HANDOFF" },
];

const briefSteps = [
  { title: "Name the pressure", body: "Missed calls, slow reviews, fragmented handoffs or another recurring leak." },
  { title: "Choose the baseline", body: "Response time, booking rate, review time or the operating number that matters." },
  { title: "Define the first test", body: "One controlled workflow with a clear owner and a visible pass or fail condition." },
];

function openBookingCalendar(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const draft = Object.fromEntries(formData.entries());
  window.sessionStorage.setItem("aiora-workflow-brief", JSON.stringify(draft));
  window.location.assign(strategyCallUrl);
}

export function ContactPage() {
  return (
    <div className="contact-premium-route">
      <section className="contact-premium-hero page-frame">
        <div className="contact-premium-hero__copy">
          <Eyebrow>AIORA / STRATEGY CALL</Eyebrow>
          <h1>{contactCopy.suppliedCta[0]}</h1>
          <p className="source-required">SUPPLIED CLAIM / SOURCE REQUIRED BEFORE PUBLICATION</p>
          <div className="contact-premium-hero__statement">
            <p>{contactCopy.headline}</p>
            <p>{contactCopy.body}</p>
          </div>
          <div className="contact-premium-hero__actions">
            <ActionLink to={strategyCallUrl}>{contactCopy.suppliedCta[1]}</ActionLink>
            <ActionLink to={strategyCallUrl} secondary>{contactCopy.suppliedCta[2]}</ActionLink>
          </div>
          <small>CALENDLY / 30 MINUTES / NO OBLIGATION</small>
        </div>

        <figure className="contact-premium-hero__art" data-reveal>
          <img
            src={assetUrl("assets/cta/final-cta-golden-path.webp")}
            alt="Illustrative golden paths converging through a quiet architectural space"
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
          />
          <div className="contact-premium-hero__art-label">
            <span>GOLDEN PATH / ART DIRECTION</span>
            <strong>ILLUSTRATIVE / NOT CLIENT EVIDENCE</strong>
          </div>
          <figcaption>
            <span>START WITH ONE WORKFLOW</span>
            <strong>Pressure becomes a baseline. The baseline becomes a test.</strong>
          </figcaption>
          <i className="contact-premium-hero__light" aria-hidden="true" />
        </figure>
      </section>

      <section className="contact-premium-brief page-frame grid-section" aria-labelledby="workflow-brief-title">
        <div className="contact-premium-brief__context">
          <div>
            <Eyebrow>30-MINUTE STRATEGY CALL</Eyebrow>
            <h2 id="workflow-brief-title">Bring the operating leak. Leave with the first workflow mapped.</h2>
            <p>We use the call to identify the buyer, workflow owner, current baseline and result worth measuring before anyone builds a system.</p>
          </div>
          <ol>
            {briefSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div><strong>{step.title}</strong><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>

        <form className="contact-premium-form" onSubmit={openBookingCalendar} aria-describedby="contact-form-note" data-reveal>
          <div className="contact-premium-form__head">
            <span>WORKFLOW BRIEF</span>
            <span>01 / 01</span>
          </div>
          <div className="contact-premium-form__fields">
            <label htmlFor="contact-name"><span>Name</span><input id="contact-name" name="name" autoComplete="name" required /></label>
            <label htmlFor="contact-email"><span>Work email</span><input id="contact-email" name="email" type="email" autoComplete="email" required /></label>
            <label htmlFor="contact-company"><span>Company</span><input id="contact-company" name="company" autoComplete="organization" required /></label>
            <label className="contact-premium-form__wide" htmlFor="contact-pressure"><span>What keeps breaking?</span><textarea id="contact-pressure" name="pressure" rows={4} required /></label>
            <label className="contact-premium-form__wide" htmlFor="contact-system">
              <span>Best starting system</span>
              <select id="contact-system" name="system" defaultValue="" required>
                <option value="" disabled>Select one</option>
                <option>AIORA Talks</option>
                <option>AIORA Vision</option>
                <option>AIORA OS</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <button className="contact-premium-form__submit" type="submit">
            <span>{contactCopy.cta}</span>
            <i aria-hidden="true"><ArrowUpRight size={19} /></i>
          </button>
          <p id="contact-form-note">Your answers stay in this browser. The next step opens the live booking calendar.</p>
        </form>
      </section>

      <section className="contact-premium-paths page-frame grid-section">
        <SectionLead eyebrow="STARTING POINTS" title="One operational pressure. One defined next step." body={contactCopy.body} align="center" />
        <div className="contact-premium-paths__grid">
          {startingPoints.map((item, index) => (
            <Link className="contact-premium-path" key={item.title} to={item.href} data-reveal>
              <div><span>0{index + 1}</span><Check size={18} /></div>
              <small>{item.label}</small>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <i aria-hidden="true"><ArrowUpRight size={18} /></i>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-premium-faq page-frame grid-section">
        <SectionLead eyebrow="FREQUENTLY ASKED QUESTIONS" title="Know what stays under your control." body="These answers use the approved AIORA product copy already defined for Talks and Vision." align="left" />
        <FaqList items={contactFaqs} />
      </section>

      <section className="contact-premium-close page-frame">
        <div className="contact-premium-close__copy">
          <Eyebrow>YOUR NEXT STEP</Eyebrow>
          <h2>{contactCopy.headline}</h2>
          <p>{contactCopy.body}</p>
          <ActionLink to={strategyCallUrl}>{contactCopy.cta}</ActionLink>
        </div>
        <div className="contact-premium-close__signal" aria-hidden="true">
          <span>PRESSURE</span><i /><span>BASELINE</span><i /><span>PILOT</span><i /><span>MEASURE</span>
        </div>
      </section>
    </div>
  );
}
