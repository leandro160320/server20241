import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteCar(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from cars where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listCar(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const cars = await client.query(`select * from cars`)
    //retorna consulta em formato json
    return res.status(200).json(cars.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }

}
export async function saveCar(req: Request, res: Response) {
  const car = req.body;
  console.log(car)
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO cars (model, description) VALUES ('${car.model}', '${car.description}')`)
    res.status(200).json(car.rows)
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

  
}



