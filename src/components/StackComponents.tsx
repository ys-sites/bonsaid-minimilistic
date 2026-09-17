import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { strategyCallUrl } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";

type Stat = { value: string; label: string };
type GridItem = { label?: string; title: string; headline?: string; body: string; href?: string };
type Step = { title: string; body: string };
type Faq = { question: string; answer: string };

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow"><i aria-hidden="true" />{children}</span>;
}

export function ActionLink({ to, children, secondary = false }: { to: string; children: React.ReactNode; secondary?: boolean }) {
  const className = secondary ? "action-link is-secondary" : "action-link";
  const content = (
    <>
      <span>{children}</span>
      <i aria-hidden="true"><ArrowUpRight size={18} /></i>
    </>
  );

  if (to.startsWith("#")) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          const target = document.querySelector(to);
          target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        }}
      >
        {content}
      </button>
    );
  }

  if (/^https?:\/\//.test(to)) {
    return <a className={className} href={to} target="_blank" rel="noreferrer">{content}</a>;
  }

  return (
    <Link className={className} to={to}>{content}</Link>
  );
}

export function SectionLead({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "split" | "center" }) {
  return (
    <div className={`section-lead section-lead-${align}`}>
      <div><Eyebrow>{eyebrow}</Eyebrow><h2 data-reveal>{title}</h2></div>
      {body ? <p data-reveal>{body}</p> : null}
    </div>
  );
}

function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="stat-strip" aria-label="System principles">
      {stats.map((stat) => (
        <article key={stat.label}>
          <span aria-hidden={!stat.value}>{stat.value || "\u00A0"}</span>
          <p>{stat.label}</p>
        </article>
      ))}
    </div>
  );
}

function BonsaiLayers({ mode }: { mode: "home" | "voice" | "vision" | "os" | "proof" }) {
  const useDitherTree = mode === "vision" || mode === "proof";
  return (
    <div className="bonsai-layers" data-parallax>
      <img className="layer layer-sun" src={assetUrl("assets/bonsai/sun.webp")} alt="" width="401" height="202" decoding="async" />
      <img className="layer layer-mountain" src={assetUrl("assets/bonsai/mountain.webp")} alt="" width="691" height="243" decoding="async" />
      <img className="layer layer-ground" src={assetUrl("assets/bonsai/ground.webp")} alt="" width="892" height="148" decoding="async" />
      <img className="layer layer-mist" src={assetUrl("assets/bonsai/mist.webp")} alt="" width="734" height="254" decoding="async" />
      {useDitherTree ? (
        <img className="layer layer-tree-dither" src={assetUrl("assets/bonsai/tree-dither.webp")} alt="AIORA golden Bonsai system landscape" width="1672" height="941" decoding="async" fetchPriority="high" />
      ) : (
        <img className="layer layer-tree" src={assetUrl("assets/bonsai/tree.webp")} alt="AIORA golden Bonsai system landscape" width="1014" height="850" decoding="async" fetchPriority="high" />
      )}
      <img className="layer layer-petals" src={assetUrl("assets/bonsai/petals.webp")} alt="" width="1672" height="941" decoding="async" />
    </div>
  );
}

export function BonsaiStage({ mode = "home" }: { mode?: "home" | "voice" | "vision" | "os" | "proof" }) {
  return (
    <div className={`bonsai-stage bonsai-stage-${mode}`} data-reveal>
      <div className="stage-coordinates" aria-hidden="true"><span>AIORA / 18.5204° N</span><span>SYS.{mode.toUpperCase()}</span></div>
      <div className="stage-grid" aria-hidden="true" />
      <BonsaiLayers mode={mode} />
      <div className="stage-signal" aria-hidden="true"><i /><span>MEASURED OUTCOME</span></div>
      <div className="ascii-veil" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => <span key={index}>01/AIORA/RESULT/{String(index + 1).padStart(2, "0")}</span>)}
      </div>
      {mode === "voice" ? <div className="voice-signal" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} style={{ "--bar": `${18 + ((index * 17) % 58)}%` } as React.CSSProperties} />)}</div> : null}
      {mode === "vision" ? <div className="vision-reticle" aria-hidden="true"><span>HUMAN REVIEW</span><i /></div> : null}
      {mode === "os" ? <div className="os-orbit" aria-hidden="true"><span>VOICE</span><span>VISION</span><span>WORKFLOW</span></div> : null}
      <div className="stage-caption"><span>LIVE COMPOSITION</span><strong>OUTCOME SYSTEM / CONTROLLED</strong></div>
    </div>
  );
}

