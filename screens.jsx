/* All 6 screens + thinking state */

// ─── Sample meal library ────────────────────────────────────────────
const MEAL_LIBRARY = [
  { name: 'Paneer Bhurji', cook: '18 min', protein: 'High', cuisine: 'North Indian', diet: 'Veg', tags: ['Quick', 'High Protein'],
    matches: ['paneer', 'onion', 'tomato'], missing: ['Coriander'], glyph: '◐',
    reason: 'Uses your paneer, onion and tomato — ready in under 20.',
    steps: ['Crumble paneer, set aside.', 'Sauté onion till translucent, add tomato + spices.', 'Fold in paneer, finish with coriander.'],
    ingredients: ['200g paneer', '1 onion, chopped', '2 tomatoes', '1 green chilli', 'Turmeric, garam masala', 'Coriander to finish'],
    yt: 'Paneer Bhurji in 15 min' },
  { name: 'Tomato Rasam', cook: '25 min', protein: 'Low', cuisine: 'South Indian', diet: 'Veg', tags: ['Quick'],
    matches: ['tomato'], missing: ['Tamarind', 'Rasam powder'], glyph: '◉',
    reason: 'A warming companion for your rice — uses just tomato + pantry spices.',
    steps: ['Pulp tomatoes with tamarind water.', 'Temper mustard, cumin, curry leaves.', 'Simmer 8 min, finish with coriander.'],
    ingredients: ['3 ripe tomatoes', 'Tamarind, lemon-size', 'Rasam powder', 'Mustard, cumin, curry leaves', 'Coriander'],
    yt: 'Authentic Tomato Rasam' },
  { name: 'Aloo Gobi', cook: '30 min', protein: 'Low', cuisine: 'North Indian', diet: 'Veg', tags: [],
    matches: ['potato'], missing: ['Cauliflower'], glyph: '✺',
    reason: 'A dry sabzi using your potato — pairs with roti.',
    steps: ['Cube potato + cauliflower.', 'Sauté with ginger-garlic and spices.', 'Cover and cook 18 min.'],
    ingredients: ['2 potatoes, cubed', '1 small cauliflower', 'Ginger-garlic paste', 'Turmeric, coriander powder', 'Kasuri methi'],
    yt: 'Dhaba style Aloo Gobi' },
  { name: 'Veg Pulao', cook: '28 min', protein: 'Med', cuisine: 'North Indian', diet: 'Veg', tags: ['Quick'],
    matches: ['rice', 'onion'], missing: ['Carrot', 'Peas'], glyph: '❋',
    reason: 'One-pot — uses your rice and onion.',
    steps: ['Soak rice 15 min.', 'Sauté whole spices + onion + veg.', 'Add rice, water, cook 12 min on low.'],
    ingredients: ['1 cup basmati', 'Mixed veg', 'Whole garam masala', '1 onion, sliced', 'Mint'],
    yt: 'Restaurant style Veg Pulao' },
  { name: 'Palak Khichdi', cook: '22 min', protein: 'High', cuisine: 'North Indian', diet: 'Veg', tags: ['Quick', 'High Protein'],
    matches: ['rice', 'spinach'], missing: ['Moong dal'], glyph: '◑',
    reason: 'A wholesome one-pot using spinach and rice.',
    steps: ['Pressure cook rice + dal + spinach with turmeric.', 'Temper ghee, cumin, hing.', 'Pour over and serve.'],
    ingredients: ['½ cup rice', '½ cup moong dal', '2 cups spinach', 'Ghee, cumin, hing', 'Ginger'],
    yt: 'Palak Khichdi 22 min' },
  { name: 'Chana Masala', cook: '35 min', protein: 'High', cuisine: 'North Indian', diet: 'Veg', tags: ['High Protein'],
    matches: ['tomato', 'onion'], missing: ['Chickpeas'], glyph: '◎',
    reason: 'A protein-rich classic using your onion + tomato base.',
    steps: ['Pressure cook chickpeas.', 'Sauté onion-tomato masala with spices.', 'Simmer chickpeas in masala 10 min.'],
    ingredients: ['1.5 cups chickpeas', '2 onions', '2 tomatoes', 'Chana masala, amchur'],
    yt: 'Punjabi Chana Masala' },
  { name: 'Egg Bhurji', cook: '12 min', protein: 'High', cuisine: 'North Indian', diet: 'Non-Veg', tags: ['Quick', 'High Protein'],
    matches: ['onion', 'tomato'], missing: ['Eggs'], glyph: '◐',
    reason: 'Fastest protein hit using your onion-tomato — under 15.',
    steps: ['Sauté onion till golden, add tomato, spices.', 'Beat eggs in, scramble gently.', 'Finish with coriander.'],
    ingredients: ['4 eggs', '1 onion', '1 tomato', 'Green chilli, turmeric', 'Coriander'],
    yt: 'Mumbai style Egg Bhurji' },
  { name: 'Methi Thepla', cook: '25 min', protein: 'Med', cuisine: 'North Indian', diet: 'Veg', tags: [],
    matches: ['atta'], missing: ['Methi leaves'], glyph: '◓',
    reason: 'Uses your atta — travel-friendly and freezer-friendly.',
    steps: ['Knead atta with methi, yogurt, spices.', 'Roll thin, cook on tava with oil.', 'Stack and rest.'],
    ingredients: ['2 cups atta', '1 cup methi leaves', '¼ cup yogurt', 'Turmeric, ajwain'],
    yt: 'Soft Methi Thepla' },
  { name: 'Masala Dosa', cook: '40 min', protein: 'Med', cuisine: 'South Indian', diet: 'Veg', tags: [],
    matches: ['potato'], missing: ['Dosa batter'], glyph: '◌',
    reason: 'Pairs with your potato — make aloo masala filling.',
    steps: ['Sauté onion + curry leaves + boiled potato + turmeric.', 'Spread batter thin on hot tava.', 'Fill and fold.'],
    ingredients: ['Dosa batter', '3 boiled potatoes', 'Onion, curry leaves', 'Mustard, urad dal'],
    yt: 'Crispy Masala Dosa' },
];

