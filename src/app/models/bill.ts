export interface Bill {
    id: number,
    period: string,
    dueDate?: Date,
    category: string,
    status: boolean
}