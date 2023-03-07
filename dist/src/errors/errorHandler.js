"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
class ErrorHandler {
    static handle(err, req, res, next) {
        const status = err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        const message = err.message || 'Internal Server Error';
        res.status(status).json({ message });
    }
}
exports.ErrorHandler = ErrorHandler;
