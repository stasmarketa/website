import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  Music,
  Phone,
  Sparkles,
  Star,
  Trophy,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Professional Performances",
    text: "Luxury entertainment for galas, weddings, corporate events, and private celebrations.",
    icon: Sparkles,
  },
  {
    title: "Private Coaching",
    text: "Elite ballroom coaching in technique, partnering, musicality, and performance.",
    icon: HeartHandshake,
  },
  {
    title: "Choreography & Showcases",
    text: "Custom routines for competitors, first dances, showcases, and special productions.",
    icon: Music,
  },
];

const testimonials = [
  {
    name: "Luxury Event Producer",
    quote:
      "Stas and Marketa brought sophistication, emotion, and breathtaking presence to the evening.",
  },
  {
    name: "Competitive Student",
    quote:
      "Their coaching is world-class. Every lesson gave us clarity, confidence, and real progress.",
  },
  {
    name: "Wedding Client",
    quote:
      "They made our first dance feel elegant, natural, and unforgettable for everyone in the room.",
  },
];

const gallery = [
  "/images/dance1.jpg",
  "/images/dance2.jpg",
  "/images/dance3.jpg",
  "/images/dance4.jpg",
  "/images/dance5.jpg",
  "/images/dance6.jpg",
];

const sectionTitle = {
  fontSize: "0.85rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
  marginBottom: "12px",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Wrapper({ children, style }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1180,
        margin: "0 auto",
        paddingLeft: 24,
        paddingRight: 24,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 28,
        boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CTAButton({ children, href = "#contact", secondary = false }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "15px 22px",
        borderRadius: 18,
        fontSize: 16,
        fontWeight: 600,
        textDecoration: "none",
        border: secondary ? "1px solid rgba(255,255,255,0.18)" : "1px solid transparent",
        color: "white",
        background: secondary ? "transparent" : "white",
        colorScheme: "dark",
        color: secondary ? "white" : "#111111",
        minWidth: 180,
      }}
    >
      {children}
    </a>
  );
}

export default function BallroomWebsite() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.14), transparent 30%), linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
        color: "white",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Wrapper
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "center",
            paddingTop: 40,
            paddingBottom: 64,
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.82)",
                fontSize: 14,
                marginBottom: 28,
              }}
            >
              <Trophy size={16} />
              Professional Ballroom Dancers · Performers · Coaches
            </div>

            <div style={{ fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.58)" }}>
              Stas & Marketa
            </div>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: 0.95,
                margin: "18px 0 20px",
                letterSpacing: "-0.04em",
                maxWidth: 720,
              }}
            >
              Ballroom artistry with elegance, intensity, and unforgettable presence.
            </h1>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.74)",
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              We are a professional ballroom partnership available for luxury performances, coaching,
              choreography, destination events, weddings, and select collaborations.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
              <CTAButton href="#contact">
                Book Us <ArrowRight size={16} />
              </CTAButton>
              <CTAButton href="#services" secondary>
                Explore Services
              </CTAButton>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
              }}
            >
              {[
                "Available for performances, coaching, and events",
                "Based in Boston, MA · Dance Fever Studio",
                "Ideal for weddings, showcases, and premium entertainment",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: 16,
                    borderRadius: 20,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.6,
                    fontSize: 14,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Card style={{ padding: 18 }}>
              <div
                style={{
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.10)",
                  minHeight: 620,
                  padding: 24,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                  <span>Featured Partnership</span>
                  <span>International Travel</span>
                </div>

                <div>
                  <div
                    style={{
                      minHeight: 360,
                      display: "grid",
                      placeItems: "center",
                      textAlign: "center",
                      borderRadius: 24,
                      border: "1px dashed rgba(255,255,255,0.16)",
                      background: "rgba(0,0,0,0.18)",
                      padding: 28,
                    }}
                  >
                    <img src="/images/hero.jpg" alt="Stas & Marketa dancing" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 16 }}>
                    <div style={{ padding: 18, borderRadius: 20, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)" }}>
                      <div style={{ fontSize: 30, fontWeight: 700 }}>Elite</div>
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.58)", marginTop: 4 }}>Performance quality</div>
                    </div>
                    <div style={{ padding: 18, borderRadius: 20, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)" }}>
                      <div style={{ fontSize: 30, fontWeight: 700 }}>Global</div>
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.58)", marginTop: 4 }}>Available for travel</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Wrapper>
      </section>

      <section id="services">
        <Wrapper style={{ paddingTop: 84, paddingBottom: 30 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={sectionTitle}>What we offer</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, letterSpacing: "-0.03em", maxWidth: 780 }}>
              Performance, coaching, choreography, and elevated event experiences.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            paddingBottom: 84,
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Card style={{ padding: 28, minHeight: 260 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 18,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: 28, marginTop: 22, marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.68)" }}>{service.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </Wrapper>
      </section>

      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
        <Wrapper
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            alignItems: "center",
            paddingTop: 84,
            paddingBottom: 84,
          }}
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={sectionTitle}>About us</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: 0, marginBottom: 18, letterSpacing: "-0.03em" }}>
              A partnership built on technique, trust, and striking performance.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.70)", maxWidth: 640 }}>
              Stas Olarescu (Moldova) and Markéta Vlčková (Prague) are a professional Latin partnership combining elite competitive results with a refined artistic background.

