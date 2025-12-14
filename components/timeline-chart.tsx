"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const rampaData = [
  { hour: "06:00", current: 3, prospect: 1 },
  { hour: "07:00", current: 5, prospect: 2 },
  { hour: "08:00", current: 8, prospect: 2 },
  { hour: "09:00", current: 10, prospect: 3 },
  { hour: "10:00", current: 11, prospect: 3 },
  { hour: "11:00", current: 10, prospect: 4 },
  { hour: "12:00", current: 8, prospect: 5 },
  { hour: "13:00", current: 7, prospect: 6 },
  { hour: "14:00", current: 6, prospect: 8 },
  { hour: "15:00", current: 7, prospect: 10 },
  { hour: "16:00", current: 8, prospect: 9 },
  { hour: "17:00", current: 9, prospect: 7 },
  { hour: "18:00", current: 10, prospect: 5 },
  { hour: "19:00", current: 9, prospect: 4 },
  { hour: "20:00", current: 7, prospect: 3 },
  { hour: "21:00", current: 5, prospect: 2 },
  { hour: "22:00", current: 3, prospect: 1 },
]

const limpezaData = [
  { hour: "06:00", current: 2, prospect: 1 },
  { hour: "07:00", current: 4, prospect: 1 },
  { hour: "08:00", current: 6, prospect: 1 },
  { hour: "09:00", current: 7, prospect: 2 },
  { hour: "10:00", current: 8, prospect: 2 },
  { hour: "11:00", current: 7, prospect: 3 },
  { hour: "12:00", current: 6, prospect: 4 },
  { hour: "13:00", current: 5, prospect: 5 },
  { hour: "14:00", current: 4, prospect: 6 },
  { hour: "15:00", current: 5, prospect: 7 },
  { hour: "16:00", current: 6, prospect: 6 },
  { hour: "17:00", current: 7, prospect: 5 },
  { hour: "18:00", current: 7, prospect: 4 },
  { hour: "19:00", current: 6, prospect: 3 },
  { hour: "20:00", current: 5, prospect: 2 },
  { hour: "21:00", current: 3, prospect: 1 },
  { hour: "22:00", current: 2, prospect: 1 },
]

const gseData = [
  { hour: "06:00", current: 2, prospect: 0 },
  { hour: "07:00", current: 3, prospect: 1 },
  { hour: "08:00", current: 4, prospect: 1 },
  { hour: "09:00", current: 5, prospect: 1 },
  { hour: "10:00", current: 5, prospect: 1 },
  { hour: "11:00", current: 5, prospect: 2 },
  { hour: "12:00", current: 4, prospect: 2 },
  { hour: "13:00", current: 3, prospect: 3 },
  { hour: "14:00", current: 3, prospect: 4 },
  { hour: "15:00", current: 4, prospect: 5 },
  { hour: "16:00", current: 4, prospect: 4 },
  { hour: "17:00", current: 5, prospect: 3 },
  { hour: "18:00", current: 5, prospect: 2 },
  { hour: "19:00", current: 4, prospect: 2 },
  { hour: "20:00", current: 3, prospect: 1 },
  { hour: "21:00", current: 2, prospect: 1 },
  { hour: "22:00", current: 2, prospect: 0 },
]

const chartConfig = {
  current: {
    label: "Operação Atual (GOL + LATAM)",
    color: "#2563eb",
  },
  prospect: {
    label: "Novo Cliente (AZUL)",
    color: "#f59e0b",
  },
}

export function TimelineChart() {
  const [serviceType, setServiceType] = useState<"rampa" | "limpeza" | "gse">("rampa")

  const data = serviceType === "rampa" ? rampaData : serviceType === "limpeza" ? limpezaData : gseData

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={serviceType} onValueChange={(value: any) => setServiceType(value)}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rampa">Atendimento Rampa</SelectItem>
            <SelectItem value="limpeza">Atendimento Limpeza</SelectItem>
            <SelectItem value="gse">GSE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorProspect" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="hour"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#2563eb"
              strokeWidth={2.5}
              fill="url(#colorCurrent)"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="prospect"
              stroke="#f59e0b"
              strokeWidth={2.5}
              fill="url(#colorProspect)"
              stackId="1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
