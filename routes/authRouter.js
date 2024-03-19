import express from "express";

import {signup, signin, getCurrent, signout} from "../controllers/authController.js"

import validateBody from "../decorators/validateBody.js";

import {authenticate} from "../middleware/authenticate.js"

import {userSignupSchema, userSigninSchema} from "../schemas/usersSchemas.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(userSignupSchema), signup);

authRouter.post("/login", validateBody(userSigninSchema), signin);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/signout", authenticate, signout);

export default authRouter;