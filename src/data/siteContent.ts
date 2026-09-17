export type ContentCard = {
  label?: string;
  title: string;
  headline?: string;
  body: string;
};

export type ServiceCard = {
  label: string;
  title: string;
  headline?: string;
  body: string;
};

export type ContentFaq = {
  question: string;
  answer: string;
};

export type ProductPageData = {
  slug: string;
  eyebrow: string;
  descriptor?: string;
  title: string;
  body: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
  microcopy?: string;
  claimGate?: string;
  visualMode: "voice" | "vision" | "os";
  stats: Array<{ value: string; label: string }>;
  painTitle: string;
  painBody: string;
  outcomeItems?: ContentCard[];
  servicesEyebrow?: string;
  servicesTitle: string;
  services: ServiceCard[];
  servicesCta?: string;
  responsibleUseTitle?: string;
  responsibleUseBody?: string;
  workflowEyebrow?: string;
  workflowTitle: string;
  workflow: Array<{ title: string; body: string }>;
  workflowCta?: string;
  useCasesTitle?: string;
  useCases?: ContentCard[];
  proofTitle?: string;
  proofBody?: string;
  proofEvidence?: string[];
  faqTitle?: string;
  faqs?: ContentFaq[];
  closingTitle: string;
  closingBody: string;
  closingCta: string;
};

export const homeCopy = {
  hero: {
    eyebrow: "AIORA / OUTCOME-LED AI SYSTEMS",
    title: "AI THAT DELIVERS REAL ROI. RELIABLY.",
    body: "Outcome-led AI systems for real business operations.",
    primaryCta: "BOOK A STRATEGY CALL",
    secondaryCta: "SEE HOW IT WORKS",
    pillars: ["ENTERPRISE GRADE SECURITY", "OUTCOME FOCUSED", "SCALABLE BY DESIGN"],
  },
  stats: [
    { value: "", label: "ENTERPRISE GRADE SECURITY" },
    { value: "", label: "OUTCOME FOCUSED" },
    { value: "", label: "SCALABLE BY DESIGN" },
    { value: "", label: "SEE HOW IT WORKS" },
  ],
  sections: {
    problem: {
      index: "Drive before you buy",
      title: "Looking to implement AI in Your Biz, lemme warn you....",
      statement: "99% of AI Implementation doesn't yield ROI",
      note: "*as reported by X",
    },
    difference: {
      index: "Implementation",
      title: "So what makes us different",
      points: ["Trial Phases of Solutions", "Affordable / Best in class / Private and Secure AI"],
      statement: "Best Part -> Up and running within 24 hours of initial meeting",
      note: "* Excluding client response",
    },
    success: {
      index: "S4 / DEPLOYMENT SCOPE",
      title: "Our Success across SMBs and ventures",
      cards: [
        { name: "Mehta Emporium [AI Voice]", scope: "" },
        { name: "KV Toys -> Workflow streamlined", scope: "" },
        { name: "30% error reduction", scope: "" },
        { name: "13% rev boost from...", scope: "" },
      ],
    },
    adoption: {
      index: "Why adopt AI,",
      title: "Damn sure you're thinking \"AI is Just a bubble\", why lose my sleep over it.",
      body: "Here's why",
      client: "Anytime fitness Gym chain",
      scope: "voice agent + AIORA Vision",
    },
    trial: {
      index: "And the best Part,",
      title: "It is FREE To try out (no strings Istg)",
      body: "Try it out for 14 days,\nif you don't feel the difference,\nwe won't bug you ever again",
      closer: "And maybe your competition is already doing it",
    },
    people: {
      index: "S7 / CLIENT PROOF",
      title: "Some more people vouching for us",
      body: "[100% flesh & bones, not AI gen]",
    },
    offerings: {
      index: "S8 / CORE SUITE",
      title: "Explore our offerings",
      products: [
        { name: "Talks", note: "[Most affordable in the world]", href: "/talks" },
        { name: "Vision", note: "(your cameras r alive)", href: "/vision" },
        { name: "OS", note: "(Business HQ)", href: "/os" },
      ],
    },
    closing: {
      index: "S9 / FREE BUSINESS AUDIT",
      title: "C'mon Now, our clients see a minimum of 5x ROI when working with us + IT'S FREE!!",
      primaryCta: "Book a call Now",
      secondaryCta: "Get on call business audit too [FREE Again]",
    },
  },
};

