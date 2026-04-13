import React, { useEffect, useRef, useState } from "react";
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

const galleryImageNames = [
  "dance1.jpg",
  "dance2.jpg",
  "dance3.jpg",
  "dance4.jpg",
  "dance5.jpg",
  "dance6.jpg",
  "dance7.jpg",
  "dance8.jpg",
  "dance9.jpg",
  "dance10.jpg",
  "dance11.jpg",
  "dance12.jpg",
  "dance13.jpg",
  "dance14.jpg",
];

const gallery = galleryImageNames.map((name) => `/images/${name}`);

const achievements = [
  "Finalists of the WDC European Championships Professional Latin 2025",
  "Winners of the British Open Professional Rising Stars Latin 2024",
  "Semifinalists of the British Open Professional Latin 2024",
  "Finalists of the World Professional Latin Showdance Championships 2024",
  "Finalists of the British Open Professional Latin Rising Stars 2023",
  "Finalists of the International Championships Rising Stars Latin 2023",
  "Winners of the Dutch Open Assen Professional Rising Stars Latin 2022",
  "Semifinalists of the European Professional Latin Championships 2022 and 2024",
  "Semifinalists of the World Professional Latin Championships 2022",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Wrapper({ children, style, isMobile }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1240,
        margin: "0 auto",
        paddingLeft: isMobile ? 14 : 36,
        paddingRight: isMobile ? 14 : 36,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div
      style={{
        fontSize: 12,
        letterSpacing: "0.26em",
        textTransform: "uppercase",
        color: dark ? "rgba(0,0,0,0.42)" : "rgba(255,255,255,0.48)",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function Frame({ children, style }) {
  return (
    <div
      style={{
        background: "rgba(11,11,13,0.94)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.42)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, href = "#contact", fullWidth = false }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: fullWidth ? "100%" : 190,
        maxWidth: fullWidth ? "100%" : 190,
        height: 54,
        background: "#8c1217",
        color: "#f7f2ed",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.08)",
        fontSize: 14,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href = "#services", fullWidth = false }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : 190,
        maxWidth: fullWidth ? "100%" : 190,
        height: 54,
        background: "transparent",
        color: "rgba(255,255,255,0.92)",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.18)",
        fontSize: 14,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </a>
  );
}

function AchievementRow({ text, isMobile }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "18px 1fr" : "22px 1fr",
        gap: 12,
        padding: isMobile ? "12px 0" : "14px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ color: "#8c1217", fontSize: 16, lineHeight: 1 }}>✦</div>
      <div
        style={{
          color: "rgba(255,255,255,0.84)",
          lineHeight: 1.6,
          fontSize: isMobile ? 14 : 15,
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default function BallroomWebsite() {
  const galleryRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1100;
  const galleryScrollAmount = isMobile ? 300 : 460;

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({
      left: direction === "next" ? galleryScrollAmount : -galleryScrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 85% 12%, rgba(140,18,23,0.24), transparent 20%), radial-gradient(circle at 10% 86%, rgba(110,14,18,0.16), transparent 24%), linear-gradient(180deg, #0a0a0a 0%, #111111 48%, #151515 100%)",
        color: "#f7f2ed",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section>
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 18 : 26, paddingBottom: isMobile ? 54 : 82 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: isMobile ? "wrap" : "nowrap",
              borderBottom: "1px solid rgba(255,255,255,0.10)",
              paddingBottom: 16,
              marginBottom: isMobile ? 18 : 28,
            }}
          >
            <div
              style={{
                width: isMobile ? "100%" : "auto",
                textAlign: isMobile ? "center" : "left",
                fontFamily: '"Times New Roman", Georgia, serif',
                fontSize: isMobile ? 24 : 34,
                letterSpacing: "0.05em",
              }}
            >
              STAS &amp; MARKETA
            </div>
            <div
              style={{
                width: isMobile ? "100%" : "auto",
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                gap: isMobile ? 12 : 24,
                flexWrap: "wrap",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.62)",
              }}
            >
              <a href="#about" style={navLink}>About</a>
              <a href="#services" style={navLink}>Services</a>
              <a href="#gallery" style={navLink}>Gallery</a>
              <a href="#contact" style={navLink}>Contact</a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.95fr 1.05fr",
              gap: isMobile ? 22 : 36,
              alignItems: "stretch",
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Frame
                style={{
                  padding: isMobile ? 16 : 42,
                  minHeight: isMobile ? "auto" : 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: isMobile ? "center" : "flex-start",
                      gap: isMobile ? 8 : 10,
                      padding: isMobile ? "9px 10px" : "10px 14px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.72)",
                      fontSize: isMobile ? 10 : 12,
                      letterSpacing: isMobile ? "0.03em" : "0.06em",
                      marginBottom: isMobile ? 20 : 36,
                      width: isMobile ? "100%" : "auto",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  >
                    <Trophy size={15} /> Professional Ballroom Dancers · Performers · Coaches
                  </div>

                  <div
                    style={{
                      textAlign: isMobile ? "center" : "left",
                      maxWidth: isMobile ? "100%" : 500,
                    }}
                  >
                    <SectionLabel>Stas &amp; Marketa</SectionLabel>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      style={{
                        margin: 0,
                        fontFamily: '"Times New Roman", Georgia, serif',
                        fontSize: isMobile ? "clamp(2.05rem, 9vw, 3.2rem)" : "clamp(2.35rem, 3.1vw, 4rem)",
                        lineHeight: isMobile ? 0.94 : 0.88,
                        maxWidth: isMobile ? "100%" : 500,
                        wordBreak: "keep-all",
                        overflowWrap: "normal",
                        textWrap: "balance",
                        fontWeight: 400,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      Ballroom artistry<br />with elegance,<br />intensity, and<br />unforgettable<br />presence.
                    </motion.h1>

                    <p
                      style={{
                        marginTop: 28,
                        marginBottom: 0,
                        maxWidth: isMobile ? 620 : 520,
                        color: "rgba(255,255,255,0.72)",
                        fontSize: isMobile ? 15 : 16.5,
                        lineHeight: 1.7,
                        marginLeft: isMobile ? "auto" : 0,
                        marginRight: isMobile ? "auto" : 0,
                      }}
                    >
                      We are a professional ballroom partnership available for luxury performances,
                      coaching, choreography, destination events, weddings, and select collaborations.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: isMobile ? 34 : 46 }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "190px 190px",
                      gap: 12,
                      justifyContent: isMobile ? "stretch" : "start",
                      marginBottom: 28,
                    }}
                  >
                    <PrimaryButton href="#contact" fullWidth={isMobile}>
                      Book us <ArrowRight size={15} />
                    </PrimaryButton>
                    <SecondaryButton href="#services" fullWidth={isMobile}>
                      Explore services
                    </SecondaryButton>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
                      gap: isMobile ? 8 : 0,
                      borderTop: "1px solid rgba(255,255,255,0.10)",
                      textAlign: isMobile ? "center" : "left",
                      alignItems: "stretch",
                    }}
                  >
                    {[
  ["Available for performances,", "coaching, and events"],
  ["Based in Boston, MA ·", "Dance Fever Studio"],
  ["Ideal for weddings,", "showcases, and premium entertainment"],
].map((lines, index) => (
  <div
    key={index}
    style={{
      padding: isMobile ? "12px 0 0" : "18px 18px 0 18px",
      borderRight:
        !isMobile && index < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
      color: "rgba(255,255,255,0.64)",
      lineHeight: isMobile ? 1.7 : 1.75,
      fontSize: isMobile ? 14 : 15,
      minHeight: isMobile ? "auto" : 86,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isMobile ? "center" : "flex-start",
      maxWidth: isMobile ? "100%" : 220,
    }}
  >
    {lines.map((line, i) => (
      <span key={i}>{line}</span>
    ))}
  </div>
))}
                  </div>
                </div>
              </Frame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isTablet ? "auto auto" : "1.15fr 0.85fr",
                  gap: isMobile ? 18 : 22,
                  minHeight: isMobile ? "auto" : 600,
                }}
              >
                <Frame style={{ overflow: "hidden", position: "relative" }}>
                  <img
                    src="/images/hero.jpg"
                    alt="Stas & Marketa dancing"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: isMobile ? 360 : 430,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.14) 38%, rgba(0,0,0,0.78) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: isMobile ? 18 : 26,
                      right: isMobile ? 18 : 26,
                      bottom: isMobile ? 18 : 24,
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      alignItems: isMobile ? "center" : "end",
                      gap: 12,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    <div>
                      <div style={overlayLabel}>Featured image</div>
                      <div
                        style={{
                          fontFamily: '"Times New Roman", Georgia, serif',
                          fontSize: isMobile ? 30 : 44,
                          lineHeight: 0.95,
                          textTransform: "uppercase",
                        }}
                      >
                        Achievements
                      </div>
                    </div>
                    <div style={{ ...overlayLabel, textAlign: isMobile ? "center" : "right" }}>
                      WDC · British Open · Blackpool
                    </div>
                  </div>
                </Frame>

                <Frame
                  style={{
                    padding: isMobile ? 20 : 28,
                    background:
                      "linear-gradient(180deg, rgba(11,11,13,0.96) 0%, rgba(17,17,20,0.96) 100%)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        maxWidth: isMobile ? "100%" : 430,
                        width: "100%",
                        margin: isMobile ? "0" : "0 auto",
                      }}
                    >
                      <div style={overlayLabel}>Top results</div>
                      {achievements.slice(0, 6).map((achievement) => (
                        <AchievementRow key={achievement} text={achievement} isMobile={isMobile} />
                      ))}
                    </div>
                  </div>
                </Frame>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      <section id="services">
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 28 : 54, paddingBottom: isMobile ? 56 : 88 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.85fr 1.15fr",
              gap: isMobile ? 18 : 32,
              alignItems: "end",
              marginBottom: 28,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionLabel>What we offer</SectionLabel>
              <h2
                style={{
                  margin: 0,
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "clamp(2.2rem, 4.2vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                }}
              >
                Performance, coaching, choreography, and elevated event experiences.
              </h2>
            </motion.div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: 0,
              borderTop: "1px solid rgba(255,255,255,0.10)",
              borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {services.map((service, index) => {
  const Icon = service.icon;

  const videoMap = {
    "Professional Performances": "/videos/PROFESSIONAL PERFORMANCES.mp4",
    "Private Coaching": "/videos/PRIVATE COACHING.mp4",
    "Choreography & Showcases": "/videos/CHOREOGRAPHY & SHOWCASES.mp4",
  };

  const videoSrc = videoMap[service.title];

  return (
    <motion.div
      key={service.title}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
      whileHover={!isMobile ? { y: -4 } : undefined}
      style={{
        borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.10)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        position: "relative",
        overflow: "hidden",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {!isMobile && videoSrc && (
        <motion.video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.85) contrast(1.05) saturate(0.95)",
          }}
        />
      )}

      <motion.div
        initial={false}
        whileHover={!isMobile ? { background: "rgba(0,0,0,0.48)" } : undefined}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 0.6px, transparent 0.6px)",
            backgroundSize: "6px 6px",
            mixBlendMode: "soft-light",
            opacity: 0.18,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: isMobile ? 22 : 30,
          minHeight: isMobile ? "auto" : 280,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              width: 54,
              height: 54,
              border: "1px solid rgba(255,255,255,0.12)",
              display: "grid",
              placeItems: "center",
              marginBottom: 24,
              color: "#8c1217",
              marginLeft: isMobile ? "auto" : 0,
              marginRight: isMobile ? "auto" : 0,
              backdropFilter: !isMobile ? "blur(4px)" : "none",
              background: !isMobile ? "rgba(0,0,0,0.22)" : "transparent",
            }}
          >
            <Icon size={24} />
          </div>

          <h3
            style={{
              margin: 0,
              fontFamily: '"Times New Roman", Georgia, serif',
              fontSize: isMobile ? 34 : 40,
              lineHeight: 0.95,
              fontWeight: 400,
              textTransform: "uppercase",
              textShadow: !isMobile ? "0 10px 30px rgba(0,0,0,0.35)" : "none",
            }}
          >
            {service.title}
          </h3>
        </div>

        <p
          style={{
            marginTop: 18,
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.8,
            fontSize: 16,
            maxWidth: isMobile ? 500 : 340,
            marginLeft: isMobile ? "auto" : 0,
            marginRight: isMobile ? "auto" : 0,
            textShadow: !isMobile ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
          }}
        >
          {service.text}
        </p>
      </div>
    </motion.div>
  );
})}
          </div>
        </Wrapper>
      </section>

      <section id="about" style={{ background: "#f2efeb", color: "#171717" }}>
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 88, paddingBottom: isMobile ? 56 : 88 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr",
              gap: isMobile ? 22 : 36,
              alignItems: "start",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel dark>About us</SectionLabel>
              <div style={{ display: "grid", gap: 18 }}>
                <img
                  src="/images/dance3.jpg"
                  alt="Stas and Marketa portrait"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ textAlign: isMobile ? "center" : "left" }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: 20,
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "clamp(2rem, 3.8vw, 3.8rem)",
                  lineHeight: 0.96,
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  color: "#8c1217",
                }}
              >
                A partnership built on technique, trust, and striking performance.
              </h2>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.9, color: "rgba(0,0,0,0.74)" }}>
                Stas Olarescu (Moldova) and Markéta Vlčková (Prague) are a professional Latin
                partnership combining elite competitive results with a refined artistic background.
                <br />
                <br />
                Stas began dancing at 7 and rose quickly through international ranks, becoming a
                Romanian National Amateur Champion before representing Singapore at major global
                events, including WDSF Grand Slams. He later transitioned to the professional
                circuit, competing at the world’s most prestigious events such as Blackpool, the UK
                Open, and World Championships.
                <br />
                <br />
                Markéta grew up in a highly artistic family and trained from an early age in ballet,
                piano, and ballroom. She achieved national finals in the Czech Republic before
                continuing her career in Poland under world-class coaches, competing internationally
                at Blackpool, UK Championships, and World Championships. Alongside her dance career,
                she graduated with First-Class Honours from King’s College London.
                <br />
                <br />
                Since forming their partnership in 2017, they have built an international career
                across Denmark, London, and Europe. Now competing professionally, they are British
                Open Rising Star Champions and European Championship finalists, known for combining
                technical precision with expressive, high-impact performance.
                <br />
                <br />
                Together, they bring world-class competitive experience, international recognition,
                and a distinctive artistic identity to every performance and coaching experience.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 18,
                  marginTop: 24,
                }}
              >
                <div
                  style={{
                    padding: 22,
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "rgba(255,255,255,0.66)",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(0,0,0,0.42)",
                      fontSize: 12,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Specialties
                  </div>
                  <div style={{ fontSize: 18, lineHeight: 1.7 }}>
                    Technique, partnering, choreography, presence, musicality
                  </div>
                </div>
                <div
                  style={{
                    padding: 22,
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "rgba(255,255,255,0.66)",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(0,0,0,0.42)",
                      fontSize: 12,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Based in
                  </div>
                  <div style={{ fontSize: 18, lineHeight: 1.7 }}>
                    Boston, MA · Dance Fever Studio
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      <section id="gallery">
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 86, paddingBottom: isMobile ? 56 : 88 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.85fr 1.15fr",
              gap: isMobile ? 18 : 32,
              alignItems: "end",
              marginBottom: 24,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2
                style={{
                  margin: 0,
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "clamp(2.3rem, 5.6vw, 4.8rem)",
                  lineHeight: 0.95,
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Moments from performance, competition, and collaboration.
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "space-between",
                gap: 16,
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.8,
                  fontSize: 16,
                  maxWidth: 420,
                }}
              >
                Swipe or use the arrows to move through competition and portrait imagery.
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button type="button" onClick={() => scrollGallery("prev")} style={galleryNavButton}>
                  ←
                </button>
                <button type="button" onClick={() => scrollGallery("next")} style={galleryNavButton}>
                  →
                </button>
              </div>
            </div>
          </div>

          <div
            ref={galleryRef}
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: isMobile ? "86%" : "minmax(340px, 33%)",
              gap: 18,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: 8,
              scrollbarWidth: "thin",
            }}
          >
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#0d0d0f",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={src}
                    alt={`Dance performance ${index + 1}`}
                    style={{
                      width: "100%",
                      height: isMobile ? 440 : 560,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section style={{ background: "#f2efeb", color: "#171717" }}>
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 86, paddingBottom: isMobile ? 56 : 88 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.82fr 1.18fr",
              gap: isMobile ? 18 : 34,
              alignItems: "end",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <div>
              <SectionLabel dark>Testimonials</SectionLabel>
              <h2
                style={{
                  margin: 0,
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
                  lineHeight: 0.95,
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Trusted to create moments people remember.
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: 0,
              marginTop: 28,
              borderTop: "1px solid rgba(0,0,0,0.12)",
              borderLeft: isMobile ? "none" : "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                style={{
                  borderRight: isMobile ? "none" : "1px solid rgba(0,0,0,0.12)",
                  borderBottom: "1px solid rgba(0,0,0,0.12)",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <div style={{ padding: isMobile ? 22 : 28, minHeight: isMobile ? "auto" : 280 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      marginBottom: 20,
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#8c1217" color="#8c1217" />
                    ))}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Times New Roman", Georgia, serif',
                      fontSize: isMobile ? 28 : 34,
                      lineHeight: 1.05,
                      marginBottom: 18,
                    }}
                  >
                    “{item.quote}”
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(0,0,0,0.44)",
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="contact">
        <Wrapper
          isMobile={isMobile}
          style={{ paddingTop: isMobile ? 56 : 86, paddingBottom: isMobile ? 64 : 96 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "0.82fr 1.18fr",
              gap: isMobile ? 22 : 34,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <div>
              <SectionLabel>Book us</SectionLabel>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: 18,
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontSize: "clamp(2.4rem, 5vw, 4.6rem)",
                  lineHeight: 0.95,
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Let’s create something unforgettable.
              </h2>
              <p
                style={{
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.70)",
                  maxWidth: 520,
                  marginLeft: isMobile ? "auto" : 0,
                  marginRight: isMobile ? "auto" : 0,
                }}
              >
                Reach out for performances, choreography, workshops, private coaching, wedding
                dance services, or destination bookings.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 14,
                  marginTop: 30,
                  color: "rgba(255,255,255,0.78)",
                  justifyItems: isMobile ? "center" : "start",
                }}
              >
                <div style={contactRow}>
                  <Mail size={18} />
                  <a href="mailto:dance@stasmarketa.com" style={contactLink}>
                    dance@stasmarketa.com
                  </a>
                </div>
                <div style={contactRow}>
                  <Phone size={18} />
                  <span style={{ lineHeight: 1.8 }}>
                    <a href="tel:16176783197" style={contactLink}>
                      Marketa: 617-678-3197
                    </a>
                    <br />
                    <a href="tel:16177755365" style={contactLink}>
                      Stas: 617-775-5365
                    </a>
                  </span>
                </div>
                <div style={{ ...contactRow, alignItems: "flex-start" }}>
                  <MapPin size={18} style={{ marginTop: 4, flexShrink: 0 }} />
                  <a
                    href="https://maps.google.com/?q=Dance+Fever+Studio+200+Wells+Ave+Newton+MA+02459"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...contactLink, lineHeight: 1.8 }}
                  >
                    Boston, MA · Dance Fever Studio
                    <br />
                    200 Wells Ave, Newton, MA 02459
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <form
                name="booking"
                method="POST"
                action="/success/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                style={{ display: "grid", gap: 16, padding: isMobile ? 22 : 30 }}
              >
                <input type="hidden" name="form-name" value="booking" />
                <p style={{ display: "none" }}>
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <input type="text" name="name" placeholder="Your name" required style={inputStyle} />
                <input type="email" name="email" placeholder="Your email" required style={inputStyle} />
                <input
                  type="text"
                  name="service"
                  placeholder="Type of inquiry (lessons, performance, wedding...)"
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  rows={isMobile ? 4 : 5}
                  placeholder="Tell us more about your request"
                  required
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <button type="submit" style={submitStyle}>
                  Send Inquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

const navLink = {
  color: "inherit",
  textDecoration: "none",
};

const overlayLabel = {
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.58)",
};

const contactRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const contactLink = {
  color: "inherit",
  textDecoration: "none",
};

const inputStyle = {
  appearance: "none",
  width: "100%",
  padding: "16px 18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "transparent",
  color: "white",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

const galleryNavButton = {
  width: 48,
  height: 48,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
  fontSize: 20,
};

const submitStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  height: 54,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#8c1217",
  color: "#f7f2ed",
  fontWeight: 600,
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  cursor: "pointer",
};
