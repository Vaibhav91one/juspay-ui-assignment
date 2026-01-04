"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", actuals: 16, projections: 4 },
  { month: "February", actuals: 20, projections: 5 },
  { month: "March", actuals: 17, projections: 4 },
  { month: "April", actuals: 22, projections: 5 },
  { month: "May", actuals: 14, projections: 4 },
  { month: "June", actuals: 20, projections: 5 },
]

const chartConfig = {
  actuals: {
    label: "Actuals",
    color: "#A8C5DA", // --color-bar - darker blue for bottom segment
  },
  projections: {
    label: "Projections",
    theme: {
      light: "#CFDFEB", // --color-bar-top - lighter blue for top segment (light mode)
      dark: "rgba(229, 236, 246, 0.3)", // Lighter blue for dark mode visibility
    },
  },
} satisfies ChartConfig

export function ProjectionsChart() {
  return (
    <Card className="bg-gray-light dark:bg-gray-300/6 border-none shadow-none rounded-2xl">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Projections vs Actuals</CardTitle>
      </CardHeader>
      <div>
        <ChartContainer 
          config={chartConfig} 
          className="h-[145px] [&_.recharts-cartesian-axis-tick_text]:fill-[#99a1af] font-light w-full"
        >
          <BarChart 
            data={chartData} 
            barCategoryGap="30%"
          >
            <CartesianGrid vertical={false} strokeDasharray="0" />
            <XAxis
              dataKey="month"
              tickMargin={10}
              tickLine={false}
              axisLine={{ stroke: "#cccdce" }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              allowDecimals={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ReferenceLine y={20} strokeWidth={1} />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="var(--color-actuals)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--color-projections)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  )
}
