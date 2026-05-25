/* Tava — root app, state, routing, Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "terracotta",
  "rounded": "soft",
  "density": "cozy",
  "suggestionLayout": "list"
}/*EDITMODE-END*/;

// Palette options
const PALETTES = {
  terracotta: {
    accent: 'oklch(0.60 0.135 42)',
    accentInk: 'oklch(0.36 0.10 40)',
    bg: 'oklch(0.972 0.012 76)',
    bg2: 'oklch(0.955 0.014 74)',
  },
  olive: {
    accent: 'oklch(0.56 0.10 130)',
    accentInk: 'oklch(0.34 0.08 130)',
    bg: 'oklch(0.97 0.014 100)',
    bg2: 'oklch(0.95 0.016 100)',
  },
  ink: {
    accent: 'oklch(0.38 0.04 60)',
    accentInk: 'oklch(0.24 0.02 60)',
    bg: 'oklch(0.975 0.005 80)',
    bg2: 'oklch(0.96 0.006 80)',
  },
  saffron: {
    accent: 'oklch(0.68 0.15 70)',
    accentInk: 'oklch(0.42 0.12 65)',
    bg: 'oklch(0.975 0.014 82)',
    bg2: 'oklch(0.96 0.016 82)',
  },
};

const ROUNDED = {
  sharp: { sm: 4, md: 6, lg: 10, xl: 14 },
  soft:  { sm: 10, md: 14, lg: 22, xl: 28 },
  pillow:{ sm: 14, md: 20, lg: 32, xl: 40 },
};

// Initial state
const initialState = {
  screen: 'home',
  ingredients: ['paneer', 'onion', 'tomato'],
  pantry: ['rice', 'atta', 'ginger', 'garlic', 'turmeric', 'cumin'],
  filters: { diet: [], goals: [], cuisine: 'Any' },
  meals: [],
  generating: false,
  feedback: {},
  saved: SAMPLE_SAVED.map(m => ({ ...m })),
  prefs: {
    diet: 'Veg', cuisine: 'North Indian', household: 2,
    pantryMemory: true, avoidRepeats: true, quickDefault: false,
  },
  pendingGenerate: false,
  toast: null,
  openMeal: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'goto':
      return { ...state, screen: action.screen, pendingGenerate: action.trigger === 'generate' };
    case 'setIngredients':
      return { ...state, ingredients: action.items };
    case 'addToPantry': {
      const existing = new Set(state.pantry);
      action.items.forEach(i => existing.add(i));
      return { ...state, pantry: [...existing] };
    }
    case 'removePantry':
      return { ...state, pantry: state.pantry.filter(p => p !== action.item) };
    case 'setFilters':
      return { ...state, filters: action.filters };
    case 'startGenerate':
      return { ...state, generating: true, pendingGenerate: false };
    case 'doneGenerate':
      return { ...state, generating: false, meals: action.meals };
    case 'toggleSave': {
      const exists = state.saved.find(s => s.name === action.meal.name);
      const saved = exists
        ? state.saved.filter(s => s.name !== action.meal.name)
        : [action.meal, ...state.saved];
      return { ...state, saved, toast: exists ? 'Removed from saved' : 'Saved to your collection' };
    }
    case 'setFeedback':
      return { ...state, feedback: { ...state.feedback, [action.meal.name]: action.value } };
    case 'setPref':
      return { ...state, prefs: { ...state.prefs, [action.key]: action.value } };
    case 'openMeal':
      return { ...state, openMeal: action.meal };
    case 'closeMeal':
      return { ...state, openMeal: null };
    case 'toast':
      return { ...state, toast: action.text };
    case 'clearToast':
      return { ...state, toast: null };
    case 'generate':
      return { ...state, generating: true, pendingGenerate: false };
    default:
      return state;
  }
}

// Pick meals based on ingredients/filters — deterministic fake AI
function pickMeals(state) {
  const items = state.ingredients.map(s => s.toLowerCase());
  let pool = MEAL_LIBRARY.slice();
  const { diet, goals, cuisine } = state.filters;
  if (diet.length) pool = pool.filter(m => diet.includes(m.diet));
  if (cuisine && cuisine !== 'Any') pool = pool.filter(m => m.cuisine === cuisine);
  if (goals.includes('High Protein')) pool = pool.filter(m => m.protein === 'High');
  if (goals.includes('Quick (<30 min)')) pool = pool.filter(m => m.tags.includes('Quick'));
  // score by ingredient matches
  pool = pool.map(m => {
    const matchCount = m.matches.filter(mm => items.some(it => it.includes(mm) || mm.includes(it))).length;
    return { ...m, _score: matchCount + Math.random() * 0.4 };
  }).sort((a, b) => b._score - a._score);

  // top 5 (pad with library if not enough)
  let result = pool.slice(0, 5);
  if (result.length < 5) {
    const fill = MEAL_LIBRARY.filter(m => !result.find(r => r.name === m.name)).slice(0, 5 - result.length);
    result = [...result, ...fill];
  }
  return result;
}

