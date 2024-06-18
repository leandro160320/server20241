import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteDriver(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from drivers where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listDriver(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const drivers = await client.query(`select * from drivers`)
    //retorna consulta em formato json
    return res.status(200).json(drivers.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }

}
export async function saveDriver(req: Request, res: Response) {
  const driver = req.body;
  console.log(driver)
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO drivers (name) VALUES ('${driver.name}')`)
    res.status(200).json(driver.rows)
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

  
}



