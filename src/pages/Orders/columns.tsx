"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { Calendar, MoreHorizontal } from "lucide-react"
import CopyIcon from "@/components/svgs/Orders/Copy"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar } from "@/components/right-sidebar/shared/avatar"
import { cn } from "@/lib/utils"
import type { Order } from "./types"
import { statusConfig } from "./data"

export const columns: ColumnDef<Order>[] = [
    {
        id: "select",
        header: ({ table }) => {
            const isAllSelected = table.getIsAllPageRowsSelected()
            const isSomeSelected = table.getIsSomePageRowsSelected()
            return (
                <Checkbox
                    checked={isAllSelected || (isSomeSelected && "indeterminate")}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="border-gray-300"
                />
            )
        },
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className={cn(
                    "transition-opacity size-4",
                    row.getIsSelected() ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "Order ID",
        cell: ({ row }) => <div className="pr-2">#{row.getValue("id")}</div>,
    },
    {
        accessorKey: "user",
        header: "User",
        cell: ({ row }) => {
            const user = row.getValue("user") as Order["user"]
            return (
                <div className="flex items-center gap-2 pr-12">
                    <Avatar image={user.avatar} size="sm" />
                    <span className="">{user.name}</span>
                </div>
            )
        },
        sortingFn: (rowA, rowB) => {
            const nameA = (rowA.getValue("user") as Order["user"]).name
            const nameB = (rowB.getValue("user") as Order["user"]).name
            return nameA.localeCompare(nameB)
        },
    },
    {
        accessorKey: "project",
        header: "Project",
        cell: ({ row }) => <div className="pr-14">{row.getValue("project")}</div>,
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ row }) => {
            const address = row.getValue("address") as string
            const handleCopy = async () => {
                try {
                    await navigator.clipboard.writeText(address)
                    // Optional: You could add a toast notification here
                } catch (err) {
                    console.error("Failed to copy address:", err)
                }
            }
            return (
                <div className="flex items-center gap-1">
                    <span>{address}</span>
                    <button
                        onClick={handleCopy}
                        className="opacity-0 group-hover:opacity-100 hover:opacity-50 transition-opacity cursor-pointer"
                        aria-label="Copy address"
                    >
                        <CopyIcon className="size-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
            <div className="flex items-center gap-1.5 pr-12">
                <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{row.getValue("date")}</span>
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as Order["status"]
            const config = statusConfig[status]
            return (
                <div className="flex items-center gap-2 w-full justify-between">
                    <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", config.color)} />
                        <span className={config.textColor}>{config.label}</span>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity"
                            >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="font-light">View details</DropdownMenuItem>
                            <DropdownMenuItem className="font-light">Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 font-light">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
]

