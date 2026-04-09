import React, { useEffect, useState } from "react";
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

const achievements = [
  "Finalists of the WDC European Championships Professional Latin 2025",
  "Winners of the British Open Professional Latin Rising Stars 2024",
  "Semifinalists of the British Open Professional Latin 2024",
  "5th place at the World Professional Latin Showdance Championships 2024",
  "Semifinalists of the Dutch Open Assen Professional Latin 2024",
  "4th place at the British Open Professional Latin Rising Stars 2023",
  "5th place at the International Championships Latin Rising Stars 2023",
  "Winners of the Dutch Open Assen Professional Latin Rising Stars 2022",
  "Semifinalists of the British Open Professional Latin Rising Stars 2022",
  "Semifinalists of the UK Open Professional Latin Rising Stars 2022",
  "Semifinalists of the European Professional Latin Championships 2022 and 2024",
  "Semifinalists of the World Professional Latin Championships 2022",
];

const featureCards = [
  {
    icon: Star,
    title: "Luxury event entertainment",
    text: "Sophisticated live performance for private and premium events.",
  },
  {
    icon: Video,
    title: "Visual storytelling",
    text: "Ideal for campaigns, content, reels, promo videos, and cinematic moments.",
  },
  {
    icon: Calendar,
    title: "Private lessons & intensives",
    text: "Focused coaching for couples, amateurs, teachers, and competitors.",
  },
  {
    icon: Globe,
    title: "Destination bookings",
    text: "Available for guest coaching, destination weddings, and select travel dates.",
  },
];

const sectionTitle = {
  fontSize: "0.85rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "rgba(212,175,55,0.82)",
  marginBottom: "12px",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Wrapper({ children, style, isMobile }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        paddingLeft: isMobile ? 16 : 24,
        paddingRight: isMobile ? 16 : 24,
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
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.16)",
        borderRadius: 28,
        boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CTAButton({ children, href = "#contact", secondary = false, fullWidth = false }) {
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
        border: secondary ? "1px solid rgba(212,175,55,0.28)" : "1px solid transparent",
        background: secondary
          ? "transparent"
          : "linear-gradient(135deg, #f6e7bf 0%, #d4af37 55%, #b8891f 100%)",
        color: secondary ? "white" : "#17120a",
        minWidth: fullWidth ? "100%" : 180,
        width: fullWidth ? "100%" : "auto",
        boxSizing: "border-box",
      }}
    >
      {children}
    </a>
  );
}

function AchievementItem({ text, isMobile }) {
  return (
    <div
      style={{
        padding: 18,
        borderRadius: 20,
        border: "1px solid rgba(212,175,55,0.18)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(212,175,55,0.06))",
      }}
    >
      <div style={{ fontSize: isMobile ? 18 : 20, fontWeight: 600 }}>{text}</div>
    </div>
  );
}

