import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBank2,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BiBookmarkAlt, BiCartDownload, BiCategoryAlt } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import styled from "styled-components";

import { tiposFluxosCaixa, categorias } from "./data/listLinks";
import { ImagemPerfil } from "./ImagePerfil";
import * as SideBar from "./styles";
import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { limparConfiguracoesPaginaPorChave } from "../../../utils/paginacao/limparConfiguracoesPaginaPorChave/limparConfiguracoesPaginaPorChave";
import wlpLogo from "../../../assets/wlp-logo.png";

/* Logotipo no topo da sidebar */
const SidebarLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  background: linear-gradient(135deg, #1B3A8C 0%, #0A1628 100%);

  img {
    width: 130px;
    object-fit: contain;
    filter: brightness(1.15);
  }
`;

const Sidebar: React.FC = () => {
  const { nomeUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  const [perfil, serPerfil] = useState<string>(imagePerfil || "");

  return (
    <SideBar.Container>
      <SidebarLogo>
        <img src={wlpLogo} alt="WLP Financial" />
      </SidebarLogo>

      <SideBar.PerfilImagem>
        <ImagemPerfil caminho_imagem={perfil} />
        <Link to={"/usuario_logado"}>
          <p>Olá {nomeUsuario}!</p>
        </Link>
      </SideBar.PerfilImagem>

      <SideBar.Item>
        <BsFillPieChartFill />
        <Link to={"/dashboard"}>
          <p>Dashboard</p>
        </Link>
      </SideBar.Item>

      <SideBar.Item>
        <BsBank2 />
        <Link to={"/locais"}>
          <p>Locais</p>
        </Link>
      </SideBar.Item>

      <details>
        <SideBar.ColecaoElementos>
          <RiMoneyDollarCircleFill size={22} />
          <p>Fluxo de caixa</p>
          <IoIosArrowDown />
        </SideBar.ColecaoElementos>
        <SideBar.Elementos>
          {tiposFluxosCaixa.map((paginas) => {
            return (
              <li key={paginas.id} onClick={limparConfiguracoesPaginaPorChave}>
                <BiCartDownload size={17} />
                <Link to={paginas.path}>{paginas.descricao}</Link>
              </li>
            );
          })}
        </SideBar.Elementos>
      </details>

      <SideBar.Item>
        <BsFillBasket2Fill />
        <Link to={"/tipos_despesas"}>
          <p>Tipos de Despesas</p>
        </Link>
      </SideBar.Item>

      <SideBar.Item>
        <BsFillCalendarWeekFill />
        <Link to={"/agenda"}>
          <p>Agenda</p>
        </Link>
      </SideBar.Item>

      <details>
        <SideBar.ColecaoElementos>
          <BiCategoryAlt size={20} />
          <p>Categorias</p>
          <IoIosArrowDown />
        </SideBar.ColecaoElementos>
        <SideBar.Elementos>
          {categorias.map((paginas) => {
            return (
              <li key={paginas.id}>
                <BiBookmarkAlt size={15} />
                <Link to={paginas.path}>{paginas.descricao}</Link>
              </li>
            );
          })}
        </SideBar.Elementos>
      </details>

      <SideBar.Item onClick={limparSessaoUsuario}>
        <IoLogOut />
        <Link to={"/"}>
          <p>Sair</p>
        </Link>
      </SideBar.Item>
    </SideBar.Container>
  );
};

export default Sidebar;