// ─── Sample saved meals ─────────────────────────────────────────────
const SAMPLE_SAVED = [
  MEAL_LIBRARY[0], MEAL_LIBRARY[4], MEAL_LIBRARY[6], MEAL_LIBRARY[1],
];

const SUGGESTED_CHIPS = ['Onion', 'Tomato', 'Potato', 'Paneer', 'Rice', 'Atta', 'Spinach', 'Ginger', 'Garlic'];

// ════════════════════════════════════════════════════════════════════
// HOME / KITCHEN
// ════════════════════════════════════════════════════════════════════
function HomeScreen({ state, dispatch, goTo }) {
  const { ingredients, pantry } = state;
  const [text, setText] = React.useState(ingredients.join(', '));
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => { setText(ingredients.join(', ')); }, [ingredients]);

  const addChip = (name) => {
    const cur = parseIngredients(text);
    if (cur.includes(name.toLowerCase())) return;
    const next = [...cur, name.toLowerCase()];
    setText(toText(next));
    dispatch({ type: 'setIngredients', items: next });
  };

  const removeChip = (name) => {
    const cur = parseIngredients(text).filter(x => x !== name.toLowerCase());
    setText(toText(cur));
    dispatch({ type: 'setIngredients', items: cur });
  };

  const commit = () => {
    const items = parseIngredients(text);
    dispatch({ type: 'setIngredients', items });
    return items;
  };

  const onSuggest = () => {
    const items = commit();
    if (items.length === 0) return;
    dispatch({ type: 'addToPantry', items });
    goTo('suggestions', { trigger: 'generate' });
  };

  const current = parseIngredients(text);
  const pantryUnused = pantry.filter(p => !current.includes(p));

  return (
    <div className="phone-scroll fade-in" style={{ padding: '4px 22px 110px', height: '100%', overflow: 'auto' }}>
      {/* Top brand row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6, marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--accent)',
            display: 'grid', placeItems: 'center', color: '#fff',
            fontFamily: "'Instrument Serif', serif", fontSize: 19, fontStyle: 'italic',
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 1.5px 2px rgba(255,255,255,0.5)',
          }}>t</div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--muted)' }}>tava · tue evening</div>
        </div>
        <button onClick={() => goTo('settings')} className="tap" style={{
          width: 34, height: 34, borderRadius: '50%', background: 'var(--paper)',
          border: '1px solid var(--line)', display: 'grid', placeItems: 'center',
          fontFamily: "'Instrument Serif', serif", fontSize: 16, color: 'var(--ink)',
        }}>A</button>
      </div>

      {/* Hero */}
      <h1 style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 40, lineHeight: 1.0, letterSpacing: '-0.015em',
        margin: '8px 0 10px', color: 'var(--ink)', fontWeight: 400,
      }}>
        Let's figure out<br/>
        <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>dinner</span> together.
      </h1>
      <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: '0 0 22px', lineHeight: 1.45, maxWidth: 320 }}>
        Tell me what's in your kitchen and I'll suggest five things you could cook tonight.
      </p>

      {/* Input card */}
      <div style={{
        background: 'var(--paper)',
        border: `1px solid ${focused ? 'var(--ink)' : 'var(--line)'}`,
        borderRadius: 'var(--r-lg)',
        padding: '14px 14px 10px',
        transition: 'border-color 160ms ease, box-shadow 160ms ease',
        boxShadow: focused ? '0 0 0 4px oklch(0.22 0.012 60 / 0.06)' : '0 1px 2px rgba(30,20,10,0.04)',
        marginBottom: 16,
      }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); commit(); }}
          placeholder="Paneer, onion, tomato, spinach…"
          rows={3}
          style={{
            width: '100%', border: 'none', outline: 'none',
            resize: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: 16, color: 'var(--ink)',
            lineHeight: 1.5, padding: 0,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <IconBtn icon={<Icons.Cam size={18} />} label="Upload photo" size={32}
              onClick={() => dispatch({ type: 'toast', text: 'Photo recognition · coming soon' })} />
            <IconBtn icon={<Icons.Mic size={18} />} label="Voice input" size={32}
              onClick={() => dispatch({ type: 'toast', text: 'Voice input · coming soon' })} />
          </div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
            {current.length} {current.length === 1 ? 'item' : 'items'}
          </div>
        </div>
      </div>

      {/* Current ingredient chips */}
      {current.length > 0 && (
        <div className="fade-up" style={{ marginBottom: 18 }}>
          <SectionLabel>In your kitchen</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {current.map(item => (
              <button key={item} onClick={() => removeChip(item)} className="tap" style={{
                padding: '7px 8px 7px 12px', fontSize: 13.5, fontWeight: 500,
                borderRadius: 999, border: '1px solid var(--line)',
                background: 'oklch(0.94 0.02 60)', color: 'var(--ink)',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4, lineHeight: 1,
                textTransform: 'capitalize',
              }}>
                {item}
                <Icons.X size={13} sw={2}/>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick add */}
      <div style={{ marginBottom: 20 }}>
        <SectionLabel>Add quickly</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {SUGGESTED_CHIPS.filter(c => !current.includes(c.toLowerCase())).slice(0, 8).map(c => (
            <Chip key={c} size="sm" onClick={() => addChip(c)} icon={<Icons.Plus size={13} sw={2.2}/>}>
              {c}
            </Chip>
          ))}
        </div>
      </div>

      {/* Pantry memory */}
      {pantryUnused.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <SectionLabel>From your pantry</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {pantryUnused.slice(0, 8).map(c => (
              <Chip key={c} size="sm" onClick={() => addChip(c)}>
                <span style={{ textTransform: 'capitalize' }}>{c}</span>
              </Chip>
            ))}
          </div>
        </div>
      )}

      {/* Primary CTA */}
      <div style={{ marginTop: 24 }}>
        <PrimaryBtn full size="lg" disabled={current.length === 0}
          onClick={onSuggest}
          icon={<Icons.ArrowR size={18} sw={2}/>}>
          Suggest meals
        </PrimaryBtn>
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 10,
          fontFamily: "'Geist Mono', monospace", letterSpacing: '0.04em' }}>
          5 ideas · tuned to {current.length || '—'} ingredients
        </div>
      </div>
    </div>
  );
}

function parseIngredients(text) {
  return text.split(/[,\n]/).map(s => s.trim().toLowerCase()).filter(Boolean);
}
function toText(arr) { return arr.join(', '); }

// ════════════════════════════════════════════════════════════════════
// FILTERS  (slides up as a sheet)
// ════════════════════════════════════════════════════════════════════
function FiltersSheet({ filters, onChange, onClose, onApply }) {
  const [local, setLocal] = React.useState(filters);
  const toggle = (key, value) => {
    setLocal(prev => {
      if (key === 'cuisine') return { ...prev, cuisine: value };
      const cur = new Set(prev[key]);
      if (cur.has(value)) cur.delete(value); else cur.add(value);
      return { ...prev, [key]: [...cur] };
    });
  };

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 100 }}>
      <div onClick={onClose} className="fade-in" style={{
        position: 'absolute', inset: 0, background: 'rgba(20,15,10,0.35)',
      }} />
      <div className="sheet-up" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'var(--bg)', borderRadius: '24px 24px 0 0',
        padding: '14px 22px 32px',
        maxHeight: '85%', overflow: 'auto',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.12)',
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--line)',
          margin: '4px auto 18px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, margin: 0, fontWeight: 400 }}>
            Tune the search
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--muted)',
            fontSize: 14, cursor: 'pointer' }}>Cancel</button>
        </div>
        <p style={{ color: 'var(--ink-2)', fontSize: 14, margin: '0 0 22px' }}>
          Optional — leave blank and I'll guess.
        </p>

        <SectionLabel>Diet</SectionLabel>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 22 }}>
          {['Veg', 'Non-Veg', 'Egg', 'Vegan'].map(d => (
            <Chip key={d} selected={local.diet.includes(d)} onClick={() => toggle('diet', d)}>{d}</Chip>
          ))}
        </div>

        <SectionLabel>Goals</SectionLabel>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 22 }}>
          {[
            { label: 'High Protein', icon: <Icons.Flame size={14}/> },
            { label: 'Quick (<30 min)', icon: <Icons.Bolt size={14}/> },
            { label: 'Light', icon: <Icons.Leaf size={14}/> },
            { label: 'Comfort', icon: null },
          ].map(g => (
            <Chip key={g.label} icon={g.icon} selected={local.goals.includes(g.label)}
              onClick={() => toggle('goals', g.label)}>{g.label}</Chip>
          ))}
        </div>

        <SectionLabel>Cuisine</SectionLabel>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
          {['Any', 'North Indian', 'South Indian', 'Chinese', 'Italian', 'Mixed'].map(c => (
            <Chip key={c} selected={local.cuisine === c} onClick={() => toggle('cuisine', c)} tone="accent">{c}</Chip>
          ))}
        </div>

        <PrimaryBtn full size="lg" onClick={() => { onChange(local); onApply(); }}
          icon={<Icons.Check size={18} sw={2.2}/>}>Apply & regenerate</PrimaryBtn>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SUGGESTIONS
