import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function deleteProduct(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  const id = req.params.id
  try {
    const response = await client.query(`delete from products where id=${id}`);
    res.status(200).json({ message: "Registro Excluido"})
  } catch (error) {
    res.status(404).json({message:error})
  }finally {
    client.release
  }
}
export async function listProduct(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const products = await client.query(`select * from products`)
    //retorna consulta em formato json
    return res.status(200).json(products.rows);
  } catch (error) {
    console.log(error)
  } finally {
    client.release
  }

}
export async function saveProduct(req: Request, res: Response) {
  const product = req.body;
  console.log(product)
  const client = await pool.connect();
  //realiza consulta sql
  try {
    const response = await client.query(`INSERT INTO products (name, description) VALUES ('${product.name}', '${product.description}')`)
    res.status(200).json(product.rows)
  } catch (error) {
    res.status(400).json({ message: 'Dados invalidos', error });
  } finally {
    client.release()
  }

  
}



