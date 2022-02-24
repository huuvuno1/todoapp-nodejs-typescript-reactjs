import {Request, Response, NextFunction} from 'express'

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    console.log('vao validator ', req.body)
    const { name = '', email= '', birthday = null, address = '' } = req.body
    if (name.length < 4 || name.length > 20 || 
            email.length < 4 || email.length > 20 || 
            address.length < 4 || address.length > 50 ||
            birthday == null) {
        const message: string = 'Invalid information'

        let error: any = new Error(message)
        error.status = 400
        next(error)
    }
    else
        next()
}