import { Request, Response } from "express";
import tiposEstatisticasService from '../tiposEstatisticas.service/TiposEstatisticas.service'

class TiposEstatisticasController {
  async despesasTotalPorTipoEUsuarioMes(req: Request, res: Response) {
    try {
      const { usuariosId, mes } = req.query;
      const totalDespesa =
        await tiposEstatisticasService.despesasTotalPorTipoEUsuarioMes(
          usuariosId,
          mes
        );

      res.status(200).json(totalDespesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new TiposEstatisticasController();
