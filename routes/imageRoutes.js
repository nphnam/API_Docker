"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const image_controller_1 = require("../controllers/image.controller");
const auth_1 = require("../middleware/auth");
const router = express.Router();
router.post("/search-image", auth_1.isAuthenticated, image_controller_1.searchImage);
exports.default = router;
