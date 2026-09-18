import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBank2,
  BsX,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

import { tiposFluxosCaixa, categorias } from "../Sidebar/data/listLinks";
import * as SideBar from "./styles";
import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "../Sidebar/ImagePerfil";
import wlpLogo from "../../../assets/wlp-logo.png";

type Props = {
  setMostrarSidebar: any;
  mostrarSidebar: boolean;
};

export const MobileSidebar: React.FC<Props> = ({
  mostrarSidebar,
  setMostrarSidebar,
}) => {
  const { nomeUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  const esconderSidebar = () => setMostrarSidebar(false);

  if (!mostrarSidebar) return null;

  return (
    <SideBar.Backdrop onClick={esconderSidebar}>
      <SideBar.Drawer onClick={(e) => e.stopPropagation()}>
        <SideBar.DrawerHeader>
          <SideBar.LogoImg src={wlpLogo} alt="WLP Financial" />
          <SideBar.Exit
            type="button"
            aria-label="Fechar menu"
            onClick={esconderSidebar}
          >
            <BsX size={32} />
          </SideBar.Exit>
        </SideBar.DrawerHeader>

        <SideBar.PerfilContainer>
          <ImagemPerfil caminho_imagem={imagePerfil!} />
          <Link to={"/usuario_logado"} onClick={esconderSidebar}>
            <strong>{nomeUsuario}</strong>
            <span>Ver perfil</span>
          </Link>
        </SideBar.PerfilContainer>

        <SideBar.NavList>
          <SideBar.Item onClick={esconderSidebar}>
            <BsFillPieChartFill size={20} color="#00B4D8" />
            <Link to={"/dashboard"}>Dashboard</Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
            <BsBank2 size={20} color="#00B4D8" />
            <Link to={"/locais"}>Locais</Link>
          </SideBar.Item>

          <details>
            <SideBar.ColecaoElementos>
              <BsFillGrid3X2GapFill size={20} color="#00B4D8" />
              <span>Fluxo de Caixa</span>
            </SideBar.ColecaoElementos>
            <SideBar.Elementos>
              {tiposFluxosCaixa.map((paginas) => (
                <li key={paginas.id}>
                  <Link to={paginas.path} onClick={esconderSidebar}>
                    {paginas.descricao}
                  </Link>
                </li>
              ))}
            </SideBar.Elementos>
          </details>

          <SideBar.Item onClick={esconderSidebar}>
            <BsFillBasket2Fill size={20} color="#00B4D8" />
            <Link to={"/tipos_despesas"}>Tipos de Despesas</Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
            <BsFillCalendarWeekFill size={20} color="#00B4D8" />
            <Link to={"/agenda"}>Agenda</Link>
          </SideBar.Item>

          <details>
            <SideBar.ColecaoElementos>
              <BsFillGrid3X2GapFill size={20} color="#00B4D8" />
              <span>Categorias</span>
            </SideBar.ColecaoElementos>
            <SideBar.Elementos>
              {categorias.map((paginas) => (
                <li key={paginas.id}>
                  <Link to={paginas.path} onClick={esconderSidebar}>
                    {paginas.descricao}
                  </Link>
                </li>
              ))}
            </SideBar.Elementos>
          </details>

          <SideBar.LogoutItem
            onClick={() => {
              limparSessaoUsuario();
              esconderSidebar();
            }}
          >
            <IoLogOut size={22} color="#F43F5E" />
            <Link to={"/"}>Sair</Link>
          </SideBar.LogoutItem>
        </SideBar.NavList>
      </SideBar.Drawer>
    </SideBar.Backdrop>
  );
};

