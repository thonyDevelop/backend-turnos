import { Router } from "express"
import { getServicios, postTurnos } from "../controller/turnos.controller"

const router = Router()

router.post('/', postTurnos)
router.get('/servicios/', getServicios)

export default router