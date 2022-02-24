import mongoose from 'mongoose'
import { DB } from '../config'

const dbUri = DB.user ? `mongodb://${DB.user}:${encodeURIComponent(DB.password)}@${DB.host}:${DB.port}/${DB.name}` : 
    `mongodb://${DB.host}:${DB.port}/${DB.name}`

mongoose.connect(dbUri)
    .then(() => {
        console.log('connected to ' + dbUri)
    })
    .catch(err => {
        console.log('Error! An error occurred.', err)
    })