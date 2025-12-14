"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, DollarSign, TrendingUp, Target, FileText, Download, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function PricingCalculator() {
  const [includePCD, setIncludePCD] = useState(false)
  const [includeAdm, setIncludeAdm] = useState(false)

  const staffAuxCost = 5000
  const staffOperadorCost = 5500
  const staffLiderCost = 6000
  const overhead = 0.3
  const margin = 0.3

  const staffAux = 28 // Auxiliares de rampa e limpeza
  const staffOperador = 12 // Operadores
  const staffLider = 6 // Líderes
  const totalStaff = staffAux + staffOperador + staffLider // 46 total

  const staffCostBase = staffAux * staffAuxCost + staffOperador * staffOperadorCost + staffLider * staffLiderCost
  const pcdCost = includePCD ? staffCostBase * 0.05 : 0
  const admCost = includeAdm ? staffCostBase * 0.03 : 0
  const totalStaffCost = staffCostBase + pcdCost + admCost

  const gseBarrasEmbraer = 3 // Barras de reboque Embraer (increased for simultaneity)
  const gseCostPerUnit = 4500
  const totalGSECost = gseBarrasEmbraer * gseCostPerUnit

  const gseInvestmentPerUnit = 85000 // Custo de aquisição de uma barra
  const totalGSEInvestment = gseBarrasEmbraer * gseInvestmentPerUnit

  const overheadCost = (totalStaffCost + totalGSECost) * overhead
  const totalMonthlyCost = totalStaffCost + totalGSECost + overheadCost

  const flightsPerMonth = 248
  const costPerTurnaround = totalMonthlyCost / flightsPerMonth
  const pricePerTurnaround = costPerTurnaround / (1 - margin)

  // Receita e lucro
  const monthlyRevenue = pricePerTurnaround * flightsPerMonth
  const monthlyProfit = monthlyRevenue - totalMonthlyCost
  const actualMargin = (monthlyProfit / monthlyRevenue) * 100

  const monthlyGSEDepreciation = totalGSEInvestment / 60 // 5 anos de vida útil
  const paybackMonths = totalGSEInvestment / monthlyProfit

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img src="/fop-logo.png" alt="FOP Logo" className="h-10 w-auto" />
          </div>

          <nav className="space-y-1">
            <Link href="/" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <Target className="mr-2 h-4 w-4" />
                Overview
              </Button>
            </Link>
            <Link href="/dashboard" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <TrendingUp className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/analysis" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <TrendingUp className="mr-2 h-4 w-4" />
                Análise por Aeroporto
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start bg-accent/10 text-accent-foreground">
              <DollarSign className="mr-2 h-4 w-4" />
              Precificação & P&L
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/analysis">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Análise
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Cálculo de Tarifa & P&L</h1>
                <p className="text-sm text-muted-foreground mt-1">SSA • Outubro 2025 • AZUL (Prospecto)</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Exportar Relatório
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Summary from Analysis */}
          <Card className="p-6 bg-accent/5 border-accent/20">
            <h2 className="text-lg font-semibold text-foreground mb-4">Resumo da Análise Operacional</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Staff Otimizado</p>
                <p className="text-2xl font-semibold text-chart-4">+{totalStaff}</p>
                <p className="text-xs text-muted-foreground mt-1">pessoas adicionais</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">GSE Otimizado</p>
                <p className="text-2xl font-semibold text-chart-4">+{gseBarrasEmbraer}</p>
                <p className="text-xs text-muted-foreground mt-1">barras de reboque</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Voos/Mês AZUL</p>
                <p className="text-2xl font-semibold text-foreground">{flightsPerMonth}</p>
                <p className="text-xs text-muted-foreground mt-1">turnarounds</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Mix de Frota</p>
                <p className="text-2xl font-semibold text-foreground">E195</p>
                <p className="text-xs text-muted-foreground mt-1">predominante</p>
              </div>
            </div>
          </Card>

          {/* Cost Parameters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Parâmetros de Custo</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Custo Mensal por FTE (Staff)</Label>
                  <div className="mt-3 space-y-3 pl-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Auxiliar de Rampa/Limpeza</span>
                      <span className="text-sm font-medium">R$ {staffAuxCost.toLocaleString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Operador</span>
                      <span className="text-sm font-medium">R$ {staffOperadorCost.toLocaleString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Líder</span>
                      <span className="text-sm font-medium">R$ {staffLiderCost.toLocaleString("pt-BR")}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Inclui salário, encargos e benefícios</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <Label className="text-base font-medium mb-3 block">Adicionais</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="pcd"
                        checked={includePCD}
                        onCheckedChange={(checked) => setIncludePCD(checked as boolean)}
                      />
                      <label htmlFor="pcd" className="text-sm text-muted-foreground cursor-pointer">
                        Incluir 5% de PCDs (Pessoas com Deficiência)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="adm"
                        checked={includeAdm}
                        onCheckedChange={(checked) => setIncludeAdm(checked as boolean)}
                      />
                      <label htmlFor="adm" className="text-sm text-muted-foreground cursor-pointer">
                        Incluir 3% de Administrativo
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Label htmlFor="overhead">Overhead Operacional</Label>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Input id="overhead" type="number" value={overhead * 100} readOnly className="flex-1" />
                    <span className="text-muted-foreground">%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Supervisão, admin, facilities</p>
                </div>

                <div>
                  <Label htmlFor="margin">Margem Alvo</Label>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Input id="margin" type="number" value={margin * 100} readOnly className="flex-1" />
                    <span className="text-muted-foreground">%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Margem de lucro desejada</p>
                </div>
              </div>
            </Card>

            {/* Custo Marginal Mensal */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Custo Marginal Mensal</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-foreground">Staff Adicional</span>
                    <span className="text-sm font-medium text-foreground">
                      R$ {totalStaffCost.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div className="pl-4 space-y-2 border-l-2 border-border ml-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{staffAux}x Auxiliar Rampa/Limpeza</span>
                      <span className="text-xs text-muted-foreground">
                        R$ {(staffAux * staffAuxCost).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{staffOperador}x Operador</span>
                      <span className="text-xs text-muted-foreground">
                        R$ {(staffOperador * staffOperadorCost).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{staffLider}x Líder</span>
                      <span className="text-xs text-muted-foreground">
                        R$ {(staffLider * staffLiderCost).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    {includePCD && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">+ 5% PCDs</span>
                        <span className="text-xs text-muted-foreground">R$ {pcdCost.toLocaleString("pt-BR")}</span>
                      </div>
                    )}
                    {includeAdm && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">+ 3% Adm</span>
                        <span className="text-xs text-muted-foreground">R$ {admCost.toLocaleString("pt-BR")}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-foreground">GSE Adicional</span>
                    <span className="text-sm font-medium text-foreground">
                      R$ {totalGSECost.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div className="pl-4 space-y-2 border-l-2 border-border ml-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{gseBarrasEmbraer}x Barra Reboque Embraer</span>
                      <span className="text-xs text-muted-foreground">R$ {totalGSECost.toLocaleString("pt-BR")}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 pl-4">
                    Custo operacional mensal (manutenção, combustível)
                  </p>
                </div>

                <div className="flex justify-between items-center py-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">Overhead ({(overhead * 100).toFixed(0)}%)</span>
                  <span className="text-sm font-medium text-foreground">R$ {overheadCost.toLocaleString("pt-BR")}</span>
                </div>

                <div className="flex justify-between items-center py-4 bg-accent/5 -mx-6 px-6 rounded-lg">
                  <span className="font-semibold text-foreground">Custo Total Mensal</span>
                  <span className="text-xl font-semibold text-foreground">
                    R$ {totalMonthlyCost.toLocaleString("pt-BR")}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-muted-foreground">Custo por Turnaround</span>
                  <span className="text-sm font-medium text-foreground">R$ {costPerTurnaround.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Payback de GSE */}
          <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground mb-2">Payback de Investimento em GSE</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  GSE é investimento de imobilizado, não custo operacional direto
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Investimento Total</p>
                    <p className="text-2xl font-semibold text-foreground">
                      R$ {totalGSEInvestment.toLocaleString("pt-BR")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{gseBarrasEmbraer}x Barra Reboque Embraer</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Depreciação Mensal</p>
                    <p className="text-2xl font-semibold text-foreground">
                      R$ {monthlyGSEDepreciation.toLocaleString("pt-BR")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Vida útil: 5 anos</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Payback Estimado</p>
                    <p className="text-2xl font-semibold text-amber-600">{paybackMonths.toFixed(1)} meses</p>
                    <p className="text-xs text-muted-foreground mt-1">Baseado no lucro mensal</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing Table */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Tabela de Tarifas por Tipo de Aeronave</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tarifas calculadas com base no custo marginal otimizado + margem alvo de {(margin * 100).toFixed(0)}%
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tipo de Aeronave</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Voos/Mês</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Custo Unit.</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Tarifa Mín.</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Receita/Mês</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">Embraer E195</div>
                      <div className="text-xs text-muted-foreground">Regional jet</div>
                    </td>
                    <td className="text-right py-4 px-4 text-foreground">186</td>
                    <td className="text-right py-4 px-4 text-muted-foreground">R$ {costPerTurnaround.toFixed(2)}</td>
                    <td className="text-right py-4 px-4">
                      <span className="font-semibold text-chart-4">R$ {pricePerTurnaround.toFixed(2)}</span>
                    </td>
                    <td className="text-right py-4 px-4 font-medium text-foreground">
                      R$ {(pricePerTurnaround * 186).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">Airbus A320</div>
                      <div className="text-xs text-muted-foreground">Narrow-body</div>
                    </td>
                    <td className="text-right py-4 px-4 text-foreground">48</td>
                    <td className="text-right py-4 px-4 text-muted-foreground">
                      R$ {(costPerTurnaround * 1.1).toFixed(2)}
                    </td>
                    <td className="text-right py-4 px-4">
                      <span className="font-semibold text-chart-4">R$ {(pricePerTurnaround * 1.1).toFixed(2)}</span>
                    </td>
                    <td className="text-right py-4 px-4 font-medium text-foreground">
                      R$ {(pricePerTurnaround * 1.1 * 48).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">Airbus A321</div>
                      <div className="text-xs text-muted-foreground">Narrow-body (maior)</div>
                    </td>
                    <td className="text-right py-4 px-4 text-foreground">14</td>
                    <td className="text-right py-4 px-4 text-muted-foreground">
                      R$ {(costPerTurnaround * 1.15).toFixed(2)}
                    </td>
                    <td className="text-right py-4 px-4">
                      <span className="font-semibold text-chart-4">R$ {(pricePerTurnaround * 1.15).toFixed(2)}</span>
                    </td>
                    <td className="text-right py-4 px-4 font-medium text-foreground">
                      R$ {(pricePerTurnaround * 1.15 * 14).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </td>
                  </tr>
                  <tr className="bg-accent/5">
                    <td className="py-4 px-4 font-semibold text-foreground" colSpan={4}>
                      Total Mensal (Tarifa Média Ponderada: R$ {pricePerTurnaround.toFixed(2)})
                    </td>
                    <td className="text-right py-4 px-4 text-xl font-semibold text-chart-4">
                      R$ {monthlyRevenue.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* P&L Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-chart-2/20 bg-gradient-to-br from-chart-2/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Receita Mensal</p>
                  <p className="text-2xl font-semibold text-foreground">
                    R$ {monthlyRevenue.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {flightsPerMonth} turnarounds • Tarifa média R$ {pricePerTurnaround.toFixed(2)}
              </p>
            </Card>

            <Card className="p-6 border-destructive/20 bg-gradient-to-br from-destructive/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Custo Mensal</p>
                  <p className="text-2xl font-semibold text-foreground">
                    R$ {totalMonthlyCost.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Staff + GSE + Overhead otimizados</p>
            </Card>

            <Card className="p-6 border-chart-4/20 bg-gradient-to-br from-chart-4/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lucro Mensal</p>
                  <p className="text-2xl font-semibold text-chart-4">
                    R$ {monthlyProfit.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
              <p className="text-xs text-chart-4 font-medium">Margem: {actualMargin.toFixed(1)}%</p>
            </Card>
          </div>

          {/* Annual Projection */}
          <Card className="p-6 bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">Projeção Anual</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Impacto financeiro estimado da entrada da AZUL em SSA
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Receita Anual</p>
                    <p className="text-3xl font-bold text-foreground">
                      R$ {(monthlyRevenue * 12).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Lucro Anual</p>
                    <p className="text-3xl font-bold text-chart-4">
                      R$ {(monthlyProfit * 12).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">Argumento Comercial</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    "Podemos oferecer tarifa média de <strong>R$ {pricePerTurnaround.toFixed(2)}</strong> para AZUL em
                    SSA, mantendo <strong>{(margin * 100).toFixed(0)}% de margem</strong>, porque provamos que
                    precisamos apenas de <strong>{totalStaff} pessoas adicionais</strong> e{" "}
                    <strong>{gseBarrasEmbraer} barras de reboque</strong>, não de uma operação paralela completa. Isso
                    representa <strong>R$ {((monthlyProfit * 12) / 1000).toFixed(0)}k/ano</strong> de lucro incremental
                    para dnata, com payback do investimento em GSE em <strong>{paybackMonths.toFixed(1)} meses</strong>
                    ."
                  </p>
                </div>
              </div>

              <Button size="lg" className="gap-2">
                <FileText className="h-4 w-4" />
                Gerar Proposta
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