// ════════════════════════════════════════════════════════════════════
function SuggestionsScreen({ state, dispatch, goTo, openRecipe }) {
  const { ingredients, filters, meals, generating, feedback, saved } = state;
  const [showFilters, setShowFilters] = React.useState(false);

  React.useEffect(() => {
    if (state.pendingGenerate) {
      dispatch({ type: 'generate' });
    }
  }, [state.pendingGenerate]);

  const filterSummary = [
    ...filters.diet,
    ...filters.goals,
    filters.cuisine !== 'Any' ? filters.cuisine : null,
  ].filter(Boolean);

  return (
    <div className="phone-scroll" style={{ padding: '4px 22px 110px', height: '100%', overflow: 'auto' }}>
      {/* Top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6, marginBottom: 14 }}>
        <IconBtn icon={<Icons.ArrowL size={18} sw={2}/>} label="Back" onClick={() => goTo('home')} />
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--muted)' }}>five ideas</div>
        <IconBtn icon={<Icons.Refresh size={17} sw={1.8}/>} label="Regenerate"
          onClick={() => dispatch({ type: 'generate' })} />
      </div>

      {/* Header */}
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, lineHeight: 1.05,
        letterSpacing: '-0.015em', margin: '8px 0 6px', fontWeight: 400 }}>
        {generating ? <>Thinking of meals<span className="dots-anim">…</span></> : <>For your <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>kitchen</span></>}
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '0 0 16px' }}>
        {generating
          ? 'Reading your ingredients, balancing protein and time…'
          : `Based on ${ingredients.length} ingredient${ingredients.length === 1 ? '' : 's'} you have.`}
      </p>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20, overflowX: 'auto', paddingBottom: 2,
        scrollbarWidth: 'none' }}
      >
        <Chip size="sm" onClick={() => setShowFilters(true)}
          icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M6 12h12M10 18h4"/></svg>}>
          Filters {filterSummary.length > 0 && <span style={{ color: 'var(--accent)' }}>· {filterSummary.length}</span>}
        </Chip>
        {filterSummary.map(f => (
          <Chip key={f} size="sm" selected>{f}</Chip>
        ))}
      </div>

      {/* Meal cards */}
      {generating ? (
        <ThinkingStrip />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {meals.map((m, i) => (
            <div key={m.name} className="fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <MealCard meal={m}
                onOpen={() => openRecipe(m)}
                feedback={feedback[m.name]}
                saved={saved.find(s => s.name === m.name)}
                onSave={() => dispatch({ type: 'toggleSave', meal: m })}
                onFeedback={(v) => dispatch({ type: 'setFeedback', meal: m, value: v })}
              />
            </div>
          ))}
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center' }}>
            <GhostBtn onClick={() => dispatch({ type: 'generate' })} icon={<Icons.Refresh size={16}/>}>
              Regenerate suggestions
            </GhostBtn>
          </div>
        </div>
      )}

      {showFilters && (
        <FiltersSheet
          filters={filters}
          onClose={() => setShowFilters(false)}
          onChange={(f) => dispatch({ type: 'setFilters', filters: f })}
          onApply={() => { setShowFilters(false); dispatch({ type: 'generate' }); }}
        />
      )}

      <style>{`
        .dots-anim { display:inline-block; }
        .dots-anim::after {
          content:'…'; display:inline-block; width:0; overflow:hidden;
          animation: dots 1.4s steps(4, end) infinite; vertical-align: bottom;
        }
        @keyframes dots { to { width: 1em; } }
      `}</style>
    </div>
  );
}

