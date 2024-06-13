import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteTeacher(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from teachers where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listTeacher(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  try {
    //realiza consulta sql
    const teachers = await client.query(`select * from teachers`)
    //retorna consulta em formato json
    return res.status(200).json(teachers.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }
}

export async function saveTeacher(req: Request, res: Response) {
  const teacher = req.body;
  console.log(teacher)

  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO teachers (name, email) VALUES ('${teacher.name}', '${teacher.email}')`)
    console.log(response.rows[0]);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

}
