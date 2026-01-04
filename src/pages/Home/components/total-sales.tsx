"use client"

import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { PieChartSvg } from "./pie-chart-svg"

const salesData = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
]

const COLORS = [
  "#000000", // Direct - will be overridden by SVG component for dark mode
  "#95A4FC", // Affiliate
  "#B1E3FF", // Sponsored
  "#BAEDBD", // E-mail
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function TotalSales() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isDark = theme === 'dark'

  return (
    <Card className="bg-gray-light dark:bg-gray-300/6 border-none shadow-none rounded-2xl">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[160px] overflow-hidden -my-6 flex items-center justify-center">
          <PieChartSvg data={salesData} colors={COLORS} size={130} />
        </div>

        {/* Legend */}
        <div className="flex flex-col items-center space-y-4 pt-4 mt-4 px-2">
          {salesData.map((item, index) => {
            // Use dark mode color for Direct (index 0) in dark mode
            const legendColor = index === 0 && isDark ? '#c6c7f8' : COLORS[index]
            
            return (
              <div key={item.name} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: legendColor }}
                  />
                  <span className="text-xs font-light text-gray-600 dark:text-white">{item.name}</span>
                </div>
                <span className="text-xs font-light text-gray-900 dark:text-white">
                  {formatCurrency(item.value)}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
