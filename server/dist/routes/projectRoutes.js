"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectRouter = express_1.default.Router();
projectRouter.get('/', (req, res) => {
    res.status(200).send(`Get all projects`);
});
projectRouter.get('/:id', (req, res) => {
    res.status(200).send(`Get projectById`);
});
projectRouter.post('/', (req, res) => {
    res.status(200).send(`Create a project to ProjectRouter`);
});
projectRouter.patch('/:id', (req, res) => {
    res.status(200).send(`Edit a projectById`);
});
projectRouter.delete('/:id', (req, res) => {
    res.status(200).send(`Delete a projectById`);
});
exports.default = projectRouter;
