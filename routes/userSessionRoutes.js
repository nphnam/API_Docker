"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userSessions_controller_1 = require("../controllers/userSessions.controller");
const auth_1 = require("../middleware/auth");
const router = express.Router();
router.post("/create-or-resume", auth_1.isAuthenticated, userSessions_controller_1.startOrResumeSession);
router.get("/get-multiple-choices/:setId/:cardId", auth_1.isAuthenticated, userSessions_controller_1.getMultipleChoices);
exports.default = router;
