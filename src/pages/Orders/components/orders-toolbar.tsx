"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { type Table } from "@tanstack/react-table"
import PlusIcon from "@/components/svgs/Orders/Plus"
import FilterIcon from "@/components/svgs/Orders/Filter"
import SortIcon from "@/components/svgs/Orders/Sort"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { statusConfig } from "../data"
import type { Order } from "../types"

interface OrdersToolbarProps {
    table: Table<Order>
    statusFilter: string[]
    setStatusFilter: React.Dispatch<React.SetStateAction<string[]>>
    globalFilter: string
    setGlobalFilter: React.Dispatch<React.SetStateAction<string>>
}

export function OrdersToolbar({
    table,
    statusFilter,
    setStatusFilter,
    globalFilter,
    setGlobalFilter,
}: OrdersToolbarProps) {
    return (
        <div className="flex items-center justify-between gap-2 bg-gray-light dark:bg-gray-300/6 rounded-lg w-full py-1 px-1">
            <div className="flex items-center justify-center">
                <Button size="icon" variant="outline" className="h-10 w-10 rounded-full border-none bg-transparent shadow-none dark:bg-transparent">
                    <PlusIcon className="size-7 dark:invert" />
                    <span className="sr-only">Add order</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline" className="h-10 w-10 rounded-full border-none shadow-none bg-transparent dark:bg-transparent">
                            <FilterIcon className="size-7 dark:invert" />
                            <span className="sr-only">Filter</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                        <div className="px-2 py-1.5 text-sm font-light">Filter by Status</div>
                        <DropdownMenuSeparator />
                        {Object.entries(statusConfig).map(([status, config]) => (
                            <DropdownMenuItem
                                key={status}
                                onClick={() => {
                                    setStatusFilter(prev => 
                                        prev.includes(status)
                                            ? prev.filter(s => s !== status)
                                            : [...prev, status]
                                    )
                                }}
                                className="flex items-center gap-2"
                            >
                                <div className={cn("w-2 h-2 rounded-full", config.color)} />
                                <span className={cn("font-light", config.textColor)}>{config.label}</span>
                                {statusFilter.includes(status) && (
                                    <span className="ml-auto">✓</span>
                                )}
                            </DropdownMenuItem>
                        ))}
                        {statusFilter.length > 0 && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => setStatusFilter([])}
                                    className="text-gray-500"
                                >
                                    Clear filters
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline" className="h-10 w-10 rounded-full border-none shadow-none bg-transparent dark:bg-transparent">
                            <SortIcon className="size-5 dark:invert" />
                            <span className="sr-only">Sort</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                        <div className="px-2 py-1.5 text-sm font-light">Sort by</div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("id")?.toggleSorting(false)
                            }}
                        >
                            Order ID (Ascending)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("id")?.toggleSorting(true)
                            }}
                        >
                            Order ID (Descending)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("user")?.toggleSorting(false)
                            }}
                        >
                            User (A-Z)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("user")?.toggleSorting(true)
                            }}
                        >
                            User (Z-A)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("project")?.toggleSorting(false)
                            }}
                        >
                            Project (A-Z)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("project")?.toggleSorting(true)
                            }}
                        >
                            Project (Z-A)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("date")?.toggleSorting(false)
                            }}
                        >
                            Date (Oldest)
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.getColumn("date")?.toggleSorting(true)
                            }}
                        >
                            Date (Newest)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-light"
                            onClick={() => {
                                table.resetSorting()
                            }}
                        >
                            Clear sorting
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Search */}
            <div className="relative flex-1 max-w-[200px] px-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300 dark:text-white/20" />
                <Input
                    placeholder="Search"
                    value={globalFilter ?? ""}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    className="pl-9 placeholder:text-gray-300 dark:placeholder:text-white/20 dark:bg-black/10 rounded-xl outline-none ring-0 shadow-none"
                />
            </div>
        </div>
    )
}

