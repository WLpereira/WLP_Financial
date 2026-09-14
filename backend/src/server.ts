import app from "./app";
import { PrismaConexao } from "./configs/PrismaConexao";

// const prisma = PrismaConexao.getInstancia();
const port = Number(process.env.PORT || process.env.PORT_SERVER || 3000);

app.listen(port, "0.0.0.0", async () => {
  console.info(`API Fx-finances rodando na porta : ${port}`);
});

// process.on("SIGINT", async () => {
//   await prisma.$disconnect();
//   console.log("Shutdown complete.");
//   process.exit(0);
// });
