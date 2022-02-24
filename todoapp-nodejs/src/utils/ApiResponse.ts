import { Response } from "express"

export class ApiResponse<T> {
    data: T = {} as T 
    message: string = 'OK'
    status: number = 200

    constructor(data?: T, message?: string, status?: number) {
        message && (this.message = message)
        status && (this.status = status)
        data && (this.data = data)
    }

    public send(res: Response): void {
        res.status(this.status).json({
            status: this.status,
            message: this.message,
            data: this.data
        })
    }
}