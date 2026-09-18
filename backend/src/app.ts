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
    this.express.use(express.json());
    this.express.use(
      cors({
        origin: (origin, callback) => {
          // Permite qualquer origem em dev ou localhost / rede local
          callback(null, true);
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "auth"],
        credentials: true,
      })
    );

  }

  private routers(): void {
    this.express.use("/api/v1", todasRouters);

    // Middleware global de tratamento de erros (sempre retorna JSON e nunca HTML 500)
    this.express.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.error("Erro na requisição:", err);
        if (!res.headersSent) {
          res
            .status(err.status || 500)
            .json({ error: err.message || "Erro interno do servidor" });
        }
      }
    );
  }
}


export default new App().express;
