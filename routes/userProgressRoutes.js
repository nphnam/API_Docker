"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userProgresses_controller_1 = require("../controllers/userProgresses.controller");
const auth_1 = require("../middleware/auth");
const router = express.Router();
router.post("/update-progress", auth_1.isAuthenticated, userProgresses_controller_1.UpdateProgress);
router.post("/restart-session", auth_1.isAuthenticated, userProgresses_controller_1.RestartSession);
exports.default = router;
