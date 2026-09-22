import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { adicionarTipoDespesa } from "../../../api";
import { TipoDespesa } from "../../../../../types/TipoDespesa";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (tipoDespesa: TipoDespesa) => await adicionarTipoDespesa(tipoDespesa),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um erro: ${error.response?.data || error.message}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("tipo-despesa-usuario");
        queryClient.invalidateQueries("tipo-despesa");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((tipoDespesa: TipoDespesa) => {
          mutate(tipoDespesa);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </>
  );
};
