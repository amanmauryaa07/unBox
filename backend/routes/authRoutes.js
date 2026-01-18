import express from "express";
import {
  register,
  login,
  logOut,
  googleLogin,
  adminLogin,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/google-login", googleLogin);
router.post("/admin-login", adminLogin);

export default router;