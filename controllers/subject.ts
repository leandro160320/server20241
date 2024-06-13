import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteSubject(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from subjects where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listSubject(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const subjects = await client.query(`select * from subjects`)
    //retorna consulta em formato json
    return res.status(200).json(subjects.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }

}
export async function saveSubject(req: Request, res: Response) {
  const subject = req.body;
  console.log(subject)
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO subjects (name) VALUES ('${subject.name}')`)
    res.status(200).json(subject.rows)
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

  
}



