import express  from "express"
import turnos from './turnos.routes'

const app = express()

app.use('/v1/turnos', turnos)

export default app
