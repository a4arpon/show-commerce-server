"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const morgan_1 = __importDefault(require("morgan"));
const products_route_1 = __importDefault(require("./routes/products.route"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configurationMiddleware();
        this.establishConnection();
        this.setupRoutes();
    }
    configurationMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, hpp_1.default)());
        this.app.use((0, express_rate_limit_1.default)({
            windowMs: 10 * 60 * 1000,
            max: 50,
        }));
    }
    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.status(200).send('Server running online. Are you ready to handle?');
        });
        this.app.use('/api/products', products_route_1.default);
    }
    establishConnection() {
        const PORT = process.env.PORT || 4000;
        this.app.listen(PORT, () => console.log('Server Running Port On ' + PORT));
    }
}
dotenv_1.default.config();
new App();
