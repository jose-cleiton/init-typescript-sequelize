"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const CustomError_1 = __importDefault(require("./helpers/CustomError "));
const errorHandler_1 = __importDefault(require("./helpers/errorHandler"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.API_PORT || 3000;
        this.app.get('/', (req, res) => {
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Hello World!' });
        });
        this.app.get('/users/:id', (req, res, next) => {
            const userId = req.params.id;
            if (userId !== '123') {
                const err = new CustomError_1.default('User not found', http_status_codes_1.StatusCodes.NOT_FOUND);
                return next(err);
            }
            res.json({ id: userId, name: 'John Doe' });
        });
        // middleware errorHandler para lidar com erros personalizados
        this.app.use(errorHandler_1.default);
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}
exports.default = new App().app;
