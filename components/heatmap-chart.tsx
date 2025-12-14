"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n-context"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const daysPt = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const hours = [
  "06h",
  "07h",
  "08h",
  "09h",
  "10h",
  "11h",
  "12h",
  "13h",
  "14h",
  "15h",
  "16h",
  "17h",
  "18h",
  "19h",
  "20h",
  "21h",
  "22h",
]

const flightData: Record<string, any[]> = {
  "Sunday-10h": [
    { flight: "G3 1234", airline: "GOL", origin: "GIG", dest: "SSA", sta: "10:15", std: "11:30", type: "arrival" },
    { flight: "LA 3456", airline: "LATAM", origin: "SSA", dest: "BSB", sta: "10:30", std: "11:45", type: "departure" },
  ],
  "Monday-10h": [
    { flight: "G3 1234", airline: "GOL", origin: "GIG", dest: "SSA", sta: "10:15", std: "11:30", type: "arrival" },
    { flight: "LA 3456", airline: "LATAM", origin: "SSA", dest: "BSB", sta: "10:30", std: "11:45", type: "departure" },
    { flight: "G3 5678", airline: "GOL", origin: "CGH", dest: "SSA", sta: "10:45", std: "12:00", type: "arrival" },
    { flight: "LA 7890", airline: "LATAM", origin: "SSA", dest: "GRU", sta: "10:50", std: "12:10", type: "departure" },
    { flight: "AD 2345", airline: "AZUL", origin: "SDU", dest: "SSA", sta: "10:20", std: "11:35", type: "arrival" },
    { flight: "AD 6789", airline: "AZUL", origin: "SSA", dest: "CNF", sta: "10:35", std: "11:50", type: "departure" },
    { flight: "G3 3456", airline: "GOL", origin: "SSA", dest: "POA", sta: "10:40", std: "12:05", type: "departure" },
    { flight: "LA 8901", airline: "LATAM", origin: "CWB", dest: "SSA", sta: "10:55", std: "12:20", type: "arrival" },
    { flight: "AD 4567", airline: "AZUL", origin: "VCP", dest: "SSA", sta: "10:25", std: "11:40", type: "arrival" },
    { flight: "G3 7890", airline: "GOL", origin: "SSA", dest: "FOR", sta: "10:10", std: "11:20", type: "departure" },
    { flight: "LA 2345", airline: "LATAM", origin: "REC", dest: "SSA", sta: "10:05", std: "11:15", type: "arrival" },
    { flight: "AD 8901", airline: "AZUL", origin: "SSA", dest: "MCZ", sta: "10:30", std: "11:45", type: "departure" },
  ],
  "Monday-15h": [
    { flight: "AD 7890", airline: "AZUL", origin: "SDU", dest: "SSA", sta: "15:10", std: "16:25", type: "arrival" },
    { flight: "AD 3456", airline: "AZUL", origin: "SSA", dest: "CNF", sta: "15:50", std: "17:10", type: "departure" },
  ],
  "Tuesday-09h": [
    { flight: "G3 5678", airline: "GOL", origin: "CGH", dest: "SSA", sta: "09:20", std: "10:35", type: "arrival" },
    { flight: "LA 9012", airline: "LATAM", origin: "SSA", dest: "POA", sta: "09:40", std: "11:00", type: "departure" },
  ],
  "Tuesday-10h": [
    { flight: "G3 1111", airline: "GOL", origin: "GIG", dest: "SSA", sta: "10:10", std: "11:25", type: "arrival" },
    { flight: "LA 2222", airline: "LATAM", origin: "SSA", dest: "BSB", sta: "10:25", std: "11:40", type: "departure" },
    { flight: "G3 3333", airline: "GOL", origin: "CGH", dest: "SSA", sta: "10:40", std: "11:55", type: "arrival" },
    { flight: "LA 4444", airline: "LATAM", origin: "SSA", dest: "GRU", sta: "10:45", std: "12:05", type: "departure" },
    { flight: "AD 5555", airline: "AZUL", origin: "SDU", dest: "SSA", sta: "10:15", std: "11:30", type: "arrival" },
    { flight: "AD 6666", airline: "AZUL", origin: "SSA", dest: "CNF", sta: "10:30", std: "11:45", type: "departure" },
    { flight: "G3 7777", airline: "GOL", origin: "POA", dest: "SSA", sta: "10:35", std: "12:00", type: "arrival" },
    { flight: "LA 8888", airline: "LATAM", origin: "SSA", dest: "CWB", sta: "10:50", std: "12:15", type: "departure" },
    { flight: "AD 9999", airline: "AZUL", origin: "VCP", dest: "SSA", sta: "10:20", std: "11:35", type: "arrival" },
    { flight: "G3 1010", airline: "GOL", origin: "SSA", dest: "FOR", sta: "10:05", std: "11:15", type: "departure" },
    { flight: "LA 2020", airline: "LATAM", origin: "REC", dest: "SSA", sta: "10:00", std: "10:15", type: "arrival" },
    { flight: "AD 3030", airline: "AZUL", origin: "SSA", dest: "MCZ", sta: "10:25", std: "11:40", type: "departure" },
  ],
  "Tuesday-16h": [
    { flight: "AD 2345", airline: "AZUL", origin: "GRU", dest: "SSA", sta: "16:15", std: "17:30", type: "arrival" },
    { flight: "AD 6789", airline: "AZUL", origin: "SSA", dest: "VCP", sta: "16:45", std: "18:00", type: "departure" },
  ],
  "Thursday-10h": [
    { flight: "G3 4040", airline: "GOL", origin: "GIG", dest: "SSA", sta: "10:12", std: "11:27", type: "arrival" },
    { flight: "LA 5050", airline: "LATAM", origin: "SSA", dest: "BSB", sta: "10:28", std: "11:43", type: "departure" },
    { flight: "G3 6060", airline: "GOL", origin: "CGH", dest: "SSA", sta: "10:42", std: "11:57", type: "arrival" },
    { flight: "LA 7070", airline: "LATAM", origin: "SSA", dest: "GRU", sta: "10:48", std: "12:08", type: "departure" },
    { flight: "AD 8080", airline: "AZUL", origin: "SDU", dest: "SSA", sta: "10:18", std: "11:33", type: "arrival" },
    { flight: "AD 9090", airline: "AZUL", origin: "SSA", dest: "CNF", sta: "10:33", std: "11:48", type: "departure" },
    { flight: "G3 1212", airline: "GOL", origin: "POA", dest: "SSA", sta: "10:38", std: "12:03", type: "arrival" },
    { flight: "LA 3434", airline: "LATAM", origin: "SSA", dest: "CWB", sta: "10:53", std: "12:18", type: "departure" },
    { flight: "AD 5656", airline: "AZUL", origin: "VCP", dest: "SSA", sta: "10:23", std: "11:38", type: "arrival" },
    { flight: "G3 7878", airline: "GOL", origin: "SSA", dest: "FOR", sta: "10:08", std: "11:18", type: "departure" },
    { flight: "LA 9191", airline: "LATAM", origin: "REC", dest: "SSA", sta: "10:03", std: "10:13", type: "arrival" },
    { flight: "AD 1313", airline: "AZUL", origin: "SSA", dest: "MCZ", sta: "10:28", std: "11:43", type: "departure" },
  ],
  "Friday-09h": [
    { flight: "G3 1414", airline: "GOL", origin: "GIG", dest: "SSA", sta: "09:15", std: "10:30", type: "arrival" },
    { flight: "LA 1515", airline: "LATAM", origin: "SSA", dest: "BSB", sta: "09:30", std: "10:45", type: "departure" },
    { flight: "G3 1616", airline: "GOL", origin: "CGH", dest: "SSA", sta: "09:45", std: "11:00", type: "arrival" },
    { flight: "LA 1717", airline: "LATAM", origin: "SSA", dest: "GRU", sta: "09:50", std: "11:10", type: "departure" },
    { flight: "AD 1818", airline: "AZUL", origin: "SDU", dest: "SSA", sta: "09:20", std: "10:35", type: "arrival" },
    { flight: "AD 1919", airline: "AZUL", origin: "SSA", dest: "CNF", sta: "09:35", std: "10:50", type: "departure" },
    { flight: "G3 2121", airline: "GOL", origin: "POA", dest: "SSA", sta: "09:40", std: "11:05", type: "arrival" },
    { flight: "LA 2323", airline: "LATAM", origin: "SSA", dest: "CWB", sta: "09:55", std: "11:20", type: "departure" },
    { flight: "AD 2525", airline: "AZUL", origin: "VCP", dest: "SSA", sta: "09:25", std: "10:40", type: "arrival" },
    { flight: "G3 2727", airline: "GOL", origin: "SSA", dest: "FOR", sta: "09:10", std: "10:20", type: "departure" },
    { flight: "LA 2929", airline: "LATAM", origin: "REC", dest: "SSA", sta: "09:05", std: "10:15", type: "arrival" },
    { flight: "AD 3131", airline: "AZUL", origin: "SSA", dest: "MCZ", sta: "09:30", std: "10:45", type: "departure" },
  ],
}

