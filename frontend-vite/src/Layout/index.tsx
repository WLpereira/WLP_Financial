import { useState } from "react";

import { LayoutRoot, MainArea, Body } from "./styles";

import Sidebar from "../Components/Navs/Sidebar";
import { MobileSidebar } from "../Components/Navs/MobileSidebar";
import Header from "../Components/Navs/Header";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export const Layout: React.FC<Props> = ({ children }) => {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);

  return (
    <LayoutRoot>
      <Sidebar />
      <MobileSidebar
        setMostrarSidebar={setMostrarSidebar}
        mostrarSidebar={mostrarSidebar}
      />
      <MainArea>
        <Header onAbrirMenu={() => setMostrarSidebar(true)} />
        <Body>{children}</Body>
      </MainArea>
    </LayoutRoot>
  );
};

