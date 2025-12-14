"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Target, TrendingUp, Zap, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function LandingPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Plane className="absolute top-20 left-10 h-8 w-8 text-primary/10 animate-float-slow" />
        <Plane className="absolute top-40 right-20 h-6 w-6 text-primary/10 animate-float-delayed" />
        <Plane className="absolute bottom-40 left-1/4 h-7 w-7 text-primary/10 animate-float-slow" />
      </div>

      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <Image
              src="/fop-logo.png"
              alt="FOP Logo"
              width={160}
              height={53}
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
          </div>
          <Link href="/dashboard">
            <Button variant="default" size="lg" className="gap-2 hover:gap-3 transition-all">
              {t("landing.hero.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 animate-orbit">
            <Plane className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-10 text-primary rotate-90" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 animate-fade-in">
            <Zap className="h-4 w-4" />
            {t("landing.hero.subtitle")}
          </div>

          <div className="flex justify-center mb-8 animate-fade-in-up">
            <Image
              src="/fop-logo.png"
              alt="FlightOps Planner"
              width={400}
              height={133}
              className="h-32 w-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up animation-delay-200">
            {t("landing.hero.title")}
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            {t("landing.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up animation-delay-600">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 hover:gap-3 transition-all hover:scale-105">
                {t("landing.hero.cta")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-6 py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t("landing.problem.title")}</h2>
            <p className="text-lg text-muted-foreground text-balance">{t("landing.problem.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: t("landing.problem.q1"),
                detail: t("landing.problem.q1.detail"),
              },
              {
                question: t("landing.problem.q2"),
                detail: t("landing.problem.q2.detail"),
              },
              {
                question: t("landing.problem.q3"),
                detail: t("landing.problem.q3.detail"),
              },
              {
                question: t("landing.problem.q4"),
                detail: t("landing.problem.q4.detail"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all hover:scale-[1.02] hover:shadow-lg group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Plane className="h-5 w-5 text-primary/60 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <h3 className="text-lg font-semibold text-balance">{item.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-20 border-t border-border/40 relative">
        <Plane className="absolute top-10 right-10 h-12 w-12 text-primary/5 rotate-45" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t("landing.solution.title")}</h2>
            <p className="text-lg text-muted-foreground text-balance">{t("landing.solution.description")}</p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: BarChart3,
                step: "01",
                title: t("landing.solution.step1"),
                description: t("landing.solution.step1.detail"),
              },
              {
                icon: Target,
                step: "02",
                title: t("landing.solution.step2"),
                description: t("landing.solution.step2.detail"),
              },
              {
                icon: Zap,
                step: "03",
                title: t("landing.solution.step3"),
                description: t("landing.solution.step3.detail"),
              },
              {
                icon: TrendingUp,
                step: "04",
                title: t("landing.solution.step4"),
                description: t("landing.solution.step4.detail"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all hover:translate-x-2 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground">{item.step}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container mx-auto px-6 py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t("landing.differential.title")}</h2>
            <p className="text-lg text-muted-foreground text-balance">{t("landing.differential.description")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: t("landing.differential.point1"),
                description: t("landing.differential.point1.detail"),
              },
              {
                title: t("landing.differential.point2"),
                description: t("landing.differential.point2.detail"),
              },
              {
                title: t("landing.differential.point3"),
                description: t("landing.differential.point3.detail"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border bg-card space-y-3 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  <h3 className="text-lg font-semibold text-balance">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 border-t border-border/40 relative">
        <Plane className="absolute top-10 left-10 h-10 w-10 text-primary/5 -rotate-45 animate-float-slow" />
        <Plane className="absolute bottom-10 right-10 h-10 w-10 text-primary/5 rotate-45 animate-float-delayed" />

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">{t("landing.cta.title")}</h2>
          <p className="text-xl text-muted-foreground text-balance">{t("landing.cta.description")}</p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2 text-lg px-8 py-6 hover:gap-3 transition-all hover:scale-105">
              {t("landing.cta.button")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/fop-logo.png" alt="FOP Logo" width={120} height={40} className="h-10 w-auto" />
              <span className="text-sm text-muted-foreground">© 2025 FlightOps Planner</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("landing.hero.subtitle")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
