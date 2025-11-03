/* EXPRESS */
import express from "express"
import type { Express } from "express"

/* LIBRARIES */
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
import { authHandler } from "@monorepo/auth/server"
import { errorHandler } from "@monorepo/validator"

/* APP */
import { BodyParser } from "./lib/bodyParser.js"
import { userRouter } from "./routes/user.js"

const app: Express = express();

//Middlewares
app.set('trust proxy', true);
app.use(cors({ origin: process.env.FRONTEND_URL ?? '*', credentials: true }));
app.use(helmet());

//https://www.better-auth.com/docs/integrations/express
app.all("/api/auth/*splat", authHandler);
// app.all("/api/auth/*splat", toNodeHandler(auth)); For ExpressJS v5
// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth

//Stripe needed
app.use(bodyParser.json(BodyParser.optionsJson));
app.use(bodyParser.urlencoded(BodyParser.optionsUrlencoded));

//Routes
app.use(userRouter);
app.use(errorHandler);

export default app;
