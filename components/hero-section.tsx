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
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <motion.div className="container max-w-5xl mx-auto text-center relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ opacity, y }} > <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium" > Data Science & Software Engineering </motion.div> <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} > Smart, Scalable Solutions<br className="hidden md:block" /> <span className="text-primary">That Drive Your Growth</span> </motion.h1> <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} > At KsCode, we help businesses unlock the power of data and modern engineering to streamline operations, make smarter decisions, and build impactful applications that create real-world value. </motion.p> <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} > <Link href="#projects"> <Button size="lg" className="group"> View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> </Button> </Link> <Link href="https://webchat.kscode.eu" target="_blank"> <Button size="lg" variant="outline" className="gap-2"> <MessageCircle className="h-4 w-4" /> Latest Project </Button> </Link> </motion.div> </motion.div>

    </section>
  )
}

