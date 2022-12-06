import express from "express"
import cors from 'cors'
import { CONFIG } from "./config"
import routes from './routes/index'


const app: express.Application = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', routes) 

app.listen(CONFIG.APP_PORT, () => {
console.log(`Corriendo en el puerto ${CONFIG.APP_PORT}`)
})