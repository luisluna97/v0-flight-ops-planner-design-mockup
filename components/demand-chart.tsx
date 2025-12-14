"use client"

import { useState } from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const rampaData = [
  { hour: "06:00", current: 3, gross: 4, optimized: 4 },
  { hour: "07:00", current: 5, gross: 7, optimized: 6 },
  { hour: "08:00", current: 8, gross: 10, optimized: 9 },
  { hour: "09:00", current: 10, gross: 13, optimized: 11 },
  { hour: "10:00", current: 11, gross: 14, optimized: 12 },
  { hour: "11:00", current: 10, gross: 14, optimized: 12 },
  { hour: "12:00", current: 8, gross: 13, optimized: 11 },
  { hour: "13:00", current: 7, gross: 13, optimized: 10 },
  { hour: "14:00", current: 6, gross: 14, optimized: 10 },
  { hour: "15:00", current: 7, gross: 17, optimized: 12 },
  { hour: "16:00", current: 8, gross: 17, optimized: 12 },
  { hour: "17:00", current: 9, gross: 16, optimized: 12 },
  { hour: "18:00", current: 10, gross: 15, optimized: 12 },
  { hour: "19:00", current: 9, gross: 13, optimized: 11 },
  { hour: "20:00", current: 7, gross: 10, optimized: 9 },
  { hour: "21:00", current: 5, gross: 7, optimized: 6 },
  { hour: "22:00", current: 3, gross: 4, optimized: 4 },
]

const limpezaData = [
  { hour: "06:00", current: 2, gross: 3, optimized: 3 },
  { hour: "07:00", current: 4, gross: 5, optimized: 4 },
  { hour: "08:00", current: 6, gross: 7, optimized: 6 },
  { hour: "09:00", current: 7, gross: 9, optimized: 8 },
  { hour: "10:00", current: 8, gross: 10, optimized: 9 },
  { hour: "11:00", current: 7, gross: 10, optimized: 8 },
  { hour: "12:00", current: 6, gross: 10, optimized: 8 },
  { hour: "13:00", current: 5, gross: 10, optimized: 7 },
  { hour: "14:00", current: 4, gross: 10, optimized: 7 },
  { hour: "15:00", current: 5, gross: 12, optimized: 8 },
  { hour: "16:00", current: 6, gross: 12, optimized: 9 },
  { hour: "17:00", current: 7, gross: 12, optimized: 9 },
  { hour: "18:00", current: 7, gross: 11, optimized: 9 },
  { hour: "19:00", current: 6, gross: 9, optimized: 8 },
  { hour: "20:00", current: 5, gross: 7, optimized: 6 },
  { hour: "21:00", current: 3, gross: 4, optimized: 4 },
  { hour: "22:00", current: 2, gross: 3, optimized: 3 },
]

const gseData = [
  { hour: "06:00", current: 2, gross: 2, optimized: 2 },
  { hour: "07:00", current: 3, gross: 4, optimized: 3 },
  { hour: "08:00", current: 4, gross: 5, optimized: 4 },
  { hour: "09:00", current: 5, gross: 6, optimized: 5 },
  { hour: "10:00", current: 5, gross: 6, optimized: 5 },
  { hour: "11:00", current: 5, gross: 7, optimized: 6 },
  { hour: "12:00", current: 4, gross: 6, optimized: 5 },
  { hour: "13:00", current: 3, gross: 6, optimized: 5 },
  { hour: "14:00", current: 3, gross: 7, optimized: 5 },
  { hour: "15:00", current: 4, gross: 9, optimized: 6 },
  { hour: "16:00", current: 4, gross: 8, optimized: 6 },
  { hour: "17:00", current: 5, gross: 8, optimized: 6 },
  { hour: "18:00", current: 5, gross: 7, optimized: 6 },
  { hour: "19:00", current: 4, gross: 6, optimized: 5 },
  { hour: "20:00", current: 3, gross: 4, optimized: 4 },
  { hour: "21:00", current: 2, gross: 3, optimized: 3 },
  { hour: "22:00", current: 2, gross: 2, optimized: 2 },
]

const COLORS = {
  current: "#3b82f6",
  gross: "#ef4444",
  optimized: "#10b981",
  grid: "#e5e7eb",
  text: "#6b7280",
}

const chartConfig = {
  current: {
    label: "Atual",
    color: COLORS.current,
  },
  gross: {
    label: "Bruto c/ Novo Cliente",
    color: COLORS.gross,
  },
  optimized: {
    label: "Otimizado",
    color: COLORS.optimized,
  },
}

export function DemandChart() {
  const [resourceType, setResourceType] = useState<"rampa" | "limpeza" | "gse">("rampa")

  const data = resourceType === "rampa" ? rampaData : resourceType === "limpeza" ? limpezaData : gseData

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={resourceType} onValueChange={(value: any) => setResourceType(value)}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rampa">Rampa</SelectItem>
            <SelectItem value="limpeza">Limpeza</SelectItem>
            <SelectItem value="gse">GSE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer config={chartConfig} className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} opacity={0.5} />
            <XAxis dataKey="hour" stroke={COLORS.text} fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke={COLORS.text} fontSize={11} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} iconType="line" />
            <Line
              type="monotone"
              dataKey="current"
              stroke={COLORS.current}
              strokeWidth={2.5}
              dot={false}
              name="Atual"
            />
            <Line
              type="monotone"
              dataKey="gross"
              stroke={COLORS.gross}
              strokeWidth={2.5}
              strokeDasharray="5 5"
              dot={false}
              name="Bruto c/ Novo Cliente"
            />
            <Line
              type="monotone"
              dataKey="optimized"
              stroke={COLORS.optimized}
              strokeWidth={3}
              dot={false}
              name="Otimizado"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
