"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../errors/error");
const dummyData_json_1 = __importDefault(require("../utils/dummyData.json"));
const products = dummyData_json_1.default;
class ProductsController {
    constructor() { }
    async allProducts(req, res) {
        try {
            await Promise.resolve().then(async () => {
                res.status(200).json(products);
            });
        }
        catch (err) {
            await (0, error_1.errorHandler)(err, res);
        }
    }
    async singleProduct(req, res) {
        try {
            await Promise.resolve().then(async () => {
                const { id } = req.params;
                const product = products.find((item) => item._id === id);
                res.status(200).json(product);
            });
        }
        catch (err) {
            await (0, error_1.errorHandler)(err, res);
        }
    }
}
exports.default = ProductsController;