export default function BallroomWebsite() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 10%, rgba(120,119,198,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,120,200,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(212,175,55,0.10), transparent 35%), linear-gradient(180deg, #0b0f1a 0%, #0a0a0f 100%)",
        color: "white",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Wrapper
          isMobile={isMobile}
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? 28 : 40,
            alignItems: "center",
            paddingTop: isMobile ? 24 : 40,
            paddingBottom: isMobile ? 40 : 64,
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 10,
                padding: isMobile ? "10px 12px" : "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(212,175,55,0.25)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(212,175,55,0.08))",
                color: "rgba(255,248,230,0.88)",
                fontSize: isMobile ? 12 : 14,
                lineHeight: 1.5,
                marginBottom: isMobile ? 22 : 28,
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <Trophy size={16} />
              Professional Ballroom Dancers · Performers · Coaches
            </div>

            <div
              style={{
                fontSize: isMobile ? 11 : 13,
                letterSpacing: isMobile ? "0.24em" : "0.35em",
                textTransform: "uppercase",
                color: "rgba(235,215,160,0.78)",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Stas & Marketa
            </div>

            <h1
              style={{
                fontSize: isMobile ? "clamp(2.35rem, 12vw, 3.5rem)" : "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: isMobile ? 0.98 : 0.95,
                margin: isMobile ? "14px 0 16px" : "18px 0 20px",
                letterSpacing: "-0.04em",
                maxWidth: 720,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Ballroom artistry with elegance, intensity, and unforgettable presence.
            </h1>

            <p
              style={{
                fontSize: isMobile ? 16 : 20,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.74)",
                maxWidth: 720,
                marginBottom: isMobile ? 20 : 28,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              We are a professional ballroom partnership available for luxury performances, coaching,
              choreography, destination events, weddings, and select collaborations.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, max-content)",
                gap: 14,
                marginBottom: isMobile ? 22 : 28,
              }}
            >
              <CTAButton href="#contact" fullWidth={isMobile}>
                Book Us <ArrowRight size={16} />
              </CTAButton>
              <CTAButton href="#services" secondary fullWidth={isMobile}>
                Explore Services
              </CTAButton>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
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
                    padding: isMobile ? 14 : 16,
                    borderRadius: 20,
                    border: "1px solid rgba(212,175,55,0.18)",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(212,175,55,0.06))",
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.6,
                    fontSize: isMobile ? 13 : 14,
                    textAlign: isMobile ? "center" : "left",
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
            <Card style={{ padding: isMobile ? 12 : 18 }}>
              <div
                style={{
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.10)",
                  minHeight: isMobile ? "auto" : 620,
                  padding: isMobile ? 16 : 24,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                    color: "rgba(224,197,126,0.82)",
                    fontSize: isMobile ? 12 : 14,
                  }}
                >
                  <span>Achievements</span>
                </div>

                <div>
                  <div style={{ borderRadius: 24, overflow: "hidden", marginTop: 12 }}>
                    <img
                      src="/images/hero.jpg"
                      alt="Stas & Marketa dancing"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: isMobile ? 320 : 520,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 16 }}>
                    {achievements.map((achievement) => (
                      <AchievementItem key={achievement} text={achievement} isMobile={isMobile} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Wrapper>
      </section>

      <section id="services">
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 84, paddingBottom: isMobile ? 18 : 30 }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div style={sectionTitle}>What we offer</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                margin: 0,
                letterSpacing: "-0.03em",
                maxWidth: 780,
              }}
            >
              Performance, coaching, choreography, and elevated event experiences.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          isMobile={isMobile}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            paddingBottom: isMobile ? 56 : 84,
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
                <Card style={{ padding: isMobile ? 22 : 28, minHeight: isMobile ? "auto" : 260 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 18,
                      display: "grid",
                      placeItems: "center",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(212,175,55,0.12))",
                      border: "1px solid rgba(212,175,55,0.22)",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: isMobile ? 24 : 28, marginTop: 22, marginBottom: 12 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.68)" }}>
                    {service.text}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </Wrapper>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <Wrapper
          isMobile={isMobile}
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: isMobile ? 24 : 28,
            alignItems: "center",
            paddingTop: isMobile ? 56 : 84,
            paddingBottom: isMobile ? 56 : 84,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div style={sectionTitle}>About us</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                marginTop: 0,
                marginBottom: 18,
                letterSpacing: "-0.03em",
              }}
            >
              A partnership built on technique, trust, and striking performance.
            </h2>
            <p
              style={{
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.70)",
                maxWidth: 640,
              }}
            >
              Stas Olarescu (Moldova) and Markéta Vlčková (Prague) are a professional Latin partnership combining elite competitive results with a refined artistic background.
              <br />
              <br />
              Stas began dancing at 7 and rose quickly through international ranks, becoming a Romanian National Amateur Champion before representing Singapore at major global events, including WDSF Grand Slams. He later transitioned to the professional circuit, competing at the world’s most prestigious events such as Blackpool, the UK Open, and World Championships.
              <br />
              <br />
              Markéta grew up in a highly artistic family and trained from an early age in ballet, piano, and ballroom. She achieved national finals in the Czech Republic before continuing her career in Poland under world-class coaches, competing internationally at Blackpool, UK Championships, and World Championships. Alongside her dance career, she graduated with First-Class Honours from King’s College London.
              <br />
              <br />
              Since forming their partnership in 2017, they have built an international career across Denmark, London, and Europe. Now competing professionally, they are British Open Rising Star Champions and European Championship finalists, known for combining technical precision with expressive, high-impact performance.
              <br />
              <br />
              Together, they bring world-class competitive experience, international recognition, and a distinctive artistic identity to every performance and coaching experience.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 28,
              }}
            >
              <Card style={{ padding: 22 }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>
                  Ideal for
                </div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>
                  Weddings, galas, luxury events, showcases, intensives
                </div>
              </Card>
              <Card style={{ padding: 22 }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>
                  Specialties
                </div>
                <div style={{ fontSize: 18, lineHeight: 1.6 }}>
                  Technique, partnering, choreography, presence, musicality
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} style={{ padding: 24 }}>
                  <Icon size={26} />
                  <div style={{ fontSize: 24, marginTop: 22, marginBottom: 10 }}>{card.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.66)", lineHeight: 1.7 }}>{card.text}</div>
                </Card>
              );
            })}
          </motion.div>
        </Wrapper>
      </section>

      <section>
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 84, paddingBottom: isMobile ? 20 : 28 }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div style={sectionTitle}>Gallery</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, letterSpacing: "-0.03em" }}>
              Moments from performance, competition, and collaboration.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          isMobile={isMobile}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            paddingBottom: isMobile ? 56 : 84,
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
                  style={{
                    width: "100%",
                    height: isMobile ? 280 : 340,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </Wrapper>
      </section>

      <section>
        <Wrapper isMobile={isMobile} style={{ paddingBottom: isMobile ? 20 : 28 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div style={sectionTitle}>Testimonials</div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, letterSpacing: "-0.03em" }}>
              Trusted to create moments people remember.
            </h2>
          </motion.div>
        </Wrapper>

        <Wrapper
          isMobile={isMobile}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
            paddingBottom: isMobile ? 56 : 84,
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
              <Card style={{ padding: isMobile ? 22 : 28, minHeight: isMobile ? "auto" : 250 }}>
                <div style={{ display: "flex", gap: 4, opacity: 0.9, marginBottom: 18 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 18 : 20,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  “{item.quote}”
                </div>
                <div
                  style={{
                    marginTop: 24,
                    fontSize: 13,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(224,197,126,0.72)",
                  }}
                >
                  {item.name}
                </div>
              </Card>
            </motion.div>
          ))}
        </Wrapper>
      </section>

      <section id="contact">
        <Wrapper isMobile={isMobile} style={{ paddingBottom: isMobile ? 64 : 96 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card
              style={{
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(212,175,55,0.10))",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: isMobile ? 22 : 30,
                  padding: isMobile ? 20 : 32,
                }}
              >
                <div>
                  <div style={sectionTitle}>Book us</div>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      marginTop: 0,
                      marginBottom: 18,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Let’s create something unforgettable.
                  </h2>
                  <p
                    style={{
                      fontSize: isMobile ? 16 : 18,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.72)",
                      maxWidth: 620,
                    }}
                  >
                    Reach out for performances, choreography, workshops, private coaching, wedding dance services,
                    or destination bookings.
                  </p>

                  <div style={{ display: "grid", gap: 14, marginTop: 26, color: "rgba(255,255,255,0.78)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Mail size={18} />
                      <a
                        href="mailto:dance@stasmarketa.com"
                        style={{ color: "inherit", textDecoration: "none", overflowWrap: "anywhere" }}
                      >
                        dance@stasmarketa.com
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Phone size={18} />
                      <span style={{ lineHeight: 1.7 }}>
                        <a href="tel:16176783197" style={{ color: "inherit", textDecoration: "none" }}>
                          Marketa: 617-678-3197
                        </a>
                        <br />
                        <a href="tel:16177755365" style={{ color: "inherit", textDecoration: "none" }}>
                          Stas: 617-775-5365
                        </a>
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <MapPin size={18} style={{ marginTop: 4, flexShrink: 0 }} />
                      <a
                        href="https://maps.google.com/?q=Dance+Fever+Studio+200+Wells+Ave+Newton+MA+02459"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "inherit", textDecoration: "none", lineHeight: 1.7 }}
                      >
                        Boston, MA · Dance Fever Studio
                        <br />
                        200 Wells Ave, Newton, MA 02459
                      </a>
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
                    padding: isMobile ? 18 : 24,
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(20,20,30,0.35)",
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
                  <input
                    name="service"
                    placeholder="Performance, lesson, wedding, or collaboration"
                    style={inputStyle}
                  />
                  <textarea
                    name="message"
                    rows={isMobile ? 4 : 5}
                    placeholder="Tell us about your event or goals"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
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
  appearance: "none",
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
  background: "linear-gradient(135deg, #f6e7bf 0%, #d4af37 55%, #b8891f 100%)",
  color: "#17120a",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
};
