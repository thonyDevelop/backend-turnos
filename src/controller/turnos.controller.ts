import * as sql from 'mssql'
import { Request, Response } from "express";
import Conexion from "../db/conexion";
import { IParametro } from "../interface/db.interfaz";

export const postTurnos = async (req: Request, res: Response) => {
    try {
        const { fechaInicial, fechaFinal, servicio } = req.body

        console.log(req.body);
        

        const conexion = new Conexion();

        const parametros: IParametro[] = [
            {
                nombre: 'fechaInicio',
                tipo: sql.Float,
                valor: fechaInicial
            },
            {
                nombre: 'fechaFin',
                tipo: sql.Float,
                valor: fechaFinal
            },
            {
                nombre: 'idServicio',
                tipo: sql.Float,
                valor: servicio
            }
        ];
        const data = await conexion.Ejecutar('sp_generar_turnos', parametros);

        return res.status(200).send(data)
    } catch ({ message, statusCode = 500 }) {
        return res.status(statusCode).send({ mensaje: message })
    }
}

export const getServicios = async (req: Request, res: Response) => {
    try {
        const conexion = new Conexion();
        const data = await conexion.Ejecutar('sp_obtener_servicios');
        return res.status(200).send(data)
    } catch ({ message, statusCode = 500 }) {
        return res.status(statusCode).send({ mensaje: message })
    }
}