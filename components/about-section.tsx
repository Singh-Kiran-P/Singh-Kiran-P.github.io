"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} id="about" className="w-full py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 border-t border-border/40">
      <motion.div
        className="container max-w-6xl mx-auto px-4 space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Decision acceleration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            I build systems that move decisions closer to reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            This work sits at the intersection of data science, software engineering, and systems architecture - implemented, not theorized.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: "I help companies",
              bullets: [
                "Eliminate manual workflows through automation",
                "Turn raw data into deployable decision systems",
                "Ship scalable software without architectural debt",
                "Secure infrastructure before it becomes a liability",
              ],
              accent: "from-sky-500/30 to-slate-900",
            },
            {
              title: "Why KsCode",
              bullets: [
                "Systems that stay alive after delivery",
                "Operate across data, backend, infrastructure, security",
                "Design for production constraints, not demos",
                "Optimize for maintainability, not novelty",
                "You do not get slides. You get working systems.",
              ],
              accent: "from-cyan-500/30 to-slate-900",
            },
            {
              title: "Operating principles",
              bullets: [
                "Decision systems over dashboards",
                "Production-first engineering",
                "Bias to automate recurring ops",
                "Guardrails for reliability and security",
              ],
              accent: "from-blue-500/30 to-slate-900",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              transition={{ delay: 0.1 * index }}
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-40`} />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
