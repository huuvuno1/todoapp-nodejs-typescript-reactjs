import express, {Request, Response, NextFunction} from 'express'
import { validateUser } from '../../middleware/validator'
import User from '../../database/model/User'
import UserRepo from '../../database/repository/UserRepo'
import { ApiResponse } from '../../utils/ApiResponse'
import { CustomError } from '../../utils/CustomError'

const router = express.Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    let { limit = 20 } = req.query

    let result: User[] = await UserRepo.getUsers(+limit)
    res.json(result)
})

router.post('/', validateUser, async (req: Request, res: Response, next: NextFunction) => {
    let user: User = req.body
    try {
        let result: User = await UserRepo.create(user)
        new ApiResponse(result).send(res)
    } catch(err) {
        let error: any = new Error("Duplicate email")
        error.status = 400
        next(error)
    }
    
})

router.patch('/', async (req: Request, res: Response, next: NextFunction) => {
    let user: User = req.body
    if (!user.id) {
        next(new CustomError("User not exist!", 400))
        return
    }
    
    try {
        await UserRepo.update(user)
        new ApiResponse({}, "Update successful!").send(res)
    } catch (err) {
        next(new CustomError("Update failed!", 500))
    }

})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        await UserRepo.delete(id)
        new ApiResponse({}, "Delete successful!").send(res)
    } catch (err) {
        next(new CustomError("Delete failed!", 500))
    }
})

export default router