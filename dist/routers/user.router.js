"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/login", user_controller_1.getAuth);
router.post("/register", user_controller_1.createUser);
router.get("/my-comment/:userId", auth_middleware_1.authMiddleware, user_controller_1.getMyComments);
router.get("/liked-post/:userId", auth_middleware_1.authMiddleware, user_controller_1.getLikedPost);
exports.default = router;
