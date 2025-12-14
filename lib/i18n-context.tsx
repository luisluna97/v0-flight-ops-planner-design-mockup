"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "pt"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  en: {
    // Landing Page
    "landing.hero.title": "Decide which client to take on. With real data.",
    "landing.hero.subtitle": "Commercial Intelligence Platform for Ground Handling",
    "landing.hero.description":
      "FOP transforms the commercial decision of 'is this client worth it?' into a calculated model, connecting flight network, operational capacity, and profitability.",
    "landing.hero.cta": "Access Platform",
    "landing.problem.title": "Questions nobody answers clearly",
    "landing.problem.description":
      "Today these decisions are made in calls, spreadsheets, and gut feeling. FOP changes that.",
    "landing.problem.q1": "Can I operate this client with my current team?",
    "landing.problem.q1.detail":
      "If I bring AZUL to GRU in October, do I need to hire a whole new team or just reinforce 3-4 people at peak?",
    "landing.problem.q2": "How much would it really cost to absorb this airline?",
    "landing.problem.q2.detail": "Do I need to buy more ramp equipment or can I reuse what's already on the apron?",
    "landing.problem.q3": "What's the minimum rate I can offer?",
    "landing.problem.q3.detail":
      "What price maintains 30% margin and is still competitive enough to close the contract?",
    "landing.problem.q4": "How much annual profit would this contract bring?",
    "landing.problem.q4.detail":
      "Is it worth investing commercial resources in this negotiation? What's the expected return?",
    "landing.solution.title": "How FOP works",
    "landing.solution.description": "Four steps to transform commercial expansion into real marginal cost engineering",
    "landing.solution.step1": "Maps current operation",
    "landing.solution.step1.detail":
      "Understands who you already serve, at what times, with which aircraft, and what demand for people and equipment this generates hour by hour.",
    "landing.solution.step2": "Simulates bringing in a new client",
    "landing.solution.step2.detail":
      "Places the prospect's network on top of your current structure and estimates additional load: how many more people, how much equipment, at which peaks.",
    "landing.solution.step3": "Detects simultaneity and reuse",
    "landing.solution.step3.detail":
      "Identifies where the new client's flight falls close to something you already serve. You don't need to set up a new team - absorb with what's already active.",
    "landing.solution.step4": "Calculates price and margin",
    "landing.solution.step4.detail":
      "Based on the optimized scenario, calculates marginal cost, required rate per aircraft type, resulting margin, and projected annual profit.",
    "landing.differential.title": "What sets FOP apart",
    "landing.differential.description": "It's not an operational tool. It's a strategic commercial weapon.",
    "landing.differential.point1": "Looks at you + potential client",
    "landing.differential.point1.detail":
      "Traditional tools plan YOUR network. FOP plans YOUR network + a client's network you haven't even closed yet.",
    "landing.differential.point2": "Simultaneity becomes money",
    "landing.differential.point2.detail":
      "Quantifies the reuse of already active staff and GSE. This becomes a commercial argument: aggressive pricing while maintaining margin.",
    "landing.differential.point3": "Defensible minimum rate",
    "landing.differential.point3.detail":
      "Delivers the minimum price per aircraft type while maintaining approved margin. Takes sales out of guesswork and puts them at the table with technical anchor.",
    "landing.cta.title": "Transform commercial decisions into competitive advantage",
    "landing.cta.description":
      "Analyze all airports in Brazil. Simulate scenarios. Calculate rates. Close contracts with confidence.",
    "landing.cta.button": "Get Started",

    // Dashboard
    "dashboard.title": "Airport Dashboard",
    "dashboard.subtitle": "Overview of all airports operated by dnata in Brazil",
    "dashboard.search": "Search airport by code or city...",
    "dashboard.totalFlights": "Total Flights/Month",
    "dashboard.totalStaff": "Total Staff",
    "dashboard.totalGse": "Total GSE",
    "dashboard.avgUtilization": "Average Utilization",
    "dashboard.airports": "Airports",
    "dashboard.highActivity": "High Activity",
    "dashboard.mediumActivity": "Medium Activity",
    "dashboard.lowActivity": "Low Activity",
    "dashboard.flightsMonth": "Flights/Month",
    "dashboard.staff": "Staff",
    "dashboard.gse": "GSE",
    "dashboard.currentClients": "Current Clients",
    "dashboard.prospects": "Prospects",
    "dashboard.analyzeAirport": "Analyze Airport",

    // Airport Analysis
    "analysis.title": "Airport Analysis",
    "analysis.subtitle": "Operational capacity optimization and commercial viability analysis",
    "analysis.scenario": "Analysis Scenario",
    "analysis.currentOperation": "Current Operation",
    "analysis.newClient": "New Client",
    "analysis.timeline.title": "Operational Window: Current Operation vs New Client",
    "analysis.timeline.description":
      "Flight service simultaneity. Stacked areas show prospects over current operation.",
    "analysis.heatmap.title": "Operational Heatmap (Day × Time)",
    "analysis.heatmap.description":
      "Operational intensity of the 'worst week'. Hover over cells to see flight details.",
    "analysis.demand.title": "Staff and GSE Demand Curve",
    "analysis.demand.description": "Resource distribution throughout the day (simultaneous peak)",
    "analysis.metrics.currentGross": "Current Gross Required",
    "analysis.metrics.withoutSynergy": "Increment Without Synergy",
    "analysis.metrics.withSynergy": "Increment With Synergy",
    "analysis.metrics.savings": "Savings",
    "analysis.metrics.people": "people/units",
    "analysis.metrics.newResources": "new resources",
    "analysis.metrics.optimized": "optimized",
    "analysis.metrics.vsSynergy": "vs. without synergy",
    "analysis.cta.title": "Ready to calculate commercial viability",
    "analysis.cta.description":
      "Based on optimized numbers (+46 resources with synergy), calculate real marginal cost and minimum sustainable rate maintaining target margin.",
    "analysis.cta.button": "Calculate Rate & P&L",

    // Pricing
    "pricing.title": "Rate & P&L Calculation",
    "pricing.subtitle": "Commercial viability and profitability projection",
    "pricing.costParams": "Cost Parameters",
    "pricing.staffCosts": "Staff Costs (Monthly)",
    "pricing.assistant": "Assistant",
    "pricing.operator": "Operator",
    "pricing.leader": "Leader",
    "pricing.additionalCosts": "Additional Costs",
    "pricing.pcd": "PCD (People with Disabilities)",
    "pricing.admin": "Administrative",
    "pricing.overhead": "Overhead",
    "pricing.gseInvestment": "GSE Investment",
    "pricing.gsePayback": "GSE Payback",
    "pricing.paybackPeriod": "Payback Period",
    "pricing.months": "months",
    "pricing.staffBreakdown": "Staff Breakdown",
    "pricing.gseBreakdown": "GSE Breakdown",
    "pricing.financial": "Financial Projection",
    "pricing.monthlyCost": "Monthly Operational Cost",
    "pricing.monthlyRevenue": "Monthly Revenue",
    "pricing.monthlyProfit": "Monthly Profit",
    "pricing.margin": "Margin",
    "pricing.annualProfit": "Annual Profit Projection",
    "pricing.ratePerFlight": "Rate per Flight",
    "pricing.flightsPerMonth": "flights/month",

    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.analysis": "Airport Analysis",
    "nav.pricing": "Pricing & P&L",

    // Common
    "common.ramp": "Ramp",
    "common.cleaning": "Cleaning",
    "common.gse": "GSE",
    "common.airport": "Airport",
    "common.period": "Period",
    at: "at",
    flight: "flight",
    scheduled: "scheduled",
    route: "Route",
    arrival: "Arrival",
    departure: "Departure",
  },
  pt: {
    // Landing Page
    "landing.hero.title": "Decida qual cliente assumir. Com dados reais.",
    "landing.hero.subtitle": "Plataforma de Inteligência Comercial para Ground Handling",
    "landing.hero.description":
      "O FOP transforma a decisão comercial de 'vale a pena fechar esse cliente?' em modelo calculado, conectando malha de voos, capacidade operacional e rentabilidade.",
    "landing.hero.cta": "Acessar Plataforma",
    "landing.problem.title": "As perguntas que ninguém responde com clareza",
    "landing.problem.description": "Hoje essas decisões são feitas em call, planilha e feeling. O FOP muda isso.",
    "landing.problem.q1": "Consigo operar esse cliente com o time atual?",
    "landing.problem.q1.detail":
      "Se eu trouxer a AZUL pra GRU em outubro, preciso contratar um time inteiro novo ou só reforçar 3-4 pessoas no pico?",
    "landing.problem.q2": "Quanto custaria realmente absorver essa companhia?",
    "landing.problem.q2.detail":
      "Eu preciso comprar mais equipamento de rampa ou consigo reutilizar o que já está no pátio?",
    "landing.problem.q3": "Qual a tarifa mínima que posso oferecer?",
    "landing.problem.q3.detail":
      "Qual preço mantém 30% de margem e ainda é competitivo o suficiente para fechar o contrato?",
    "landing.problem.q4": "Quanto de lucro anual esse contrato traria?",
    "landing.problem.q4.detail": "Vale a pena investir recursos comerciais nessa negociação? Qual o retorno esperado?",
    "landing.solution.title": "Como o FOP funciona",
    "landing.solution.description":
      "Quatro passos para transformar expansão comercial em engenharia de custo marginal real",
    "landing.solution.step1": "Mapeia a operação atual",
    "landing.solution.step1.detail":
      "Entende quem você já atende, em quais horários, com quais aeronaves, e qual demanda de pessoas e equipamentos isso gera hora a hora.",
    "landing.solution.step2": "Simula trazer um novo cliente",
    "landing.solution.step2.detail":
      "Coloca a malha do prospect por cima da sua estrutura atual e estima a carga adicional: quantas pessoas a mais, quantos equipamentos, em quais picos.",
    "landing.solution.step3": "Detecta simultaneidade e reaproveitamento",
    "landing.solution.step3.detail":
      "Identifica onde o voo do cliente novo cai próximo de algo que você já atende. Você não precisa montar equipe nova - absorve com o que já está ativo.",
    "landing.solution.step4": "Calcula preço e margem",
    "landing.solution.step4.detail":
      "Com base no cenário otimizado, calcula custo marginal, tarifa necessária por tipo de aeronave, margem resultante e lucro anual projetado.",
    "landing.differential.title": "O que diferencia o FOP",
    "landing.differential.description": "Não é uma ferramenta operacional. É uma arma comercial estratégica.",
    "landing.differential.point1": "Olha você + cliente potencial",
    "landing.differential.point1.detail":
      "Ferramentas tradicionais planejam SUA malha. O FOP planeja SUA malha + a malha de um cliente que você ainda nem fechou.",
    "landing.differential.point2": "Simultaneidade vira dinheiro",
    "landing.differential.point2.detail":
      "Quantifica o reaproveitamento de staff e GSE já ativos. Isso vira argumento comercial: preço agressivo mantendo margem.",
    "landing.differential.point3": "Tarifa mínima defensável",
    "landing.differential.point3.detail":
      "Entrega o preço mínimo por tipo de aeronave mantendo margem aprovada. Tira o comercial do chute e coloca na mesa com âncora técnica.",
    "landing.cta.title": "Transforme decisões comerciais em vantagem competitiva",
    "landing.cta.description":
      "Analise todos os aeroportos do Brasil. Simule cenários. Calcule tarifas. Feche contratos com confiança.",
    "landing.cta.button": "Começar Agora",

    // Dashboard
    "dashboard.title": "Dashboard de Aeroportos",
    "dashboard.subtitle": "Visão geral de todos os aeroportos operados pela dnata no Brasil",
    "dashboard.search": "Buscar aeroporto por código ou cidade...",
    "dashboard.totalFlights": "Total de Voos/Mês",
    "dashboard.totalStaff": "Staff Total",
    "dashboard.totalGse": "GSE Total",
    "dashboard.avgUtilization": "Utilização Média",
    "dashboard.airports": "Aeroportos",
    "dashboard.highActivity": "Alta Atividade",
    "dashboard.mediumActivity": "Média Atividade",
    "dashboard.lowActivity": "Baixa Atividade",
    "dashboard.flightsMonth": "Voos/Mês",
    "dashboard.staff": "Staff",
    "dashboard.gse": "GSE",
    "dashboard.currentClients": "Clientes Atuais",
    "dashboard.prospects": "Prospects",
    "dashboard.analyzeAirport": "Analisar Aeroporto",

    // Airport Analysis
    "analysis.title": "Análise por Aeroporto",
    "analysis.subtitle": "Otimização de capacidade operacional e análise de viabilidade comercial",
    "analysis.scenario": "Cenário de Análise",
    "analysis.currentOperation": "Operação Atual",
    "analysis.newClient": "Novo Cliente",
    "analysis.timeline.title": "Janela Operacional: Operação Atual vs Novo Cliente",
    "analysis.timeline.description":
      "Simultaneidade de atendimento de voos. Áreas empilhadas mostram prospects sobre operação atual.",
    "analysis.heatmap.title": "Heatmap Operacional (Dia × Horário)",
    "analysis.heatmap.description":
      "Intensidade operacional da 'pior semana'. Passe o mouse sobre as células para ver detalhes dos voos.",
    "analysis.demand.title": "Curva de Demanda de Staff e GSE",
    "analysis.demand.description": "Distribuição de recursos ao longo do dia (pico simultâneo)",
    "analysis.metrics.currentGross": "Necessário Bruto Atual",
    "analysis.metrics.withoutSynergy": "Incremento Sem Sinergia",
    "analysis.metrics.withSynergy": "Incremento Com Sinergia",
    "analysis.metrics.savings": "Economia",
    "analysis.metrics.people": "pessoas/unidades",
    "analysis.metrics.newResources": "novos recursos",
    "analysis.metrics.optimized": "otimizado",
    "analysis.metrics.vsSynergy": "vs. sem sinergia",
    "analysis.cta.title": "Pronto para calcular viabilidade comercial",
    "analysis.cta.description":
      "Com base nos números otimizados (+46 recursos com sinergia), calcule o custo marginal real e a tarifa mínima sustentável mantendo margem alvo.",
    "analysis.cta.button": "Calcular Tarifa & P&L",

    // Pricing
    "pricing.title": "Cálculo de Tarifa & P&L",
    "pricing.subtitle": "Viabilidade comercial e projeção de rentabilidade",
    "pricing.costParams": "Parâmetros de Custo",
    "pricing.staffCosts": "Custos de Staff (Mensal)",
    "pricing.assistant": "Auxiliar",
    "pricing.operator": "Operador",
    "pricing.leader": "Líder",
    "pricing.additionalCosts": "Custos Adicionais",
    "pricing.pcd": "PCD (Pessoas com Deficiência)",
    "pricing.admin": "Administrativo",
    "pricing.overhead": "Overhead",
    "pricing.gseInvestment": "Investimento em GSE",
    "pricing.gsePayback": "Payback de GSE",
    "pricing.paybackPeriod": "Período de Payback",
    "pricing.months": "meses",
    "pricing.staffBreakdown": "Breakdown de Staff",
    "pricing.gseBreakdown": "Breakdown de GSE",
    "pricing.financial": "Projeção Financeira",
    "pricing.monthlyCost": "Custo Operacional Mensal",
    "pricing.monthlyRevenue": "Receita Mensal",
    "pricing.monthlyProfit": "Lucro Mensal",
    "pricing.margin": "Margem",
    "pricing.annualProfit": "Projeção de Lucro Anual",
    "pricing.ratePerFlight": "Tarifa por Voo",
    "pricing.flightsPerMonth": "voos/mês",

    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.analysis": "Análise por Aeroporto",
    "nav.pricing": "Precificação & P&L",

    // Common
    "common.ramp": "Rampa",
    "common.cleaning": "Limpeza",
    "common.gse": "GSE",
    "common.airport": "Aeroporto",
    "common.period": "Período",
    at: "às",
    flight: "voo",
    scheduled: "agendado",
    route: "Rota",
    arrival: "Chegada",
    departure: "Partida",
  },
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("fop-language") as Language
    if (saved) setLanguage(saved)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("fop-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
