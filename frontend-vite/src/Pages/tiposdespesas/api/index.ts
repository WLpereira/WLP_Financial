import { endpoint } from "../../../services/endpoint";
import { TipoDespesa } from "../../../types/TipoDespesa";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
};

export async function buscarTodosTiposDespesas({
  numero_pagina,
  quantidade_items_pagina = 12,
}: Criterios) {
  const resposta = await endpoint.get(`/tipos_despesas/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
    },
  });
  return resposta;
}

export async function buscarTipoDespesaPorId(id: string) {
  const resposta = await endpoint.get(`/tipos_despesas/${id}`);
  return resposta;
}

export async function adicionarTipoDespesa(tipoDespesa: TipoDespesa) {
  const resposta = await endpoint.post(`/tipos_despesas`, tipoDespesa);
  return resposta;
}

export async function editarTipoDespesaPorId(
  id: string,
  tipoDespesa: TipoDespesa
) {
  const resposta = await endpoint.put(`/tipos_despesas/${id}`, tipoDespesa);
  return resposta;
}

export async function deletarTipoDespesaPorId(id: string) {
  const resposta = await endpoint.delete(`/tipos_despesas/${id}`);
  return resposta;
}
