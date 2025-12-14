"use client"

import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-7 px-2 text-xs"
      >
        <Globe className="h-3 w-3 mr-1" />
        EN
      </Button>
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pt")}
        className="h-7 px-2 text-xs"
      >
        PT
      </Button>
    </div>
  )
}
