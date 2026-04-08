"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_30%)]"
        style={{ opacity }}
      />

      <motion.div
        className="container max-w-6xl mx-auto text-left relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ opacity, y }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary/15 text-primary rounded-full text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Decision latency killer
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_8px_rgba(14,165,233,0.16)]" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Data systems that reduce cost, increase speed, and de-risk decisions
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              I design and build production-grade data and software systems that replace manual processes, surface
              decision-critical insights, and scale without rewrites. Businesses hire KsCode when experimentation is over
              and execution matters.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {["Production AI", "Cloud-native data", "Microservices", "Security first"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link href="#contact">
                <Button size="lg" className="group">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/cv">
                <Button size="lg" variant="outline" className="gap-2 border-primary/40 text-primary hover:text-primary">
                  <MessageCircle className="h-4 w-4" />
                  View CV
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {[
                { title: "Health", body: "Recommendation engines and decision support that ship to production." },
                { title: "Energy", body: "P2P energy platforms, forecasting, and resilience for critical workloads." },
                { title: "LLM systems", body: "Retrieval, evaluation, guardrails, and MLOps for dependable AI." },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-sm uppercase tracking-[0.12em] text-primary">{card.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/25 via-slate-900 to-slate-950 p-6 shadow-2xl shadow-primary/20"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Decision cockpit</p>
              <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs text-primary">Live</span>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-950/70 border border-primary/20 p-4">
              <p className="text-sm text-muted-foreground">Decision latency</p>
              <p className="text-4xl font-bold text-primary mt-2">-68%</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-primary">Data freshness</p>
                  <p className="text-lg text-foreground">Real-time</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-primary">Reliability</p>
                  <p className="text-lg text-foreground">99.9%</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-primary">Delivery</p>
                  <p className="text-lg text-foreground">Architecture to prod</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-primary">Ops</p>
                  <p className="text-lg text-foreground">MLOps + DevOps</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Security and compliance</span>
                <span className="text-primary font-semibold">Built-in</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cloud and on-prem ready</span>
                <span className="text-primary font-semibold">Hybrid</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintainability</span>
                <span className="text-primary font-semibold">First-class</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["AWS", "Azure", "LLMs", "Terraform", "FastAPI", "Kubernetes"].map((item) => (
                <span key={item} className="rounded-full bg-slate-900/80 border border-primary/25 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
