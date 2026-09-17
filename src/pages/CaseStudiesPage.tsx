import { Check } from "lucide-react";
import { ActionLink, Eyebrow } from "../components/StackComponents";
import { caseStudiesCopy, homeCopy, strategyCallUrl } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";
import "./case-studies-premium.css";

const publicationStates = [
  "Public proof pending",
  "Illustrative operating scene available. Result evidence pending.",
  "Evidence source pending",
  "Evidence and publication approval pending",
];

const recordTypes = ["CLIENT / VOICE", "OPERATING SCENE", "SUPPLIED METRIC", "SUPPLIED METRIC"];

export function CaseStudiesPage() {
  const suppliedRecords = caseStudiesCopy.exactLines.slice(1);
  const operatingScenes = [
    {
      index: "01",
      title: suppliedRecords[1],
      descriptor: "Workflow reference across intake, inventory and fulfilment.",
      image: "assets/case-studies/kv-toys-operations.webp",
      alt: "Illustrative generated operating scene for a toy retail workflow",
      dimensions: { width: 1672, height: 941 },
    },
    {
      index: "02",
      title: homeCopy.sections.adoption.client,
      descriptor: homeCopy.sections.adoption.scope,
      image: "assets/case-studies/anytime-fitness-deployment.webp",
      alt: "Illustrative generated operating scene for an Anytime Fitness deployment concept",
      dimensions: { width: 1536, height: 1024 },
    },
  ];

  return (
    <div className="cs-premium">
      <section className="cs-premium-hero page-frame" aria-labelledby="case-studies-title">
        <div className="cs-premium-hero-copy">
          <Eyebrow>CASE STUDIES / PROOF BEFORE POLISH</Eyebrow>
          <h1 id="case-studies-title">{caseStudiesCopy.title}</h1>
          <p>Each public case study needs the starting problem, workflow launched, scale, measured result and evidence source before it can move beyond this evidence-pending state.</p>
          <div className="cs-premium-hero-action">
            <ActionLink to={strategyCallUrl}>START A CASE</ActionLink>
            <span>{caseStudiesCopy.emptyState}</span>
          </div>
        </div>

        <div className="cs-premium-proof-board" aria-label="Publication proof protocol">
          <div className="cs-premium-board-head">
            <span>PROOF SYSTEM / CONTROLLED</span>
            <strong>05 FIELDS / APPROVAL PENDING</strong>
          </div>
          <div className="cs-premium-signal" aria-hidden="true">
            <svg viewBox="0 0 800 420" preserveAspectRatio="none">
              <path className="cs-premium-signal-grid" d="M90 84H710M90 210H710M90 336H710M164 48V372M400 48V372M636 48V372" />
              <path className="cs-premium-signal-path" d="M92 336H230V210H400V84H636V210H708" />
              <circle cx="92" cy="336" r="7" />
              <circle cx="230" cy="210" r="7" />
              <circle cx="400" cy="84" r="7" />
              <circle cx="636" cy="210" r="7" />
              <circle cx="708" cy="210" r="7" />
            </svg>
            <i />
          </div>
          <div className="cs-premium-proof-steps">
            {caseStudiesCopy.requiredFields.map((field, index) => (
              <div key={field}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{field}</p>
                <i>PENDING</i>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-premium-hero-rail" aria-label="Proof principles">
          <article><span>01</span><p>Illustrative scenes stay separate from client proof.</p></article>
          <article><span>02</span><p>Supplied claims remain visibly gated.</p></article>
          <article><span>03</span><p>Five fields clear every publication.</p></article>
          <article><span>04</span><p>Client approval comes before release.</p></article>
        </div>
      </section>

      <section className="cs-premium-scenes page-frame grid-section" aria-labelledby="operating-scenes-title">
        <div className="cs-premium-section-intro">
          <div>
            <Eyebrow>ILLUSTRATIVE OPERATING SCENES</Eyebrow>
            <h2 id="operating-scenes-title">See the operation. Keep the evidence boundary visible.</h2>
          </div>
          <p>These generated scenes show the kind of operating environment AIORA can enter. They are art direction, not photographs of a client deployment and not proof of a result.</p>
        </div>

        <div className="cs-premium-scene-grid">
          {operatingScenes.map((scene, index) => (
            <figure className={index === 0 ? "cs-premium-scene is-primary" : "cs-premium-scene is-secondary"} key={scene.title} data-reveal>
              <img
                src={assetUrl(scene.image)}
                alt={scene.alt}
                width={scene.dimensions.width}
                height={scene.dimensions.height}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="cs-premium-scene-shade" aria-hidden="true" />
              <span className="cs-premium-scene-index">{scene.index} / OPERATING SCENE</span>
              <span className="cs-premium-scene-disclosure">GENERATED ART DIRECTION / NOT CLIENT PROOF</span>
              <figcaption>
                <p>{scene.descriptor}</p>
                <h3>{scene.title}</h3>
                <span>RESULT EVIDENCE / PENDING</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cs-premium-ledger page-frame grid-section" aria-labelledby="supplied-claims-title">
        <div className="cs-premium-ledger-head">
          <div>
            <Eyebrow>SUPPLIED CLAIMS / PUBLICATION LEDGER</Eyebrow>
            <h2 id="supplied-claims-title">Proof architecture, separated from unapproved results.</h2>
          </div>
          <p>Every supplied line remains local until its evidence source and publication status are approved. Mehta Emporium and unsupported metrics intentionally remain image-free.</p>
        </div>

        <div className="cs-premium-ledger-labels" aria-hidden="true">
          <span>RECORD</span><span>SUPPLIED LINE</span><span>TYPE</span><span>PUBLICATION STATE</span><span>EVIDENCE</span>
        </div>
        <div className="cs-premium-ledger-body">
          {suppliedRecords.map((record, index) => (
            <article className={index === 1 ? "has-illustrative-scene" : ""} key={record} data-reveal>
              <span className="cs-premium-ledger-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{record}</h3>
              <span className="cs-premium-ledger-type">{recordTypes[index]}</span>
              <p>{publicationStates[index]}</p>
              <div className="cs-premium-ledger-state">
                <i aria-hidden="true" />
                <span>{caseStudiesCopy.emptyState}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-premium-protocol page-frame grid-section" aria-labelledby="publication-protocol-title">
        <div className="cs-premium-protocol-copy">
          <Eyebrow>PUBLICATION PROTOCOL</Eyebrow>
          <h2 id="publication-protocol-title">Evidence before polish.</h2>
          <p>Every public result needs the same five parts. Nothing moves from supplied claim to published case study until the complete record is approved.</p>
        </div>
        <div className="cs-premium-protocol-grid">
          {caseStudiesCopy.requiredFields.map((field, index) => (
            <article key={field}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Check size={19} aria-hidden="true" />
              <h3>{field}</h3>
              <p>PENDING</p>
            </article>
          ))}
        </div>
        <div className="cs-premium-protocol-line" aria-hidden="true"><i /></div>
      </section>

      <section className="cs-premium-cta page-frame grid-section" aria-labelledby="case-cta-title">
        <div className="cs-premium-cta-copy">
          <Eyebrow>YOUR WORKFLOW</Eyebrow>
          <h2 id="case-cta-title">Bring the operational problem. We will define what proof must look like.</h2>
          <p>Start with one workflow, agree on the evidence and publish only what the operation can prove.</p>
          <ActionLink to={strategyCallUrl}>START A CASE</ActionLink>
        </div>
        <div className="cs-premium-cta-art">
          <img src={assetUrl("assets/cta/final-cta-golden-path.webp")} alt="AIORA golden system path art direction" width="1536" height="1024" loading="lazy" decoding="async" />
          <span>AIORA SYSTEM LANDSCAPE / GENERATED ART DIRECTION</span>
        </div>
      </section>
    </div>
  );
}