Stas began dancing at 7 and rose quickly through international ranks, becoming a Romanian National Amateur Champion before representing Singapore at major global events, including WDSF Grand Slams. He later transitioned to the professional circuit, competing at the world’s most prestigious events such as Blackpool, the UK Open, and World Championships.

Markéta grew up in a highly artistic family and trained from an early age in ballet, piano, and ballroom. She achieved national finals in the Czech Republic before continuing her career in Poland under world-class coaches, competing internationally at Blackpool, UK Championships, and World Championships. Alongside her dance career, she graduated with First-Class Honours from King’s College London.

Since forming their partnership in 2017, they have built an international career across Denmark, London, and Europe. Now competing professionally, they are British Open Rising Star Champions and European Championship finalists, known for combining technical precision with expressive, high-impact performance.

Together, they bring world-class competitive experience, international recognition, and a distinctive artistic identity to every performance and coaching experience.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 28 }}>
              <Card style={{ padding: 22 }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>Ideal for</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>Weddings, galas, luxury events, showcases, intensives</div>
              </Card>
              <Card style={{ padding: 22 }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>Specialties</div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>Technique, partnering, choreography, presence, musicality</div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}
          >
            {[
              [Star, "Luxury event entertainment", "Sophisticated live performance for private and premium events."],
              [Video, "Visual storytelling", "Ideal for campaigns, content, reels, promo videos, and cinematic moments."],
              [Calendar, "Private lessons & intensives", "Focused coaching for couples, amateurs, teachers, and competitors."],
              [Globe, "Destination bookings", "Available for guest coaching, destination weddings, and select travel dates."],
            ].map(([Icon, title, text]) => (
              <Card key={title} style={{ padding: 24 }}>
                <Icon size={26} />
                <div style={{ fontSize: 24, marginTop: 22, marginBottom: 10 }}>{title}</div>
                <div style={{ color: "rgba(255,255,255,0.66)", lineHeight: 1.7 }}>{text}</div>
              </Card>
            ))}
          </motion.div>
        </Wrapper>
      </section>

      <section>
        <Wrapper style={{ paddingTop: 84, paddingBottom: 28 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={sectionTitle}>Gallery</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, letterSpacing: "-0.03em" }}>
              Replace these placeholders with your strongest imagery.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            paddingBottom: 84,
          }}
        >
          {gallery.map((src, index) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card style={{ overflow: "hidden" }}>
                <img
                  src={src}
                  alt="Dance performance"
                  style={{ width: "100%", height: 340, objectFit: "cover" }}
                />
              </Card>
            </motion.div>
          ))}
        </Wrapper>
      </section>

      <section>
        <Wrapper style={{ paddingBottom: 28 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div style={sectionTitle}>Testimonials</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, letterSpacing: "-0.03em" }}>
              Trusted to create moments people remember.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
            paddingBottom: 84,
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card style={{ padding: 28, minHeight: 250 }}>
                <div style={{ display: "flex", gap: 4, opacity: 0.72, marginBottom: 18 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div style={{ fontSize: 20, lineHeight: 1.8, color: "rgba(255,255,255,0.78)" }}>“{item.quote}”</div>
                <div style={{ marginTop: 24, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.46)" }}>
                  {item.name}
                </div>
              </Card>
            </motion.div>
          ))}
        </Wrapper>
      </section>

      <section id="contact">
        <Wrapper style={{ paddingBottom: 96 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <Card
              style={{
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 30,
                  padding: 32,
                }}
              >
                <div>
                  <div style={sectionTitle}>Book us</div>
                  <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: 0, marginBottom: 18, letterSpacing: "-0.03em" }}>
                    Let’s create something unforgettable.
                  </h2>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 620 }}>
                    Reach out for performances, choreography, workshops, private coaching, wedding dance services,
                    or destination bookings.
                  </p>

                  <div style={{ display: "grid", gap: 14, marginTop: 26, color: "rgba(255,255,255,0.78)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Mail size={18} />
                      <span>dance@stasmarketa.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Phone size={18} />
                      <span>Marketa: 617-678-3197 · Stas: 617-775-5365</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <MapPin size={18} />
                      <span>Boston, MA · Dance Fever Studio · 200 Wells Ave, Newton, MA 02459</span>
                    </div>
                  </div>
                </div>

                <form
                  name="booking"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  style={{
                    display: "grid",
                    gap: 14,
                    padding: 24,
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.18)",
                  }}
                >
                  <input type="hidden" name="form-name" value="booking" />
                  <p style={{ display: "none" }}>
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>

                  <input name="name" placeholder="Your name" style={inputStyle} />
                  <input name="email" type="email" placeholder="Email" style={inputStyle} />
                  <input name="service" placeholder="Performance, lesson, wedding, or collaboration" style={inputStyle} />
                  <textarea name="message" rows={5} placeholder="Tell us about your event or goals" style={{ ...inputStyle, resize: "vertical" }} />
                  <button type="submit" style={submitStyle}>
                    Send Inquiry <ArrowRight size={16} />
                  </button>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.46)", lineHeight: 1.7 }}>
                    This form is set up with Netlify form attributes so it can be captured during deployment.
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </Wrapper>
      </section>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

const submitStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  padding: "15px 18px",
  borderRadius: 18,
  border: "none",
  background: "white",
  color: "#111111",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
};
