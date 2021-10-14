"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
var Box_1 = __importDefault(require("@mui/material/Box"));
var material_1 = require("@mui/material");
exports.Spacer = (0, material_1.styled)(Box_1.default)(function (_a) { return ({
    margin: "auto",
}); });
