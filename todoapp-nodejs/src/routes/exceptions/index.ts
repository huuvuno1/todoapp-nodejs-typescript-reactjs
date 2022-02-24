import express, {Request, Response, NextFunction} from 'express'
import { ApiResponse } from '../../utils/ApiResponse'

function errorHanlder(error: any, req: Request, res: Response, next: NextFunction) {
    new ApiResponse(null, error.message, error.status).send(res)
}

export default errorHanlder