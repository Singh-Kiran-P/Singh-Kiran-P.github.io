"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Code2, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Top-10 national algorithmic placement (Belgium)",
    description: "Scored top-10 in the Vlaamse programmeerwedstrijd national contest.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Top 10% finalist in national cybersecurity CTF",
    description: "Competed against 282 teams and reached the finals.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Prototypes that unlocked funding",
    description: "Built prototypes that enabled early-stage startups to secure funding.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Production work across domains",
    description: "Delivered systems used in health, energy, and data-intensive environments. Not academic. Applied.",
  },
]

export function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section ref={ref} id="proof" className="w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-border/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Proof of Competence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Defensible signals, not fluff
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Outcome-oriented work and competitive results that translate into working systems.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-slate-900/80 backdrop-blur-sm border-primary/15 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">{achievement.icon}</div>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