export const productPages: Record<string, ProductPageData> = {
  talks: {
    slug: "talks",
    eyebrow: "AIORA VOICE",
    title: "Your phone should create momentum, not missed opportunities.",
    body: "AIORA Voice helps your business handle inbound calls, understand why the customer called and move them toward a booking, order or qualified handoff.",
    primaryCta: "Hear how it works",
    primaryHref: "#how-it-works",
    secondaryCta: "Build my call flow",
    secondaryHref: "/contact",
    microcopy: "Configure it around your hours, services and escalation rules.",
    visualMode: "voice",
    stats: [
      { value: "01", label: "Appointments" },
      { value: "02", label: "Orders" },
      { value: "03", label: "Service enquiries" },
      { value: "04", label: "After-hours calls" },
    ],
    painTitle: "A missed call is rarely just a missed call.",
    painBody: "It can be the appointment that never gets booked, the order that goes elsewhere or the customer who never calls back. When your team is serving people, driving, closing up or simply overloaded, the phone cannot be the weak point.",
    servicesTitle: "Every caller gets a clearer path.",
    services: [
      { label: "01 / ANSWER", title: "Answer with your business context", body: "Introduce the business, understand the reason for the call and handle the questions your team answers every day." },
      { label: "02 / COLLECT", title: "Collect what matters", body: "Capture the request, preferred time, location or order details instead of leaving a vague missed-call notification." },
      { label: "03 / MOVE", title: "Move the customer forward", body: "Book, confirm, route or hand off based on the workflow you decide." },
    ],
    workflowTitle: "Every caller gets a clearer path.",
    workflow: [
      { title: "Answer with your business context", body: "Introduce the business, understand the reason for the call and handle the questions your team answers every day." },
      { title: "Collect what matters", body: "Capture the request, preferred time, location or order details instead of leaving a vague missed-call notification." },
      { title: "Move the customer forward", body: "Book, confirm, route or hand off based on the workflow you decide." },
    ],
    useCasesTitle: "Use-case cards",
    useCases: [
      { title: "Appointments", body: "Turn calls into booked slots, not notes someone has to chase later." },
      { title: "Orders", body: "Capture the order details while the customer is ready to buy." },
      { title: "Service enquiries", body: "Ask the first questions, qualify the request and send it to the right person." },
      { title: "After-hours calls", body: "Give callers a useful next step when the business is closed." },
    ],
    proofTitle: "The call should feel like your business, only more consistent.",
    proofBody: "The voice, rules, handoff conditions and business information are configured around your workflow. The goal is not to replace every conversation. It is to make sure the right conversation reaches the right person.",
    proofEvidence: ["Approved audio clip", "Approved real call journey", "Approved client outcome"],
    faqTitle: "You stay in control of the customer experience.",
    faqs: [
      { question: "Can it transfer to our team?", answer: "Yes. Define which calls need a person and where they should go." },
      { question: "Can it follow our booking or order process?", answer: "That is the point. Configure the questions, information and next steps around the process you already use." },
      { question: "What happens when it does not know?", answer: "Set a clear fallback and human escalation route instead of allowing it to guess." },
    ],
    closingTitle: "Stop treating every inbound call like an interruption.",
    closingBody: "Build a call flow that protects your team’s time and gives customers a direct path to the next step.",
    closingCta: "Design my AI voice flow",
  },
  vision: {
    slug: "vision",
    eyebrow: "AIORA VISION",
    title: "Do not wait for an incident to start paying attention.",
    body: "AIORA Vision turns camera activity into reviewable alerts, so your team can focus on the moments that may need attention instead of watching hours of footage.",
    primaryCta: "See a detection workflow",
    primaryHref: "#how-it-works",
    secondaryCta: "Assess my site",
    secondaryHref: "/contact",
    microcopy: "Detection and alert availability depend on approved camera setup and configured use cases.",
    claimGate: "Publish only after AIORA supplies a working demo, camera compatibility list, alert workflow, retention terms and written approval for each detection capability.",
    visualMode: "vision",
    stats: [
      { value: "01", label: "Queue and service visibility" },
      { value: "02", label: "Restricted-area monitoring" },
      { value: "03", label: "Operational review" },
      { value: "04", label: "Safety review" },
    ],
    painTitle: "When something looks wrong, your team should know where to look.",
    painBody: "Traditional CCTV records everything. The problem starts when you need one meaningful moment inside hours of video. AIORA Vision can be configured to flag approved theft-risk patterns and send the relevant clip or camera view for human review.",
    servicesTitle: "When something looks wrong, your team should know where to look.",
    services: [
      { label: "01 / RESTRICTED ZONES", title: "Unexpected movement in restricted zones", body: "Flag movement where it should not be happening, then route the alert to the person responsible for review." },
      { label: "02 / INVENTORY", title: "High-risk product or inventory activity", body: "Surface configured activity around controlled areas or high-value inventory so a manager can investigate quickly." },
      { label: "03 / AFTER HOURS", title: "After-hours activity", body: "Bring unusual activity outside your operating hours to attention without relying on someone to watch a monitor." },
    ],
    responsibleUseTitle: "An alert is a prompt to review, not a verdict.",
    responsibleUseBody: "AIORA Vision helps teams surface footage for review. Your team decides what happened and what action is appropriate. Do not use the system to make automatic accusations, disciplinary decisions or identity-based conclusions.",
    workflowTitle: "From camera event to a clearer response.",
    workflow: [
      { title: "Detect an approved event type", body: "Choose the areas, situations and event types that matter for your site." },
      { title: "Receive the relevant context", body: "Send the alert, camera location and short event window to the right reviewer." },
      { title: "Review and respond", body: "Open the footage, verify what happened and follow your existing operational or security process." },
    ],
    useCasesTitle: "Other eligible use cases",
    useCases: [
      { title: "Queue and service visibility", body: "Identify configured congestion or unattended customer areas for staff review." },
      { title: "Restricted-area monitoring", body: "Surface activity in areas that require attention outside normal access rules." },
      { title: "Operational review", body: "Make it faster to locate the moments that matter during a customer complaint, stock discrepancy or site incident." },
      { title: "Safety review", body: "Bring configured safety-sensitive events to the relevant team for human assessment." },
    ],
    proofTitle: "Security teams need context, not more footage.",
    proofBody: "Show the actual workflow. A triggered alert. The associated camera clip. The manager review step. The documented response. Nothing else proves the product.",
    proofEvidence: ["Approved customer deployment", "Privacy-cleared footage", "Actual alert screen recording", "Documented resolution time"],
    faqTitle: "FAQ",
    faqs: [
      { question: "Does AIORA Vision replace our security team?", answer: "No. It helps the team find moments to review faster. Human review and your existing security process remain essential." },
      { question: "Can it tell us someone stole something?", answer: "No. It can flag configured activity for review. A human must assess the footage and decide what happened." },
      { question: "Will it work with our existing cameras?", answer: "This depends on the approved camera setup and integration. Assess the site before making a compatibility claim." },
    ],
    closingTitle: "Give your team the footage that deserves attention.",
    closingBody: "Start with one site, one high-risk zone or one use case. Prove the workflow before expanding.",
    closingCta: "Assess my camera setup",
  },
  os: {
    slug: "os",
    eyebrow: "OS",
    descriptor: "(Business HQ)",
    title: "Your business already has the demand. AIORA keeps it moving.",
    body: "Connect customer conversations, operational workflows and camera events to the systems your teams already use.",
    primaryCta: "Show us the workflow",
    primaryHref: "#workflow",
    secondaryCta: "Explore Voice and Vision",
    secondaryHref: "#product-offerings",
    visualMode: "os",
    stats: [
      { value: "01", label: "Answer every enquiry" },
      { value: "02", label: "Move customers to the next step" },
      { value: "03", label: "See what is happening" },
      { value: "04", label: "ONE PLATFORM. FOUR WAYS TO MOVE FASTER." },
    ],
    painTitle: "Less chasing. Less waiting. Less getting lost.",
    painBody: "Give your team one place to review conversations, requests and customer activity.",
    outcomeItems: [
      { title: "Answer every enquiry", body: "Calls and messages are handled with the right business context, even when your team is busy." },
      { title: "Move customers to the next step", body: "Book the slot. Confirm the order. Share the catalog. Route the follow-up." },
      { title: "See what is happening", body: "Give your team one place to review conversations, requests and customer activity." },
    ],
    servicesEyebrow: "ONE PLATFORM. FOUR WAYS TO MOVE FASTER.",
    servicesTitle: "Built around the moments that decide whether a customer buys.",
    services: [
      { label: "VOIT", title: "Your phone becomes a reliable first response.", headline: "Your phone becomes a reliable first response.", body: "AIORA Voice handles common calls, captures intent and moves customers toward the right next action." },
      { label: "WhatsApp AI", title: "Every WhatsApp conversation has context.", headline: "Every WhatsApp conversation has context.", body: "Help customers find answers, browse options, book and place requests without making them wait for a person to reply." },
      { label: "Photo to Order", title: "A list becomes an order.", headline: "A list becomes an order.", body: "Turn a customer’s shopping list photo into a clearer, faster route to fulfilment." },
      { label: "Smart Catalog", title: "Your inventory is easier to sell.", headline: "Your inventory is easier to sell.", body: "Make products simple to find, share and browse across the channels customers already use." },
    ],
    servicesCta: "Explore the core suite",
    workflowEyebrow: "FROM SETUP TO LIVE",
    workflowTitle: "Start with the workflow that leaks the most revenue.",
    workflow: [
      { title: "Connect your customer channel.", body: "Bring in the phone, WhatsApp or ordering workflow you want to improve first." },
      { title: "Configure your business context.", body: "Add your working hours, common requests, catalog or booking rules, then decide where people should be routed." },
      { title: "Go live with a system your team can understand.", body: "Review activity, refine responses and expand once the first workflow is working." },
    ],
    workflowCta: "Start with one workflow",
    closingTitle: "Your customers are already reaching out. Give every one of them a next step.",
    closingBody: "Start with the customer conversation, call flow or order process that creates the most pressure today.",
    closingCta: "Talk to AIORA",
  },
};

