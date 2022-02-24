import User, {UserModel} from '../model/User'

export default class UserRepo {
    public static async create(user: User): Promise<User> {
        const now = new Date()
        user.createAt = user.updateAt = now
        const createdUser = await UserModel.create(user)
        return createdUser
    }

    public static async getUsers(limit?: number): Promise<User[]> {
        if (!limit)
            limit = 20
        const users = await UserModel.find().limit(limit)
        return users
    }

    public static async update(user: User): Promise<any> {
        user.updateAt = new Date()
        const user_u =  {...user}
        delete user_u.id
        const result = await UserModel.updateOne({
            _id: user.id
        }, user_u)
    }

    public static async delete(id: any): Promise<any> {
        const result = await UserModel.deleteOne({
            _id: id
        })
        console.log(result)
    }
}