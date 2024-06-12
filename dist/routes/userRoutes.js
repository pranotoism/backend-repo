"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("../controller/api");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.put('/update-user-data/:id', authMiddleware_1.authMiddleware, api_1.updateUserData);
router.get('/fetch-user-data/:id', authMiddleware_1.authMiddleware, api_1.fetchUserData);
exports.default = router;
