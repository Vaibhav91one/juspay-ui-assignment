import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import WorldSvg1 from "@/components/svgs/World-1"
import { LocationListItem } from "./location-list-item"
import { LocationDot } from "./location-dot"

const locations = [
  { id: 0, city: "New York", revenue: 72 },
  { id: 1, city: "San Francisco", revenue: 39 },
  { id: 2, city: "Sydney", revenue: 25 },
  { id: 3, city: "Singapore", revenue: 61 },
]

const maxRevenue = Math.max(...locations.map(l => l.revenue))

export function RevenueByLocation() {
  return (
    <Card className="bg-gray-light dark:bg-gray-300/6 border-none shadow-none rounded-2xl">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-center">Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-[240px]">
        {/* World Map */}
        <div className="relative w-[200px] lg:w-[170px] mx-auto h-[100px] overflow-hidden rounded-lg -mt-2">
          <div className="[&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
            <WorldSvg1 />
          </div>
          {/* Location Dots */}
          <LocationDot x={30} y={22} /> {/* New York */}
          <LocationDot x={19} y={20} /> {/* San Francisco */}
          <LocationDot x={88} y={54} /> {/* Sydney */}
          <LocationDot x={80} y={44} /> {/* Singapore */}
        </div>

        {/* Location List */}
        <div className="space-y-4 flex-1 overflow-hidden">
          {locations.map((location) => (
            <LocationListItem
              key={location.id}
              city={location.city}
              revenue={location.revenue}
              maxRevenue={maxRevenue}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}