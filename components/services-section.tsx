"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, ShoppingCart, BarChart3, Headphones, Code, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies for optimal performance and user experience.",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Powerful online stores that drive sales with seamless checkout processes and inventory management.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Business Management",
    description: "Comprehensive systems to streamline operations, improve efficiency, and boost productivity.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "IT Support",
    description: "Reliable technical support to keep your digital assets running smoothly and securely.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description: "Tailored software solutions designed to address your specific business challenges.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that provide seamless experiences across all devices.",
  },
]

export function ServicesSection() {
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
    <section ref={ref} className="w-full py-20 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a full range of services to help businesses thrive in the digital landscape, from web development
            to mobile applications and everything in between.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

