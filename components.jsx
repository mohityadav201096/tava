/* Shared primitives: icons, chips, buttons, meal art, bottom nav */

// ── Icons (line, 1.6 stroke) ───────────────────────────────────────
const Icon = ({ d, size = 20, stroke = 'currentColor', fill = 'none', children, sw = 1.6, vb = '0 0 24 24' }) => (
  <svg width={size} height={size} viewBox={vb} fill={fill} stroke={stroke} strokeWidth={sw}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d ? <path d={d} /> : children}
  </svg>
);

const Icons = {
  Home:   (p) => <Icon {...p}><path d="M3.5 11.5L12 4l8.5 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M10 20v-5h4v5"/></Icon>,
  Spark:  (p) => <Icon {...p}><path d="M12 3.5l1.7 4.6 4.6 1.7-4.6 1.7L12 16l-1.7-4.6L5.7 9.8l4.6-1.7L12 3.5z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7L19 15z"/></Icon>,
  Heart:  (p) => <Icon {...p}><path d="M12 20s-7-4.3-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.7-7 10-7 10z"/></Icon>,
  HeartF: (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M12 20.5s-7.2-4.4-7.2-10.3A4.2 4.2 0 0112 7a4.2 4.2 0 017.2 3.2c0 5.9-7.2 10.3-7.2 10.3z"/></Icon>,
  Gear:   (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 14.5a1.7 1.7 0 00.4 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.4 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.6 1.7 1.7 0 00-1.9.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.4-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1.1 1.7 1.7 0 00-.4-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.4H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.4l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.4 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z"/></Icon>,
  Plus:   (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  X:      (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>,
  Cam:    (p) => <Icon {...p}><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></Icon>,
  Mic:    (p) => <Icon {...p}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></Icon>,
  ArrowL: (p) => <Icon {...p}><path d="M15 5l-7 7 7 7"/></Icon>,
  ArrowR: (p) => <Icon {...p}><path d="M9 5l7 7-7 7"/></Icon>,
  Send:   (p) => <Icon {...p}><path d="M4 12l16-8-6 16-2-7-8-1z"/></Icon>,
  Clock:  (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  Leaf:   (p) => <Icon {...p}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19c4-4 7-7 11-11"/></Icon>,
  Flame:  (p) => <Icon {...p}><path d="M12 3s4 4 4 8a4 4 0 11-8 0c0-1 .5-2 1.5-3-.5 2 .5 3 1 3 .5-1 0-3 1.5-8z"/></Icon>,
  Bolt:   (p) => <Icon {...p}><path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z"/></Icon>,
  Play:   (p) => <Icon {...p}><path d="M7 4l13 8-13 8z" fill="currentColor" stroke="none"/></Icon>,
  Yt:     (p) => <Icon {...p} vb="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="3" fill="currentColor" stroke="none"/><path d="M10.5 9.5v5l4-2.5-4-2.5z" fill="#fff" stroke="none"/></Icon>,
  Up:     (p) => <Icon {...p}><path d="M7 13l5-5 5 5"/></Icon>,
  Down:   (p) => <Icon {...p}><path d="M7 11l5 5 5-5"/></Icon>,
  ThumbU: (p) => <Icon {...p}><path d="M7 11v8H4v-8h3zM7 11l4-7c1.5 0 2.5 1 2.5 2.5V10h5a2 2 0 012 2.3l-1.2 6A2 2 0 0117.3 20H7"/></Icon>,
  ThumbD: (p) => <Icon {...p}><path d="M7 13V5H4v8h3zM7 13l4 7c1.5 0 2.5-1 2.5-2.5V14h5a2 2 0 002-2.3l-1.2-6A2 2 0 0017.3 4H7"/></Icon>,
  Check:  (p) => <Icon {...p}><path d="M5 12l4.5 4.5L19 7"/></Icon>,
  Chevron:(p) => <Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>,
  Bookmark:(p)=> <Icon {...p}><path d="M6 4h12v17l-6-4-6 4V4z"/></Icon>,
  BookmarkF:(p)=> <Icon {...p} fill="currentColor" stroke="none"><path d="M6 4h12v17l-6-4-6 4V4z"/></Icon>,
  Refresh:(p) => <Icon {...p}><path d="M20 8a8 8 0 10-1 9"/><path d="M20 3v5h-5"/></Icon>,
};

// ── Chip ────────────────────────────────────────────────────────────
const Chip = ({ children, selected, onClick, icon, size = 'md', tone = 'default' }) => {
  const pad = size === 'sm' ? '7px 12px' : '9px 14px';
  const fs = size === 'sm' ? 13 : 14;
  const tones = {
    default: {
      bg: selected ? 'var(--ink)' : 'var(--paper)',
      fg: selected ? '#fff' : 'var(--ink)',
      bd: selected ? 'var(--ink)' : 'var(--line)',
    },
    accent: {
      bg: selected ? 'var(--accent)' : 'var(--paper)',
      fg: selected ? '#fff' : 'var(--ink)',
      bd: selected ? 'var(--accent)' : 'var(--line)',
    },
  };
  const t = tones[tone] || tones.default;
  return (
    <button onClick={onClick} className="tap" style={{
      padding: pad, fontSize: fs, fontWeight: 500,
      borderRadius: 999, border: `1px solid ${t.bd}`,
      background: t.bg, color: t.fg, cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', gap: 6,
      lineHeight: 1, whiteSpace: 'nowrap',
    }}>
      {icon}
      {children}
    </button>
  );
};

// ── Buttons ─────────────────────────────────────────────────────────
const PrimaryBtn = ({ children, onClick, icon, disabled, full, size = 'md' }) => {
  const pad = size === 'lg' ? '16px 22px' : '13px 18px';
  return (
    <button disabled={disabled} onClick={onClick} className="tap" style={{
      width: full ? '100%' : undefined,
      padding: pad, border: 'none', borderRadius: 'var(--r-lg)',
      background: disabled ? 'oklch(0.85 0.02 60)' : 'var(--ink)',
      color: '#fff', fontSize: 16, fontWeight: 500, letterSpacing: '-0.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      boxShadow: disabled ? 'none' : '0 6px 18px -8px rgba(40,30,20,0.6), 0 1px 2px rgba(0,0,0,0.06)',
    }}>
      {children}
      {icon}
    </button>
  );
};

const GhostBtn = ({ children, onClick, icon, full }) => (
  <button onClick={onClick} className="tap" style={{
    width: full ? '100%' : undefined,
    padding: '12px 16px', borderRadius: 'var(--r-lg)',
    background: 'var(--paper)', color: 'var(--ink)',
    border: '1px solid var(--line)',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  }}>
    {icon}
    {children}
  </button>
);

const IconBtn = ({ icon, onClick, label, tone = 'default', size = 36 }) => {
  const bg = tone === 'solid' ? 'var(--ink)' : 'var(--paper)';
  const fg = tone === 'solid' ? '#fff' : 'var(--ink)';
  return (
    <button aria-label={label} onClick={onClick} className="tap" style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: fg,
      border: tone === 'solid' ? 'none' : '1px solid var(--line)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', padding: 0, flexShrink: 0,
    }}>{icon}</button>
  );
};

// ── Card ────────────────────────────────────────────────────────────
const Card = ({ children, style, onClick, padded = true }) => (
  <div onClick={onClick} style={{
    background: 'var(--paper)',
    border: '1px solid var(--line-2)',
    borderRadius: 'var(--r-lg)',
    padding: padded ? 16 : 0,
    boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(30,20,10,0.04)',
    cursor: onClick ? 'pointer' : undefined,
    ...style,
  }}>{children}</div>
);

// ── Meal art: soft color block + glyph (no fake food SVGs) ─────────
const MealArt = ({ meal, size = 64, radius = 14 }) => {
  // deterministic warm hue from name
  const hue = Math.abs(hashCode(meal.name)) % 360;
  const lightness = 0.78 + ((Math.abs(hashCode(meal.name)) % 12) / 100);
  const bg = `oklch(${lightness} 0.07 ${hue})`;
  const fg = `oklch(0.32 0.08 ${hue})`;
  const glyph = (meal.glyph) || meal.name.split(' ').map(w => w[0]).slice(0,2).join('');
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: fg, fontFamily: "'Instrument Serif', serif", fontSize: size * 0.42,
      flexShrink: 0,
      backgroundImage: `radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.4) 0%, transparent 55%)`,
      letterSpacing: '-0.01em',
    }}>
      {glyph}
    </div>
  );
};

