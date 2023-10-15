export interface Bill {
    id: number,
    month: string,
    dueDate?: Date,
    type: string,
    status: boolean
}