const ThinkingStrip = () => (
  <div className="fade-in">
    <div style={{
      background: 'var(--paper)', border: '1px solid var(--line-2)', borderRadius: 'var(--r-lg)',
      padding: '20px 18px', marginBottom: 12,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)',
            animation: `pulse-dot 1.4s infinite ${i * 0.16}s ease-in-out`, display: 'inline-block',
          }} />
        ))}
      </div>
      <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>
        Cross-checking your pantry…
      </div>
    </div>
    {[0, 1, 2, 3, 4].map(i => (
      <div key={i} className="shimmer" style={{
        height: i === 0 ? 124 : 100, borderRadius: 'var(--r-lg)', marginBottom: 10,
        opacity: 1 - i * 0.15,
      }} />
    ))}
  </div>
);

// ─── Meal Card ──────────────────────────────────────────────────────
function MealCard({ meal, onOpen, feedback, saved, onSave, onFeedback }) {
  return (
    <Card padded={false}>
      <div style={{ padding: 14, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <MealArt meal={meal} size={72} radius={16} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6 }}>
            <h3 style={{
              fontFamily: "'Instrument Serif', serif", fontSize: 22, margin: 0,
              fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em',
            }}>{meal.name}</h3>
            <button onClick={onSave} className="tap" style={{
              background: 'none', border: 'none', cursor: 'pointer', color: saved ? 'var(--accent)' : 'var(--muted)',
              padding: 2, flexShrink: 0,
            }} aria-label="Save">
              {saved ? <Icons.HeartF size={20}/> : <Icons.Heart size={20}/>}
            </button>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12.5,
              color: 'var(--ink-2)', fontFamily: "'Geist Mono', monospace" }}>
              <Icons.Clock size={12} sw={1.8}/>{meal.cook}
            </span>
            <ProteinBadge level={meal.protein} />
            <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{meal.cuisine}</span>
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: '10px 0 0', lineHeight: 1.4 }}>
            {meal.reason}
          </p>
        </div>
      </div>

      {/* Missing strip */}
      {meal.missing && meal.missing.length > 0 && (
        <div style={{
          padding: '8px 14px', borderTop: '1px solid var(--line-2)',
          background: 'oklch(0.96 0.018 80)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 12, color: 'var(--ink-2)',
        }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", textTransform: 'uppercase',
            fontSize: 10, letterSpacing: '0.1em', color: 'var(--muted)' }}>You'll need</span>
          <span>{meal.missing.join(' · ')}</span>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', padding: '10px 8px 10px 14px', borderTop: '1px solid var(--line-2)',
        alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onOpen} className="tap" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--ink)', fontSize: 14, fontWeight: 500, padding: '6px 4px',
        }}>
          <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ink)',
            display: 'grid', placeItems: 'center', color: '#fff' }}>
            <Icons.Play size={11}/>
          </span>
          Open recipe
        </button>
        <div style={{ display: 'flex', gap: 2 }}>
          <button onClick={() => onFeedback(feedback === 'up' ? null : 'up')} className="tap" style={{
            width: 32, height: 32, borderRadius: '50%', background: 'none', border: 'none',
            display: 'grid', placeItems: 'center', cursor: 'pointer',
            color: feedback === 'up' ? 'var(--leaf)' : 'var(--muted)',
          }} aria-label="Like"><Icons.ThumbU size={16}/></button>
          <button onClick={() => onFeedback(feedback === 'down' ? null : 'down')} className="tap" style={{
            width: 32, height: 32, borderRadius: '50%', background: 'none', border: 'none',
            display: 'grid', placeItems: 'center', cursor: 'pointer',
            color: feedback === 'down' ? 'var(--accent)' : 'var(--muted)',
          }} aria-label="Dislike"><Icons.ThumbD size={16}/></button>
        </div>
      </div>
    </Card>
  );
}