function hashCode(s){let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;}return h;}

// ── Bottom nav ──────────────────────────────────────────────────────
const BottomNav = ({ active, onChange }) => {
  const items = [
    { id: 'home', label: 'Kitchen', icon: Icons.Home },
    { id: 'suggestions', label: 'Ideas', icon: Icons.Spark },
    { id: 'saved', label: 'Saved', icon: Icons.Heart },
    { id: 'settings', label: 'You', icon: Icons.Gear },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '8px 12px 28px',
      background: 'oklch(0.97 0.012 76 / 0.85)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: '0.5px solid var(--line)',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      zIndex: 40,
    }}>
      {items.map(it => {
        const isActive = active === it.id;
        const I = it.icon;
        return (
          <button key={it.id} onClick={() => onChange(it.id)} className="tap" style={{
            background: 'none', border: 'none', padding: '6px 12px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: isActive ? 'var(--accent)' : 'var(--muted)',
            cursor: 'pointer',
          }}>
            <I size={22} sw={isActive ? 2 : 1.6} />
            <span style={{ fontSize: 10.5, fontWeight: isActive ? 600 : 500, letterSpacing: '0.02em' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ── Section header ──────────────────────────────────────────────────
const SectionLabel = ({ children, action }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
    <div style={{
      fontFamily: "'Geist Mono', monospace", fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'var(--muted)',
    }}>{children}</div>
    {action}
  </div>
);

Object.assign(window, {
  Icons, Icon, Chip, PrimaryBtn, GhostBtn, IconBtn, Card, MealArt, BottomNav, SectionLabel, hashCode,
});
