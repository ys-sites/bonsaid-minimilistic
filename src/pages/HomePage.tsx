import { ArrowLeft, ArrowRight, Check, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink, Eyebrow, Hero, SectionLead } from "../components/StackComponents";
import { homeCopy, strategyCallUrl } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";
import "./home-premium.css";

const implementationSteps = [
  { title: "Trial Phases of Solutions", body: "Prove one workflow against live operating conditions before expanding the scope." },
  { title: "Affordable / Best in class / Private and Secure AI", body: "Set the access rules, human handoffs and reversal path before launch." },
  { title: "Implementation", body: "Best Part -> Up and running within 24 hours of initial meeting" },
];

const whyAiora = [
  { title: "Fix one expensive leak first.", body: "Start with the missed calls, review delays or manual handoffs you can measure." },
  { title: "Make the baseline visible.", body: "Agree on the operating signal before the first workflow goes live." },
  { title: "Scale only after it earns the right.", body: "Stop when the result stays flat. Expand only when the pilot moves the agreed number." },
];

const productArt: Record<string, string> = {
  Talks: "assets/products/talks/talks-resonance.webp",
  Vision: "assets/products/vision/vision-sentinel.webp",
  OS: "assets/products/os/os-hero.webp",
};

export function HomePage() {
  const { hero, stats, sections } = homeCopy;
  const proofStories = [
    {
      company: sections.success.cards[0].name,
      eyebrow: "AIORA TALKS / SUPPLIED DEPLOYMENT",
      headline: "A voice workflow shaped around the business, not a generic call script.",
      image: "assets/products/talks/talks-handoff.webp",
      imageAlt: "Illustrative AIORA voice handoff composition",
      results: ["AI VOICE", "PUBLIC RESULT PENDING", "CLIENT APPROVAL REQUIRED"],
      status: "REPRESENTATIVE SERVICE ART / NOT CLIENT EVIDENCE",
    },
    {
      company: "KV Toys",
      eyebrow: "OPERATING STORY / SUPPLIED CLAIMS",
      headline: sections.success.cards[1].name,
      image: "assets/case-studies/kv-toys-operations.webp",
      imageAlt: "Illustrative KV Toys operations workflow composition",
      results: [sections.success.cards[2].name, sections.success.cards[3].name, "EVIDENCE PENDING"],
      status: "ILLUSTRATIVE SCENE / RESULT EVIDENCE REQUIRED",
    },
    {
      company: sections.adoption.client,
      eyebrow: "MULTI-LOCATION OPERATING STORY",
      headline: sections.adoption.scope,
      image: "assets/case-studies/anytime-fitness-deployment.webp",
      imageAlt: "Illustrative multi-location fitness deployment composition",
      results: ["AIORA TALKS", "AIORA VISION", "PUBLIC RESULT PENDING"],
      status: "REPRESENTATIVE ART / NOT CLIENT EVIDENCE",
    },
  ];
  const [proofIndex, setProofIndex] = useState(1);
  const [proofPaused, setProofPaused] = useState(false);
  const activeProof = proofStories[proofIndex];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || proofPaused) return;
    const timer = window.setInterval(() => setProofIndex((index) => (index + 1) % proofStories.length), 5400);
    return () => window.clearInterval(timer);
  }, [proofPaused, proofStories.length]);

  return (
    <>
      <Hero eyebrow={hero.eyebrow} title={hero.title} body={hero.body} primaryCta={hero.primaryCta} primaryHref={strategyCallUrl} secondaryCta={hero.secondaryCta} secondaryHref="#how-it-works" stats={stats} />

      <section className="home-problem page-frame" id="how-it-works">
        <div className="home-problem-copy">
          <SectionLead eyebrow={sections.problem.index} title={sections.problem.title} body="AI does not get a pass for sounding futuristic. It has to change a real operating number." />
          <p className="source-note">{sections.problem.note} / SUPPLIED CLAIM / SOURCE REQUIRED BEFORE PUBLICATION</p>
        </div>
        <div className="roi-operating-panel" data-reveal>
          <div className="roi-panel-head"><span>THE TOOL-FIRST LOOP</span><strong>NO BASELINE. NO OWNER. NO RETURN.</strong></div>
          <div className="roi-statement"><b>99%</b><h3>{sections.problem.statement}</h3></div>
          <div className="loop-track loop-track-fail" aria-label="A tool-first implementation loop">
            {['BUY A TOOL', 'FORCE A USE CASE', 'CHASE ADOPTION', 'NO MEASURED RETURN'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="loop-track loop-track-aiora" aria-label="The AIORA outcome path">
            <strong>AIORA PATH</strong>{['LEAK', 'BASELINE', 'PILOT', 'MEASURE'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <small>{sections.problem.note} / SOURCE REQUIRED BEFORE PUBLICATION</small>
        </div>
      </section>

      <section className="home-difference page-frame" id="difference">
        <div className="difference-copy-premium">
          <SectionLead eyebrow={sections.difference.index} title={sections.difference.title} body={sections.difference.statement} />
          <ul className="difference-lines">{sections.difference.points.map((point, index) => <li key={point}><span>0{index + 1}</span><strong>{point}</strong></li>)}</ul>
          <ActionLink to={strategyCallUrl}>BOOK A STRATEGY CALL</ActionLink>
          <p className="source-note">{sections.difference.note} / SUPPLIED CLAIM / SOURCE REQUIRED BEFORE PUBLICATION</p>
        </div>
        <div className="pilot-board" data-reveal>
          <div className="pilot-board-head"><span>CONTROLLED PILOT / THREE OPERATING STATES</span><i>LIVE STATUS</i></div>
          <div className="pilot-cards">
            {implementationSteps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span><small>{index === 0 ? "TRIAL PHASE" : index === 1 ? "PRIVATE + SECURE" : "IMPLEMENTATION"}</small>
                <h3>{index === 0 ? "Prove one workflow" : index === 1 ? "Install guardrails" : "Go live and measure"}</h3><p>{step.body}</p><i aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="pilot-best"><span>BEST PART</span><strong>{sections.difference.statement}</strong></div>
        </div>
      </section>

      <section className="home-deployment page-frame" aria-label="Supplied client stories">
        <div className="deployment-intro"><SectionLead eyebrow={sections.success.index} title={sections.success.title} body="Company names, service scope and result lines remain visible as supplied. Public outcomes stay gated until the evidence and client approval are attached." /></div>
        <div className="proof-carousel" data-reveal onMouseEnter={() => setProofPaused(true)} onMouseLeave={() => setProofPaused(false)} onFocusCapture={() => setProofPaused(true)} onBlurCapture={() => setProofPaused(false)}>
          <div className="proof-carousel-media">
            <img key={activeProof.image} src={assetUrl(activeProof.image)} alt={activeProof.imageAlt} width="1672" height="941" loading="lazy" decoding="async" />
            <div className="proof-carousel-overlay"><span>{activeProof.eyebrow}</span><h3>{activeProof.company}</h3><p>{activeProof.headline}</p></div><small>{activeProof.status}</small>
          </div>
          <div className="proof-carousel-meta">
            <span>0{proofIndex + 1} / 0{proofStories.length}</span><strong>SUPPLIED SCOPE / EVIDENCE GATED</strong>
            <div className="proof-carousel-controls"><button type="button" aria-label="Previous supplied story" onClick={() => setProofIndex((proofIndex + proofStories.length - 1) % proofStories.length)}><ArrowLeft /></button><button type="button" aria-label="Next supplied story" onClick={() => setProofIndex((proofIndex + 1) % proofStories.length)}><ArrowRight /></button></div>
          </div>
          <div className="proof-result-grid">{activeProof.results.map((result, index) => <article key={result}><span>0{index + 1}</span><strong>{result}</strong></article>)}</div>
          <div className="proof-progress" aria-hidden="true"><i key={proofIndex} /></div>
        </div>
      </section>

      <section className="home-adoption page-frame" id="why-aiora">
        <div className="adoption-copy-premium"><SectionLead eyebrow={sections.adoption.index} title={sections.adoption.title} body="You do not need to believe in AI. You need to know whether one defined workflow can reduce an expensive operating leak." /><ActionLink to="#ai-evidence">{sections.adoption.body}</ActionLink></div>
        <div className="adoption-visual" data-reveal><img src={assetUrl("assets/case-studies/anytime-fitness-deployment.webp")} alt="Illustrative multi-location fitness workflow composition" width="1672" height="941" loading="lazy" decoding="async" /><div><span>01 / DEPLOYMENT CONTEXT</span><h3>{sections.adoption.client}</h3><p>{sections.adoption.scope}</p><small>REPRESENTATIVE ART / PUBLIC PROOF PENDING</small></div></div>
        <div className="adoption-proof" id="ai-evidence">{whyAiora.map((item, index) => <article key={item.title} data-reveal><span>0{index + 1}</span><Check size={18} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="home-trial page-frame">
        <div className="trial-copy-premium"><Eyebrow>{sections.trial.index}</Eyebrow><h2 data-reveal>{sections.trial.title}</h2><ActionLink to={strategyCallUrl}>Book a call Now</ActionLink></div>
        <div className="trial-terms"><article><span>14</span><h3>{sections.trial.body}</h3><p>TRIAL SCOPE AND ELIGIBILITY CONFIRMED ON THE STRATEGY CALL</p></article><article><span>NO STRINGS</span><h3>{sections.trial.closer}</h3><p>START WITH ONE WORKFLOW / KEEP IT ONLY IF THE DIFFERENCE IS VISIBLE</p></article></div>
      </section>

      <section className="home-proof-wall page-frame">
        <div className="proof-wall-copy"><SectionLead eyebrow={sections.people.index} title={sections.people.title} body={sections.people.body} /><p>Names, faces, quotes and results only go live after the client approves the complete proof package.</p><strong>[100% flesh &amp; bones, not AI gen]</strong></div>
        <div className="proof-wall-slots">
          <article><span>01 / VIDEO TESTIMONIAL</span><div className="proof-video-frame"><Play fill="currentColor" /><i /></div><h3>Approved client story</h3><p>FOOTAGE / QUOTE / RESULT / APPROVAL</p></article>
          <article><span>02 / IMAGE TESTIMONIAL</span><div className="proof-portrait-frame"><i /><b /><em /></div><h3>Approved operator portrait</h3><p>IDENTITY / QUOTE / RESULT / APPROVAL</p></article>
          <article><span>03 / OPERATING ARTIFACT</span><div className="proof-artifact-frame"><i /><i /><i /></div><h3>The work behind the words</h3><p>BASELINE / WORKFLOW / MEASURED RESULT</p></article>
        </div>
      </section>

      <section className="home-offerings page-frame" id="suite">
        <SectionLead eyebrow={sections.offerings.index} title={sections.offerings.title} body="Three entry points. One rule: the system has to move work forward." align="center" />
        <div className="offering-image-grid">{sections.offerings.products.map((product, index) => <a key={product.name} href={`#/${product.href.replace('/', '')}`} className={`offering-image-card offering-${product.name.toLowerCase()}`} data-reveal><img src={assetUrl(productArt[product.name])} alt={`${product.name} product art`} width="1200" height="900" loading="lazy" decoding="async" /><span>0{index + 1} / CORE SUITE</span><div><h3>{product.name}</h3><p>{product.note}</p><strong>EXPLORE SYSTEM <ArrowRight size={18} /></strong></div></a>)}</div>
        <p className="source-required">SUPPLIED CLAIM / SOURCE REQUIRED BEFORE PUBLICATION</p>
      </section>

      <section className="home-final-cta page-frame">
        <img src={assetUrl("assets/cta/final-cta-golden-path.webp")} alt="AIORA golden path composition" width="1672" height="941" loading="lazy" decoding="async" /><div className="final-cta-veil" />
        <div className="final-cta-copy"><Eyebrow>{sections.closing.index}</Eyebrow><h2 data-reveal>{sections.closing.title}</h2><p>Book the strategy call. We will map the leak, define the baseline and tell you where AI does or does not belong.</p><div><ActionLink to={strategyCallUrl}>{sections.closing.primaryCta}</ActionLink><ActionLink to={strategyCallUrl} secondary>{sections.closing.secondaryCta}</ActionLink></div><small>SUPPLIED CLAIM / SOURCE REQUIRED BEFORE PUBLICATION</small></div>
      </section>
    </>
  );
}
