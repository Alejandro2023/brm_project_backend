"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: "Get products",
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: "Get product",
        id: req.params.id,
    });
};
exports.getProduct = getProduct;
