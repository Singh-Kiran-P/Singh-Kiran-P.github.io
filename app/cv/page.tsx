 "use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const expertise = [
  "Data Science & Machine Learning (classical ML, deep learning, LLMs)",
  "MLOps / LLMOps / Platform Engineering",
  "Cloud Architecture (AWS, Azure)",
  "Software Engineering (backend, APIs, microservices)",
  "Data Engineering (pipelines, orchestration, warehousing)",
  "Cybersecurity & Networking",
  "System & Solution Architecture",
  "DevOps & Infrastructure as Code",
]

const skills = [
  {
    title: "Programming",
    items: ["Python", "C#", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Scikit-learn",
      "PyTorch",
      "Hugging Face",
      "LLMs (GPT-4, LLaMA, Mistral, Mixtral)",
      "Recommender systems",
      "Statistical ML",
      "Prompt engineering",
      "Evaluation",
      "Human-in-the-loop systems",
    ],
  },
  {
    title: "Data Engineering",
    items: ["DBT", "Airflow", "Dagster", "PySpark", "Pandas", "Databricks", "Synapse", "Data catalogs", "ETL/ELT"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Terraform", "Bicep", "Ansible", "CI/CD (Azure DevOps, GitHub Actions, Jenkins)", "Docker", "Kubernetes", "Proxmox"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "ASP.NET", "C# APIs", "Microservices", "API testing", "Authentication"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MariaDB", "NoSQL", "Data modeling", "Performance optimization"],
  },
  {
    title: "Security & Networking",
    items: ["Firewalls", "VPN (WireGuard)", "DNS", "DDoS protection", "Cloudflare", "IAM", "Penetration testing fundamentals", "CTF experience"],
  },
  {
    title: "Monitoring & Ops",
    items: ["Grafana", "Prometheus", "Observability and reliability engineering"],
  },
]

const experience = [
  {
    role: "Data Scientist / AI Engineer",
    company: "CM - Christelijke Mutualiteit",
    location: "Brussels, Belgium",
    time: "Feb 2025 - Present (Contract)",
    bullets: [
      "Architecting and building a large-scale health management platform.",
      "Designed recommender engines and LLM-enabled components.",
      "Implemented MLOps pipelines and data orchestration.",
      "Balanced delivery speed with long-term system robustness.",
    ],
    stack: ["AWS", "Terraform", "DBT", "Airflow", "Dagster", "FastAPI", "LLMs", "CI/CD"],
  },
  {
    role: "Data Scientist & Data Engineer",
    company: "AE",
    location: "Hybrid",
    time: "Sep 2024 - Present (Full-time)",
    bullets: [
      "Applied data science and algorithmic methods to business and trading problems.",
      "Built analytical pipelines and production ML workflows.",
    ],
    stack: [],
  },
  {
    role: "Founder / Consultant",
    company: "KsCode",
    location: "Belgium",
    time: "2019 - Present",
    bullets: [
      "Delivered data-driven and software solutions for startups and enterprises.",
      "Led architecture, development, and deployment of ML and cloud systems.",
      "Key projects include healthcare platforms, LLM assistants, energy systems, and automation tools.",
    ],
    stack: [],
  },
  {
    role: "Full-Stack Data Scientist",
    company: "Comfort Energy Group",
    location: "Belgium",
    time: "Sep 2024 - Feb 2025 (Contract)",
    bullets: [
      "Built revenue-driven AI products.",
      "Project owner for PriceMonitor.",
      "Designed Azure-based ML and data platforms.",
      "Delivered BI, predictive models, and automation.",
    ],
    stack: ["Azure ML", "Azure DevOps", "Synapse", "DBT", "Power BI", "Azure OpenAI"],
  },
  {
    role: "Cloud AI Architect / AI Engineer",
    company: "Dillen Technologies",
    location: "On-site",
    time: "Jul 2024 - Sep 2024 (Freelance)",
    bullets: [
      "Designed and delivered an LLM knowledge chat assistant.",
      "Built C# APIs and integrated microservices.",
      "Implemented LLMOps and CI/CD pipelines.",
    ],
    stack: [],
  },
  {
    role: "R&D Machine Learning Research Engineer",
    company: "Jessa Hospital / UHasselt",
    location: "",
    time: "Nov 2023 - Mar 2024",
    bullets: [
      "Research on LLM usage in medical research.",
      "Evaluated closed and open-source models on HPC infrastructure.",
      "Built human-in-the-loop dashboards.",
    ],
    stack: ["GPT-4", "LLaMA", "Mistral", "PyTorch", "Hugging Face", "Streamlit", "HPC"],
  },
  {
    role: "Software Architect / Software Engineer",
    company: "VONKT (Startup)",
    location: "",
    time: "Oct 2023 - Mar 2024",
    bullets: [
      "Developed energy-sharing platform MVPs.",
      "Built backend APIs, dashboards, and automation workflows.",
      "Supported ideation, planning, and microservice architecture.",
    ],
    stack: [],
  },
  {
    role: "Data Scientist & MLOps Engineer",
    company: "Agrippa (Startup)",
    location: "",
    time: "Jul 2023 - Sep 2023",
    bullets: [
      "Built end-to-end AI pipeline for water leakage detection.",
      "Delivered ML models, dashboards, and infrastructure automation.",
    ],
    stack: [],
  },
  {
    role: "Software Engineer / Cloud Engineer",
    company: "Dillen Technologies",
    location: "",
    time: "Jul 2022 - Sep 2023",
    bullets: ["Azure cloud architecture and backend development.", "IoT systems, CI/CD, infrastructure automation."],
    stack: [],
  },
  {
    role: "Researcher Software Engineer (Web 3.0)",
    company: "VITO / UHasselt",
    location: "",
    time: "Sep 2021 - Jun 2022",
    bullets: ["Research on ontologies and Solid Pods for decentralized data and privacy."],
    stack: [],
  },
  {
    role: "Java Application Developer (Internship)",
    company: "Elision",
    location: "",
    time: "Jan 2019 - Jun 2019",
    bullets: ["Java/Spring application for organizational knowledge sharing."],
    stack: [],
  },
]

const projects = [
  { title: "Health Management Platform", description: "Large-scale ML and recommender system.", stack: "AWS, Big Data, Terraform" },
  { title: "LLM Knowledge Chat Assistant", description: "Enterprise chatbot with Azure AI and microservices.", stack: "Azure AI, Microservices" },
  { title: "Water Leakage Detection", description: "End-to-end ML pipeline with MLOps and dashboards.", stack: "IoT, MLOps" },
  { title: "Energy Sharing Platform", description: "Peer-to-peer energy ecosystem using microservices.", stack: "Distributed systems, Automation" },
  { title: "PriceMonitor", description: "AI-driven pricing optimization system.", stack: "Pricing, Forecasting" },
  { title: "Shopify Data Automation", description: "Automated ETL for unstructured Excel data.", stack: "ETL, Automation" },
]

const achievements = [
  "Top 10 Algorithmic Minds in Belgium - Vlaamse Programmeerwedstrijd 2022",
  "Top 10% - Belgium Cybersecurity CTF Finals (282 teams)",
  "Supported startup funding through rapid prototype delivery",
]

const additionalSkills = [
  {
    title: "Leadership & Team Enablement",
    items: [
      "Technical leadership in cross-functional teams",
      "Mentoring and coaching junior engineers and data scientists",
      "Setting engineering standards, best practices, and code quality gates",
      "Translating vision into executable team objectives",
      "Conflict resolution and technical decision arbitration",
    ],
  },
  {
    title: "Teaching & Knowledge Transfer",
    items: [
      "Structured onboarding for new team members",
      "Internal workshops on ML, cloud, and system design",
      "Explaining complex technical concepts to non-technical audiences",
      "Building reusable documentation, playbooks, and architectural guides",
    ],
  },
  {
    title: "Business & Product Alignment",
    items: [
      "Translating business problems into technical solutions",
      "Evaluating business needs, constraints, and ROI trade-offs",
      "Prioritization based on impact, risk, and delivery speed",
      "Aligning engineering efforts with product and revenue goals",
    ],
  },
  {
    title: "Software Roadmapping & Delivery Strategy",
    items: [
      "Designing highly efficient, phased software roadmaps",
      "Balancing short-term delivery with long-term architectural integrity",
      "Incremental delivery strategies to keep stakeholders engaged",
      "Managing technical debt intentionally and transparently",
      "Defining MVPs, PoCs, and scale-up paths",
    ],
  },
  {
    title: "Stakeholder Communication",
    items: [
      "Presenting technical strategies and outcomes to executives and stakeholders",
      "Data-driven reporting of progress, risks, and trade-offs",
      "Facilitating alignment between engineering, product, and business teams",
      "Setting realistic expectations and delivery timelines",
    ],
  },
  {
    title: "Decision-Making & Execution",
    items: [
      "High-signal decision making under uncertainty",
      "Ownership of end-to-end outcomes, not isolated components",
      "Bias toward production-ready, maintainable solutions",
      "Continuous improvement of delivery processes and team velocity",
    ],
  },
  {
    title: "Operational Maturity",
    items: [
      "Agile and iterative delivery in complex environments",
      "Risk management in large-scale systems",
      "Production readiness, reliability, and scalability mindset",
      "Long-term system ownership and evolution planning",
    ],
  },
]

export default function CvPage() {
  const [showAdditional, setShowAdditional] = useState(false)
  const [viewMode, setViewMode] = useState<"client" | "recruiter">("client")

  const quickFacts = [
    { label: "Founded", value: "KsCode (2019)" },
    { label: "Location", value: "Hasselt, Belgium" },
    { label: "Availability", value: "Contract, fractional, advisory" },
    { label: "VAT", value: "BE 0802.423.986" },
  ]

  const metrics = [
    { value: "20+", label: "Production systems shipped" },
    { value: "4", label: "Domains: health, energy, finance, startups" },
    { value: "End-to-end", label: "Architecture through deployment" },
  ]

  const anchorNav = [
    { label: "Profile", href: "#profile" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
  ]

  return (
    <main className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.06),transparent_40%)]" />

      <section id="profile" className="relative w-full border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-16 space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                CV / In-depth
                <span className="h-px w-12 bg-primary/50" />
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">Kiran Pal Singh</h1>
              <p className="text-lg text-muted-foreground">
                Data Scientist | AI Engineer | Cloud Architect | Software Engineer | Founder - KsCode
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>Hasselt, Belgium</span>
                <span className="text-border">|</span>
                <span>VAT: BE 0802.423.986</span>
                <span className="text-border">|</span>
                <Link href="mailto:kiran@kscode.eu" className="hover:text-primary underline-offset-4 hover:underline">
                  kiran@kscode.eu
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {anchorNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground border border-border/70 rounded-full px-3 py-1 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="mailto:kiran@kscode.eu">
                <Button size="lg" className="group">
                  Contact for engagements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline">
                  Back to site
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-primary/25 bg-primary/5 p-6 shadow-lg shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Profile</h2>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                  {viewMode === "client" ? "Client view" : "Recruiter view"}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Client", "Recruiter"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode.toLowerCase() as "client" | "recruiter")}
                    className={`rounded-full px-3 py-1 text-sm border transition-colors ${
                      viewMode === mode.toLowerCase()
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {mode} focus
                  </button>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {viewMode === "client"
                  ? "I build production-grade AI and software systems that reduce decision latency and operational cost. I operate end-to-end: problem framing, architecture, implementation, deployment, and business alignment."
                  : "Senior data scientist and software engineer with depth in ML, cloud, MLOps, and system design. Available for contracts or freelance engagements with a track record of shipping and maintaining production systems."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Quick facts</h2>
              <div className="grid gap-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 p-3">
                    <span className="text-sm text-muted-foreground">{fact.label}</span>
                    <span className="text-sm font-semibold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-center"
              >
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="w-full py-16 border-b border-border/50 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold">Core Expertise</h3>
              <p className="text-sm text-muted-foreground">Outcome-first tracks to reduce decision latency</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {expertise.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/50 p-3 hover:border-primary/40 transition-colors"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
              <p className="text-sm text-muted-foreground">Clickable chips to scan depth quickly</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-3 hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm uppercase tracking-[0.15em] text-primary">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="w-full py-16 border-b border-border/50 bg-gradient-to-b from-background via-muted/15 to-background">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Professional Experience</h3>
            <p className="text-sm text-muted-foreground">Architecture + execution across healthcare, energy, finance, startups</p>
          </div>
          <div className="relative space-y-6">
            <div className="absolute left-4 top-2 bottom-2 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:block" />
            {experience.map((role) => (
              <motion.div
                key={`${role.role}-${role.company}-${role.time}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl border border-border/60 bg-background/80 p-6 md:pl-10"
              >
                <div className="absolute left-3 top-6 hidden h-3 w-3 rounded-full border border-primary/40 bg-background md:block" />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{role.role}</h4>
                    <p className="text-muted-foreground">
                      {role.company}
                      {role.location ? ` - ${role.location}` : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{role.time}</p>
                </div>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {role.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {role.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-16 border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-3 hover:-translate-y-1 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <Badge variant="secondary">Outcome-focused</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-sm text-muted-foreground">{project.stack}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="w-full py-16 border-b border-border/50 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border/60 bg-background/70 p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold">Achievements</h3>
              <ul className="space-y-3 text-muted-foreground">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-border/60 bg-background/70 p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-lg">Master of Science in Computer Science</p>
              <p className="text-muted-foreground">Specialization: Data Science, AI, Systems Engineering</p>
              <p className="text-muted-foreground">Competitive programming and CTF cybersecurity background</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-border/60 bg-background/70 p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold">Additional</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Open-source contributor</li>
                <li>TEDxUHasselt Event Organizer (2019-2024)</li>
                <li>Languages: English (fluent)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Additional Professional Skills</h3>
            <Button variant="outline" size="sm" onClick={() => setShowAdditional((prev) => !prev)}>
              {showAdditional ? "Hide details" : "Show details"}
            </Button>
          </div>
          {showAdditional && (
            <div className="grid gap-6 md:grid-cols-2">
              {additionalSkills.map((group) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/60 bg-background/60 p-5 space-y-3"
                >
                  <p className="text-sm uppercase tracking-[0.15em] text-primary">{group.title}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
