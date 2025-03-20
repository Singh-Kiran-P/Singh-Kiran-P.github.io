"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Code2, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Top 10 Algorithmic Minds",
    description:
      "Recognized as one of the top 10 algorithmic minds in Belgium during the Vlaamse programmeerwedstrijd 2022.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Excellence",
    description: "Reached the top 10% out of 282 teams in the finals of Belgium's CTF challenge in cybersecurity.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Startup Funding Success",
    description:
      "Helped a startup secure crucial initial funding by developing a prototype that positioned them as industry leaders.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Visionary Collaborations",
    description: "Worked with CTOs, CEOs, and product managers, expanding technical proficiency and leadership skills.",
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
    <section ref={ref} id="achievements" className="w-full py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Professional Achievements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Recognition & Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My work has been recognized in competitive environments and has created tangible value for organizations
            across various sectors.
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
              <Card className="h-full bg-background/50 backdrop-blur-sm">
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

