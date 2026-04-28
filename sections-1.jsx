/* ════════════════════════════════════════════════════════════
   SECTIONS PART 1: Decorations, Nav, Hero, About, Menu
   ════════════════════════════════════════════════════════════ */

const { useState, useEffect, useRef, useMemo } = React;

/* ───────── Decorative SVG glyphs ───────── */
function Heart({ size = 24, fill = "currentColor", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 21s-7-4.5-9.5-9C.8 8.7 2.6 5 6 5c2 0 3.3 1.1 4 2.3C10.7 6.1 12 5 14 5c3.4 0 5.2 3.7 3.5 7-2.5 4.5-9.5 9-9.5 9z" fill={fill} />
    </svg>
  );
}

function Star({ size = 24, fill = "currentColor", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 2l2.4 6.8L22 10l-5.6 4.4L18 22l-6-4-6 4 1.6-7.6L2 10l7.6-1.2z" fill={fill} />
    </svg>
  );
}

function Sparkle({ size = 24, fill = "currentColor", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 2L13.5 10.5 22 12 13.5 13.5 12 22 10.5 13.5 2 12 10.5 10.5z" fill={fill} />
    </svg>
  );
}

function Flower({ size = 24, fill = "currentColor", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <g fill={fill}>
        <ellipse cx="12" cy="6" rx="3" ry="4.5" />
        <ellipse cx="12" cy="18" rx="3" ry="4.5" />
        <ellipse cx="6" cy="12" rx="4.5" ry="3" />
        <ellipse cx="18" cy="12" rx="4.5" ry="3" />
        <circle cx="12" cy="12" r="2.4" fill="#fff5d6" />
      </g>
    </svg>
  );
}

function Bow({ size = 28, fill = "currentColor", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 24" style={style}>
      <path d="M16 12 L4 4 Q2 4 2 12 Q2 20 4 20 L16 12 L28 4 Q30 4 30 12 Q30 20 28 20 L16 12 Z" fill={fill} />
      <rect x="13" y="8" width="6" height="8" rx="2" fill={fill} opacity="0.85" />
    </svg>
  );
}

