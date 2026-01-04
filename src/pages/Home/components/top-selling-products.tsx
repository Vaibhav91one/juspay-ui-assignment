import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.50, quantity: 37, amount: 4754.50 },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.00, quantity: 184, amount: 3680.00 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function TopSellingProducts() {
  return (
    <Card className="bg-gray-light dark:bg-gray-300/6 border-none shadow-none rounded-2xl">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4 px-5 h-[274px] flex flex-col">
        <div className="flex-1 overflow-auto">
          <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-300 dark:border-gray-500 hover:bg-transparent">
              <TableHead className="text-xs font-light text-gray-400 dark:text-gray-500 h-8 pb-4 w-[40%]">Name</TableHead>
              <TableHead className="text-xs font-normal text-gray-400 dark:text-gray-500 h-8 pb-4 text-right">Price</TableHead>
              <TableHead className="text-xs font-normal text-gray-400 dark:text-gray-500 h-8 pb-4 text-right">Quantity</TableHead>
              <TableHead className="text-xs font-normal text-gray-400 dark:text-gray-500 h-8 pb-4 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow 
                key={index} 
                className="hover:bg-transparent border-none"
              >
                <TableCell className="text-xs font-light text-gray-900 dark:text-white py-3 w-[40%] ">
                  {product.name}
                </TableCell>
                <TableCell className="text-xs font-light text-gray-900 dark:text-white py-3 text-right">
                  {formatCurrency(product.price)}
                </TableCell>
                <TableCell className="text-xs font-light text-gray-900 dark:text-white py-3 text-right">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-xs font-light text-gray-900 dark:text-white py-3 text-right">
                  {formatCurrency(product.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </CardContent>
    </Card>
  )
}
