import multer from "multer";
import { extname, resolve } from "path";
import fs from "fs";
import { gerarIndiceRandomico } from "../indices/gerarIndiceRandomico/gerarIndiceRandomico";

export const UPLOAD_USUARIOS_DIR = resolve(process.cwd(), "uploads", "usuarios");

export function ensureUploadDirExists() {
  if (!fs.existsSync(UPLOAD_USUARIOS_DIR)) {
    fs.mkdirSync(UPLOAD_USUARIOS_DIR, { recursive: true });
  }
}

// Cria a pasta logo na inicialização
ensureUploadDirExists();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadDirExists();
    cb(null, UPLOAD_USUARIOS_DIR);
  },
  filename: function (req, file, cb) {
    const extensao = extname(file.originalname);
    cb(null, `${gerarIndiceRandomico()}${extensao}`);
  },
});

export const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

