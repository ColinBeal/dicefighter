"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
// Use cors middleware
app.use((0, cors_1.default)());
// Connect to MongoDB
mongoose_1.default.connect('mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/<dbname>?retryWrites=true&w=majority').then((res) => {
    console.log('Connected to MongoDB', res);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
