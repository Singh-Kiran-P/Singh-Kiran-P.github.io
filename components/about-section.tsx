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
            src="/placeholder.svg?height=600&width=600"
            alt="Kiran Singh"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Building Impactful Applications Through Data & Code
          </h2>
          <p className="text-lg text-muted-foreground">
            I hold a master's degree in computer science with a specialization in data science and computer
            networking/security. I'm passionate about collaborating with clients to overcome significant business
            challenges and drive revenue growth through cutting-edge technologies like machine learning.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey began at age 12 when I started programming, and by 2019, I was building software for clients.
            Throughout both my bachelor's and master's studies, I worked as a consultant, gaining hands-on experience
            while studying full-time.
          </p>
          <ul className="space-y-3">
            {[
              "Machine Learning & Data Science",
              "Software Engineering & DevOps",
              "System Architecture",
              "Cybersecurity & Networking",
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

