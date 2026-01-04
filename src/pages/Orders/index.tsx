"use client"

import * as React from "react"
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
} from "@tanstack/react-table"
import { data } from "./data"
import { columns } from "./columns"
import { OrdersToolbar } from "./components/orders-toolbar"
import { OrdersTable } from "./components/orders-table"
import { OrdersPagination } from "./components/orders-pagination"
import type { Order } from "./types"

export default function Orders() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [statusFilter, setStatusFilter] = React.useState<string[]>([])

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: (row, _columnId, filterValue) => {
            const searchValue = filterValue.toLowerCase()
            const id = (row.getValue("id") as string).toLowerCase()
            const user = (row.getValue("user") as Order["user"]).name.toLowerCase()
            const project = (row.getValue("project") as string).toLowerCase()
            const address = (row.getValue("address") as string).toLowerCase()
            
            return id.includes(searchValue) || 
                   user.includes(searchValue) || 
                   project.includes(searchValue) || 
                   address.includes(searchValue)
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    })

    // Update status filter when it changes
    React.useEffect(() => {
        if (statusFilter.length > 0) {
            table.getColumn("status")?.setFilterValue(statusFilter)
        } else {
            table.getColumn("status")?.setFilterValue(undefined)
        }
    }, [statusFilter, table])

    return (
        <div className="w-full space-y-4 p-3">
            {/* Header Section */}
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-medium ml-2">Order List</h1>

                <div className="flex items-center justify-between gap-2">
                    <OrdersToolbar
                        table={table}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
            </div>

            {/* Table */}
            <OrdersTable table={table} columns={columns} />

            {/* Pagination */}
            <OrdersPagination table={table} />
        </div>
    )
}
