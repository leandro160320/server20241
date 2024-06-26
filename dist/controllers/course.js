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
exports.saveCourse = exports.listCourse = exports.deleteCourse = void 0;
const database_1 = require("../shared/database");
function deleteCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        const id = req.params.id;
        try {
            const response = yield client.query(`delete from courses where id=${id}`);
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
exports.deleteCourse = deleteCourse;
function listCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        //realiza consulta sql
        try {
            const courses = yield client.query(`select * from courses`);
            //retorna consulta em formato json
            return res.status(200).json(courses.rows);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            client.release;
        }
    });
}
exports.listCourse = listCourse;
function saveCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = req.body;
        console.log(course);
        const client = yield database_1.pool.connect();
        //realiza consulta sql
        try {
            const response = yield client.query(`INSERT INTO courses (name) VALUES ('${course.name}')`);
            res.status(200).json(course.rows);
        }
        catch (error) {
            res.status(400).json({ message: 'Dados invalidos', error });
        }
        finally {
            client.release();
        }
    });
}
exports.saveCourse = saveCourse;
