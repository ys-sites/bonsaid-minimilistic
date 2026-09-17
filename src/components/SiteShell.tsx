import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { lockedHomeFooterCopy, navItems, navPrimaryCta, strategyCallUrl } from "../data/siteContent";
import { assetUrl } from "../lib/assetUrl";

gsap.registerPlugin(ScrollTrigger);

function handleSkip() {
  const target = document.getElementById("main-content");
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({ behavior: "auto", block: "start" });
}

function BrandMark() {
  return (
    <NavLink className="brand" to="/" aria-label="AIORA home">
      <span>AIORA</span>
      <i aria-hidden="true" />
    </NavLink>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDialogElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const restoreMenuFocusRef = useRef(true);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = mobileNavRef.current;
    const previousFocus = document.activeElement;
    const pageRegions = [document.querySelector("main"), document.querySelector("footer")].filter(
      (region): region is HTMLElement => region instanceof HTMLElement,
    );
    pageRegions.forEach((region) => {
      region.inert = true;
      region.setAttribute("aria-hidden", "true");
    });
    const focusable = [
      ...(menuButtonRef.current ? [menuButtonRef.current] : []),
      ...Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []),
    ];
    const first = focusable[0];
    const last = focusable.at(-1);
    const focusTimer = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
      if (restoreMenuFocusRef.current && previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-grid page-frame">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? "active" : undefined)}>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <a className="header-cta" href={strategyCallUrl} target="_blank" rel="noreferrer">
          <span>{navPrimaryCta.text}</span><i aria-hidden="true"><ArrowUpRight size={18} /></i>
        </a>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => {
          restoreMenuFocusRef.current = true;
          setOpen((value) => !value);
        }}>
          <span>{open ? "CLOSE" : "MENU"}</span>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <dialog ref={mobileNavRef} className={open ? "mobile-nav is-open" : "mobile-nav"} id="mobile-navigation" aria-label="Mobile navigation menu" open={open} aria-modal={open ? "true" : undefined} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink
              ref={index === 0 ? firstMobileLinkRef : undefined}
              key={item.href}
              to={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                restoreMenuFocusRef.current = false;
                setOpen(false);
              }}
            >
              <span>0{index + 1}</span><strong>{item.label}</strong><ArrowUpRight />
            </NavLink>
          ))}
        </nav>
      </dialog>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-frame">
      <div className="footer-pitch grid-cell">
        <div>
          <span className="eyebrow"><i aria-hidden="true" />AIORA / NEXT MOVE</span>
          <h2>{lockedHomeFooterCopy}</h2>
          <p>Start with one missed call, one camera event or one workflow that keeps leaking time. We map it, launch it and measure whether it earns the right to scale.</p>
        </div>
        <a className="footer-book" href={strategyCallUrl} target="_blank" rel="noreferrer">
          <span>BOOK A 30-MINUTE STRATEGY CALL</span><ArrowUpRight size={20} />
        </a>
      </div>
      <div className="footer-body">
        <div className="footer-identity">
          <BrandMark />
          <p>Outcome-led voice, vision and operating systems for teams that care about the result after launch.</p>
          <span>PUNE / INDIA / WORKING GLOBALLY</span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item, index) => <NavLink key={item.href} to={item.href}><span>0{index + 1}</span><strong>{item.label}</strong><ArrowUpRight size={15} /></NavLink>)}
        </nav>
        <div className="footer-art" aria-hidden="true">
          <img src={assetUrl("assets/bonsai/tree-dither.webp")} alt="" width="1672" height="941" loading="lazy" decoding="async" />
          <span>AIORA / SYSTEMS THAT MOVE WORK FORWARD</span>
        </div>
      </div>
      <div className="footer-meta grid-cell">
        <span>© 2026 AIORA</span>
        <span>VOICE / VISION / OPERATIONS</span>
        <a href={strategyCallUrl} target="_blank" rel="noreferrer">BOOK A MEETING <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}

export function SiteShell() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      "/": "AIORA | Outcome-led AI systems",
      "/talks": "AIORA Talks | AI voice systems",
      "/vision": "AIORA Vision | Human-reviewed camera intelligence",
      "/os": "AIORA OS | Business operations at your fingertips",
      "/case-studies": "AIORA Case Studies | Evidence before claims",
      "/contact": "Contact AIORA | Start with one operational pressure",
    };
    document.title = routeTitles[location.pathname] ?? "AIORA | Page not found";
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (previousPathRef.current !== location.pathname) {
      window.requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }));
      previousPathRef.current = location.pathname;
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let raf = 0;

    if (!reduceMotion) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const tick = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      lenis.on("scroll", ScrollTrigger.update);
    }

    const handleVisibility = () => {
      if (!lenis) return;
      if (document.hidden) lenis.stop();
      else {
        lenis.start();
        ScrollTrigger.refresh();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const context = gsap.context(() => {
      if (reduceMotion) return;
      gsap.fromTo("[data-page-enter]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 28 }, {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(element, { yPercent: -2 }, {
          yPercent: 2,
          ease: "none",
          scrollTrigger: { trigger: element.closest("section") ?? element, scrub: 0.8, start: "top bottom", end: "bottom top" },
        });
      });
    });

    ScrollTrigger.refresh();
    return () => {
      context.revert();
      document.removeEventListener("visibilitychange", handleVisibility);
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [location.pathname]);

  return (
    <>
      <button className="skip-link" type="button" onClick={handleSkip}>Skip to content</button>
      <Header />
      <main ref={mainRef} id="main-content" tabIndex={-1} data-page-enter><Outlet /></main>
      <Footer />
    </>
  );
}
