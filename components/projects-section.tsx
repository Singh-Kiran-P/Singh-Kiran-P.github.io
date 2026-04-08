"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mlProjects = [
  {
    title: "Health Management Platform",
    description:
      "A next-generation recommendation engine for health management, utilizing AWS and on-premises services to enhance patient care.",
    image: "/images/health-management.png",
    tags: ["AWS", "Machine Learning", "Big Data", "Python", "Terraform"],
  },
  {
    title: "LLM Knowledge Chat Assistant",
    description:
      "Developed a chatbot using Large Language Models (LLMs) with Azure AI services, integrating microservices for scalable interactions.",
    image: "/images/llm-chatbot.png",
    tags: ["Azure ML", "LLMs", "Python", "C#", "Prompt Engineering"],
  },
  {
    title: "Water Leakage Detection",
    description:
      "Built an end-to-end AI pipeline to detect water leakages, optimizing resource usage and minimizing environmental impact.",
    image: "/images/water-leakage.png",
    tags: ["AI", "Pyspark", "MLOps", "Python", "Docker"],
  },
]

const softwareProjects = [
  {
    title: "Energy Sharing Platform",
    description:
      "Developed a peer-to-peer energy sharing platform to foster a sustainable ecosystem using microservices and automation.",
    image: "/images/energy-sharing.png",
    tags: ["Microservices", "PostgreSQL", "Azure Databricks", "Python"],
  },
  {
    title: "PriceMonitor",
    description:
      "Implemented AI-driven data science solutions for pricing strategy optimization, improving revenue management for businesses.",
    image: "/images/price-monitor.png",
    tags: ["Azure ML", "MLOps", "Power BI", "Python"],
  },
  {
    title: "Automation of Data Entry Process",
    description:
      "Developed a custom script to transform unstructured Excel data into an optimized format for seamless Shopify integration.",
    image: "/images/data-entry.png",
    tags: ["Python", "Shopify", "ETL", "Data Engineering"],
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="projects" className="w-full py-20 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Impactful Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of projects that demonstrate my technical capabilities and commitment to building solutions that
            create real-world impact.
          </motion.p>
        </div>

        <h3 className="text-2xl font-semibold mb-6">Machine Learning Projecten</h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mlProjects.map((project, index) => (
            <motion.div key={index}>
              <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm">
                <div className="relative h-48 w-full overflow-hidden">
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

        <h3 className="text-2xl font-semibold mb-6">Software Engineering Projecten</h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProjects.map((project, index) => (
            <motion.div key={index}>
              <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm">
                <div className="relative h-48 w-full overflow-hidden">
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
