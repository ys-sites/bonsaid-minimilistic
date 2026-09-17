import { ChevronDown, Eye, LockKeyhole, Mic2, Network, Sparkles } from "lucide-react";
import { useId, useState } from "react";
import { ActionLink, Eyebrow, SectionLead } from "../components/StackComponents";
import type { ProductPageData } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";
import "./product-premium.css";

type VisualMode = ProductPageData["visualMode"];

type RouteMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type RouteArt = {
  label: string;
  shortLabel: string;
  hero: RouteMedia;
  pain: RouteMedia;
  solution: RouteMedia;
  proof: RouteMedia;
  final: RouteMedia;
  serviceImages: RouteMedia[];
};

const routeArt: Record<VisualMode, RouteArt> = {
  voice: {
    label: "GOLDEN RESONANCE",
    shortLabel: "VOICE / LIVE",
    hero: {
      src: "assets/products/talks/talks-hero.webp",
      alt: "Premium ivory reception scene with a sculptural gold voice signal",
      width: 1536,
      height: 1024,
    },
    pain: {
      src: "assets/products/talks/talks-handoff.webp",
      alt: "Premium reception scene with an ivory handset and a flowing gold path",
      width: 1536,
      height: 1024,
    },
    solution: {
      src: "assets/products/talks/talks-resonance.webp",
      alt: "Clear acoustic ribbons carrying a fine gold signal through an ivory space",
      width: 1672,
      height: 941,
    },
    proof: {
      src: "assets/products/talks/talks-memory.webp",
      alt: "Ivory acoustic fibres threaded with a restrained gold pulse",
      width: 1672,
      height: 941,
    },
    final: {
      src: "assets/products/talks/talks-resonance.webp",
      alt: "Sculptural voice current moving through clear glass and gold",
      width: 1672,
      height: 941,
    },
    serviceImages: [
      { src: "assets/products/talks/talks-resonance.webp", alt: "Clear acoustic ribbons representing a consistent first response", width: 1672, height: 941 },
      { src: "assets/products/talks/talks-memory.webp", alt: "Fine gold thread passing through tactile ivory fibres", width: 1672, height: 941 },
      { src: "assets/products/talks/talks-handoff.webp", alt: "A gold signal path moving from a business phone toward a human handoff", width: 1536, height: 1024 },
    ],
  },
  vision: {
    label: "GOLDEN SENTINEL",
    shortLabel: "REVIEW / LIVE",
    hero: {
      src: "assets/products/vision/vision-hero.webp",
      alt: "Premium camera lens inside a warm ivory and gold operational setting",
      width: 1672,
      height: 941,
    },
    pain: {
      src: "assets/products/vision/vision-sentinel.webp",
      alt: "Premium retail interior with one softly illuminated review zone",
      width: 1672,
      height: 941,
    },
    solution: {
      src: "assets/products/vision/vision-aperture.webp",
      alt: "Concentric glass aperture bringing one moment into focus",
      width: 1672,
      height: 941,
    },
    proof: {
      src: "assets/products/vision/vision-review.webp",
      alt: "After-hours gym review scene with one isolated event and a human operator",
      width: 1536,
      height: 1024,
    },
    final: {
      src: "assets/products/vision/vision-sentinel.webp",
      alt: "Ivory and gold retail space prepared for a controlled camera review workflow",
      width: 1672,
      height: 941,
    },
    serviceImages: [
      { src: "assets/products/vision/vision-sentinel.webp", alt: "Retail zone brought into focus for human review", width: 1672, height: 941 },
      { src: "assets/products/vision/vision-aperture.webp", alt: "Layered glass aperture representing a narrow operational review window", width: 1672, height: 941 },
      { src: "assets/products/vision/vision-review.webp", alt: "After-hours camera event surfaced to a human operator", width: 1536, height: 1024 },
    ],
  },
  os: {
    label: "OPERATING LAYER",
    shortLabel: "ORCHESTRATION / LIVE",
    hero: {
      src: "assets/products/os/os-hero.webp",
      alt: "Ivory and gold orchestration sculpture representing AIORA OS",
      width: 1672,
      height: 941,
    },
    pain: {
      src: "assets/products/os/os-hero.webp",
      alt: "Connected ivory forms representing one operating layer",
      width: 1672,
      height: 941,
    },
    solution: {
      src: "assets/products/os/os-hero.webp",
      alt: "Ivory and gold orchestration sculpture representing one controlled operating layer",
      width: 1672,
      height: 941,
    },
    proof: {
      src: "assets/products/os/os-hero.webp",
      alt: "Connected operating sculpture representing an AIORA OS workflow",
      width: 1672,
      height: 941,
    },
    final: {
      src: "assets/products/os/os-hero.webp",
      alt: "AIORA OS orchestration sculpture in ivory and gold",
      width: 1672,
      height: 941,
    },
    serviceImages: [
      { src: "assets/products/os/os-hero.webp", alt: "Connected ivory forms representing a unified business control layer", width: 1672, height: 941 },
    ],
  },
};