const heatmapData = [
  [2, 4, 6, 8, 10, 9, 7, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1], // Sunday
  [3, 5, 7, 9, 11, 10, 8, 7, 8, 9, 12, 10, 9, 8, 6, 4, 2], // Monday
  [3, 5, 8, 10, 12, 11, 9, 8, 9, 11, 12, 11, 10, 9, 7, 5, 3], // Tuesday
  [3, 5, 7, 9, 11, 10, 8, 7, 8, 10, 11, 10, 9, 8, 6, 4, 2], // Wednesday
  [4, 6, 8, 10, 12, 11, 9, 8, 9, 11, 12, 11, 10, 9, 7, 5, 3], // Thursday
  [4, 6, 9, 11, 12, 11, 10, 9, 10, 12, 11, 10, 9, 8, 6, 4, 2], // Friday
  [2, 3, 5, 7, 9, 8, 6, 5, 6, 7, 6, 5, 4, 3, 2, 1, 1], // Saturday
]

function getIntensityColor(value: number) {
  if (value >= 11) return "bg-red-600 text-white"
  if (value >= 9) return "bg-orange-500 text-white"
  if (value >= 7) return "bg-amber-500 text-white"
  if (value >= 5) return "bg-yellow-400 text-foreground"
  if (value >= 3) return "bg-green-400 text-foreground"
  return "bg-green-200 text-foreground"
}

