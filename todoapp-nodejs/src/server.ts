import app from './app'
import { PORT } from './config'

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
}).on('error', err => {
    console.log(err)
})