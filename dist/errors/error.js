"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = async (error, res) => {
    try {
        await Promise.reject(error);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(400).json({ msg: err.message });
        else
            res.status(400).json({ msg: 'Unknown error occurred.' });
    }
};
exports.errorHandler = errorHandler;
