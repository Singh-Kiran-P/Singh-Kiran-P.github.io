"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Code, BarChart3, Shield, Server, GitBranch } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const expertise = [
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data Science",
    description:
      "Building predictive models, data pipelines, and analytics solutions that extract actionable insights from complex datasets.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Software Engineering",
    description:
      "Developing scalable, maintainable applications with clean architecture and modern development practices.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Machine Learning",
    description:
      "Implementing ML algorithms and deep learning models to solve complex problems and automate decision-making processes.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Cybersecurity",
    description:
      "Securing applications and networks against threats with expertise in vulnerability assessment and penetration testing.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "DevOps & Cloud",
    description:
      "Streamlining development workflows with CI/CD pipelines and cloud infrastructure automation for optimal performance.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: "Open Source",
    description:
      "Contributing to and maintaining open source projects that advance the state of technology and foster community collaboration.",
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
    <section ref={ref} id="expertise" className="w-full py-20 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Technical Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Specialized Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My technical foundation spans multiple domains, allowing me to approach problems holistically and implement
            comprehensive solutions that deliver real impact.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

