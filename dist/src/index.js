"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const http_exception_error_1 = require("./errors/http-exception.error");
const express_async_errors_middleware_1 = require("./middlewares/express-async-errors.middleware");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.API_PORT || 3000;
        // Adicionar os middlewares de body-parser e cors
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.get('/', (req, res) => {
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Hello World!' });
        });
        this.app.get('/users/:id', (req, res, next) => {
            const userId = req.params.id;
            if (userId !== '123') {
                throw new http_exception_error_1.HttpException(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
            }
            res.json({ id: userId, name: 'John Doe' });
        });
        // middleware errorHandler para lidar com erros personalizados
        this.app.use(express_async_errors_middleware_1.ExpressAsyncErrorMiddleware.handle);
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
