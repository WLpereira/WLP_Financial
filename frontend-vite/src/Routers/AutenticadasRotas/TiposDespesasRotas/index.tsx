import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { Layout } from "../../../Layout";

import { TodosTiposDespesa } from "../../../Pages/tiposdespesas/TodosTiposDespesas";
import { AdicionarTipoDespesa } from "../../../Pages/tiposdespesas/AdicionarTipoDespesa";
import { EditarTipoDespesa } from "../../../Pages/tiposdespesas/EditarTipoDespesa";
import { VisualizarTipoDespesa } from "../../../Pages/tiposdespesas/VisualizarTipoDespesa";
import { DeletarTipoDespesa } from "../../../Pages/tiposdespesas/DeletarTipoDespesa";

export const TiposDespesasRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/tipos_despesas"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <TodosTiposDespesa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tipos_despesas/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <AdicionarTipoDespesa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tipos_despesas/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <VisualizarTipoDespesa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tipos_despesas/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <EditarTipoDespesa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tipos_despesas/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <DeletarTipoDespesa />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
