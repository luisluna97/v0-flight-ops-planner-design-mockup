import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Plane } from "lucide-react"

export function ScenarioSelector() {
  return (
    <Card className="p-6 bg-muted/30">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-foreground">Cenário de Análise</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Aeroporto:</span>
              <Badge variant="secondary" className="font-mono">
                SSA
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Período:</span>
              <Badge variant="secondary">Outubro 2025</Badge>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Plane className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-foreground">Companhias Aéreas</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Atendemos:</span>
              <Badge className="bg-chart-1 text-white">GOL</Badge>
              <Badge className="bg-chart-2 text-white">LATAM</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Prospect:</span>
              <Badge className="bg-chart-3 text-white">AZUL</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Fora do estudo:</span>
              <Badge variant="outline" className="text-muted-foreground">
                TAP
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                Air France
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
