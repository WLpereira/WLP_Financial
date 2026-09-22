import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { buscarTipoDespesaPorId } from "../../../api";
import { VisualizarCamposFormulario } from "../../../ComponentesParaTodos/campos/VisualizarCamposFormulario";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandoTipoDespesaAnterior, data } = useQuery(
    ["ver-um-tipo-despesa", id],
    () => buscarTipoDespesaPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um erro: ${error.response?.data || error.message}`);
      },
    }
  );

  const tipoDespesa = data?.data;

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (tipoDespesa) {
      reset(tipoDespesa);
    }
  }, [tipoDespesa, reset]);

  return (
    <>
      <VisualizarCamposFormulario
        register={register}
        control={control}
        errors={errors}
      />
      {isCarregandoTipoDespesaAnterior && <ModalCarregando />}
    </>
  );
};
