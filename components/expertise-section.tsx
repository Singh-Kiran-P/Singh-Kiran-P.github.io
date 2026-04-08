"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Code, Shield, Server, Gauge, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const expertise = [
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data & Machine Learning Systems",
    description:
      "Production ML pipelines, forecasting models, recommendation engines, analytics layers - designed to integrate with real infrastructure and real users.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Software Engineering",
    description:
      "Backend systems, APIs, microservices, and internal tools built for reliability, observability, and scale.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Security & Reliability",
    description:
      "Threat modeling, vulnerability assessment, and system hardening to prevent avoidable incidents.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Architecture & DevOps",
    description:
      "Cloud and hybrid architectures, CI/CD pipelines, infrastructure as code - engineered to reduce failure modes and operational overhead.",
  },
]

export function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} id="services" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-border/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Outcome-first build tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Engineering for production constraints, not demos. Each track is designed to reduce decision latency and
            keep systems alive after delivery.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {expertise.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-slate-900/80 backdrop-blur-sm border-primary/15">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10">{item.icon}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Core outcomes",
              items: ["Reduced decision latency", "Reliable releases", "Operational clarity", "Security from day one"],
              icon: <Gauge className="h-5 w-5 text-primary" />,
            },
            {
              title: "How I work",
              items: ["Architecture to implementation", "MLOps + DevOps integrated", "Cloud + hybrid ready", "Documentation and handover"],
              icon: <Code className="h-5 w-5 text-primary" />,
            },
            {
              title: "Delivery proof",
              items: ["Health platforms in production", "LLM assistants with guardrails", "Energy and IoT systems", "Funding unlocked through prototypes"],
              icon: <CheckCircle className="h-5 w-5 text-primary" />,
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-border/50 bg-slate-900/70 p-5 space-y-3"
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-primary">
                {card.icon}
                {card.title}
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
