"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAsyncErrorMiddleware = void 0;
const http_exception_error_1 = require("../errors/http-exception.error");
class ExpressAsyncErrorMiddleware {
    /**
     *
     * @param {Error} error
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    static handle(error, _req, res, next) {
        if (error instanceof http_exception_error_1.HttpException) {
            res.status(error.status).json({ message: error.message });
        }
        else {
            res
                .status(500)
                .json({ message: error.message || 'Internal server error' });
        }
        return next();
    }
}
exports.ExpressAsyncErrorMiddleware = ExpressAsyncErrorMiddleware;
