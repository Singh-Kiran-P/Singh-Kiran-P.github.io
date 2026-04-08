"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CollaborateSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-border/30">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-sky-500/30 via-primary/60 to-blue-600/40 rounded-3xl p-8 md:p-12 text-white text-center border border-primary/30 shadow-2xl shadow-primary/30"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Who This Is For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8"
          >
            Companies with data that isn't informing decisions. Teams stuck between prototype and production. Founders
            who need systems that survive scale. Organizations that value correctness over hype.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-left grid gap-3 max-w-3xl mx-auto text-lg"
          >
            {[
              "If you want experimentation, hire a lab.",
              "If you want results, hire KsCode.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/80" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#contact">
              <Button size="lg" variant="secondary" className="group text-primary hover:text-primary">
                Talk to KsCode
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