function CornerMarks() {
  return <span className="corner-marks" aria-hidden="true"><i /><i /><i /><i /></span>;
}

function OsOrchestrationField({ label, variant = 0, decorative = false }: { label?: string; variant?: number; decorative?: boolean }) {
  return (
    <div
      className={`os-orchestration-field is-variant-${variant % 4}`}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : label}
    >
      <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
        <g className="os-network-orbits">
          <ellipse cx="450" cy="300" rx="278" ry="190" />
          <ellipse cx="450" cy="300" rx="176" ry="278" transform="rotate(61 450 300)" />
          <ellipse cx="450" cy="300" rx="176" ry="278" transform="rotate(-61 450 300)" />
        </g>
        <g className="os-network-routes">
          <path className="os-network-path os-network-path-a" pathLength="100" d="M55 314C159 62 339 104 450 300C565 504 744 539 848 286" />
          <path className="os-network-path os-network-path-b" pathLength="100" d="M92 126C258 117 274 392 448 300C625 205 657 112 820 151" />
          <path className="os-network-path os-network-path-c" pathLength="100" d="M84 492C252 514 333 381 450 300C583 207 673 438 834 474" />
          <path className="os-network-path os-network-path-d" pathLength="100" d="M236 66C283 203 308 260 450 300C597 341 641 391 683 542" />
        </g>
        <g className="os-network-nodes">
          <g className="os-network-node node-a" transform="translate(92 126)"><circle className="node-halo" r="21" /><circle className="node-core" r="6" /></g>
          <g className="os-network-node node-b" transform="translate(55 314)"><circle className="node-halo" r="18" /><circle className="node-core" r="5" /></g>
          <g className="os-network-node node-c" transform="translate(84 492)"><circle className="node-halo" r="24" /><circle className="node-core" r="7" /></g>
          <g className="os-network-node node-d" transform="translate(236 66)"><circle className="node-halo" r="17" /><circle className="node-core" r="5" /></g>
          <g className="os-network-node node-e" transform="translate(820 151)"><circle className="node-halo" r="23" /><circle className="node-core" r="7" /></g>
          <g className="os-network-node node-f" transform="translate(848 286)"><circle className="node-halo" r="18" /><circle className="node-core" r="5" /></g>
          <g className="os-network-node node-g" transform="translate(834 474)"><circle className="node-halo" r="21" /><circle className="node-core" r="6" /></g>
          <g className="os-network-node node-h" transform="translate(683 542)"><circle className="node-halo" r="17" /><circle className="node-core" r="5" /></g>
        </g>
      </svg>
      <span className="os-network-core" aria-hidden="true"><Network size={23} /><small>AIORA OS</small><i /></span>
      <span className="os-network-caption" aria-hidden="true"><i /> ORCHESTRATION FIELD / LIVE</span>
    </div>
  );
}

function KineticLayer({ mode }: { mode: VisualMode }) {
  if (mode === "voice") {
    return (
      <div className="kinetic-layer kinetic-voice" aria-hidden="true">
        <svg viewBox="0 0 900 520" preserveAspectRatio="none">
          <path className="resonance-path resonance-path-a" d="M-40 318C126 82 247 457 420 252S710 107 940 265" />
          <path className="resonance-path resonance-path-b" d="M-40 365C152 138 270 490 457 291S734 165 940 309" />
          <path className="resonance-path resonance-path-c" d="M-40 270C96 35 266 410 391 211S706 53 940 226" />
        </svg>
        <span className="voice-pulse voice-pulse-a" />
        <span className="voice-pulse voice-pulse-b" />
      </div>
    );
  }

  if (mode === "vision") {
    return (
      <div className="kinetic-layer kinetic-vision" aria-hidden="true">
        <span className="review-aperture review-aperture-a" />
        <span className="review-aperture review-aperture-b" />
        <span className="review-focus-bracket focus-bracket-a" />
        <span className="review-focus-bracket focus-bracket-b" />
        <span className="review-glint" />
      </div>
    );
  }

  return (
    <div className="kinetic-layer kinetic-os" aria-hidden="true">
      <OsOrchestrationField decorative />
    </div>
  );
}

