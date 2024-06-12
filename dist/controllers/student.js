"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveStudent = exports.listStudent = exports.deleteStudent = void 0;
const database_1 = require("../shared/database");
function deleteStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        const id = req.params.id;
        try {
            const response = yield client.query(`delete from students where id=${id}`);
            res.status(200).json({ message: "Registro Excluido" });
        }
        catch (error) {
            res.status(404).json({ message: error });
        }
        finally {
            client.release;
        }
    });
}
exports.deleteStudent = deleteStudent;
function listStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        try {
            //realiza consulta sql
            const students = yield client.query(`select * from students`);
            //retorna consulta em formato json
            return res.status(200).json(students.rows);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            client.release;
        }
    });
}
exports.listStudent = listStudent;
function saveStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const student = req.body;
        console.log(student);
        const client = yield database_1.pool.connect();
        //realiza consulta sql
        try {
            const response = yield client.query(`INSERT INTO students (name, email) VALUES ('${student.name}', '${student.email}')`);
            console.log(response.rows[0]);
            res.status(201).json(response);
        }
        catch (error) {
            res.status(400).json({ message: 'Dados invalidos', error });
        }
        finally {
            client.release();
        }
    });
}
exports.saveStudent = saveStudent;
