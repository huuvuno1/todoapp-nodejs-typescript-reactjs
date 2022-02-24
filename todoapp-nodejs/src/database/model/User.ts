import {model, Schema, Document} from 'mongoose'

export const DOCUMENT_NAME = 'User'
export const COLLECTION_NAME = 'users'

export default interface User extends Document {
    id?: Schema.Types.ObjectId,
    name: string,
    email: string,
    birthday: Date,
    address: string,
    avatar?: string,
    createAt?: Date,
    updateAt?: Date
}

const schema = new Schema({
        id: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: Schema.Types.String,
            required: true,
            trim: true,
            maxlength: 100,
            minlength: 2
        },
        email: {
            type: Schema.Types.String,
            required: true,
            trim: true,
            maxlength: 100,
            minlength: 4,
            unique: true
        },
        avatar: {
            type: Schema.Types.String,
            trim: true,
        },
        birthday: {
            type: Schema.Types.Date,
            required: true
        },
        address: {
            type: Schema.Types.String,
            trim: true,
            required: true
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }
    },   
    {
        versionKey: false,
    })

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME)