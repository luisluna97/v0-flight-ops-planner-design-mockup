"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Zap } from "lucide-react"
import Link from "next/link"

export function Overview() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img src="/fop-logo.png" alt="FOP Logo" className="h-10 w-auto" />
          </div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start bg-accent/10 text-accent-foreground">
              <Target className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Link href="/analysis" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <TrendingUp className="mr-2 h-4 w-4" />
                Análise por Aeroporto
              </Button>
            </Link>
            <Link href="/pricing" className="block">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <DollarSign className="mr-2 h-4 w-4" />
                Precificação & P&L
              </Button>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="px-8 py-6">
            <h1 className="text-3xl font-semibold text-foreground mb-2">FlightOps Planner</h1>
            <p className="text-muted-foreground">
              Plataforma de inteligência operacional para otimização de ground handling
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <div className="px-8 py-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Zap className="h-3.5 w-3.5" />
              Otimização Baseada em Dados Reais
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Transforme capacidade ociosa em vantagem competitiva
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O FOP analisa sua operação atual e identifica janelas de oportunidade para absorver novos clientes com
              custo marginal mínimo. Calcule tarifas competitivas mantendo margens saudáveis, baseado em otimização real
              de staff e equipamentos.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/analysis">
                <Button size="lg" className="gap-2">
                  Iniciar Análise
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <Card className="p-6 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Análise de Simultaneidade</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visualize sobreposições operacionais entre sua malha atual e clientes prospecto. Identifique onde você
                pode absorver demanda sem expandir estrutura.
              </p>
            </Card>

            <Card className="p-6 border-chart-2/20 bg-gradient-to-br from-chart-2/5 to-transparent">
              <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Otimização de Staff & GSE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Calcule demanda real de pessoas e equipamentos considerando reaproveitamento de recursos. Evite
                superestimar custos e perder contratos.
              </p>
            </Card>

            <Card className="p-6 border-chart-4/20 bg-gradient-to-br from-chart-4/5 to-transparent">
              <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precificação Inteligente</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gere tarifas por tipo de aeronave baseadas em custo marginal otimizado. Mantenha margem alvo e
                justifique preços com dados operacionais reais.
              </p>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="px-8 pb-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Como funciona</h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Defina o Cenário</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Selecione aeroporto, período e companhias aéreas. Defina quem você já atende (baseline) e quem é o
                    cliente prospecto que você quer analisar.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Visualize Sobreposições</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Analise timeline operacional, heatmap de funções e curvas de demanda. Identifique janelas onde sua
                    equipe atual pode absorver o novo cliente com mínimo acréscimo de custo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Calcule Tarifa & P&L</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Com base nos números otimizados de staff e GSE, o sistema calcula custo marginal real, tarifa mínima
                    por tipo de aeronave e projeção de lucro anual mantendo sua margem alvo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Resultado</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você apresenta para diretoria e time comercial uma proposta fundamentada: "Podemos oferecer R$ X
                    para esse cliente, mantendo Y% de margem, porque provamos que precisamos apenas de Z pessoas
                    adicionais, não de uma operação paralela completa."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-8 pb-12">
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pronto para começar?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Inicie uma análise completa de viabilidade comercial e descubra quanto custo marginal real você precisa
                para absorver um novo cliente.
              </p>
              <Link href="/analysis">
                <Button size="lg" className="gap-2">
                  Iniciar Análise por Aeroporto
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
