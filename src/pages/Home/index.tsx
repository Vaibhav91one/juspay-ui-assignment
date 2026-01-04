import { MetricsCards } from './components/metrics-cards'
import { ProjectionsChart } from './components/projections-chart'
import { RevenueTrendChart } from './components/revenue-trend-chart'
import { RevenueByLocation } from './components/revenue-by-location'
import { TopSellingProducts } from './components/top-selling-products'
import { TotalSales } from './components/total-sales'

export default function Home() {
  return (
    <div className="space-y-4 p-3">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-medium ml-2">eCommerce</h1>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Row 1: Metrics Cards (8 cols) + Projections Chart (4 cols) */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-6">
          <MetricsCards />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ProjectionsChart />
        </div>

        {/* Row 2: Revenue Trend Chart (6 cols) + Revenue by Location (6 cols) */}
        <div className="col-span-12 lg:col-span-9">
          <RevenueTrendChart />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <RevenueByLocation />
        </div>

        {/* Row 3: Top Selling Products (6 cols) + Total Sales (6 cols) */}
        <div className="col-span-12 lg:col-span-9">
          <TopSellingProducts />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <TotalSales />
        </div>
      </div>
    </div>
  )
}
