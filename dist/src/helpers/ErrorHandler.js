"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const catalog_1 = require("./catalog");
const errorHandler = (err, _req, res, _next) => {
    // o instanceof verifica se esse é erro é uma instância do ZodError
    if (err instanceof zod_1.ZodError) {
        // se for nós sabemos que é um erro de validação e podemos usar o status 400 e a própria mensagem do zod para retornar a response
        return res.status(400).json({ message: err.issues });
    }
    // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
    // com o keyof typeof - traduzindo seria algo como 'chaves do tipo de'
    // dizemos que o `err.message` é alguma das chaves do ErrorTypes
    const messageAsErrorType = err.message;
    // vamos usar a mensagem para acessar um erro do nosso catálogo
    // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
    const mappedError = catalog_1.errorCatalog[messageAsErrorType];
    if (mappedError) {
        // dado que o erro está mapeado no nosso catálogo 
        // "mappedError" tem valores necessário para responder a requisição
        const { httpStatus, error } = mappedError;
        return res.status(httpStatus).json({ error });
    }
    // caso seja um erro não mapeado, o mostraremos no log de erros e retornaremos o status 500
    console.error(err);
    return res.status(500).json({ message: 'internal error' });
};
exports.default = errorHandler;
