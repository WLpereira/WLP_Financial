import React from "react";
import { AcoesItems } from "../../../../../../Components/acoes/AcoesItems";
import { TipoDespesa } from "../../../../../../types/TipoDespesa";

type Props = {
  tipoDespesa: TipoDespesa;
};

export const LinhaTipoDespesas: React.FC<Props> = ({ tipoDespesa }) => {
  return (
    <tr aria-label="linha">
      <td>{tipoDespesa?.descricao}</td>
      <td>
        <AcoesItems
          caminhoPrincipal="/tipos_despesas"
          id={tipoDespesa?.id}
        />
      </td>
    </tr>
  );
};
