"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", currentWeek: 14, previousWeek: 8 },
  { month: "February", currentWeek: 8, previousWeek: 20 },
  { month: "March", currentWeek: 9, previousWeek: 16 },
  { month: "April", currentWeek: 16, previousWeek: 9 },
  { month: "May", currentWeek: 22, previousWeek: 15 },
  { month: "June", currentWeek: 20, previousWeek: 24 },
]

// Array of dot position adjustments - one object per data point
// Adjust x and y values to fine-tune dot positions (x: horizontal, y: vertical)
const dotPositions = [
  { previousWeek: { x: 0, y: 0 }, currentWeek: { x: 0, y: 0 } }, // January
  { previousWeek: { x: 0, y: 16 }, currentWeek: { x: 0, y: -7 } }, // February
  { previousWeek: { x: 0, y: 4 }, currentWeek: { x: 0, y: -6 } }, // March
  { previousWeek: { x: 0, y: -14 }, currentWeek: { x: 0, y: 0 } }, // April
  { previousWeek: { x: 0, y: -4 }, currentWeek: { x: 0, y: 8 } }, // May
  { previousWeek: { x: 0, y: 0 }, currentWeek: { x: 0, y: 0 } }, // June
]

// Create merged data with separate keys for solid (Jan-Apr) and dashed (Apr-Jun) portions
// April is included in both to connect the lines
const mergedData = chartData.map((item, index) => ({
  ...item,
  currentWeekSolid: index < 4 ? item.currentWeek : null,
  currentWeekDashed: index >= 3 ? item.currentWeek : null,
}))

const chartConfig = {
  currentWeek: {
    label: "Current Week",
    theme: {
      light: "#000000", // Black for light mode
      dark: "#A8C5DA", // Bar color for dark mode
    },
  },
  previousWeek: {
    label: "Previous Week",
    color: "#93C5FD", // Light blue
  },
  currentWeekSolid: {
    label: "Current Week",
    theme: {
      light: "#000000", // Black for light mode
      dark: "#A8C5DA", // Bar color for dark mode
    },
  },
  currentWeekDashed: {
    label: "Current Week",
    theme: {
      light: "#000000", // Black for light mode
      dark: "#A8C5DA", // Bar color for dark mode
    },
  },
} satisfies ChartConfig

export function RevenueTrendChart() {
  // Custom activeDot component for Previous Week line
  const PreviousWeekDot = ({ cx, cy, payload, value, ...props }: any) => {
    // Don't render if value is null or undefined
    if (value == null) return null
    
    // Find the index by matching the payload month with chartData
    const index = chartData.findIndex((d) => d.month === payload?.month)
    const adjustment = dotPositions[index]?.previousWeek || { x: 0, y: 0 }
    return (
      <circle
        cx={cx + adjustment.x}
        cy={cy + adjustment.y}
        r={4}
        fill="var(--color-bar)"
        stroke="#fff"
        strokeWidth={2}
        {...props}
      />
    )
  }

  // Custom activeDot component for Current Week Solid line (Jan-Apr)
  const CurrentWeekSolidDot = ({ cx, cy, payload, value, ...props }: any) => {
    // Don't render if value is null or undefined
    if (value == null) return null
    
    // Find the index by matching the payload month with chartData
    const index = chartData.findIndex((d) => d.month === payload?.month)
    const adjustment = dotPositions[index]?.currentWeek || { x: 0, y: 0 }
    return (
      <circle
        cx={cx + adjustment.x}
        cy={cy + adjustment.y}
        r={4}
        fill="var(--color-currentWeekSolid)"
        stroke="#fff"
        strokeWidth={2}
        {...props}
      />
    )
  }

  // Custom activeDot component for Current Week Dashed line (Apr-Jun)
  const CurrentWeekDashedDot = ({ cx, cy, payload, value, ...props }: any) => {
    // Don't render if value is null or undefined
    if (value == null) return null
    
    // Find the index by matching the payload month with chartData
    const index = chartData.findIndex((d) => d.month === payload?.month)
    const adjustment = dotPositions[index]?.currentWeek || { x: 0, y: 0 }
    return (
      <circle
        cx={cx + adjustment.x}
        cy={cy + adjustment.y}
        r={4}
        fill="var(--color-currentWeekDashed)"
        stroke="#fff"
        strokeWidth={2}
        {...props}
      />
    )
  }

  // Custom tooltip to show correct values from chartData
  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      // Find the actual data point from chartData
      const dataPoint = chartData.find((d) => d.month === label)
      if (!dataPoint) return null

      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid gap-2">
            <div className="font-medium">{label}</div>
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-black dark:bg-bar" />
              <span className="text-xs">Current Week: {dataPoint.currentWeek}M</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-bar" />
              <span className="text-xs">Previous Week: {dataPoint.previousWeek}M</span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="bg-gray-light dark:bg-gray-300/6 border-none shadow-none rounded-2xl">
      <CardHeader>
        <div className="flex flex-col xl:flex-row items-center justify-start gap-6">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <div className=" h-4 w-[1px] bg-gray-300 shrink-0 hidden xl:block" />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-black dark:bg-bar" />
              <span className="text-xs font-light">Current Week</span>
              <span className="text-xs font-medium">$58,211</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-bar" />
              <span className="text-xs font-light">Previous Week</span>
              <span className="text-xs font-medium">$68,768</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="ml-2">
        <ChartContainer 
          config={chartConfig} 
          className="h-[240px] [&_.recharts-cartesian-axis-tick_text]:fill-[#99a1af] font-light w-full"
        >
          <LineChart
            data={mergedData}
            margin={{
              left: 0,
              right: 0,
              top: 5,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={30}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={30}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <ChartTooltip cursor={false} content={customTooltip} />
            <Line
              dataKey="previousWeek"
              type="basis"
              stroke="var(--color-bar)"
              strokeWidth={3}
              dot={false}
              activeDot={<PreviousWeekDot />}
            />
            {/* Solid line for Jan-Apr */}
            <Line
              dataKey="currentWeekSolid"
              type="basis"
              stroke="var(--color-currentWeekSolid)"
              strokeWidth={3}
              dot={false}
              connectNulls={false}
              activeDot={<CurrentWeekSolidDot />}
            />
            {/* Dashed line for Apr-Jun (includes April to connect) */}
            <Line
              dataKey="currentWeekDashed"
              type="basis"
              stroke="var(--color-currentWeekDashed)"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
              connectNulls={false}
              activeDot={<CurrentWeekDashedDot />}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}