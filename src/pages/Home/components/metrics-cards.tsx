import { useNavigate } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  label: string
  value: string
  change: number
  trend: "up" | "down"
  color: "blue-light" | "gray-light" | "blue-gray"
  onClick?: () => void
}

function MetricCard({ label, value, change, trend, color, onClick }: MetricCardProps) {
  const isPositive = change >= 0
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown

  const colorClass = {
    "blue-light": "bg-blue-light",
    "gray-light": "bg-gray-light dark:bg-gray-300/6",
    "blue-gray": "bg-blue-gray",
  }[color]

  // Use white text in dark mode for gray-light cards
  const textColorClass = color === "gray-light" ? "dark:text-white" : "dark:text-black"

  return (
    <Card 
      className={cn(
        colorClass, 
        "rounded-2xl shadow-none border-none flex flex-col justify-center items-center h-[110px]",
        onClick && "cursor-pointer hover:opacity-90 transition-opacity"
      )}
      onClick={onClick}
    >
      <div className="space-y-2">
        {/* Label - aligned to start */}
        <p className={cn("text-sm font-medium", textColorClass)}>{label}</p>
        
        {/* Bottom section: Value (left) + Change (right) */}
        <div className="flex-row xl:flex items-center justify-between gap-10">
          {/* Left: Main Metric Value */}
          <p className={cn("text-2xl font-semibold", textColorClass)}>{value}</p>
          
          {/* Right: Percentage Change with Icon */}
          <div className="flex items-center justify-between">
            <span className={cn("text-xs font-light", textColorClass)}>{isPositive ? "+" : ""}{change}%</span>
            <TrendIcon className={cn("w-4 h-4", textColorClass)} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export function MetricsCards() {
  const navigate = useNavigate()

  return (
    <>
      <MetricCard
        label="Customers"
        value="3,781"
        change={11.01}
        trend="up"
        color="blue-light"
      />
      <MetricCard
        label="Orders"
        value="1,219"
        change={-0.03}
        trend="down"
        color="gray-light"
        onClick={() => navigate("/orders")}
      />
      <MetricCard
        label="Revenue"
        value="$695"
        change={15.03}
        trend="up"
        color="gray-light"
      />
      <MetricCard
        label="Growth"
        value="30.1%"
        change={6.08}
        trend="up"
        color="blue-gray"
      />
    </>
  )
}