export function HeatmapChart() {
  const { t, locale } = useI18n()
  const [selectedCell, setSelectedCell] = useState<{ day: string; hour: string; flights: any[] } | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const currentDays = locale === "pt" ? daysPt : days

  const handleCellClick = (day: string, hour: string, flights: any[]) => {
    if (flights.length > 0) {
      setSelectedCell({ day, hour, flights })
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid grid-cols-[120px_repeat(17,1fr)] gap-1">
              {/* Header */}
              <div className="text-xs font-medium text-muted-foreground" />
              {hours.map((hour) => (
                <div key={hour} className="text-xs font-medium text-center text-muted-foreground py-2">
                  {hour}
                </div>
              ))}

              {currentDays.map((day, rowIndex) => (
                <>
                  <div key={day} className="text-xs font-medium text-muted-foreground flex items-center py-2">
                    {day}
                  </div>
                  {heatmapData[rowIndex].map((value, colIndex) => {
                    const cellKey = `${days[rowIndex]}-${hours[colIndex]}`
                    const flights = flightData[cellKey] || []

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          ${getIntensityColor(value)}
                          rounded text-xs font-medium flex items-center justify-center
                          transition-all hover:scale-105 hover:shadow-lg cursor-pointer
                          min-h-[48px] relative
                          ${flights.length > 0 ? "hover:ring-2 hover:ring-primary" : ""}
                        `}
                        onClick={() => handleCellClick(day, hours[colIndex], flights)}
                      >
                        {value}
                      </div>
                    )
                  })}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>
              {selectedCell?.day} {t("at")} {selectedCell?.hour}
            </DialogTitle>
            <DialogDescription>
              {selectedCell?.flights.length} {t("flight")}
              {selectedCell?.flights.length !== 1 ? "s" : ""} {t("scheduled")}
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto flex-1 pr-2">
            <div className="space-y-3">
              {selectedCell?.flights.map((flight, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-foreground">{flight.flight}</div>
                      <div className="text-sm text-muted-foreground">{flight.airline}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase mb-1">
                        {flight.type === "arrival" ? t("arrival") : t("departure")}
                      </div>
                      <div className="text-base font-semibold text-foreground">
                        {flight.origin} → {flight.dest}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase mb-1">{t("arrival")} (STA)</div>
                      <div className="text-base font-semibold text-foreground">{flight.sta}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase mb-1">{t("departure")} (STD)</div>
                      <div className="text-base font-semibold text-foreground">{flight.std}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
