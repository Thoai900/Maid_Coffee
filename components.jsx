// Sweet Maid Café — shared decorative components

const { useState, useEffect, useRef, useMemo } = React;

// ─── Floating decorations (hearts + sparkles + petals) ───────────────────
function FloatingDecor({ density = 1 }) {
  const items = useMemo(() => {
    const count = Math.round(28 * density);
    const glyphs = ["♡", "✿", "✦", "❀", "♥", "✧", "·"];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      glyph: glyphs[i % glyphs.length],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 10 + Math.random() * 22,
      delay: Math.random() * 8,
      duration: 14 + Math.random() * 16,
      drift: -20 + Math.random() * 40,
      opacity: 0.25 + Math.random() * 0.45,
    }));
  }, [density]);

  if (density === 0) return null;
  return (
    <div className="decor-layer" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="decor-item"
          style={{
            left: `${it.left}%`,
            top: `${it.top}%`,
            fontSize: `${it.size}px`,
            opacity: it.opacity,
            animationDelay: `-${it.delay}s`,
            animationDuration: `${it.duration}s`,
            "--drift": `${it.drift}px`,
          }}
        >
          {it.glyph}
        </span>
      ))}
    </div>
  );
}

// ─── Photo placeholder — striped SVG with monospace label ────────────────
function PhotoPlaceholder({ label, ratio = "4/3", tone = "pink", style }) {
  const tones = {
    pink:    { bg: "#fde7ef", stripe: "#f9d2e0", ink: "#a85375" },
    cream:   { bg: "#fbf2e6", stripe: "#f4e3c9", ink: "#9a7a45" },
    lavender:{ bg: "#ece5fa", stripe: "#dccff5", ink: "#7560a8" },
    blush:   { bg: "#fcdadf", stripe: "#f6c2cb", ink: "#a4546b" },
  };
  const t = tones[tone] || tones.pink;
  return (
    <div
      className="ph"
      style={{ aspectRatio: ratio, background: t.bg, color: t.ink, ...style }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern id={`p-${tone}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill={t.bg}/>
            <rect width="3" height="6" fill={t.stripe}/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#p-${tone})`}/>
      </svg>
      <span className="ph-label">{label}</span>
    </div>
  );
}

// ─── Section heading with kawaii flourishes ──────────────────────────────
function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="sec-head">
      {eyebrow && <div className="eyebrow">♡ {eyebrow} ♡</div>}
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
      <div className="sec-rule">
        <span></span><span className="dot">✿</span><span></span>
      </div>
    </div>
  );
}

// ─── Scroll reveal wrapper ───────────────────────────────────────────────
function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── Tiny inline kawaii icons (CSS-safe simple shapes) ───────────────────
const Heart = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
      fill={color}/>
  </svg>
);
const Star = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3l2.6 5.6 6 .7-4.5 4 1.3 5.9L12 16.9 6.6 19.2 7.9 13.3 3.4 9.3l6-.7z" fill={color}/>
  </svg>
);
const Cup = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
    <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/>
    <path d="M16 9h2a3 3 0 0 1 0 6h-2"/>
    <path d="M7 4c0 1 1 1 1 2M10 4c0 1 1 1 1 2M13 4c0 1 1 1 1 2"/>
  </svg>
);
const Bow = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 12 4 7v10l8-5zM12 12l8-5v10l-8-5z"/>
    <circle cx="12" cy="12" r="2.2"/>
  </svg>
);

Object.assign(window, {
  FloatingDecor, PhotoPlaceholder, SectionHeading, Reveal,
  Heart, Star, Cup, Bow,
});
