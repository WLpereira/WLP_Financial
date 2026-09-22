import React from "react";

export const CabecalhoTabela: React.FC = () => {
  return (
    <tr>
      <th>Descrição</th>
      <th style={{ width: "120px", textAlign: "right" }}>Ações</th>
    </tr>
  );
};
