/* ════════════════════════════════════════════════════════════
   SECTIONS PART 2: Gallery, Experience, Staff, Testimonials,
   Events, Booking, Footer
   ════════════════════════════════════════════════════════════ */

/* ───────── Gallery ───────── */
function Gallery(){
  const data = window.SMC_DATA;
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Khoảnh khắc tại Sweet Maid</div>
          <h2>
            Những ngày <span className="script" style={{fontSize:"1.05em"}}>đáng nhớ</span> ♡
          </h2>
        </div>

        <div style={{
          columnCount: 4,
          columnGap: 16,
        }} className="gallery-grid">
          {data.gallery.map((g, i) => (
            <div key={i} className="ph" style={{
              breakInside: "avoid",
              marginBottom: 16,
              aspectRatio: `1 / ${g.h}`,
              cursor:"pointer",
              transition:"transform .3s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform="scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
            >
              <div className="ph-label">{g.label}</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 980px){ .gallery-grid{ column-count: 3 !important; } }
          @media (max-width: 680px){ .gallery-grid{ column-count: 2 !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ───────── Experience timeline ───────── */
function Experience(){
  const data = window.SMC_DATA;
  return (
    <section id="experience" style={{background:"linear-gradient(180deg, transparent, var(--lav-100) 40%, var(--lav-100) 60%, transparent)"}}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Trải nghiệm 5 bước</div>
          <h2>
            Hành trình về <span className="script" style={{fontSize:"1.05em"}}>nhà</span> của bạn
          </h2>
          <p style={{fontSize:17, maxWidth:580}}>
            Mỗi vị khách đều được đối đãi như một thành viên trở về sau chuyến đi xa.
            Đây là những gì chờ đón bạn từ phút đầu bước qua cửa.
          </p>
        </div>

        <div style={{position:"relative", maxWidth:980, margin:"0 auto"}}>
          {/* center line */}
          <div style={{
            position:"absolute", top:20, bottom:20, left:"50%",
            width:2, background:"linear-gradient(180deg, var(--pink-200), var(--lav-300))",
            transform:"translateX(-50%)",
            borderRadius:2,
          }} className="timeline-line"/>

          {data.experience.map((step, i) => (
            <div key={i} className="timeline-row" style={{
              display:"grid", gridTemplateColumns:"1fr 80px 1fr",
              gap: 0, marginBottom: 28,
              alignItems:"center",
            }}>
              {/* Card on left or right */}
              <div className="card" style={{
                padding:"22px 26px",
                gridColumn: i % 2 === 0 ? "1 / 2" : "3 / 4",
                gridRow: 1,
                textAlign: i % 2 === 0 ? "right" : "left",
              }}>
                <div className="mono" style={{color:"var(--pink-500)", fontWeight:600, marginBottom:8, letterSpacing:".15em"}}>{step.time}</div>
                <h3 style={{fontSize:22, marginBottom:8}}>{step.title}</h3>
                <p style={{fontSize:14, lineHeight:1.6}}>{step.desc}</p>
              </div>
              {/* Center node */}
              <div style={{
                gridColumn:"2 / 3", gridRow: 1,
                display:"grid", placeItems:"center",
              }}>
                <div style={{
                  width:56, height:56, borderRadius:"50%",
                  background: "linear-gradient(135deg, var(--pink-300), var(--pink-500))",
                  display:"grid", placeItems:"center",
                  color:"white", fontFamily:"var(--font-display)", fontSize:20, fontWeight:700,
                  boxShadow:"0 8px 20px rgba(242,88,146,.35), 0 0 0 8px var(--bg)",
                  zIndex:1,
                }}>{i+1}</div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 720px){
            .timeline-line{ left: 28px !important; }
            .timeline-row{ grid-template-columns: 56px 1fr !important; gap: 16px !important; }
            .timeline-row > .card{ grid-column: 2 / 3 !important; text-align: left !important; }
            .timeline-row > div:nth-child(2){ grid-column: 1 / 2 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ───────── Staff ───────── */
function Staff(){
  const data = window.SMC_DATA;
  return (
    <section id="staff">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Đội ngũ nàng hầu</div>
          <h2>
            Gặp gỡ những <span className="script" style={{fontSize:"1.05em"}}>nàng hầu</span> dễ thương
          </h2>
          <p style={{fontSize:17, maxWidth:560}}>
            Mỗi nàng đều có một phép thuật riêng và sẽ làm bữa ăn của bạn trở nên đặc biệt hơn.
          </p>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",
          gap:20,
        }}>
          {data.staff.map((s, i) => <StaffCard key={s.name} maid={s} idx={i}/>)}
        </div>
      </div>
    </section>
  );
}

function StaffCard({ maid, idx }){
  const isPink = maid.color === "pink";
  return (
    <div className="card" style={{padding:0, overflow:"hidden", textAlign:"center"}}>
      <div style={{
        aspectRatio:"3/4",
        background: isPink
          ? "linear-gradient(160deg, var(--pink-100), var(--pink-200))"
          : "linear-gradient(160deg, var(--lav-100), var(--lav-200))",
        position:"relative",
        display:"grid", placeItems:"end center",
        padding: "0 20px 0",
      }}>
        {maid.img ? (
          <img src={maid.img} alt={maid.name} style={{
            position:"absolute", inset:0, width:"100%", height:"100%",
            objectFit:"cover", display:"block",
          }}/>
        ) : (
        /* Stylized maid portrait */
        <svg viewBox="0 0 200 240" style={{width:"100%", height:"100%", display:"block"}}>
          <defs>
            <linearGradient id={`dressg${idx}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={isPink ? "var(--pink-400)" : "var(--lav-300)"}/>
              <stop offset="1" stopColor={isPink ? "var(--pink-500)" : "var(--lav-500)"}/>
            </linearGradient>
          </defs>
          {/* hair */}
          <ellipse cx="100" cy="92" rx="48" ry="56" fill={idx % 3 === 0 ? "#5a3a48" : idx % 3 === 1 ? "#8b6f4e" : "#3a2a40"}/>
          {/* face */}
          <ellipse cx="100" cy="100" rx="32" ry="38" fill="#fde6d8"/>
          {/* bangs */}
          <path d="M68 80 Q100 50 132 80 Q120 95 100 90 Q80 95 68 80 Z" fill={idx % 3 === 0 ? "#5a3a48" : idx % 3 === 1 ? "#8b6f4e" : "#3a2a40"}/>
          {/* ribbons */}
          <ellipse cx="58" cy="80" rx="11" ry="7" fill={isPink ? "var(--pink-300)" : "var(--lav-300)"}/>
          <ellipse cx="142" cy="80" rx="11" ry="7" fill={isPink ? "var(--pink-300)" : "var(--lav-300)"}/>
          {/* eyes */}
          <ellipse cx="88" cy="106" rx="4" ry="5" fill="#3a2030"/>
          <ellipse cx="112" cy="106" rx="4" ry="5" fill="#3a2030"/>
          <circle cx="89" cy="104" r="1.4" fill="white"/>
          <circle cx="113" cy="104" r="1.4" fill="white"/>
          {/* blush */}
          <ellipse cx="80" cy="116" rx="6" ry="3.5" fill="var(--pink-300)" opacity=".7"/>
          <ellipse cx="120" cy="116" rx="6" ry="3.5" fill="var(--pink-300)" opacity=".7"/>
          {/* smile */}
          <path d="M93 122 Q100 128 107 122" stroke="#3a2030" strokeWidth="2" fill="none" strokeLinecap="round"/>
          {/* neck */}
          <rect x="92" y="135" width="16" height="14" fill="#fde6d8"/>
          {/* collar */}
          <path d="M70 150 L100 162 L130 150 L130 158 L100 170 L70 158 Z" fill="white"/>
          {/* dress */}
          <path d="M70 158 Q100 172 130 158 L160 240 L40 240 Z" fill={`url(#dressg${idx})`}/>
          {/* apron */}
          <path d="M82 168 L118 168 L132 240 L68 240 Z" fill="white" opacity=".95"/>
          {/* heart */}
          <path d="M100 210 c-5 -7 -14 -2 -14 5 c0 7 14 14 14 14 s14 -7 14 -14 c0 -7 -9 -12 -14 -5z" fill={isPink ? "var(--pink-400)" : "var(--lav-500)"}/>
        </svg>
        )}

        {/* Floating tag */}
        <div style={{
          position:"absolute", top:14, right:14,
          background:"white", borderRadius:999,
          padding:"4px 10px", fontSize:11, fontWeight:600,
          color:"var(--ink-soft)",
          fontFamily:"var(--font-mono)", letterSpacing:".08em",
        }}>SINCE {maid.since}</div>
      </div>
      <div style={{padding:"20px 18px"}}>
        <h3 style={{fontSize:22, marginBottom:2}}>{maid.name}</h3>
        <div style={{fontSize:13, color:"var(--pink-500)", fontWeight:600, marginBottom:10}}>{maid.role}</div>
        <div style={{
          fontSize:12, color:"var(--ink-soft)",
          padding:"6px 12px", background:"var(--pink-50)", borderRadius:999,
          display:"inline-flex", alignItems:"center", gap:6,
          border:"1px solid var(--pink-100)",
        }}>
          <span style={{color:"var(--pink-500)"}}>✦</span>
          {maid.spec}
        </div>
      </div>
    </div>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials(){
  const data = window.SMC_DATA;
  return (
    <section id="testimonials" style={{background:"linear-gradient(180deg, transparent, var(--bg-2) 40%, var(--bg-2) 60%, transparent)"}}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Khách hàng nói gì</div>
          <h2>
            Những lời <span className="script" style={{fontSize:"1.05em"}}>từ trái tim</span> ♡
          </h2>
        </div>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",
          gap:20,
        }}>
          {data.testimonials.map((t, i) => (
            <div key={i} className="card" style={{padding:"28px 26px", display:"flex", flexDirection:"column", gap:14}}>
              <div style={{display:"flex", gap:4}}>
                {Array.from({length: t.rating}).map((_, j) => <Star key={j} size={16} fill="var(--gold)"/>)}
              </div>
              <p style={{fontSize:15, color:"var(--ink)", lineHeight:1.6, flex:1}}>"{t.text}"</p>
              <div style={{display:"flex", gap:12, alignItems:"center", paddingTop:12, borderTop:"1px solid var(--line)"}}>
                <div style={{
                  width:42, height:42, borderRadius:"50%",
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, var(--pink-300), var(--pink-500))"
                    : "linear-gradient(135deg, var(--lav-300), var(--lav-500))",
                  display:"grid", placeItems:"center",
                  color:"white", fontFamily:"var(--font-display)", fontWeight:600, fontSize:18,
                }}>{t.name[0]}</div>
                <div>
                  <div style={{fontSize:14, fontWeight:600}}>{t.name}</div>
                  <div style={{fontSize:12, color:"var(--ink-mute)"}}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Events ───────── */
function Events(){
  const data = window.SMC_DATA;
  return (
    <section id="events">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Sự kiện sắp tới</div>
          <h2>
            Đừng bỏ lỡ những <span className="script" style={{fontSize:"1.05em"}}>khoảnh khắc</span> đặc biệt
          </h2>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",
          gap:20,
        }}>
          {data.events.map((ev, i) => (
            <div key={i} className="card" style={{padding:24, display:"flex", gap:18}}>
              <div style={{
                flexShrink:0,
                width:72, height:84,
                borderRadius:"var(--radius-sm)",
                background: i % 2 === 0
                  ? "linear-gradient(160deg, var(--pink-200), var(--pink-300))"
                  : "linear-gradient(160deg, var(--lav-200), var(--lav-300))",
                color:"white",
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center",
                fontFamily:"var(--font-display)",
                boxShadow:"0 6px 16px rgba(0,0,0,.08)",
              }}>
                <div style={{fontSize:12, opacity:.9, fontWeight:500, letterSpacing:".05em"}}>{ev.month}</div>
                <div style={{fontSize:30, fontWeight:700, lineHeight:1}}>{ev.date}</div>
              </div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{display:"flex", justifyContent:"space-between", gap:10, marginBottom:6}}>
                  <h3 style={{fontSize:18, lineHeight:1.3}}>{ev.title}</h3>
                </div>
                <p style={{fontSize:13, marginBottom:12, lineHeight:1.5}}>{ev.desc}</p>
                <span className="badge" style={{fontSize:11}}>{ev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Booking form ───────── */
function Booking(){
  const data = window.SMC_DATA;
  const [form, setForm] = useState({
    name:"", phone:"", email:"",
    date:"", time:"19:00", guests:"2",
    occasion:"normal", notes:"",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(k, v){
    setForm(f => ({...f, [k]: v}));
    if (errors[k]) setErrors(e => ({...e, [k]: null}));
  }

  function validate(){
    const e = {};
    if (!form.name.trim()) e.name = "Hãy cho chúng mình biết tên bạn nhé ♡";
    else if (form.name.trim().length < 2) e.name = "Tên ngắn quá rồi >.<";

    if (!form.phone.trim()) e.phone = "Cần số điện thoại để xác nhận";
    else if (!/^[0-9+\s-]{8,15}$/.test(form.phone)) e.phone = "Số điện thoại chưa đúng định dạng";

    if (form.email.trim() && !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      e.email = "Email chưa hợp lệ";
    }

    if (!form.date) e.date = "Bạn muốn ghé vào ngày nào?";
    else {
      const d = new Date(form.date);
      const today = new Date(); today.setHours(0,0,0,0);
      if (d < today) e.date = "Ngày đặt phải từ hôm nay trở đi";
    }

    const g = parseInt(form.guests);
    if (!g || g < 1) e.guests = "Số khách phải ≥ 1";
    else if (g > 20) e.guests = "Trên 20 khách vui lòng gọi điện đặt riêng";

    return e;
  }

  function submit(e){
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    } else {
      // scroll to first error
      const firstKey = Object.keys(errs)[0];
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      if (el) el.scrollIntoView ? null : null; // avoid scrollIntoView per guidelines
    }
  }

  if (submitted) {
    return (
      <section id="booking">
        <div className="wrap">
          <div className="card" style={{
            maxWidth:600, margin:"0 auto",
            padding:"60px 40px", textAlign:"center",
            position:"relative", overflow:"hidden",
          }}>
            <div style={{
              position:"absolute", top:-40, left:"50%", transform:"translateX(-50%)",
              width:160, height:160, borderRadius:"50%",
              background:"linear-gradient(135deg, var(--pink-300), var(--pink-500))",
              opacity:.15,
            }}/>
            <div style={{
              width:96, height:96, borderRadius:"50%",
              background:"linear-gradient(135deg, var(--pink-300), var(--pink-500))",
              margin:"0 auto 24px", display:"grid", placeItems:"center",
              boxShadow:"0 12px 32px rgba(242,88,146,.4)",
              position:"relative",
            }}>
              <Heart size={48} fill="white"/>
            </div>
            <h2 style={{marginBottom:16, fontSize:36}}>Cảm ơn bạn rất nhiều!</h2>
            <p style={{fontSize:17, marginBottom:8}}>
              Chúng mình đã nhận được yêu cầu đặt bàn của bạn ♡
            </p>
            <p style={{fontSize:15, marginBottom:32}}>
              Một nàng hầu sẽ liên hệ qua số <strong style={{color:"var(--pink-500)"}}>{form.phone}</strong> trong vòng <strong>15 phút</strong> để xác nhận.
            </p>
            <div style={{
              display:"inline-flex", flexWrap:"wrap", gap:10, justifyContent:"center",
              padding:"16px 24px", background:"var(--pink-50)", borderRadius:"var(--radius-md)",
              border:"1px solid var(--pink-100)", marginBottom:32,
            }}>
              <Detail label="Tên" value={form.name}/>
              <Detail label="Ngày" value={new Date(form.date).toLocaleDateString("vi-VN")}/>
              <Detail label="Giờ" value={form.time}/>
              <Detail label="Khách" value={`${form.guests} người`}/>
            </div>
            <div>
              <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setForm({name:"",phone:"",email:"",date:"",time:"19:00",guests:"2",occasion:"normal",notes:""}); }}>
                Đặt lại bàn khác
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" style={{background:"linear-gradient(180deg, transparent, var(--lav-100) 30%, var(--pink-50) 100%)"}}>
      <div className="wrap">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:60, alignItems:"center", maxWidth:1100, margin:"0 auto"}} className="book-grid">
          <div>
            <div className="eyebrow" style={{marginBottom:16}}>Đặt bàn của bạn</div>
            <h2 style={{marginBottom:20}}>
              Hẹn gặp bạn <br/>
              <span className="script" style={{fontSize:"1.1em"}}>tại Sweet Maid</span> ✿
            </h2>
            <p style={{fontSize:17, marginBottom:32}}>
              Đặt bàn trước 24 giờ để chúng mình chuẩn bị một bữa tiệc dễ thương dành riêng cho bạn.
            </p>
            <div style={{display:"flex", flexDirection:"column", gap:16}}>
              <InfoLine icon="📍" label={data.brand.address}/>
              <InfoLine icon="☎️" label={data.brand.phone}/>
              <InfoLine icon="✉️" label={data.brand.email}/>
              <InfoLine icon="🕒" label={data.brand.hours}/>
            </div>
          </div>

          <form className="card" style={{padding:36}} onSubmit={submit} noValidate>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:18, marginBottom:18}} className="form-grid-2">
              <div className={`field ${errors.name ? "has-error" : ""}`} data-field="name">
                <label>Họ và tên <span className="req">*</span></label>
                <input type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Ví dụ: Nguyễn Linh" />
                <div className="err-msg">{errors.name}</div>
              </div>
              <div className={`field ${errors.phone ? "has-error" : ""}`} data-field="phone">
                <label>Số điện thoại <span className="req">*</span></label>
                <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="0901 234 567" />
                <div className="err-msg">{errors.phone}</div>
              </div>
            </div>

            <div className={`field ${errors.email ? "has-error" : ""}`} style={{marginBottom:18}} data-field="email">
              <label>Email (không bắt buộc)</label>
              <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="ban@email.com" />
              <div className="err-msg">{errors.email}</div>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", gap:18, marginBottom:18}} className="form-grid-3">
              <div className={`field ${errors.date ? "has-error" : ""}`} data-field="date">
                <label>Ngày <span className="req">*</span></label>
                <input type="date" value={form.date} onChange={e => update("date", e.target.value)} />
                <div className="err-msg">{errors.date}</div>
              </div>
              <div className="field">
                <label>Giờ <span className="req">*</span></label>
                <select value={form.time} onChange={e => update("time", e.target.value)}>
                  {["11:00","12:00","13:00","14:00","17:00","18:00","19:00","20:00","21:00"].map(t =>
                    <option key={t} value={t}>{t}</option>
                  )}
                </select>
                <div className="err-msg"></div>
              </div>
              <div className={`field ${errors.guests ? "has-error" : ""}`} data-field="guests">
                <label>Số khách <span className="req">*</span></label>
                <input type="number" min="1" max="20" value={form.guests} onChange={e => update("guests", e.target.value)} />
                <div className="err-msg">{errors.guests}</div>
              </div>
            </div>

            <div className="field" style={{marginBottom:18}}>
              <label>Dịp đặc biệt</label>
              <div style={{display:"flex", flexWrap:"wrap", gap:8, marginTop:4}}>
                {[
                  {v:"normal", l:"Bình thường", icon:"✿"},
                  {v:"birthday", l:"Sinh nhật", icon:"🎂"},
                  {v:"date", l:"Hẹn hò", icon:"♡"},
                  {v:"family", l:"Gia đình", icon:"🏠"},
                  {v:"meet", l:"Gặp gỡ", icon:"☕"},
                ].map(o => (
                  <button key={o.v} type="button" onClick={() => update("occasion", o.v)} style={{
                    padding:"8px 14px", borderRadius:999,
                    border: `1.5px solid ${form.occasion === o.v ? "var(--pink-400)" : "var(--line)"}`,
                    background: form.occasion === o.v ? "var(--pink-50)" : "var(--paper)",
                    color: form.occasion === o.v ? "var(--pink-500)" : "var(--ink-soft)",
                    fontSize:13, fontWeight:500, cursor:"pointer",
                    fontFamily:"var(--font-body)",
                    transition:"all .2s",
                  }}>{o.icon} {o.l}</button>
                ))}
              </div>
            </div>

            <div className="field" style={{marginBottom:24}}>
              <label>Ghi chú thêm</label>
              <textarea rows="3" value={form.notes} onChange={e => update("notes", e.target.value)}
                placeholder="Ví dụ: muốn ngồi gần cửa sổ, có 1 trẻ nhỏ, dị ứng đậu phộng..." />
            </div>

            <button type="submit" className="btn btn-primary" style={{width:"100%", justifyContent:"center", padding:"16px"}}>
              Xác nhận đặt bàn <Heart size={16} fill="white"/>
            </button>
            <p style={{fontSize:12, color:"var(--ink-mute)", textAlign:"center", marginTop:14}}>
              Bằng cách đặt bàn, bạn đồng ý nhận tin nhắn xác nhận từ chúng mình ♡
            </p>
          </form>
        </div>

        <style>{`
          @media (max-width: 880px){
            .book-grid{ grid-template-columns: 1fr !important; gap: 40px !important; }
            .form-grid-2, .form-grid-3{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function Detail({ label, value }){
  return (
    <div style={{textAlign:"left"}}>
      <div style={{fontSize:11, color:"var(--ink-mute)", fontFamily:"var(--font-mono)", letterSpacing:".1em", marginBottom:2}}>{label.toUpperCase()}</div>
      <div style={{fontSize:14, fontWeight:600, color:"var(--ink)"}}>{value}</div>
    </div>
  );
}

function InfoLine({ icon, label }){
  return (
    <div style={{display:"flex", gap:14, alignItems:"center"}}>
      <div style={{
        width:42, height:42, borderRadius:"50%",
        background:"var(--paper)", border:"1px solid var(--line)",
        display:"grid", placeItems:"center", fontSize:18,
      }}>{icon}</div>
      <div style={{fontSize:14, color:"var(--ink-soft)"}}>{label}</div>
    </div>
  );
}

/* ───────── Footer ───────── */
function Footer(){
  const data = window.SMC_DATA;
  return (
    <footer style={{
      background: "var(--ink)",
      color:"#fbe4ee",
      padding: "80px 0 32px",
      position:"relative",
      overflow:"hidden",
    }}>
      {/* Decorative top wave */}
      <svg viewBox="0 0 1440 80" style={{position:"absolute", top:-1, left:0, width:"100%", display:"block"}} preserveAspectRatio="none">
        <path d="M0 80 Q 360 0 720 40 T 1440 40 L 1440 0 L 0 0 Z" fill="var(--bg)"/>
      </svg>

      <div className="wrap" style={{position:"relative", zIndex:1}}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"1.4fr 1fr 1fr 1.3fr",
          gap:48, marginBottom:48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:18}}>
              <div style={{
                width:44, height:44, borderRadius:"50%",
                background:"linear-gradient(135deg, var(--pink-300), var(--pink-500))",
                display:"grid", placeItems:"center",
              }}>
                <Heart size={22} fill="white"/>
              </div>
              <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:22, color:"white"}}>
                Sweet Maid <span style={{color:"var(--pink-300)"}}>Café</span>
              </div>
            </div>
            <p style={{color:"#d8b8c6", fontSize:14, marginBottom:18, maxWidth:340}}>
              Tiệm cà phê dễ thương đầu tiên của Sài Gòn — nơi mỗi vị khách đều là một thành viên trong gia đình ♡
            </p>
            <div style={{display:"flex", gap:10}}>
              {["IG","FB","TT","YT"].map(s => (
                <a key={s} href="#" style={{
                  width:38, height:38, borderRadius:"50%",
                  background:"rgba(255,255,255,.08)",
                  border:"1px solid rgba(255,255,255,.12)",
                  display:"grid", placeItems:"center",
                  color:"#fbe4ee", fontSize:11, fontWeight:600,
                  textDecoration:"none",
                  fontFamily:"var(--font-mono)", letterSpacing:".05em",
                  transition:"all .2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background="var(--pink-400)"; e.currentTarget.style.borderColor="var(--pink-400)"; e.currentTarget.style.color="white"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,.08)"; e.currentTarget.style.borderColor="rgba(255,255,255,.12)"; e.currentTarget.style.color="#fbe4ee"; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <FooterCol title="Khám phá" links={[
            ["Về chúng tôi","#about"],
            ["Thực đơn","#menu"],
            ["Trải nghiệm","#experience"],
            ["Đội ngũ","#staff"],
            ["Sự kiện","#events"],
          ]}/>
          <FooterCol title="Hỗ trợ" links={[
            ["Đặt bàn","#booking"],
            ["Câu hỏi thường gặp","#"],
            ["Chính sách hủy","#"],
            ["Quy định","#"],
            ["Liên hệ","#"],
          ]}/>

          {/* Map */}
          <div>
            <div style={{
              fontFamily:"var(--font-mono)", fontSize:11,
              color:"var(--pink-300)", letterSpacing:".18em",
              marginBottom:14, fontWeight:600,
            }}>TÌM CHÚNG MÌNH</div>
            <div style={{
              borderRadius:"var(--radius-md)", overflow:"hidden",
              border:"1px solid rgba(255,255,255,.12)",
              aspectRatio:"4/3",
              position:"relative",
              background: "linear-gradient(135deg, #3d2434, #2a1822)",
            }}>
              {/* Stylized map */}
              <svg viewBox="0 0 240 180" style={{width:"100%", height:"100%", display:"block"}}>
                {/* roads */}
                <g stroke="rgba(255,220,235,.18)" strokeWidth="3" fill="none">
                  <path d="M0 60 L240 50"/>
                  <path d="M0 110 L240 120"/>
                  <path d="M60 0 L70 180"/>
                  <path d="M150 0 L140 180"/>
                  <path d="M200 0 L210 180"/>
                </g>
                <g stroke="rgba(255,220,235,.08)" strokeWidth="1" fill="none">
                  <path d="M0 30 L240 25"/>
                  <path d="M0 150 L240 155"/>
                  <path d="M20 0 L25 180"/>
                  <path d="M110 0 L105 180"/>
                </g>
                {/* river */}
                <path d="M0 145 Q 80 130 160 145 T 240 140 L 240 180 L 0 180 Z" fill="rgba(184, 164, 245, .15)"/>
                {/* parks */}
                <rect x="80" y="65" width="55" height="40" fill="rgba(255,154,193,.12)" rx="4"/>
                <circle cx="180" cy="80" r="14" fill="rgba(230,179,90,.18)"/>
                {/* labels */}
                <text x="14" y="22" fill="rgba(255,220,235,.4)" fontSize="6" fontFamily="JetBrains Mono">LÝ TỰ TRỌNG</text>
                <text x="14" y="170" fill="rgba(255,220,235,.3)" fontSize="6" fontFamily="JetBrains Mono">NGUYỄN HUỆ</text>
                {/* pin */}
                <g transform="translate(115, 80)">
                  <circle r="22" fill="var(--pink-500)" opacity=".25"/>
                  <circle r="14" fill="var(--pink-500)" opacity=".4"/>
                  <path d="M0 -10 C -7 -10 -10 -4 -10 0 C -10 6 0 14 0 14 S 10 6 10 0 C 10 -4 7 -10 0 -10 Z" fill="var(--pink-400)"/>
                  <circle cy="-1" r="3.5" fill="white"/>
                </g>
              </svg>
              <div style={{
                position:"absolute", bottom:10, left:10, right:10,
                background:"rgba(0,0,0,.5)", backdropFilter:"blur(8px)",
                padding:"8px 12px", borderRadius:8,
                fontSize:11, color:"#fbe4ee",
              }}>
                <div style={{fontWeight:600}}>Sweet Maid Café</div>
                <div style={{opacity:.7, fontSize:10}}>{data.brand.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop:28,
          borderTop:"1px solid rgba(255,255,255,.1)",
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12,
          fontSize:12, color:"#9b7e8e",
        }}>
          <div>© 2025 Sweet Maid Café. Made with ♡ in Sài Gòn.</div>
          <div style={{display:"flex", gap:20}}>
            <a href="#" style={{color:"#9b7e8e", textDecoration:"none"}}>Bảo mật</a>
            <a href="#" style={{color:"#9b7e8e", textDecoration:"none"}}>Điều khoản</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px){
          .footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px){
          .footer-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }){
  return (
    <div>
      <div style={{
        fontFamily:"var(--font-mono)", fontSize:11,
        color:"var(--pink-300)", letterSpacing:".18em",
        marginBottom:14, fontWeight:600,
      }}>{title.toUpperCase()}</div>
      <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10}}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{color:"#d8b8c6", textDecoration:"none", fontSize:14, transition:"color .2s"}}
              onMouseEnter={e => e.currentTarget.style.color="var(--pink-300)"}
              onMouseLeave={e => e.currentTarget.style.color="#d8b8c6"}
            >{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Gallery, Experience, Staff, Testimonials, Events, Booking, Footer });
