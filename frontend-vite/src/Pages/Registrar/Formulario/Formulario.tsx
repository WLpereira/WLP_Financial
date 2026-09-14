import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { FormularioStyle } from "./styles";

import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";

import { registrarUsuario } from "../api";

import { Usuario } from "../../../types/usuario/Usuario";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { ModalCarregando } from "../../../Components/Modais/ModalCarregando";
import { SpinnerCarregamentoGrande } from "../../../Components/spinners/SpinnerCarregamentoGrande";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation(
    async (usuario: Usuario) => await registrarUsuario(usuario),
    {
      onError: (error: any) => {
        const msg =
          error?.response?.data ||
          error?.message ||
          "Erro ao realizar cadastro. Verifique os dados.";
        toast.error(`Ops! ${msg}`);
      },
      onSuccess: () => {
        toast.success("Usuario registrado com sucesso");
        navegarAtePaginaDepoisTempo(navigate, "/");
        reset({});
      },
    }
  );

  return (
    <FormularioStyle>
      {isLoading ? (
        <SpinnerCarregamentoGrande />
      ) : (
        <>
          <CamposFormulario
            funcaoSubmit={handleSubmit((usuario: Usuario) => {
              mutate(usuario);
            })}
            register={register}
            errors={errors}
            control={control}
          />

          <SecondaryButton onClick={() => navigate("/")}>
            <BsArrowLeftCircleFill />
            <p>Voltar</p>
          </SecondaryButton>
        </>
      )}
    </FormularioStyle>
  );
};
