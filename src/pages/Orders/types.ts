export type Order = {
    id: string
    user: {
        name: string
        avatar: string
    }
    project: string
    address: string
    date: string
    status: "in-progress" | "complete" | "pending" | "approved" | "rejected"
}

