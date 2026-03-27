"use client";

/**
 * Playground — infinite horizontal film-strip gallery
 *
 * Footer fix:
 *   The desktop canvas is position:relative (NOT position:fixed).
 *   It fills the viewport below the nav as a normal block element.
 *   The page continues after the canvas, so the footer renders below
 *   when the user scrolls down past the film strip section.
 *
 * Gap-elimination (desktop sprocket seams):
 *   Each Polaroid frame has marginTop/Bottom: -BITE so its edges overlap
 *   the sprocket strips by 1 px. The film-block wrapper clips with
 *   overflow:hidden. Black-on-black = zero seam.
 *
 * BLACK = #000000 everywhere in the film block — never near-black.
 */

import {
  Fragment,
  CSSProperties,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

// ── Tokens ─────────────────────────────────────────────────────────────────────
const BROWN = "#3D1F0F";
const PINK  = "#F4ACB7";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

const NAV_H         = 68;  // px — site nav height (pink bar)
const PG_TITLE_H    = 48;  // px — sticky playground title below nav
const HERO_H        = 80;  // px — kept for reference (no longer rendered)
const DIVIDER_W     = 30;  // px — black gap between frames
const STRIP_H    = 50;    // vh — track height
const SPROCKET_H = 26;    // px — desktop top/bottom sprocket strip
const SPROCKET_W = 26;    // px — mobile left/right sprocket strip
const PAD_T      = 10;    // px — frame top padding
const PAD_S      = 10;    // px — frame side padding
const PAD_B      = 44;    // px — Polaroid caption zone
const BITE       = 1;     // px — frame overlap into sprocket strip

// Sticky nav is in document flow (takes NAV_H from the layout before <main>).
// Content only needs to clear the fixed HeroZone bar (HERO_H), not the nav.
const MOBILE_PAD_TOP = 16; // px — minimal top padding (sticky title is in flow)
const TRACK_H        = `${STRIP_H}vh`;
const FRAME_W        = `calc((${STRIP_H}vh - ${PAD_T + PAD_B + 2 * BITE}px) * 0.75 + ${2 * PAD_S}px)`;
// Video frames are landscape 16:9 — wider than portrait image frames
const FRAME_W_VIDEO    = `calc((${STRIP_H}vh - ${PAD_T + PAD_B + 2 * BITE}px) * ${(16 / 9).toFixed(6)} + ${2 * PAD_S}px)`;
// Portrait video frame (painting) — 9:16, narrower than image frames
const FRAME_W_PORTRAIT = `calc((${STRIP_H}vh - ${PAD_T + PAD_B + 2 * BITE}px) * ${(9 / 16).toFixed(6)} + ${2 * PAD_S}px)`;

const DRIFT_D = 0.5;  // desktop auto-drift px/RAF frame
const DRIFT_M = 0.7;  // mobile  auto-drift px/window.scrollBy

// ── Content ───────────────────────────────────────────────────────────────────
type VideoItem = { id: number; kind: "video"; src: string; portrait?: boolean; crop?: boolean };
type ImageItem = { id: number; kind: "image"; src: string };
type Item      = VideoItem | ImageItem;

const VIDEOS: VideoItem[] = [
  { id: 3, kind: "video", src: "/Art/playground_3.mp4" },
  { id: 4, kind: "video", src: "/Art/playground_4.mp4" },
  { id: 5, kind: "video", src: "/Art/playground_5.mp4", portrait: true, crop: true },
];
const IMAGES: ImageItem[] = [
  { id: 6,  kind: "image", src: "/Art/playground_6.jpg"  },
  { id: 7,  kind: "image", src: "/Art/playground_7.jpg"  },
  { id: 8,  kind: "image", src: "/Art/playground_8.jpg"  },
  { id: 9,  kind: "image", src: "/Art/playground_9.jpg"  },
  { id: 10, kind: "image", src: "/Art/playground_10.jpg" },
];

const BASE: Item[] = [
  ...VIDEOS,
  ...IMAGES,
];
// Triple the strip so it feels infinite in both directions
const STRIP: Item[] = [...BASE, ...BASE, ...BASE];

// ── Helpers ───────────────────────────────────────────────────────────────────
function norm(offset: number, tw: number): number {
  if (!tw) return offset;
  return ((offset + 2 * tw) % tw + tw) % tw - 2 * tw;
}

function hSprocketBg(h: number): string {
  const tw = 52, hw = 9, hh = Math.round(h * 0.54), hy = (h - hh) / 2;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="${h}">` +
    `<rect width="${tw}" height="${h}" fill="${BLACK}"/>` +
    `<rect x="4" y="${hy.toFixed(1)}" width="${hw}" height="${hh}" rx="2" fill="${BROWN}"/>` +
    `<text x="${tw / 2}" y="${(h / 2).toFixed(1)}" text-anchor="middle"` +
    ` dominant-baseline="middle" font-size="5.5" font-family="monospace"` +
    ` fill="rgba(255,210,55,0.38)" letter-spacing="0.6">KODAK 400</text>` +
    `<rect x="${tw - hw - 4}" y="${hy.toFixed(1)}" width="${hw}" height="${hh}" rx="2" fill="${BROWN}"/>` +
    `</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function vSprocketBg(w: number): string {
  const th = 52, hh = 10, hw = Math.round(w * 0.46), hx = (w - hw) / 2;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${th}">` +
    `<rect width="${w}" height="${th}" fill="${BLACK}"/>` +
    `<rect x="${hx.toFixed(1)}" y="4" width="${hw}" height="${hh}" rx="2" fill="${BROWN}"/>` +
    `<rect x="${hx.toFixed(1)}" y="${th - hh - 4}" width="${hw}" height="${hh}" rx="2" fill="${BROWN}"/>` +
    `</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PlaygroundPage() {
  const canvasRef   = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const offsetRef   = useRef(0);
  const twRef       = useRef(0);
  const dragRef     = useRef({ on: false, startX: 0, startOff: 0 });
  const velRef      = useRef(0);
  const lastXRef    = useRef(0);
  const lastTRef    = useRef(0);
  const rafRef      = useRef(0);
  const driftRafRef = useRef(0);
  const wSnapRef    = useRef<ReturnType<typeof setTimeout>>();
  const audioIdRef  = useRef<number | null>(null);
  const hoverRef    = useRef(false);

  const [mounted,       setMounted]       = useState(false);
  const [ready,         setReady]         = useState(false);
  const [isMobile,      setIsMobile]      = useState(false);
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);
  const [navH,          setNavH]          = useState(NAV_H);

  useEffect(() => { setMounted(true); }, []);

  // Measure the real nav height so sticky offsets stay flush
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    const update = () => setNavH(nav.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(nav);
    return () => ro.disconnect();
  }, [mounted]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Desktop drift ───────────────────────────────────────────────────────────
  const stopDrift = useCallback(() => {
    cancelAnimationFrame(driftRafRef.current);
  }, []);

  const startDrift = useCallback(() => {
    cancelAnimationFrame(driftRafRef.current);
    const step = () => {
      if (!hoverRef.current && !dragRef.current.on) {
        const next = norm(offsetRef.current - DRIFT_D, twRef.current);
        offsetRef.current = next;
        if (trackRef.current)
          trackRef.current.style.transform = `translateX(${next}px)`;
      }
      driftRafRef.current = requestAnimationFrame(step);
    };
    driftRafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;
    const t = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const tw = track.scrollWidth / 3;
      twRef.current = tw;
      const initial = norm(window.innerWidth / 2 - 1.5 * tw, tw);
      offsetRef.current = initial;
      track.style.transform = `translateX(${initial}px)`;
      setReady(true);
    }, 200);
    return () => clearTimeout(t);
  }, [mounted, isMobile]);

  useEffect(() => {
    if (!ready || isMobile) return;
    startDrift();
    return () => stopDrift();
  }, [ready, isMobile, startDrift, stopDrift]);

  // ── Mobile window-scroll drift ──────────────────────────────────────────────
  useEffect(() => {
    if (!isMobile || !mounted) return;
    const active = { on: true };
    let raf = 0;
    const step = () => {
      if (active.on) window.scrollBy(0, DRIFT_M);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    let timer: ReturnType<typeof setTimeout>;
    const pause  = () => { active.on = false; clearTimeout(timer); };
    const resume = () => { timer = setTimeout(() => { active.on = true; }, 1200); };
    window.addEventListener("touchstart", pause,  { passive: true });
    window.addEventListener("touchend",   resume, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("touchstart", pause);
      window.removeEventListener("touchend",   resume);
    };
  }, [isMobile, mounted]);

  // ── Singleton audio ──────────────────────────────────────────────────────────
  const unmuteBestCopy = useCallback((id: number) => {
    // Desktop: search inside the film-strip track.
    // Mobile: trackRef is null, so fall back to the whole document.
    const container: Element = trackRef.current ?? document.body;
    const all = Array.from(container.querySelectorAll<HTMLVideoElement>("video"));

    // Mute everything first so only one video plays audio at a time.
    all.forEach(v => { v.muted = true; });

    const copies = all.filter(v => v.dataset.audioId === String(id));
    if (!copies.length) return;

    // Desktop: pick the copy closest to the horizontal centre of the viewport.
    // Mobile: only one copy exists, so just use it directly.
    let best = copies[0];
    if (trackRef.current) {
      const cx = window.innerWidth / 2;
      let bestD = Infinity;
      copies.forEach(v => {
        const r = v.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - cx);
        if (d < bestD) { bestD = d; best = v; }
      });
    }

    // iOS requires pause → unmute → play (all synchronous within the user
    // gesture) to actually deliver audio. Calling play() on a still-playing
    // muted video does not unblock the audio session on Safari/iOS.
    best.pause();
    best.muted = false;
    best.play().catch(() => {});
  }, []);

  const toggleAudio = useCallback((id: number) => {
    document.querySelectorAll<HTMLVideoElement>("video").forEach(v => {
      if (v.dataset.audioId !== String(id)) {
        v.muted = true; v.pause(); v.currentTime = 0;
        v.play().catch(() => {});
      }
    });
    if (audioIdRef.current === id) {
      // Turn audio off — mute and resume silent autoplay on every copy.
      document.querySelectorAll<HTMLVideoElement>("video")
        .forEach(v => {
          if (v.dataset.audioId === String(id)) {
            v.muted = true;
            v.play().catch(() => {});
          }
        });
      audioIdRef.current = null;
      setActiveAudioId(null);
    } else {
      audioIdRef.current = id;
      setActiveAudioId(id);
      unmuteBestCopy(id);
    }
  }, [unmuteBestCopy]);

  // ── Spring snap ──────────────────────────────────────────────────────────────
  const springTo = useCallback((target: number) => {
    stopDrift();
    cancelAnimationFrame(rafRef.current);
    const go = () => {
      const diff = target - offsetRef.current;
      if (Math.abs(diff) < 0.3) {
        const final = norm(target, twRef.current);
        offsetRef.current = final;
        if (trackRef.current) trackRef.current.style.transform = `translateX(${final}px)`;
        if (audioIdRef.current !== null) unmuteBestCopy(audioIdRef.current);
        if (!hoverRef.current && !dragRef.current.on) startDrift();
        return;
      }
      offsetRef.current += diff * 0.13;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(go);
    };
    rafRef.current = requestAnimationFrame(go);
  }, [unmuteBestCopy, startDrift, stopDrift]);

  const snapToNearest = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const frames = Array.from(track.querySelectorAll<HTMLElement>("[data-frame]"));
    if (!frames.length) return;
    const cx = window.innerWidth / 2;
    let best = frames[0], bestD = Infinity;
    frames.forEach(f => {
      const r = f.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - cx);
      if (d < bestD) { bestD = d; best = f; }
    });
    const r = best.getBoundingClientRect();
    springTo(offsetRef.current + cx - (r.left + r.width / 2));
  }, [springTo]);

  const runMomentum = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const step = () => {
      velRef.current *= 0.92;
      if (Math.abs(velRef.current) < 1.5) { snapToNearest(); return; }
      const next = norm(offsetRef.current + velRef.current, twRef.current);
      offsetRef.current = next;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${next}px)`;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [snapToNearest]);

  // ── Pointer drag ────────────────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    stopDrift();
    cancelAnimationFrame(rafRef.current);
    clearTimeout(wSnapRef.current);
    e.currentTarget.setPointerCapture(e.pointerId);
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    velRef.current = 0;
    lastXRef.current = e.clientX;
    lastTRef.current = performance.now();
    dragRef.current = { on: true, startX: e.clientX, startOff: offsetRef.current };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.on || !trackRef.current) return;
    const now = performance.now(), dt = Math.max(1, now - lastTRef.current);
    velRef.current = ((e.clientX - lastXRef.current) / dt) * 16;
    lastXRef.current = e.clientX;
    lastTRef.current = now;
    const next = norm(
      dragRef.current.startOff + (e.clientX - dragRef.current.startX),
      twRef.current,
    );
    offsetRef.current = next;
    trackRef.current.style.transform = `translateX(${next}px)`;
  };
  const onPointerUp = () => {
    if (!dragRef.current.on) return;
    dragRef.current.on = false;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    runMomentum();
  };
  const onMouseEnter = () => { hoverRef.current = true;  stopDrift(); };
  const onMouseLeave = () => {
    hoverRef.current = false;
    if (!dragRef.current.on && ready) startDrift();
  };

  // Non-passive wheel handler
  useEffect(() => {
    if (!ready || isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handler = (e: WheelEvent) => {
      // Let primarily vertical scrolls pass through (page scroll, not film strip)
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) * 1.5) return;
      e.preventDefault();
      stopDrift();
      cancelAnimationFrame(rafRef.current);
      clearTimeout(wSnapRef.current);
      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const next = norm(offsetRef.current - Math.max(-200, Math.min(200, raw)), twRef.current);
      offsetRef.current = next;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${next}px)`;
      wSnapRef.current = setTimeout(() => { snapToNearest(); }, 160);
    };
    canvas.addEventListener("wheel", handler, { passive: false });
    return () => canvas.removeEventListener("wheel", handler);
  }, [ready, isMobile, snapToNearest, stopDrift]);

  if (!mounted) return <div style={{ minHeight: "100vh", background: BROWN }} />;

  // ── Sub-components ───────────────────────────────────────────────────────────
  const hSpBg = hSprocketBg(SPROCKET_H);
  const vSpBg = vSprocketBg(SPROCKET_W);

  const HSprocket = () => (
    <div style={{
      width:            "100%",
      height:           SPROCKET_H,
      flexShrink:       0,
      backgroundImage:  hSpBg,
      backgroundRepeat: "repeat-x",
      backgroundSize:   `52px ${SPROCKET_H}px`,
      backgroundColor:  BLACK,
      pointerEvents:    "none",
    }} />
  );

  const stickerCSS = (active: boolean): CSSProperties => ({
    position:             "absolute",
    bottom:               10,
    right:                PAD_S,
    fontFamily:           "ui-monospace,'SF Mono',Menlo,monospace",
    fontSize:             "10px",
    fontWeight:           500,
    letterSpacing:        "0.05em",
    lineHeight:           1.4,
    color:                BROWN,
    background:           active ? PINK : "rgba(255,255,255,0.93)",
    backdropFilter:       "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border:               `0.5px solid rgba(61,31,15,${active ? 0.35 : 0.20})`,
    borderRadius:         "2px",
    padding:              "3px 7px",
    cursor:               "pointer",
    userSelect:           "none",
    whiteSpace:           "nowrap",
    zIndex:               5,
    transition:           "background 0.15s, border-color 0.15s",
  });

  // ── MOBILE — vertical strip ──────────────────────────────────────────────────
  if (isMobile) {
    const sidePad = SPROCKET_W;
    return (
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>

        {/* Module 5: sticky Paper Cream title — z-40, sticks below pink nav (z-50) */}
        <div style={{
          position:             "sticky",
          top:                  navH,
          zIndex:               40,
          width:                "100%",
          height:               PG_TITLE_H,
          background:           "rgba(255,253,249,0.94)",
          backdropFilter:       "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom:         "1px solid rgba(255,182,193,0.18)",
          display:              "flex",
          alignItems:           "center",
          padding:              "0 28px",
        }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.10em", color: "#2D1B14", userSelect: "none" }}>
            welcome to my playground
          </span>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <span style={{ color: "#FFB6C1", fontSize: "0.85rem", lineHeight: 1 }} aria-hidden>✮</span>
            <span style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", color: "rgba(45,27,20,0.40)" }}>
              scroll to explore
            </span>
          </span>
        </div>

        {/* Dark film content */}
        <div style={{ background: BROWN, minHeight: "100vh", width: "100%" }}>

          {/* Left + Right fixed sprockets */}
          {([0, 1] as const).map(side => (
            <div key={side} style={{
              position:         "fixed",
              [side === 0 ? "left" : "right"]: 0,
              top:              0,
              bottom:           0,
              width:            SPROCKET_W,
              backgroundImage:  vSpBg,
              backgroundRepeat: "repeat-y",
              backgroundSize:   `${SPROCKET_W}px 52px`,
              backgroundColor:  BLACK,
              zIndex:           10,
              pointerEvents:    "none",
            }} />
          ))}

          {/* Content column */}
          <div style={{
            paddingTop:    MOBILE_PAD_TOP,
            paddingBottom: 80,
            paddingLeft:   sidePad,
            paddingRight:  sidePad,
            display:       "flex",
            flexDirection: "column",
            gap:           0,
          }}>
            {BASE.map((item, i) => {
              const isVideo  = item.kind === "video";
              const isActive = isVideo && activeAudioId === item.id;
              const frameNum = String(i + 1).padStart(2, "0");
              return (
                <div key={item.id} style={{ margin: 0, padding: 0 }}>
                  {i > 0 && (
                    <div style={{ height: 30, marginLeft: -BITE, marginRight: -BITE, background: BLACK }} />
                  )}
                  <div style={{
                    position:     "relative",
                    width:        "100%",
                    boxSizing:    "border-box",
                    marginLeft:   -BITE,
                    marginRight:  -BITE,
                    padding:      `${PAD_T}px ${PAD_S + BITE}px ${PAD_B}px`,
                    background:   WHITE,
                    border:       "none",
                    borderRadius: "2px",
                    boxShadow:    "4px 4px 14px rgba(0,0,0,0.28)",
                    overflow:     "hidden",
                  }}>
                    {isVideo ? (
                      <div style={{
                        width:       "100%",
                        aspectRatio: (item as VideoItem).portrait ? "9/16" : "16/9",
                        overflow:    "hidden",
                      }}>
                        <video src={(item as VideoItem).src} data-audio-id={item.id}
                          autoPlay muted loop playsInline
                          style={{
                            display:        "block",
                            width:          "100%",
                            height:         "100%",
                            objectFit:      "cover",
                            objectPosition: (item as VideoItem).portrait ? "center top" : "center",
                            // Scale up and shift to crop logos off top and sides
                            ...((item as VideoItem).crop && {
                              transform:       "scale(1.48)",
                              transformOrigin: "center center",
                            }),
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={(item as ImageItem).src} alt="" draggable={false}
                          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", pointerEvents: "none" }}
                        />
                      </div>
                    )}
                    <span style={{
                      position: "absolute", bottom: 12, left: PAD_S + BITE,
                      fontSize: 8, fontFamily: "ui-monospace,monospace",
                      color: "rgba(61,31,15,0.35)", letterSpacing: "0.08em",
                      userSelect: "none", pointerEvents: "none",
                    }}>{frameNum}</span>
                    {isVideo && (
                      <button type="button" onClick={() => toggleAudio(item.id)} style={stickerCSS(isActive)}>
                        {isActive ? "[ AUDIO ON ]" : "[ AUDIO OFF ]"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── DESKTOP — horizontal infinite film strip ─────────────────────────────────
  return (
    // Full-bleed container — breaks out of centered max-w-[1440px] main
    <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>

      {/* Module 5: sticky Paper Cream title — z-40 sticks below pink nav (z-50) */}
      <div style={{
        position:             "sticky",
        top:                  navH,
        zIndex:               40,
        width:                "100%",
        height:               PG_TITLE_H,
        background:           "rgba(255,253,249,0.94)",
        backdropFilter:       "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom:         "1px solid rgba(255,182,193,0.18)",
        display:              "flex",
        alignItems:           "center",
        padding:              "0 32px",
      }}>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.10em", color: "#2D1B14", userSelect: "none" }}>
          welcome to my playground
        </span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <span style={{ color: "#FFB6C1", fontSize: "0.85rem", lineHeight: 1 }} aria-hidden>✮</span>
          <span style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", color: "rgba(45,27,20,0.40)" }}>
            swipe to explore
          </span>
        </span>
      </div>

      {/* Film strip canvas — height accounts for nav + pg title */}
      <div
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          position:       "relative",
          width:          "100%",
          height:         `calc(100vh - ${navH}px - ${PG_TITLE_H}px)`,
          background:     BROWN,
          overflow:       "hidden",
          cursor:         "grab",
          touchAction:    "none",
          userSelect:     "none",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
        }}
      >

      {/* Film block */}
      <div style={{
        position:        "relative",
        width:           "100%",
        backgroundColor: BLACK,
        overflow:        "hidden",
      }}>
        <HSprocket />

        {/* Track zone */}
        <div style={{
          position:        "relative",
          width:           "100%",
          height:          TRACK_H,
          overflow:        "hidden",
          backgroundColor: BLACK,
        }}>
          <div ref={trackRef} style={{
            position:      "absolute",
            top:           0,
            left:          0,
            height:        TRACK_H,
            display:       "flex",
            flexDirection: "row",
            alignItems:    "stretch",
            gap:           0,
            margin:        0,
            padding:       0,
            willChange:    "transform",
            opacity:       ready ? 1 : 0,
            transition:    "opacity 0.4s ease",
          }}>
            {STRIP.map((item, i) => {
              const isVideo  = item.kind === "video";
              const copyIdx  = Math.floor(i / BASE.length);
              const isActive = isVideo && activeAudioId === item.id;
              const frameNum = String((i % BASE.length) + 1).padStart(2, "0");

              return (
                <Fragment key={`${item.id}-c${copyIdx}`}>
                  {/* Black divider */}
                  <div style={{
                    flexShrink:      0,
                    width:           DIVIDER_W,
                    height:          TRACK_H,
                    backgroundColor: BLACK,
                    margin:          0,
                    padding:         0,
                  }} />

                  {/* Polaroid frame */}
                  <div
                    data-frame
                    style={{
                      flexShrink:   0,
                      alignSelf:    "stretch",
                      width:        isVideo
                        ? ((item as VideoItem).portrait ? FRAME_W_PORTRAIT : FRAME_W_VIDEO)
                        : FRAME_W,
                      height:       TRACK_H,
                      margin:       `${-BITE}px 0`,
                      boxSizing:    "border-box",
                      padding:      `${PAD_T + BITE}px ${PAD_S}px ${PAD_B + BITE}px`,
                      position:     "relative",
                      background:   WHITE,
                      border:       "none",
                      borderRadius: "2px",
                      boxShadow:    "4px 4px 18px rgba(0,0,0,0.28), 0 1px 4px rgba(0,0,0,0.14)",
                      overflow:     "hidden",
                    }}
                  >
                    {isVideo ? (
                      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                        <video src={(item as VideoItem).src} data-audio-id={item.id}
                          autoPlay muted loop playsInline
                          style={{
                            display:        "block",
                            width:          "100%",
                            height:         "100%",
                            objectFit:      "cover",
                            objectPosition: (item as VideoItem).portrait ? "center top" : "center",
                            // Scale up and shift to crop logos off top and sides
                            ...((item as VideoItem).crop && {
                              transform:       "scale(1.48)",
                              transformOrigin: "center center",
                            }),
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={(item as ImageItem).src} alt="" draggable={false}
                          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", pointerEvents: "none" }}
                        />
                      </div>
                    )}
                    <span style={{
                      position: "absolute", bottom: 12, left: PAD_S,
                      fontSize: 8, fontFamily: "ui-monospace,'SF Mono',monospace",
                      color: "rgba(61,31,15,0.35)", letterSpacing: "0.08em",
                      userSelect: "none", pointerEvents: "none",
                    }}>{frameNum}</span>
                    {isVideo && (
                      <button type="button"
                        onPointerDown={e => e.stopPropagation()}
                        onClick={e => { e.stopPropagation(); toggleAudio(item.id); }}
                        style={stickerCSS(isActive)}
                      >
                        {isActive ? "[ AUDIO ON ]" : "[ AUDIO OFF ]"}
                      </button>
                    )}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>

        <HSprocket />
      </div>

      {/* Pink scroll-hint arrow */}
      <div aria-hidden style={{
        position:      "absolute",
        right:         22,
        top:           "50%",
        transform:     "translateY(-50%)",
        zIndex:        300,
        pointerEvents: "none",
        color:         PINK,
        fontSize:      36,
        lineHeight:    1,
        animation:     "pg-arrow-pulse 2.2s ease-in-out infinite",
      }}>
        {"\u203a"}
      </div>
    </div>
    {/* closes outer full-bleed wrapper */}
    </div>
  );
}
