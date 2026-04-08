import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Crown,
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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const performances = [
  {
    title: "International Standard",
    text: "Elegant, cinematic ballroom with the precision, flow, and presence expected at the highest level.",
    icon: Crown,
  },
  {
    title: "Show Performances",
    text: "Custom routines for galas, weddings, luxury events, and private celebrations that leave a lasting impression.",
    icon: Sparkles,
  },
  {
    title: "Private Coaching",
    text: "Technique, partnering, musicality, and performance coaching for competitive and social dancers.",
    icon: HeartHandshake,
  },
];

const highlights = [
  "Professional ballroom partnership",
  "Available for performances, coaching, and events",
  "Based in New York and available for travel",
];

const testimonials = [
  {
    name: "Event Director",
    quote:
      "Their performance transformed the entire evening. Sophisticated, emotional, and unforgettable.",
  },
  {
    name: "Competitive Student",
    quote:
      "Clear coaching, world-class technique, and a way of teaching that made everything click instantly.",
  },
  {
    name: "Wedding Client",
    quote:
      "They created a magical first-dance experience and made us feel confident and elegant on the floor.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BallroomWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <Trophy className="h-4 w-4" />
              Professional Ballroom Artists · Performers · Coaches
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Stas & Marketa
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                World-class ballroom with elegance, power, and story.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                We are a professional ballroom dance partnership creating unforgettable performances,
                exceptional coaching, and elevated experiences for competitions, private events,
                weddings, and luxury entertainment.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl px-6 text-base">
                Book a Performance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white">
                View Coaching Options
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-2xl">
              <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-6">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Featured Partnership</span>
                  <span>Available Worldwide</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-black/20 p-8 text-center">
                    <Music className="mx-auto mb-4 h-12 w-12 text-white/70" />
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">Hero Photo Area</p>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/65">
                      Replace this panel with a dramatic full-length performance image or competition portrait.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold">10+</p>
                      <p className="mt-1 text-sm text-white/60">Years of elite experience</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold">Global</p>
                      <p className="mt-1 text-sm text-white/60">Travel for events and coaching</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">What we offer</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Performance, partnership, and premium instruction.</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {performances.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 text-white shadow-xl backdrop-blur">
                  <CardContent className="p-7">
                    <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/10 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-medium">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/70">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">About us</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A partnership built on artistry, trust, and competitive excellence.
            </h2>
            <p className="text-lg leading-8 text-white/72">
              We combine refined ballroom technique with expressive performance to create work that feels both timeless and alive.
              Whether we are on a competition floor, on stage, or coaching in the studio, our goal is the same: deliver beauty with substance.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/50">Ideal for</p>
                <p className="mt-2 text-lg">Competitions, showcases, galas, weddings, intensives</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/50">Specialties</p>
                <p className="mt-2 text-lg">Technique, partnering, choreography, presentation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:translate-y-8">
              <Star className="h-7 w-7" />
              <p className="mt-8 text-2xl font-medium">Luxury event entertainment</p>
              <p className="mt-3 text-white/65">Sophisticated live dance experiences for brands, private clients, and unforgettable evenings.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <Video className="h-7 w-7" />
              <p className="mt-8 text-2xl font-medium">Content-ready visuals</p>
              <p className="mt-3 text-white/65">Perfect for promo videos, social media clips, and cinematic campaign moments.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <Calendar className="h-7 w-7" />
              <p className="mt-8 text-2xl font-medium">Private lessons & intensives</p>
              <p className="mt-3 text-white/65">One-on-one training for couples, amateurs, teachers, and serious competitors.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:-translate-y-8">
              <MapPin className="h-7 w-7" />
              <p className="mt-8 text-2xl font-medium">Travel available</p>
              <p className="mt-3 text-white/65">Available for destination events, guest coaching, and select international bookings.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">Social proof</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trusted to create moments people remember.</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Add logos of events, organizers, studios, championships, or media features here.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 text-white">
                <CardContent className="p-7">
                  <div className="mb-5 flex gap-1 text-white/70">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-white/78">“{item.quote}”</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/45">{item.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
        >
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1fr_0.95fr] lg:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Book us</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to create something unforgettable?
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/72">
                Contact us for performances, choreography, private coaching, workshops, destination events, and collaborations.
              </p>
              <div className="space-y-3 pt-3 text-white/75">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>dance@stasmarketa.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>Add your booking phone number</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>New York, NY · Available for travel</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Your name"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Email"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Event, lesson, or collaboration"
                />
                <textarea
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Tell us what you have in mind"
                />
                <Button size="lg" className="rounded-2xl text-base">
                  Send Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-white/45">
                  This form is a visual placeholder. Connect it to Netlify Forms, Formspree, or your email workflow before launch.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