function RouteHero({ page, art }: { page: ProductPageData; art: RouteArt }) {
  return (
    <section className={`product-route-hero product-route-hero-${page.visualMode} page-frame`}>
      <div className="product-route-hero-copy">
        <Eyebrow>{page.eyebrow}</Eyebrow>
        <h1>{page.title}</h1>
        {page.descriptor ? <span className="product-route-descriptor">{page.descriptor}</span> : null}
        <p>{page.body}</p>
        <div className="action-row">
          <ActionLink to={page.primaryHref ?? "/contact"}>{page.primaryCta}</ActionLink>
          <ActionLink to={page.secondaryHref ?? "/contact"} secondary>{page.secondaryCta}</ActionLink>
        </div>
        {page.microcopy ? <small>{page.microcopy}</small> : null}
      </div>
      <figure className="product-route-hero-media">
        <img src={assetUrl(art.hero.src)} alt={art.hero.alt} width={art.hero.width} height={art.hero.height} decoding="async" fetchPriority="high" />
        <KineticLayer mode={page.visualMode} />
        <div className="route-hero-status"><span>{art.label}</span><strong>{art.shortLabel}</strong></div>
        <CornerMarks />
      </figure>
      <div className="product-route-stat-strip" aria-label="Product capabilities">
        {page.stats.map((stat) => <article key={stat.label}><span>{stat.value}</span><p>{stat.label}</p></article>)}
      </div>
    </section>
  );
}

function StoryMedia({ media, mode, label }: { media: RouteMedia; mode: VisualMode; label: string }) {
  return (
    <figure className={`product-story-media product-story-media-${mode}`} data-reveal>
      <img src={assetUrl(media.src)} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" />
      <KineticLayer mode={mode} />
      <figcaption><span>{label}</span><strong>ACTIVE / CONTROLLED</strong></figcaption>
      <CornerMarks />
    </figure>
  );
}

