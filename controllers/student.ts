import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteStudent(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from students where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listStudent(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  try {
    //realiza consulta sql
    const students = await client.query(`select * from students`)
    //retorna consulta em formato json
    return res.status(200).json(students.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }
}

export async function saveStudent(req: Request, res: Response) {
  const student = req.body;
  console.log(student)

  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO students (name, email) VALUES ('${student.name}', '${student.email}')`)
    console.log(response.rows[0]);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

}
