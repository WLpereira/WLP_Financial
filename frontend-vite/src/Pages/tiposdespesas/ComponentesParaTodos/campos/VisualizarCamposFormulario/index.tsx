import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import * as Form from "../CamposFormulario/styles";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control?: any;
  errors?: any;
};

export const VisualizarCamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <div>
          <InputDefault
            desativar
            type="text"
            name="descricao"
            register={register}
            label="Descrição / Meio de Movimentação"
          />
        </div>
      </Form.Campos>
    </Form.Container>
  );
};
