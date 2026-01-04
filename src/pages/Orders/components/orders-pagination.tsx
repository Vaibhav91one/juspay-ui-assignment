"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { type Table } from "@tanstack/react-table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import type { Order } from "../types"

interface OrdersPaginationProps {
    table: Table<Order>
}

export function OrdersPagination({ table }: OrdersPaginationProps) {
    return (
        <div className="flex items-center justify-end mt-4 w-full">
            <Pagination className="mx-0 justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                table.previousPage()
                            }}
                            className={cn(
                                "size-8 p-0 flex items-center justify-center",
                                !table.getCanPreviousPage() && "pointer-events-none opacity-50"
                            )}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>
                    {(() => {
                        const currentPage = table.getState().pagination.pageIndex + 1
                        const totalPages = table.getPageCount()
                        const pages: number[] = []

                        // Show up to 5 page numbers
                        if (totalPages <= 5) {
                            // Show all pages if 5 or fewer
                            for (let i = 1; i <= totalPages; i++) {
                                pages.push(i)
                            }
                        } else {
                            // Show 5 pages centered around current page
                            let start = Math.max(1, currentPage - 2)
                            let end = Math.min(totalPages, start + 4)

                            // Adjust start if we're near the end
                            if (end - start < 4) {
                                start = Math.max(1, end - 4)
                            }

                            for (let i = start; i <= end; i++) {
                                pages.push(i)
                            }
                        }

                        return pages.map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        table.setPageIndex(page - 1)
                                    }}
                                    isActive={currentPage === page}
                                    className={cn(
                                        "border-none shadow-none rounded-xl font-light",
                                        currentPage === page && "bg-accent"
                                    )}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    })()}
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                table.nextPage()
                            }}
                            className={cn(
                                "size-8 p-0 flex items-center justify-center",
                                !table.getCanNextPage() && "pointer-events-none opacity-50"
                            )}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next</span>
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

