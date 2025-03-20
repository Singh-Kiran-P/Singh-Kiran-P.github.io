"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Code2, Users, Award } from "lucide-react"

const stats = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: 150,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    value: 50,
    label: "Apps Developed",
    suffix: "+",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 99,
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: 15,
    label: "Industry Awards",
    suffix: "",
  },
]

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="w-full py-16 bg-primary/5">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">{stat.icon}</div>
              <div className="flex items-end justify-center mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="text-4xl font-bold"
                >
                  <Counter from={0} to={stat.value} duration={2} />
                </motion.span>
                <span className="text-2xl font-bold">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterProps {
  from: number
  to: number
  duration: number
}

function Counter({ from, to, duration }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  const formatValue = (value: number) => Math.floor(value)

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <motion.span
            initial={{ value: from }}
            animate={{ value: to }}
            transition={{ duration }}
            onUpdate={(latest) => {
              if (ref.current) {
                ref.current.textContent = formatValue(latest.value).toString()
              }
            }}
          />
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  )
}

