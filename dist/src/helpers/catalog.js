"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatalog = exports.ErrorTypes = void 0;
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["EntityNotFound"] = "EntityNotFound";
    ErrorTypes["InvalidMongoId"] = "InvalidMongoId";
})(ErrorTypes = exports.ErrorTypes || (exports.ErrorTypes = {}));
exports.errorCatalog = {
    EntityNotFound: {
        error: 'Object not found',
        httpStatus: 404,
    },
    InvalidMongoId: {
        error: 'Id must have 24 hexadecimal characters',
        httpStatus: 400,
    },
};