function ServiceChapters({ page, art }: { page: ProductPageData; art: RouteArt }) {
  return (
    <section className={`product-chapters product-chapters-${page.visualMode}`} id="product-offerings">
      <header className="product-chapters-head">
        <SectionLead eyebrow={page.servicesEyebrow ?? "WHAT WE BUILD"} title={page.servicesTitle} />
        <p>{art.label} / {page.services.length.toString().padStart(2, "0")} OPERATING CHAPTERS</p>
      </header>
      <div className="product-chapter-list">
        {page.services.map((item, index) => {
          const media = art.serviceImages[index % art.serviceImages.length];
          return (
            <article className="product-chapter" key={item.title} data-reveal>
              <div className="product-chapter-media">
                {page.visualMode === "os" ? (
                  <OsOrchestrationField label={`AIORA OS orchestration field for ${item.title}`} variant={index} />
                ) : (
                  <>
                    <img src={assetUrl(media.src)} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" />
                    <KineticLayer mode={page.visualMode} />
                  </>
                )}
                <span className="chapter-counter">0{index + 1} / 0{page.services.length}</span>
              </div>
              <div className="product-chapter-copy">
                <span>{item.label}</span>
                <h3>{item.headline ?? item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
      {page.servicesCta ? <div className="product-chapters-action"><ActionLink to="/contact">{page.servicesCta}</ActionLink></div> : null}
    </section>
  );
}

function WorkflowStory({ page, art }: { page: ProductPageData; art: RouteArt }) {
  return (
    <section className={`product-workflow-story product-workflow-story-${page.visualMode}`} id="workflow">
      <div className="product-workflow-copy">
        <SectionLead eyebrow={page.workflowEyebrow ?? "HOW IT WORKS"} title={page.workflowTitle} />
        {page.workflowCta ? <ActionLink to="/contact">{page.workflowCta}</ActionLink> : null}
      </div>
      <div className="product-workflow-stage" data-reveal>
        <img src={assetUrl(art.solution.src)} alt="" width={art.solution.width} height={art.solution.height} loading="lazy" decoding="async" />
        <div className="workflow-stage-scrim" />
        <KineticLayer mode={page.visualMode} />
        <ol>
          {page.workflow.map((step, index) => (
            <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
          ))}
        </ol>
        <CornerMarks />
      </div>
    </section>
  );
}

function ProofRoom({ page, art }: { page: ProductPageData; art: RouteArt }) {
  if (!page.proofTitle || !page.proofBody) return null;

  return (
    <section className={`product-proof-room product-proof-room-${page.visualMode}`} id="proof">
      <div className="product-proof-copy">
        <Eyebrow>PROOF / OPERATING STANDARD</Eyebrow>
        <h2 data-reveal>{page.proofTitle}</h2>
        <p data-reveal>{page.proofBody}</p>
        {page.claimGate ? <div className="product-claim-gate"><LockKeyhole size={17} /><span>{page.claimGate}</span></div> : null}
      </div>
      <div className="product-proof-media" data-reveal>
        <img src={assetUrl(art.proof.src)} alt={art.proof.alt} width={art.proof.width} height={art.proof.height} loading="lazy" decoding="async" />
        <div className="proof-room-scrim" />
        <div className="proof-room-lockup"><span><LockKeyhole size={15} /> EVIDENCE ROOM</span><strong>PROOF<br />BEFORE<br />PROMISE</strong><small>CLIENT APPROVAL REQUIRED</small></div>
        <div className="proof-room-list">{(page.proofEvidence ?? []).map((evidence, index) => <span key={evidence}><i>0{index + 1}</i>{evidence}</span>)}</div>
        <CornerMarks />
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <article className={open ? "product-faq-item is-open" : "product-faq-item"}>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls={panelId}>
        <span>{question}</span><ChevronDown size={20} />
      </button>
      <div className="product-faq-answer" id={panelId} hidden={!open}><p>{answer}</p></div>
    </article>
  );
}

export function ProductPage({ page }: { page: ProductPageData }) {
  const art = routeArt[page.visualMode];
  const solutionTitle = page.responsibleUseTitle ?? page.workflowTitle;
  const solutionBody = page.responsibleUseBody ?? page.painBody;
  const useCases = page.useCases ?? page.outcomeItems;
  const routeIcon = page.visualMode === "voice" ? <Mic2 /> : page.visualMode === "vision" ? <Eye /> : <Network />;

  return (
    <div className={`product-experience product-experience-${page.visualMode}`}>
      <RouteHero page={page} art={art} />

      <section className="product-leak-story page-frame" id="how-it-works">
        <div className="product-leak-copy">
          <SectionLead eyebrow={`${page.eyebrow} / THE LEAK`} title={page.painTitle} body={page.painBody} />
          <div className="route-signature"><span>{routeIcon}</span><small>{art.label}</small><strong>{art.shortLabel}</strong></div>
        </div>
        <StoryMedia media={art.pain} mode={page.visualMode} label="THE MOMENT BEFORE THE HANDOFF" />
      </section>

      <section className="product-control-story page-frame">
        <StoryMedia media={art.solution} mode={page.visualMode} label="ONE CONTROLLED SIGNAL" />
        <div className="product-control-copy">
          <SectionLead eyebrow={page.workflowEyebrow ?? "SOLUTION / CONTROLLED"} title={solutionTitle} body={solutionBody} />
          <ul>{page.services.slice(0, 3).map((item, index) => <li key={item.title}><span>0{index + 1}</span><p>{item.title}</p></li>)}</ul>
          <ActionLink to="/contact">{page.workflowCta ?? page.primaryCta}</ActionLink>
        </div>
      </section>

      <div className="page-frame"><ServiceChapters page={page} art={art} /></div>
      <div className="page-frame"><ProofRoom page={page} art={art} /></div>

      {useCases?.length ? (
        <section className="product-use-cases page-frame">
          <SectionLead eyebrow="USE CASES" title={page.useCasesTitle ?? "Use cases"} />
          <div className="product-use-case-grid">
            {useCases.map((item, index) => (
              <article key={item.title} data-reveal><span>0{index + 1}</span><Sparkles aria-hidden="true" /><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="page-frame"><WorkflowStory page={page} art={art} /></div>

      {page.faqs?.length ? (
        <section className="product-faq-section page-frame">
          <SectionLead eyebrow="FAQ" title={page.faqTitle ?? "FAQ"} />
          <div className="product-faq-list">{page.faqs.map(({ question, answer }) => <FaqItem key={question} question={question} answer={answer} />)}</div>
        </section>
      ) : null}

      <section className={`product-closing-story product-closing-story-${page.visualMode} page-frame`}>
        <div className="product-closing-copy">
          <Eyebrow>START WITH ONE WORKFLOW</Eyebrow>
          <h2 data-reveal>{page.closingTitle}</h2>
          <p data-reveal>{page.closingBody}</p>
          <ActionLink to="/contact">{page.closingCta}</ActionLink>
        </div>
        <div className="product-closing-media" data-reveal>
          <img src={assetUrl(art.final.src)} alt={art.final.alt} width={art.final.width} height={art.final.height} loading="lazy" decoding="async" />
          <KineticLayer mode={page.visualMode} />
          <div className="product-closing-index"><span>{art.label}</span><strong>01 / 01</strong></div>
          <CornerMarks />
        </div>
      </section>
    </div>
  );
}
