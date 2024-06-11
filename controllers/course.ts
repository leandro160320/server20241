import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function listCourse(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const courses = await client.query(`select * from courses`)
    //retorna consulta em formato json
    return res.status(200).json(courses.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }

}
export async function saveCourse(req: Request, res: Response) {
  const course = req.body;
  console.log(course)
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO courses (name) VALUES ('${course.name}')`)
    res.status(200).json(course.rows)
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

  
}



