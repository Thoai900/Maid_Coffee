/* ════════════════════════════════════════════════════════════
   APP — Sweet Maid Café
   ════════════════════════════════════════════════════════════ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "soft",
  "decoDensity": 1
}/*EDITMODE-END*/;

const VIBE_OPTIONS = [
  { v: "soft",        l: "Soft & Dreamy" },
  { v: "refined",     l: "Refined" },
  { v: "maximalist",  l: "Maximalist" },
  { v: "moody",       l: "Moody" },
];

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { FloatingDeco, Nav, Hero, About, Menu, Gallery, Experience, Staff, Testimonials, Events, Booking, Footer } = window;

  // Apply vibe to <html> data attribute
  React.useEffect(() => {
    const vibe = t.vibe === "soft" ? "" : t.vibe;
    if (vibe) document.documentElement.setAttribute("data-vibe", vibe);
    else document.documentElement.removeAttribute("data-vibe");
  }, [t.vibe]);

  return (
    <>
      <FloatingDeco density={t.decoDensity}/>
      <Nav/>
      <Hero/>
      <About/>
      <Menu/>
      <Gallery/>
      <Experience/>
      <Staff/>
      <Testimonials/>
      <Events/>
      <Booking/>
      <Footer/>

      <TweaksPanel>
        <TweakSection label="Vibe preset"/>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginBottom:8}}>
          {VIBE_OPTIONS.map(o => (
            <button key={o.v} onClick={() => setTweak("vibe", o.v)}
              style={{
                padding:"10px 8px",
                borderRadius:8,
                border: t.vibe === o.v ? "1.5px solid #f25892" : "1px solid rgba(0,0,0,.1)",
                background: t.vibe === o.v ? "rgba(242,88,146,.1)" : "white",
                color: t.vibe === o.v ? "#f25892" : "#444",
                fontWeight: t.vibe === o.v ? 600 : 500,
                fontSize: 11.5, cursor:"pointer",
                fontFamily:"inherit",
                transition:"all .2s",
              }}>
              {o.l}
            </button>
          ))}
        </div>
        <TweakSection label="Decorations"/>
        <TweakSlider label="Floating density" value={t.decoDensity} min={0} max={1} step={1}
          onChange={v => setTweak("decoDensity", v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
