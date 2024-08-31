"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posting_controller_1 = require("../controllers/posting.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get("/", posting_controller_1.getAllPosting);
router.get("/:postingId", posting_controller_1.getSinglePosting);
router.post("/", (0, auth_middleware_1.authMiddleware)("admin"), posting_controller_1.createPosting);
router.delete("/:postingId", (0, auth_middleware_1.authMiddleware)("admin"), posting_controller_1.deletePosting);
router.patch("/:postingId", (0, auth_middleware_1.authMiddleware)("admin"), posting_controller_1.updatePosting);
router.get("/new-arrivals", posting_controller_1.getNewPostings);
exports.default = router;
