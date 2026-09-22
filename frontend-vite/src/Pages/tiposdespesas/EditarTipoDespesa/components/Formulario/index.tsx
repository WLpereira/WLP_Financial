import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";

import { TipoDespesa } from "../../../../../types/TipoDespesa";
import { editarTipoDespesaPorId, buscarTipoDespesaPorId } from "../../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
    mutate,
    isLoading: isCarregandoSalvacaoTipoDespesa,
    isSuccess,
  } = useMutation(
    async (dados: TipoDespesa) => await editarTipoDespesaPorId(id!, dados),
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
      <CamposFormulario
        onSubmit={handleSubmit((dados: TipoDespesa) => {
          mutate(dados);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaoTipoDespesa && <ModalCarregando />}
      {isCarregandoTipoDespesaAnterior && <ModalCarregando />}
    </>
  );
};