export const caseStudiesCopy = {
  title: "Our Success across SMBs and ventures",
  exactLines: [
    "Our Success across SMBs and ventures",
    "Mehta Emporium [AI Voice]",
    "KV Toys -> Workflow streamlined",
    "30% error reduction",
    "13% rev boost from...",
  ],
  statusBands: ["Deployed", "Contracted", "In build"],
  requiredFields: ["Starting problem", "Workflow launched", "Scale", "Measured result", "Evidence source"],
  emptyState: "Approved business name and verified outcome required before publication.",
};

export const contactCopy = {
  suppliedCta: [
    "C'mon Now, our clients see a minimum of 5x ROI when working with us + IT'S FREE!!",
    "Book a call Now",
    "Get on call business audit too [FREE Again]",
  ],
  headline: "Your customers are already reaching out. Give every one of them a next step.",
  body: "Start with the customer conversation, call flow or order process that creates the most pressure today.",
  cta: "Talk to AIORA",
};

export const navPrimaryCta = { text: "BOOK A STRATEGY CALL", href: "/contact" };

export const lockedHomeFooterCopy = "AI systems should earn their place in the operation.";

export const strategyCallUrl = "https://calendly.com/shreyasrajsony11/30min";

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "TALKS", href: "/talks" },
  { label: "VISION", href: "/vision" },
  { label: "OS", href: "/os" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "CONTACT", href: "/contact" },
];