// ════════════════════════════════════════════════════════════════════
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette + radii to CSS vars
  React.useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.terracotta;
    const r = ROUNDED[t.rounded] || ROUNDED.soft;
    const root = document.documentElement;
    root.style.setProperty('--accent', p.accent);
    root.style.setProperty('--accent-ink', p.accentInk);
    root.style.setProperty('--bg', p.bg);
    root.style.setProperty('--bg-2', p.bg2);
    root.style.setProperty('--r-sm', r.sm + 'px');
    root.style.setProperty('--r-md', r.md + 'px');
    root.style.setProperty('--r-lg', r.lg + 'px');
    root.style.setProperty('--r-xl', r.xl + 'px');
  }, [t.palette, t.rounded]);

  // Fake AI generation
  React.useEffect(() => {
    if (state.generating) {
      const timer = setTimeout(() => {
        dispatch({ type: 'doneGenerate', meals: pickMeals(state) });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.generating]);

  // Generate first time we hit Suggestions with empty list
  React.useEffect(() => {
    if (state.screen === 'suggestions' && state.meals.length === 0 && !state.generating) {
      dispatch({ type: 'generate' });
    }
  }, [state.screen]);

  // Auto-clear toasts
  React.useEffect(() => {
    if (state.toast) {
      const t = setTimeout(() => dispatch({ type: 'clearToast' }), 1800);
      return () => clearTimeout(t);
    }
  }, [state.toast]);

  const goTo = (screen, opts = {}) => dispatch({ type: 'goto', screen, ...opts });
  const openRecipe = (meal) => dispatch({ type: 'openMeal', meal });

  const screenProps = { state, dispatch, goTo, openRecipe };

  return (
    <div className="stage" data-screen-label={`tava-${state.screen}`}>
      <div className="stage-inner">
        <div className="brand-row">
          <span><i>tava</i></span>
          <span className="dot"/>
          <span className="sub">meal recommender · prototype</span>
        </div>

        <IOSDevice width={402} height={874}>
          <div data-screen-label={state.screen} style={{
            position: 'relative', height: '100%', background: 'var(--bg)',
            paddingTop: 56,
          }}>
            <div style={{ height: '100%' }}>
              {state.screen === 'home' && <HomeScreen {...screenProps} />}
              {state.screen === 'suggestions' && <SuggestionsScreen {...screenProps} />}
              {state.screen === 'saved' && <SavedScreen {...screenProps} />}
              {state.screen === 'settings' && <SettingsScreen {...screenProps} />}
            </div>

            <BottomNav active={state.screen} onChange={(id) => {
              const route = id === 'home' ? 'home'
                : id === 'suggestions' ? 'suggestions'
                : id === 'saved' ? 'saved'
                : 'settings';
              goTo(route);
            }} />

            {state.openMeal && (
              <RecipeSheet
                meal={state.openMeal}
                onClose={() => dispatch({ type: 'closeMeal' })}
                saved={!!state.saved.find(s => s.name === state.openMeal.name)}
                onSave={(m) => dispatch({ type: 'toggleSave', meal: m })}
              />
            )}

            {state.toast && <Toast text={state.toast} />}
          </div>
        </IOSDevice>

        <div style={{ color: 'oklch(0.55 0.02 80)', fontFamily: "'Geist Mono', monospace",
          fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          mobile · 402 × 874 · iphone frame
        </div>
      </div>

      {/* Tweaks */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio
            label="Tone"
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'terracotta', label: 'Terracotta' },
              { value: 'olive', label: 'Olive' },
              { value: 'saffron', label: 'Saffron' },
              { value: 'ink', label: 'Ink' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Roundedness">
          <TweakRadio
            label="Corners"
            value={t.rounded}
            onChange={(v) => setTweak('rounded', v)}
            options={[
              { value: 'sharp', label: 'Sharp' },
              { value: 'soft', label: 'Soft' },
              { value: 'pillow', label: 'Pillow' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Jump to screen">
          <TweakButton label="Home (Kitchen)" onClick={() => goTo('home')} />
          <TweakButton label="Suggestions" onClick={() => goTo('suggestions')} secondary />
          <TweakButton label="Saved meals" onClick={() => goTo('saved')} secondary />
          <TweakButton label="Settings" onClick={() => goTo('settings')} secondary />
        </TweakSection>

        <TweakSection label="Try a state">
          <TweakButton label="Replay AI thinking" onClick={() => dispatch({ type: 'generate' })} secondary />
          <TweakButton label="Open recipe modal" onClick={() => openRecipe(MEAL_LIBRARY[0])} secondary />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
