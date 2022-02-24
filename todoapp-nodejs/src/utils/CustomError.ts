export class CustomError<T> extends Error {
    status: number = 0
    constructor(message: string, status: number) {
        super(message)
        this.status = status
    }
}