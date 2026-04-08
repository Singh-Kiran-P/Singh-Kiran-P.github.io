"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Health Management Platform",
    description:
      "Built a production recommendation engine integrating cloud and on-prem systems to support data-driven patient care decisions.",
    image: "/images/health-management.png",
    tags: ["Production ML", "Hybrid cloud", "Healthcare"],
  },
  {
    title: "LLM Knowledge Assistant",
    description:
      "Designed and deployed an internal AI assistant using LLMs and microservices to reduce information retrieval time across teams.",
    image: "/images/llm-chatbot.png",
    tags: ["LLMs", "Microservices", "Internal tooling"],
  },
  {
    title: "Water Leakage Detection",
    description: "End-to-end ML pipeline detecting infrastructure leaks to reduce waste and operational cost.",
    image: "/images/water-leakage.png",
    tags: ["IoT", "MLOps", "Cost reduction"],
  },
  {
    title: "Energy Sharing Platform",
    description: "Peer-to-peer energy system enabling automated matching and settlement across distributed users.",
    image: "/images/energy-sharing.png",
    tags: ["Distributed systems", "Automation", "Energy"],
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="projects" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-border/30">
      <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Outcome-oriented delivery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Built for production constraints with measurable business impact. (Full technical details available on
            request.)
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index}>
              <Card className="h-full overflow-hidden bg-slate-900/80 backdrop-blur-sm border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
