"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plane, Search, TrendingUp, Users, Wrench, ArrowRight, MapPin, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

// Mock data for Brazilian airports
const airports = [
  {
    code: "GRU",
    name: "Guarulhos",
    city: "São Paulo",
    currentClients: ["GOL", "LATAM", "AZUL"],
    prospects: ["Copa Airlines", "Air France"],
    monthlyFlights: 8420,
    staffCount: 245,
    gseCount: 68,
    utilizationRate: 78,
    status: "high-activity",
  },
  {
    code: "GIG",
    name: "Galeão",
    city: "Rio de Janeiro",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL", "United Airlines"],
    monthlyFlights: 5230,
    staffCount: 178,
    gseCount: 52,
    utilizationRate: 72,
    status: "high-activity",
  },
  {
    code: "BSB",
    name: "Brasília",
    city: "Brasília",
    currentClients: ["GOL", "LATAM", "AZUL"],
    prospects: ["Avianca"],
    monthlyFlights: 6180,
    staffCount: 198,
    gseCount: 58,
    utilizationRate: 75,
    status: "high-activity",
  },
  {
    code: "CGH",
    name: "Congonhas",
    city: "São Paulo",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL"],
    monthlyFlights: 7650,
    staffCount: 212,
    gseCount: 61,
    utilizationRate: 82,
    status: "high-activity",
  },
  {
    code: "SDU",
    name: "Santos Dumont",
    city: "Rio de Janeiro",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL"],
    monthlyFlights: 4120,
    staffCount: 142,
    gseCount: 44,
    utilizationRate: 68,
    status: "medium-activity",
  },
  {
    code: "CNF",
    name: "Confins",
    city: "Belo Horizonte",
    currentClients: ["GOL", "LATAM", "AZUL"],
    prospects: ["Copa Airlines"],
    monthlyFlights: 3890,
    staffCount: 156,
    gseCount: 48,
    utilizationRate: 71,
    status: "medium-activity",
  },
  {
    code: "SSA",
    name: "Salvador",
    city: "Salvador",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL", "Avianca"],
    monthlyFlights: 3240,
    staffCount: 128,
    gseCount: 42,
    utilizationRate: 65,
    status: "medium-activity",
  },
  {
    code: "FOR",
    name: "Fortaleza",
    city: "Fortaleza",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL"],
    monthlyFlights: 2980,
    staffCount: 118,
    gseCount: 38,
    utilizationRate: 63,
    status: "medium-activity",
  },
  {
    code: "REC",
    name: "Recife",
    city: "Recife",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL", "Copa Airlines"],
    monthlyFlights: 2650,
    staffCount: 108,
    gseCount: 36,
    utilizationRate: 61,
    status: "medium-activity",
  },
  {
    code: "POA",
    name: "Porto Alegre",
    city: "Porto Alegre",
    currentClients: ["GOL", "LATAM", "AZUL"],
    prospects: ["Avianca"],
    monthlyFlights: 3120,
    staffCount: 134,
    gseCount: 41,
    utilizationRate: 67,
    status: "medium-activity",
  },
  {
    code: "CWB",
    name: "Curitiba",
    city: "Curitiba",
    currentClients: ["GOL", "LATAM", "AZUL"],
    prospects: [],
    monthlyFlights: 2840,
    staffCount: 122,
    gseCount: 39,
    utilizationRate: 64,
    status: "medium-activity",
  },
  {
    code: "MAO",
    name: "Manaus",
    city: "Manaus",
    currentClients: ["GOL", "LATAM"],
    prospects: ["AZUL"],
    monthlyFlights: 2120,
    staffCount: 94,
    gseCount: 32,
    utilizationRate: 58,
    status: "low-activity",
  },
]

export function Dashboard() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/fop-logo.png" alt="FOP Logo" width={100} height={32} className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="gap-2">
                <MapPin className="h-3 w-3" />
                {airports.length} {t("dashboard.airports")}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{t("dashboard.title")}</h1>
              <p className="text-muted-foreground mt-2">{t("dashboard.subtitle")}</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={t("dashboard.search")} className="pl-10" />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t("dashboard.totalFlights")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold">
                  {airports.reduce((sum, a) => sum + a.monthlyFlights, 0).toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t("dashboard.totalStaff")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Users className="h-5 w-5 text-chart-2" />
                </div>
                <div className="text-3xl font-bold">
                  {airports.reduce((sum, a) => sum + a.staffCount, 0).toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t("dashboard.totalGse")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-5/10">
                  <Wrench className="h-5 w-5 text-chart-5" />
                </div>
                <div className="text-3xl font-bold">{airports.reduce((sum, a) => sum + a.gseCount, 0)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t("dashboard.avgUtilization")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-4/10">
                  <TrendingUp className="h-5 w-5 text-chart-4" />
                </div>
                <div className="text-3xl font-bold">
                  {Math.round(airports.reduce((sum, a) => sum + a.utilizationRate, 0) / airports.length)}%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Airports Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{t("dashboard.airports")}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <div className="w-2 h-2 rounded-full bg-chart-1" />
                {t("dashboard.highActivity")}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <div className="w-2 h-2 rounded-full bg-chart-2" />
                {t("dashboard.mediumActivity")}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <div className="w-2 h-2 rounded-full bg-chart-3" />
                {t("dashboard.lowActivity")}
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {airports.map((airport) => (
              <Card key={airport.code} className="hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{airport.code}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {airport.name} • {airport.city}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        airport.status === "high-activity"
                          ? "bg-chart-1/10 text-chart-1 border-chart-1/20"
                          : airport.status === "medium-activity"
                            ? "bg-chart-2/10 text-chart-2 border-chart-2/20"
                            : "bg-chart-3/10 text-chart-3 border-chart-3/20"
                      }
                    >
                      {airport.utilizationRate}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">{t("dashboard.flightsMonth")}</div>
                      <div className="font-semibold">{airport.monthlyFlights.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">{t("dashboard.staff")}</div>
                      <div className="font-semibold">{airport.staffCount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">{t("dashboard.gse")}</div>
                      <div className="font-semibold">{airport.gseCount}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{t("dashboard.currentClients")}</div>
                    <div className="flex flex-wrap gap-2">
                      {airport.currentClients.map((client) => (
                        <Badge key={client} variant="secondary" className="text-xs">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {airport.prospects.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{t("dashboard.prospects")}</div>
                      <div className="flex flex-wrap gap-2">
                        {airport.prospects.map((prospect) => (
                          <Badge key={prospect} variant="outline" className="text-xs border-primary/40 text-primary">
                            {prospect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={`/analysis?airport=${airport.code}`}>
                    <Button className="w-full gap-2 mt-2">
                      <BarChart3 className="h-4 w-4" />
                      {t("dashboard.analyzeAirport")}
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
