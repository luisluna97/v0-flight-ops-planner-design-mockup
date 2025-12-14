"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScenarioSelector } from "@/components/scenario-selector"
import { TimelineChart } from "@/components/timeline-chart"
import { HeatmapChart } from "@/components/heatmap-chart"
import { DemandChart } from "@/components/demand-chart"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n-context"
import { Calculator, TrendingUp, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const airportNames: Record<string, string> = {
  ssa: "SSA - Salvador",
  gru: "GRU - São Paulo",
  gig: "GIG - Rio de Janeiro",
  bsb: "BSB - Brasília",
}

export function AirportAnalysis() {
  const { t } = useI18n()
  const [selectedAirport, setSelectedAirport] = useState("ssa")

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img src="/fop-logo.png" alt="FOP Logo" className="h-10 w-auto" />
          </div>

          <nav className="space-y-1">
            <Link href="/dashboard" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                {t("nav.dashboard")}
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start bg-accent/10 text-accent-foreground">
              <TrendingUp className="mr-2 h-4 w-4" />
              {t("nav.analysis")}
            </Button>
            <Link href="/pricing" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <Calculator className="mr-2 h-4 w-4" />
                {t("nav.pricing")}
              </Button>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                {t("analysis.title")} - {airportNames[selectedAirport]}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">{t("analysis.subtitle")}</p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="ssa" onValueChange={setSelectedAirport}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ssa">SSA</SelectItem>
                  <SelectItem value="gru">GRU</SelectItem>
                  <SelectItem value="gig">GIG</SelectItem>
                  <SelectItem value="bsb">BSB</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="oct2025">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oct2025">
                    {t("common.period")}: {t("language") === "pt" ? "Outubro 2025" : "October 2025"}
                  </SelectItem>
                  <SelectItem value="nov2025">{t("language") === "pt" ? "Novembro 2025" : "November 2025"}</SelectItem>
                  <SelectItem value="dec2025">{t("language") === "pt" ? "Dezembro 2025" : "December 2025"}</SelectItem>
                </SelectContent>
              </Select>
              <LanguageSelector />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Scenario Selector */}
          <ScenarioSelector />

          {/* Timeline Chart */}
          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">{t("analysis.timeline.title")}</h2>
              <p className="text-sm text-muted-foreground">{t("analysis.timeline.description")}</p>
            </div>
            <TimelineChart />
          </Card>

          {/* Heatmap */}
          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">{t("analysis.heatmap.title")}</h2>
              <p className="text-sm text-muted-foreground">{t("analysis.heatmap.description")}</p>
            </div>
            <HeatmapChart />
          </Card>

          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">{t("analysis.demand.title")}</h2>
              <p className="text-sm text-muted-foreground mb-4">{t("analysis.demand.description")}</p>
            </div>
            <DemandChart />

            <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t("analysis.metrics.currentGross")}</p>
                <p className="text-2xl font-semibold text-foreground">300</p>
                <p className="text-xs text-muted-foreground mt-1">{t("analysis.metrics.people")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t("analysis.metrics.withoutSynergy")}</p>
                <p className="text-2xl font-semibold text-destructive">+100</p>
                <p className="text-xs text-muted-foreground mt-1">{t("analysis.metrics.newResources")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t("analysis.metrics.withSynergy")}</p>
                <p className="text-2xl font-semibold text-chart-4">+46</p>
                <p className="text-xs text-chart-4 mt-1">{t("analysis.metrics.optimized")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t("analysis.metrics.savings")}</p>
                <p className="text-2xl font-semibold text-chart-4">54%</p>
                <p className="text-xs text-muted-foreground mt-1">{t("analysis.metrics.vsSynergy")}</p>
              </div>
            </div>
          </Card>

          {/* Action Button */}
          <Card className="p-6 bg-accent/5 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t("analysis.cta.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("analysis.cta.description")}</p>
              </div>
              <Link href="/pricing">
                <Button size="lg" className="ml-4">
                  <Calculator className="mr-2 h-4 w-4" />
                  {t("analysis.cta.button")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
