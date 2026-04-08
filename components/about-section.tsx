"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

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
    <section ref={ref} id="about" className="w-full py-20 bg-background">
      <motion.div
        className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
          <Image
            src="/images/img.jpeg"
            alt="Kiran Pal Singh"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            About KsCode
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Partnering With You to Build Impactful Applications
          </h2>
          <p className="text-lg text-muted-foreground">
            KsCode combines deep expertise in data science, software engineering, and networking to help 
            businesses tackle critical challenges and unlock new opportunities. With a master’s degree in 
            computer science and years of hands-on consulting, Kiran brings both technical depth and 
            practical insight to every project.
          </p>
          <p className="text-lg text-muted-foreground">
            From early programming at age 12 to delivering client projects since 2019, KsCode has grown 
            into a trusted partner for organizations seeking scalable, secure, and data-driven solutions 
            that deliver measurable results.
          </p>
          <ul className="space-y-3">
            {[
              "Machine Learning & Data Science – turn data into actionable insights",
              "Software Engineering & DevOps – build scalable, maintainable applications",
              "System Architecture – design reliable, future-ready systems",
              "Cybersecurity & Networking – protect your business with robust security",
            ].map((item, index) => (
              <motion.li key={index} className="flex items-center gap-3" variants={itemVariants}>
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}