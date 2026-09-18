import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { IoSave, IoCloudUploadOutline } from "react-icons/io5";

import "react-toastify/dist/ReactToastify.css";

import { mudarImagemPerfilPorUsuariosId } from "./api";
import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";
import { SpinnerCarregamento } from "../../../../../Components/spinners/SpinnerCarregamento";
import { Container, CardTitle, ActionsRow, DragDropImage } from "./styles";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const MundacaImagemPerfil: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop: (acceptedFiles: any) => {
      setUploadedFiles(acceptedFiles);
    },
  });
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const { mutate, isLoading: isCarregandoUploadImagem } = useMutation(
    () => mudarImagemPerfilPorUsuariosId(idUsuario!, uploadedFiles),
    {
      onSuccess: (data: any) => {
        const imagemNova = data?.data || data;
        sessionStorage.setItem("avatar", imagemNova);
        toast.success(`Foto de perfil atualizada com sucesso!`);
        navegarAtePaginaDepoisTempo(navigate, 0);
      },
      onError: (error: any) => {
        const msg =
          error?.response?.data ||
          error?.message ||
          "Erro ao fazer upload da imagem.";
        toast.error(`Ops! ${msg}`);
      },
    }
  );

  return (
    <Container>
      <CardTitle>Alterar Foto de Perfil</CardTitle>
      
      <DragDropImage {...getRootProps()}>
        <input {...getInputProps()} />
        <IoCloudUploadOutline size={36} color="#00B4D8" />
        {isDragActive ? (
          <p>Solte a imagem aqui...</p>
        ) : (
          <p>Clique ou arraste uma nova imagem para atualizar seu avatar</p>
        )}
        {uploadedFiles.length > 0 && (
          <ul>
            {uploadedFiles.map((file: any) => (
              <li key={file?.name}>✓ Selecionado: {file?.name}</li>
            ))}
          </ul>
        )}
      </DragDropImage>

      {uploadedFiles.length > 0 && (
        <ActionsRow>
          {isCarregandoUploadImagem ? (
            <SpinnerCarregamento />
          ) : (
            <SecondaryButton onClick={() => mutate()}>
              <IoSave size={20} />
              <p>Salvar Nova Foto</p>
            </SecondaryButton>
          )}
        </ActionsRow>
      )}
    </Container>
  );
};

