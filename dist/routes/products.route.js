"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const productsRouter = (0, express_1.Router)();
const productsInstance = new products_controller_1.default();
productsRouter.get('/', productsInstance.allProducts);
productsRouter.get('/:id', productsInstance.singleProduct);
exports.default = productsRouter;