const ProteinBadge = ({ level }) => {
  if (!level || level === 'Low') return null;
  const colors = {
    High: { bg: 'oklch(0.93 0.05 145)', fg: 'oklch(0.40 0.10 145)' },
    Med:  { bg: 'oklch(0.94 0.04 80)', fg: 'oklch(0.42 0.10 80)' },
  };
  const c = colors[level] || colors.Med;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 999,
      background: c.bg, color: c.fg,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.01em',
    }}>
      <Icons.Flame size={11} sw={2}/>
      {level === 'High' ? 'High protein' : 'Protein'}
    </span>
  );
};

// ════════════════════════════════════════════════════════════════════
// RECIPE MODAL (full-screen sheet)
// ════════════════════════════════════════════════════════════════════
function RecipeSheet({ meal, onClose, saved, onSave }) {
  if (!meal) return null;
  const [tab, setTab] = React.useState('ingredients');

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 200, background: 'var(--bg)' }}>
      <div className="phone-scroll" style={{ height: '100%', overflow: 'auto', paddingBottom: 60 }}>
        {/* Hero */}
        <div style={{
          position: 'relative', padding: '60px 22px 22px',
          background: `linear-gradient(180deg, oklch(${0.78 + (Math.abs(hashCode(meal.name)) % 8) / 100} 0.07 ${Math.abs(hashCode(meal.name)) % 360}) 0%, oklch(${0.92 + (Math.abs(hashCode(meal.name)) % 4) / 100} 0.03 ${Math.abs(hashCode(meal.name)) % 360}) 100%)`,
        }}>
          <div style={{ position: 'absolute', top: 56, left: 22, right: 22, display: 'flex',
            justifyContent: 'space-between', alignItems: 'center' }}>
            <IconBtn icon={<Icons.ArrowL size={18} sw={2}/>} label="Close" onClick={onClose} />
            <IconBtn icon={saved ? <Icons.HeartF size={17}/> : <Icons.Heart size={17}/>}
              label="Save" onClick={() => onSave(meal)} tone={saved ? 'solid' : 'default'} />
          </div>

          <div style={{ paddingTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
            <MealArt meal={meal} size={88} radius={20} />
            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, margin: '6px 0 4px',
                lineHeight: 1.0, letterSpacing: '-0.02em', fontWeight: 400, color: 'var(--ink)' }}>
                {meal.name}
              </h2>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6, color: 'var(--ink-2)' }}>
                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', fontSize: 13.5 }}>
                  <Icons.Clock size={13}/>{meal.cook}
                </span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor', opacity: 0.4 }}/>
                <span style={{ fontSize: 13.5 }}>{meal.cuisine}</span>
                {meal.protein === 'High' && <>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor', opacity: 0.4 }}/>
                  <span style={{ fontSize: 13.5 }}>High protein</span>
                </>}
              </div>
            </div>
          </div>
        </div>

        {/* YouTube preview */}
        <div style={{ padding: '18px 22px 6px' }}>
          <div className="tap" style={{
            position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
            background: '#1a1a1a', aspectRatio: '16/9', cursor: 'pointer',
            border: '1px solid var(--line)',
          }}>
            {/* Mock video frame */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, oklch(0.30 0.04 ${Math.abs(hashCode(meal.name)) % 360}) 0%, oklch(0.18 0.03 ${Math.abs(hashCode(meal.name)) % 360}) 100%)`,
              display: 'grid', placeItems: 'center',
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(220,40,40,0.95)', display: 'grid', placeItems: 'center',
                color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                <Icons.Play size={22}/>
              </div>
            </div>
            <div style={{
              position: 'absolute', left: 12, bottom: 10, right: 12, color: '#fff',
              fontSize: 13.5, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <Icons.Yt size={20}/>
              <span style={{ flex: 1 }}>{meal.yt || meal.name}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '14px 22px 0', display: 'flex', gap: 4, borderBottom: '1px solid var(--line)' }}>
          {[['ingredients', 'Ingredients'], ['steps', 'Steps'], ['why', 'Why this']].map(([id, l]) => (
            <button key={id} onClick={() => setTab(id)} className="tap" style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 4px', marginRight: 14,
              fontSize: 14, fontWeight: 500,
              color: tab === id ? 'var(--ink)' : 'var(--muted)',
              borderBottom: tab === id ? '2px solid var(--ink)' : '2px solid transparent',
            }}>{l}</button>
          ))}
        </div>

        <div style={{ padding: '18px 22px 28px' }}>
          {tab === 'ingredients' && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {meal.ingredients.map((ing, i) => {
                const isMissing = meal.missing && meal.missing.some(m => ing.toLowerCase().includes(m.toLowerCase()));
                return (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 0', borderBottom: '1px solid var(--line-2)',
                    fontSize: 14.5, color: 'var(--ink)',
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: 5,
                      border: '1.5px solid var(--line)',
                      display: 'grid', placeItems: 'center', flexShrink: 0,
                      background: 'var(--paper)',
                    }}/>
                    <span style={{ flex: 1 }}>{ing}</span>
                    {isMissing && <span style={{
                      fontSize: 10.5, padding: '2px 7px', borderRadius: 99,
                      background: 'oklch(0.94 0.04 40)', color: 'var(--accent-ink)',
                      fontFamily: "'Geist Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>missing</span>}
                  </li>
                );
              })}
            </ul>
          )}
          {tab === 'steps' && (
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', counterReset: 'step' }}>
              {meal.steps.map((s, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 14, padding: '14px 0',
                  borderBottom: '1px solid var(--line-2)',
                }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--ink)', color: '#fff', flexShrink: 0,
                    display: 'grid', placeItems: 'center',
                    fontFamily: "'Instrument Serif', serif", fontSize: 14,
                  }}>{i + 1}</span>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink)', paddingTop: 4 }}>{s}</p>
                </li>
              ))}
            </ol>
          )}
          {tab === 'why' && (
            <div>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.3, fontStyle: 'italic',
                color: 'var(--ink)', margin: '4px 0 16px' }}>
                "{meal.reason}"
              </p>
              <SectionLabel>You already have</SectionLabel>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
                {meal.matches.map(m => (
                  <Chip key={m} size="sm" selected>{m}</Chip>
                ))}
              </div>
              {meal.missing.length > 0 && <>
                <SectionLabel>You'll need to grab</SectionLabel>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {meal.missing.map(m => (
                    <Chip key={m} size="sm">{m}</Chip>
                  ))}
                </div>
              </>}
            </div>
          )}
        </div>

        {/* Alternate recipes */}
        <div style={{ padding: '6px 22px 60px' }}>
          <SectionLabel>Other ideas</SectionLabel>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
            {MEAL_LIBRARY.filter(m => m.name !== meal.name).slice(0, 5).map(m => (
              <div key={m.name} style={{
                flexShrink: 0, width: 120, padding: 10,
                border: '1px solid var(--line)', borderRadius: 'var(--r-md)',
                background: 'var(--paper)',
              }}>
                <MealArt meal={m} size={52} radius={10}/>
                <div style={{ fontSize: 12.5, fontWeight: 500, marginTop: 8, lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{m.cook}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SAVED
// ════════════════════════════════════════════════════════════════════
function SavedScreen({ state, dispatch, openRecipe }) {
  const { saved } = state;
  const [tab, setTab] = React.useState('all');
  const filters = {
    all: () => true,
    veg: (m) => m.diet === 'Veg',
    quick: (m) => m.tags.includes('Quick'),
    protein: (m) => m.protein === 'High',
  };
  const list = saved.filter(filters[tab]);
  return (
    <div className="phone-scroll fade-in" style={{ padding: '4px 22px 110px', height: '100%', overflow: 'auto' }}>
      <div style={{ paddingTop: 6, marginBottom: 14, fontFamily: "'Geist Mono', monospace", fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        your collection
      </div>
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, lineHeight: 1.0,
        letterSpacing: '-0.015em', margin: '0 0 6px', fontWeight: 400 }}>
        Saved <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>meals</span>
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '0 0 22px' }}>
        {saved.length} {saved.length === 1 ? 'recipe' : 'recipes'} you've kept.
      </p>

      <div style={{ display: 'flex', gap: 6, marginBottom: 18, overflowX: 'auto', scrollbarWidth: 'none' }}>
        {[['all', 'All'], ['veg', 'Veg'], ['quick', 'Quick'], ['protein', 'High protein']].map(([id, label]) => (
          <Chip key={id} size="sm" selected={tab === id} onClick={() => setTab(id)}>{label}</Chip>
        ))}
      </div>

      {list.length === 0 ? (
        <div style={{
          padding: '50px 20px', textAlign: 'center',
          border: '1px dashed var(--line)', borderRadius: 'var(--r-lg)',
          background: 'var(--paper)',
        }}>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, marginBottom: 8, color: 'var(--ink-2)' }}>
            Nothing here yet
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', margin: 0, lineHeight: 1.4 }}>
            Tap the heart on any meal to keep it for later.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {list.map(m => (
            <button key={m.name} onClick={() => openRecipe(m)} className="tap" style={{
              border: '1px solid var(--line-2)', borderRadius: 'var(--r-lg)',
              padding: 12, background: 'var(--paper)', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start',
              textAlign: 'left',
            }}>
              <MealArt meal={m} size={'100%'} radius={12}/>
              <div style={{ width: '100%' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 17.5, fontWeight: 400,
                  lineHeight: 1.1, marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)',
                  fontFamily: "'Geist Mono', monospace", letterSpacing: '0.02em' }}>
                  {m.cook} · {m.cuisine}
                </div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 }}>
                  <SmallTag>{m.diet}</SmallTag>
                  {m.protein === 'High' && <SmallTag tone="leaf">Protein</SmallTag>}
                  {m.tags.includes('Quick') && <SmallTag tone="accent">Quick</SmallTag>}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MealArtFlex(props) {
  // override for sized container (grid card)
  return <MealArt {...props} />;
}

const SmallTag = ({ children, tone = 'default' }) => {
  const tones = {
    default: { bg: 'oklch(0.95 0.01 60)', fg: 'var(--ink-2)' },
    leaf:    { bg: 'oklch(0.93 0.05 145)', fg: 'oklch(0.36 0.09 145)' },
    accent:  { bg: 'oklch(0.94 0.05 40)', fg: 'var(--accent-ink)' },
  };
  const t = tones[tone];
  return <span style={{
    fontSize: 10.5, padding: '2px 7px', borderRadius: 99,
    background: t.bg, color: t.fg, fontWeight: 600, letterSpacing: '0.01em',
  }}>{children}</span>;
};

// ════════════════════════════════════════════════════════════════════
// SETTINGS
// ════════════════════════════════════════════════════════════════════
function SettingsScreen({ state, dispatch }) {
  const s = state.prefs;
  const setPref = (k, v) => dispatch({ type: 'setPref', key: k, value: v });

  return (
    <div className="phone-scroll fade-in" style={{ padding: '4px 22px 110px', height: '100%', overflow: 'auto' }}>
      <div style={{ paddingTop: 6, marginBottom: 14, fontFamily: "'Geist Mono', monospace", fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        preferences
      </div>
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, lineHeight: 1.0,
        letterSpacing: '-0.015em', margin: '0 0 6px', fontWeight: 400 }}>
        Your <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>kitchen</span>
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '0 0 22px' }}>
        We use this to tune suggestions.
      </p>

      <SettingsGroup label="Dietary default">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 0 4px' }}>
          {['Veg', 'Non-Veg', 'Egg', 'Vegan'].map(d => (
            <Chip key={d} size="sm" selected={s.diet === d} onClick={() => setPref('diet', d)}>{d}</Chip>
          ))}
        </div>
      </SettingsGroup>

      <SettingsGroup label="Favorite cuisine">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 0 4px' }}>
          {['North Indian', 'South Indian', 'Chinese', 'Italian', 'Mixed'].map(c => (
            <Chip key={c} size="sm" selected={s.cuisine === c} onClick={() => setPref('cuisine', c)}>{c}</Chip>
          ))}
        </div>
      </SettingsGroup>

      <SettingsGroup label="Household size">
        <div style={{ display: 'flex', gap: 6, padding: '8px 0 4px' }}>
          {[1, 2, 3, 4, '5+'].map(n => (
            <Chip key={n} size="sm" selected={s.household === n} onClick={() => setPref('household', n)}>{n}</Chip>
          ))}
        </div>
      </SettingsGroup>

      <SettingsGroup label="Smart behavior">
        <SettingRow
          title="Pantry memory"
          desc="Remember ingredients across sessions"
          value={s.pantryMemory}
          onChange={(v) => setPref('pantryMemory', v)}
        />
        <SettingRow
          title="Avoid repeats"
          desc="Don't suggest meals from the last 3 days"
          value={s.avoidRepeats}
          onChange={(v) => setPref('avoidRepeats', v)}
        />
        <SettingRow
          title="Quick by default"
          desc="Prefer meals under 30 minutes"
          value={s.quickDefault}
          onChange={(v) => setPref('quickDefault', v)}
          last
        />
      </SettingsGroup>

      <SettingsGroup label="Pantry">
        <div style={{ padding: '12px 14px 8px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {state.pantry.length === 0 ? (
            <span style={{ color: 'var(--muted)', fontSize: 13 }}>Your pantry is empty.</span>
          ) : state.pantry.map(p => (
            <button key={p} onClick={() => dispatch({ type: 'removePantry', item: p })} className="tap" style={{
              padding: '5px 7px 5px 11px', fontSize: 13, fontWeight: 500,
              borderRadius: 999, border: '1px solid var(--line)',
              background: 'oklch(0.96 0.012 70)', color: 'var(--ink)',
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4, lineHeight: 1,
              textTransform: 'capitalize',
            }}>
              {p}<Icons.X size={12} sw={2}/>
            </button>
          ))}
        </div>
      </SettingsGroup>

      <p style={{ fontSize: 11.5, color: 'var(--muted)', textAlign: 'center', marginTop: 28,
        fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        tava · v0.1 · made warm
      </p>
    </div>
  );
}

const SettingsGroup = ({ label, children }) => (
  <div style={{ marginBottom: 20 }}>
    <SectionLabel>{label}</SectionLabel>
    <div style={{
      background: 'var(--paper)', border: '1px solid var(--line-2)',
      borderRadius: 'var(--r-lg)', overflow: 'hidden',
    }}>{children}</div>
  </div>
);

const SettingRow = ({ title, desc, value, onChange, last }) => (
  <div style={{
    padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14,
    borderBottom: last ? 'none' : '1px solid var(--line-2)',
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)' }}>{title}</div>
      {desc && <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>{desc}</div>}
    </div>
    <Toggle value={value} onChange={onChange} />
  </div>
);

const Toggle = ({ value, onChange }) => (
  <button onClick={() => onChange(!value)} className="tap" style={{
    width: 42, height: 25, borderRadius: 99,
    border: 'none', cursor: 'pointer', padding: 2,
    background: value ? 'var(--accent)' : 'oklch(0.85 0.01 70)',
    transition: 'background 200ms ease',
    display: 'flex', alignItems: 'center',
  }}>
    <span style={{
      width: 21, height: 21, borderRadius: '50%', background: '#fff',
      transition: 'transform 200ms cubic-bezier(.2,.8,.2,1)',
      transform: value ? 'translateX(17px)' : 'translateX(0)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    }}/>
  </button>
);

// ─── Toast ──────────────────────────────────────────────────────────
function Toast({ text }) {
  return (
    <div className="fade-up" style={{
      position: 'absolute', left: '50%', bottom: 96, transform: 'translateX(-50%)',
      background: 'var(--ink)', color: '#fff', padding: '10px 16px',
      borderRadius: 99, fontSize: 13, fontWeight: 500, zIndex: 80,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)', whiteSpace: 'nowrap',
    }}>{text}</div>
  );
}

Object.assign(window, {
  HomeScreen, SuggestionsScreen, SavedScreen, SettingsScreen,
  RecipeSheet, FiltersSheet, Toast,
  MEAL_LIBRARY, SAMPLE_SAVED, parseIngredients, toText,
});
