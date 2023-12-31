"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.get("/", products_1.getProducts);
router.get("/:id", products_1.getProduct);
exports.default = router;