/* ───────── Floating decorations layer ───────── */
function FloatingDeco({ density = 1 }) {
  // Pre-defined positions so it doesn't shift on re-render
  const items = useMemo(() => [
    { Comp: Heart,    top:"8%",  left:"4%",  size:28, color:"var(--pink-300)", delay:0,   r:-12, cls:"float" },
    { Comp: Sparkle,  top:"14%", left:"92%", size:20, color:"var(--lav-300)",  delay:1,   r:0,   cls:"twinkle" },
    { Comp: Flower,   top:"24%", left:"88%", size:36, color:"var(--pink-200)", delay:.5,  r:18,  cls:"float-slow" },
    { Comp: Heart,    top:"38%", left:"3%",  size:18, color:"var(--pink-200)", delay:1.5, r:8,   cls:"float-fast" },
    { Comp: Star,     top:"45%", left:"95%", size:22, color:"var(--gold)",     delay:2,   r:-8,  cls:"twinkle" },
    { Comp: Sparkle,  top:"58%", left:"6%",  size:16, color:"var(--lav-300)",  delay:.8,  r:0,   cls:"twinkle" },
    { Comp: Flower,   top:"66%", left:"90%", size:30, color:"var(--lav-200)",  delay:1.2, r:-20, cls:"float" },
    { Comp: Heart,    top:"75%", left:"2%",  size:24, color:"var(--pink-300)", delay:.3,  r:14,  cls:"float-slow" },
    { Comp: Sparkle,  top:"82%", left:"94%", size:24, color:"var(--pink-300)", delay:1.8, r:0,   cls:"twinkle" },
    { Comp: Bow,      top:"90%", left:"8%",  size:32, color:"var(--pink-200)", delay:.6,  r:-6,  cls:"float" },
  ], []);

  if (density === 0) return null;

  return (
    <div aria-hidden="true" style={{position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden"}}>
      {items.map((it, i) => (
        <div key={i} className={`deco ${it.cls}`} style={{
          top: it.top, left: it.left,
          animationDelay: `${it.delay}s`,
          "--r": `${it.r}deg`,
          color: it.color,
        }}>
          <it.Comp size={it.size} fill={it.color} style={{transform:`rotate(${it.r}deg)`}} />
        </div>
      ))}
    </div>
  );
}

/* ───────── Nav ───────── */
function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#hero" className="logo">
          <span className="logo-mark">
            <Heart size={20} fill="white" />
          </span>
          <span>Sweet Maid<span style={{color:"var(--pink-500)"}}> Café</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">Về chúng tôi</a>
          <a href="#menu">Thực đơn</a>
          <a href="#experience">Trải nghiệm</a>
          <a href="#staff">Đội ngũ</a>
          <a href="#events">Sự kiện</a>
          <a href="#booking" className="btn btn-primary" style={{padding:"10px 20px", fontSize:14}}>
            Đặt bàn ngay <Heart size={14} fill="white" />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="hero" style={{paddingTop:60, paddingBottom:80, overflow:"hidden"}}>
      <div className="wrap" style={{position:"relative", zIndex:2}}>
        <div style={{display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:60, alignItems:"center"}}
             className="hero-grid">
          <div>
            <div className="eyebrow" style={{marginBottom:20}}>
              <span>Sài Gòn · Quận 1 · Từ 2021</span>
            </div>
            <h1 style={{marginBottom:24}}>
              Chào mừng <br />
              <span className="script" style={{fontSize:"1.15em", display:"inline-block", marginTop:8, transform:"rotate(-3deg)"}}>quý khách trở về</span>{" "}
              <span style={{whiteSpace:"nowrap"}}>nhà ✿</span>
            </h1>
            <p style={{fontSize:19, maxWidth:520, marginBottom:36, lineHeight:1.6}}>
              Tiệm cà phê dễ thương đầu tiên tại Sài Gòn — nơi các nàng hầu xinh xắn
              phục vụ bằng cả trái tim, mỗi tách trà đều có một câu chuyện cổ tích.
            </p>
            <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
              <a href="#booking" className="btn btn-primary">
                Đặt bàn của bạn <Sparkle size={16} fill="white" />
              </a>
              <a href="#menu" className="btn btn-ghost">Xem thực đơn</a>
            </div>
            <div style={{display:"flex", gap:32, marginTop:48, flexWrap:"wrap"}}>
              <Stat number="2.4K+" label="Khách yêu thương" />
              <Stat number="48" label="Món ngon dễ thương" />
              <Stat number="4.9★" label="Đánh giá Google" />
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>

      <style>{`
        .hero-grid{ grid-template-columns: 1.1fr .9fr; }
        @media (max-width: 880px){
          .hero-grid{ grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function Stat({ number, label }){
  return (
    <div>
      <div style={{fontFamily:"var(--font-display)", fontSize:30, fontWeight:600, color:"var(--ink)", lineHeight:1}}>
        {number}
      </div>
      <div style={{fontSize:13, color:"var(--ink-mute)", marginTop:6, fontWeight:500}}>{label}</div>
    </div>
  );
}

function HeroVisual(){
  return (
    <div style={{position:"relative", aspectRatio:"4/5", maxWidth:480, marginLeft:"auto"}}>
      {/* Big circular frame */}
      <div style={{
        position:"absolute", inset:"6% 6% 10% 6%",
        borderRadius:"48% 52% 50% 50% / 50% 48% 52% 50%",
        background: "linear-gradient(135deg, var(--pink-200), var(--lav-200))",
        boxShadow: "var(--shadow-lg)",
        overflow:"hidden",
      }}>
        <div className="ph" style={{
          width:"100%", height:"100%", borderRadius:0, border:"none",
          background: "linear-gradient(135deg, var(--pink-100), var(--lav-100), var(--cream))",
        }}>
          <div style={{
            position:"absolute", inset:0,
            display:"grid", placeItems:"center",
          }}>
            {/* Stylized "maid" silhouette */}
            <svg viewBox="0 0 200 240" style={{width:"70%", height:"auto"}}>
              <defs>
                <linearGradient id="dress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="var(--pink-400)" />
                  <stop offset="1" stopColor="var(--pink-500)" />
                </linearGradient>
              </defs>
              {/* hair back */}
              <ellipse cx="100" cy="78" rx="46" ry="50" fill="#5a3a48" opacity=".9"/>
              {/* face */}
              <ellipse cx="100" cy="80" rx="32" ry="38" fill="#fde6d8"/>
              {/* hair bangs */}
              <path d="M68 60 Q100 30 132 60 Q120 75 100 70 Q80 75 68 60 Z" fill="#5a3a48"/>
              {/* twin ribbons */}
              <ellipse cx="62" cy="60" rx="10" ry="6" fill="var(--pink-300)"/>
              <ellipse cx="138" cy="60" rx="10" ry="6" fill="var(--pink-300)"/>
              {/* eyes */}
              <circle cx="88" cy="84" r="3.5" fill="#3a2030"/>
              <circle cx="112" cy="84" r="3.5" fill="#3a2030"/>
              <circle cx="89" cy="83" r="1" fill="white"/>
              <circle cx="113" cy="83" r="1" fill="white"/>
              {/* blush */}
              <ellipse cx="80" cy="94" rx="5" ry="3" fill="var(--pink-300)" opacity=".7"/>
              <ellipse cx="120" cy="94" rx="5" ry="3" fill="var(--pink-300)" opacity=".7"/>
              {/* smile */}
              <path d="M93 100 Q100 105 107 100" stroke="#3a2030" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* neck */}
              <rect x="92" y="115" width="16" height="14" fill="#fde6d8"/>
              {/* collar */}
              <path d="M70 130 L100 145 L130 130 L130 138 L100 152 L70 138 Z" fill="white"/>
              {/* dress */}
              <path d="M70 138 Q100 155 130 138 L150 230 L50 230 Z" fill="url(#dress)"/>
              {/* apron */}
              <path d="M82 150 L118 150 L128 230 L72 230 Z" fill="white" opacity=".95"/>
              {/* apron bow at waist */}
              <path d="M82 175 L70 168 L70 184 Z M118 175 L130 168 L130 184 Z" fill="var(--pink-300)"/>
              <rect x="80" y="172" width="40" height="8" fill="var(--pink-300)" rx="2"/>
              {/* heart on apron */}
              <path d="M100 200 c-6 -8 -16 -2 -16 6 c0 8 16 16 16 16 s16 -8 16 -16 c0 -8 -10 -14 -16 -6z" fill="var(--pink-400)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating accent cards */}
      <div className="card float" style={{
        position:"absolute", top:"4%", left:"-4%",
        padding:"14px 18px", borderRadius:"var(--radius-md)",
        display:"flex", gap:10, alignItems:"center",
        background:"white", "--r":"-6deg",
      }}>
        <div style={{width:36, height:36, borderRadius:"50%", background:"var(--pink-100)", display:"grid", placeItems:"center"}}>
          <Heart size={18} fill="var(--pink-500)"/>
        </div>
        <div>
          <div style={{fontSize:11, color:"var(--ink-mute)", fontFamily:"var(--font-mono)", letterSpacing:".1em"}}>HÔM NAY</div>
          <div style={{fontSize:14, fontWeight:600, color:"var(--ink)"}}>Mở cửa · 11—22h</div>
        </div>
      </div>

      <div className="card float-slow" style={{
        position:"absolute", bottom:"6%", right:"-6%",
        padding:"14px 18px", borderRadius:"var(--radius-md)",
        background:"white", "--r":"4deg",
      }}>
        <div style={{display:"flex", gap:6, alignItems:"center", marginBottom:4}}>
          {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="var(--gold)"/>)}
        </div>
        <div style={{fontSize:13, fontWeight:600, color:"var(--ink)"}}>4.9 / 1,284 đánh giá</div>
      </div>

      <div className="card twinkle" style={{
        position:"absolute", top:"38%", right:"-8%",
        padding:"10px", borderRadius:"50%",
        background:"linear-gradient(135deg, var(--lav-200), var(--lav-300))",
        width:64, height:64, display:"grid", placeItems:"center",
      }}>
        <Sparkle size={28} fill="white"/>
      </div>
    </div>
  );
}

/* ───────── About ───────── */
function About(){
  return (
    <section id="about">
      <div className="wrap">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center"}} className="about-grid">
          <div style={{position:"relative"}}>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
              <div className="ph" style={{aspectRatio:"3/4", marginTop:30}}>
                <div className="ph-label">CAFÉ / FRONT</div>
              </div>
              <div style={{display:"grid", gap:16}}>
                <div className="ph" style={{aspectRatio:"4/3"}}>
                  <div className="ph-label">MAID / SMILE</div>
                </div>
                <div className="ph" style={{aspectRatio:"1/1"}}>
                  <div className="ph-label">TEA / POURING</div>
                </div>
              </div>
            </div>
            <div style={{
              position:"absolute", bottom:-20, left:-20,
              padding:"20px 24px", borderRadius:"var(--radius-md)",
              background:"var(--paper)", boxShadow:"var(--shadow-md)",
              border:"1px solid var(--line)",
              display:"flex", gap:14, alignItems:"center",
            }}>
              <Bow size={36} fill="var(--pink-400)"/>
              <div>
                <div style={{fontSize:11, color:"var(--ink-mute)", fontFamily:"var(--font-mono)", letterSpacing:".12em"}}>EST.</div>
                <div style={{fontSize:24, fontWeight:600, fontFamily:"var(--font-display)"}}>2021</div>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{marginBottom:16}}>Về Sweet Maid Café</div>
            <h2 style={{marginBottom:24}}>
              Một <span className="script" style={{fontSize:"1.1em"}}>tiệm cà phê</span> không giống nơi nào khác
            </h2>
            <p style={{fontSize:17, marginBottom:20}}>
              Sweet Maid Café được sinh ra từ tình yêu dành cho văn hóa Akihabara và những giấc mơ
              ngọt ngào của tuổi thơ. Chúng tôi không chỉ phục vụ đồ uống và món ăn —
              chúng tôi tạo ra những kỷ niệm đẹp.
            </p>
            <p style={{fontSize:17, marginBottom:36}}>
              Mỗi nàng hầu của chúng tôi đều được đào tạo bài bản về nghệ thuật phục vụ
              kiểu Nhật, từ cách cúi chào, pha trà đến vẽ latte art — tất cả với một
              nụ cười từ trái tim.
            </p>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:20}}>
              <Feature icon={<Heart size={22} fill="var(--pink-500)"/>} title="Đậm chất Nhật" desc="Văn hóa maid café Akihabara nguyên bản" />
              <Feature icon={<Sparkle size={22} fill="var(--lav-500)"/>} title="Phép thuật" desc={"Mỗi món đều được \"phù phép\" trước khi dùng"} />
              <Feature icon={<Flower size={22} fill="var(--pink-400)"/>} title="Không gian xinh" desc="3 tầng với 8 chủ đề trang trí khác nhau" />
              <Feature icon={<Star size={22} fill="var(--gold)"/>} title="Hơn cả ẩm thực" desc="Trò chơi, ảnh polaroid, ca hát cùng các nàng" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid{ }
        @media (max-width: 880px){
          .about-grid{ grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}

function Feature({ icon, title, desc }){
  return (
    <div style={{display:"flex", gap:14, alignItems:"flex-start"}}>
      <div style={{
        width:44, height:44, borderRadius:14,
        background:"var(--pink-50)", display:"grid", placeItems:"center", flexShrink:0,
        border:"1px solid var(--pink-100)",
      }}>{icon}</div>
      <div>
        <div style={{fontWeight:600, color:"var(--ink)", marginBottom:4, fontSize:15}}>{title}</div>
        <div style={{fontSize:13, color:"var(--ink-soft)", lineHeight:1.5}}>{desc}</div>
      </div>
    </div>
  );
}

/* ───────── Menu with category filter ───────── */
function Menu(){
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const data = window.SMC_DATA;

  const items = useMemo(() => {
    return data.menu.filter(m => {
      const matchCat = active === "all" || m.cat === active;
      const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [active, search]);

  return (
    <section id="menu" style={{background:"linear-gradient(180deg, transparent, var(--bg-2) 30%, var(--bg-2) 70%, transparent)"}}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Thực đơn dễ thương</div>
          <h2>
            Mỗi món là một <span className="script" style={{fontSize:"1.05em"}}>câu chuyện</span> ✿
          </h2>
          <p style={{fontSize:17, maxWidth:560}}>
            Từ pancake mây bồng bềnh đến omurice vẽ nụ cười —
            tất cả được chuẩn bị thủ công bởi đội ngũ đầu bếp tận tâm.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{
          display:"flex", flexWrap:"wrap", gap:10,
          justifyContent:"center", marginBottom: 24,
        }}>
          {data.menuCategories.map(cat => (
            <button key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding:"10px 18px",
                borderRadius:999,
                border:`1.5px solid ${active === cat.id ? "transparent" : "var(--line)"}`,
                background: active === cat.id ? "linear-gradient(135deg, var(--pink-400), var(--pink-500))" : "var(--paper)",
                color: active === cat.id ? "white" : "var(--ink-soft)",
                fontFamily:"var(--font-display)", fontSize:14, fontWeight:500,
                cursor:"pointer",
                transition:"all .25s",
                display:"inline-flex", alignItems:"center", gap:8,
                boxShadow: active === cat.id ? "0 6px 18px rgba(242,88,146,.3)" : "none",
              }}>
              <span style={{fontSize:12, opacity:.9}}>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{display:"flex", justifyContent:"center", marginBottom: 40}}>
          <div style={{
            position:"relative", maxWidth:360, width:"100%",
          }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Tìm món yêu thích..."
              style={{
                width:"100%",
                padding:"12px 16px 12px 42px",
                background:"var(--paper)",
                border:"1.5px solid var(--line)",
                borderRadius: 999,
                fontFamily:"var(--font-body)", fontSize:14,
                color:"var(--ink)",
                outline:"none",
              }}
            />
            <svg viewBox="0 0 24 24" width="18" height="18" style={{
              position:"absolute", left:16, top:"50%", transform:"translateY(-50%)",
              color:"var(--ink-mute)",
            }}>
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Grid */}
        {items.length === 0 ? (
          <div style={{textAlign:"center", padding:"60px 20px", color:"var(--ink-mute)"}}>
            <div style={{fontSize:48, marginBottom:12}}>🥺</div>
            <div style={{fontSize:16}}>Không tìm thấy món nào... thử từ khoá khác nhé!</div>
          </div>
        ) : (
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",
            gap:20,
          }}>
            {items.map((m, i) => <MenuCard key={m.name} item={m} delay={i*30}/>)}
          </div>
        )}
      </div>
    </section>
  );
}

function MenuCard({ item, delay = 0 }){
  return (
    <div className="card" style={{padding:20, animation:`fadeUp .4s ${delay}ms backwards`}}>
      <div className="ph" style={{aspectRatio:"4/3", marginBottom:16, fontSize:48,
        display:"flex", alignItems:"center", justifyContent:"center",
        position:"relative", padding: item.img ? 0 : 16,
      }}>
        {item.img ? (
          <img src={item.img} alt={item.name} style={{
            position:"absolute", inset:0, width:"100%", height:"100%",
            objectFit:"cover", display:"block",
          }}/>
        ) : (
          <div style={{
            fontSize:64, filter:"drop-shadow(0 4px 12px rgba(0,0,0,.1))",
            position:"relative", zIndex:1,
          }}>{item.emoji}</div>
        )}
        <div className="ph-label" style={{position:"absolute", left:12, bottom:12, zIndex:2}}>{item.cat.toUpperCase()} / {item.name.split(" ")[0].toUpperCase()}</div>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10, marginBottom:8}}>
        <h3 style={{fontSize:18, fontWeight:600, lineHeight:1.3}}>{item.name}</h3>
        {item.tag && <span className="badge" style={{fontSize:10, padding:"4px 8px", flexShrink:0}}>{item.tag}</span>}
      </div>
      <p style={{fontSize:13, marginBottom:16, lineHeight:1.5, minHeight:36}}>{item.desc}</p>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontFamily:"var(--font-display)", fontWeight:600, fontSize:18, color:"var(--pink-500)"}}>
          {item.price}
        </div>
        <button style={{
          width:36, height:36, borderRadius:"50%",
          border:"none", cursor:"pointer",
          background:"var(--pink-50)", color:"var(--pink-500)",
          display:"grid", placeItems:"center",
          transition:"all .2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background="var(--pink-400)"; e.currentTarget.style.color="white"; }}
        onMouseLeave={e => { e.currentTarget.style.background="var(--pink-50)"; e.currentTarget.style.color="var(--pink-500)"; }}
        >
          <Heart size={16} fill="currentColor"/>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Heart, Star, Sparkle, Flower, Bow, FloatingDeco, Nav, Hero, About, Menu });
