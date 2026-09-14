import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import todasRouters from "./routes/principalRouter";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routers();
  }

  private middleware(): void {
    const corsOrigin = process.env.CORS_ORIGIN;
    const allowedOrigins = corsOrigin
      ? corsOrigin.split(",").map((item) => item.trim())
      : true;

    this.express.use(express.json());
    this.express.use(
      cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "auth"],
        credentials: true,
      })
    );
  }

  private routers(): void {
    this.express.use("/api/v1", todasRouters);
  }
}

export default new App().express;