export function Hero({
  eyebrow,
  descriptor,
  title,
  body,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  microcopy,
  stats,
  mode = "home",
}: {
  eyebrow: string;
  descriptor?: string;
  title: string;
  body: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
  microcopy?: string;
  stats: Stat[];
  mode?: "home" | "voice" | "vision" | "os";
}) {
  return (
    <section className={`stack-hero stack-hero-${mode} page-frame`}>
      <div className="hero-copy-block">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {descriptor ? <span className="hero-descriptor">{descriptor}</span> : null}
        <p>{body}</p>
        <div className="action-row">
          <ActionLink to={primaryHref ?? strategyCallUrl}>{primaryCta}</ActionLink>
          {mode === "os" ? (
            <>
              <ActionLink to="/talks" secondary>Explore Voice</ActionLink>
              <ActionLink to="/vision" secondary>Explore Vision</ActionLink>
            </>
          ) : (
            <ActionLink to={secondaryHref ?? "#how-it-works"} secondary>{secondaryCta}</ActionLink>
          )}
        </div>
        {microcopy ? <small>{microcopy}</small> : null}
      </div>
      <BonsaiStage mode={mode} />
      <StatStrip stats={stats} />
    </section>
  );
}

export function FeatureMatrix({ items, columns = 3 }: { items: GridItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={`feature-matrix cols-${columns}`}>
      {items.map((item, index) => {
        const content = (
          <>
            <div className="feature-index"><span>{item.label || `0${index + 1}`}</span><ArrowDownRight size={18} /></div>
            <div className={`feature-glyph feature-glyph-${index % 4}`} aria-hidden="true">
              <i /><i /><i /><i /><b /><span />
            </div>
            <h3>{item.headline || item.title}</h3>
            <p>{item.body}</p>
            {item.href ? <span className="feature-link">OPEN SYSTEM <ArrowRight size={15} /></span> : null}
          </>
        );
        return item.href ? <Link key={item.title} className="feature-card" to={item.href} data-reveal>{content}</Link> : <article key={item.title} className="feature-card" data-reveal>{content}</article>;
      })}
    </div>
  );
}

export function SystemBoard({ title, items, statement, note }: { title: string; items: string[]; statement?: string; note?: string }) {
  return (
    <div className="system-board" data-reveal>
      <div className="system-board-head"><span>SYSTEM / RUNNING</span><strong>{title}</strong></div>
      <div className="system-canvas">
        <svg viewBox="0 0 1000 520" aria-hidden="true">
          <path className="wire" d="M120 130H392V260H790" />
          <path className="wire" d="M120 390H392V260" />
          <path className="wire gold" d="M392 260H790" />
          <circle cx="392" cy="260" r="8" />
          <circle cx="790" cy="260" r="8" />
        </svg>
        {items.slice(0, 3).map((item, index) => <div key={item} className={`system-node system-node-${index + 1}`}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        <div className="system-status"><i />REVIEW / ESCALATE / COMPLETE</div>
      </div>
      {statement ? <p className="system-statement">{statement}</p> : null}
      {note ? <small>{note}</small> : null}
    </div>
  );
}

export function ProcessGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="process-grid">
      {steps.map((step, index) => (
        <article key={step.title} data-reveal>
          <span>0{index + 1}</span>
          <div className="process-marker"><i /><b /></div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ProofGate({ title, body, evidence, label = "PROOF / OPERATING STANDARD" }: { title: string; body: string; evidence: string[]; label?: string }) {
  return (
    <section className="proof-gate grid-section">
      <div className="proof-copy">
        <Eyebrow>{label}</Eyebrow>
        <h2 data-reveal>{title}</h2>
        <p data-reveal>{body}</p>
      </div>
      <div className="proof-stage" data-reveal>
        <div className="proof-screen">
          <span>EVIDENCE WINDOW / PENDING</span>
          <BonsaiStage mode="proof" />
        </div>
        <div className="proof-checklist">
          {evidence.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><i>PENDING</i></div>)}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, index }: { item: Faq; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = useId();
  return (
    <article className={open ? "faq-row is-open" : "faq-row"}>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)}>
        <span>0{index + 1}</span><strong>{item.question}</strong><ChevronDown size={20} />
      </button>
      <div id={id} hidden={!open}><p>{item.answer}</p></div>
    </article>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return <div className="faq-list">{items.map((item, index) => <FaqItem key={item.question} item={item} index={index} />)}</div>;
}

export function ClosingCta({ eyebrow, title, body, primary, secondary, primaryHref = strategyCallUrl, claimGate }: { eyebrow: string; title: string; body?: string; primary: string; secondary?: string; primaryHref?: string; claimGate?: string }) {
  return (
    <section className="closing-cta page-frame">
      <div className="closing-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 data-reveal>{title}</h2>
        {body ? <p data-reveal>{body}</p> : null}
        {claimGate ? <small className="source-required" data-reveal>{claimGate}</small> : null}
        <div className="action-row" data-reveal>
          <ActionLink to={primaryHref}>{primary}</ActionLink>
          {secondary ? <ActionLink to="/contact" secondary>{secondary}</ActionLink> : null}
        </div>
      </div>
      <div className="closing-art"><img src={assetUrl("assets/bonsai/composition.webp")} alt="AIORA golden Bonsai landscape" width="1672" height="941" loading="lazy" decoding="async" data-parallax /></div>
    </section>
  );
}

export function ReviewStandard({ title, body }: { title: string; body: string }) {
  return (
    <div className="review-standard" data-reveal>
      <span><Check size={16} /> HUMAN REVIEW REQUIRED</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
