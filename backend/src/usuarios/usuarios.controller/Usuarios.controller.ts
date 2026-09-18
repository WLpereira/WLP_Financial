import { Request, Response } from "express";
import { resolve } from "path";
import fs from "fs";
import { UPLOAD_USUARIOS_DIR } from "../../utils/uploads/uploads";
import usuarioService from "../usuarios.services/UsuariosServices";

class UsuarioController {
  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await usuarioService.listarTodos();
      res.status(200).json(todos);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.listaPorId(id);
      res.status(200).json(usuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.deletarPorId(id);
      res.status(200).json(usuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async buscarImagemPerfilPorId(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || id === "undefined" || id === "null" || id.trim() === "") {
      return res.status(404).end();
    }
    try {
      const filePath = resolve(UPLOAD_USUARIOS_DIR, id);
      if (!fs.existsSync(filePath)) {
        return res.status(404).end();
      }
      return res.sendFile(filePath, (err) => {
        if (err && !res.headersSent) {
          return res.status(404).end();
        }
      });
    } catch (error: any) {
      if (!res.headersSent) {
        return res.status(404).end();
      }
    }
  }

  async uploadImagemPerfilPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fileName = req.file?.filename;

      if (!fileName) {
        return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
      }

      const imagemUsuario = {
        caminho_imagem: fileName,
      };

      await usuarioService.atualizarImageUsuarioPorId(id, imagemUsuario);
      return res.json(fileName);
    } catch (error: any) {
      return res.status(400).json({ error: error?.message || "Erro ao salvar imagem de perfil" });
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.atualizarPorId(id, req.body);
      res.status(200).json(usuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new UsuarioController();

