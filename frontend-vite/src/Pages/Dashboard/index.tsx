import { toast } from "react-toastify";
import { useQuery } from "react-query";

import { IoBagHandle } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";

import * as DashboardStyle from "./styles";

import { obterDetalhesFinanceirosMesPorUsuario } from "./api";

import { Card } from "../../Components/Card";
import { ModalCarregando } from "../../Components/Modais/ModalCarregando";
import { Graficos } from "./components/Graficos";
import { MesSelect } from "../../Components/selects/MesSelect";
import { FontDespesa } from "./styles";

import { converterValorEmMoedaBR } from "../../utils/conversao/converterValorEmMoedaBR/converterValorEmMoedaBR";
import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";

export const Dashboard = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const { data: dataCabecalho, isLoading: isLoadingCabecalho } = useQuery(
    ["cabecalho-dashboard", idUsuario],
    () => obterDetalhesFinanceirosMesPorUsuario(idUsuario),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const receitasMes = dataCabecalho?.data?.receita || 0;
  const despesasMes = dataCabecalho?.data?.despesa || 0;
  const saldoAtual = dataCabecalho?.data?.saldoAtual || 0;

  const receitasConvertida = converterValorEmMoedaBR(receitasMes);
  const despesasConvertida = converterValorEmMoedaBR(Math.abs(despesasMes));
  const saldoAtualConvertida = converterValorEmMoedaBR(saldoAtual);

  const tamanhoIcones = 26;
  return (
    <DashboardStyle.Container>
      {isLoadingCabecalho && <ModalCarregando />}
      <DashboardStyle.Cabecalho>
        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Receitas mês</h3>
              <h2>{receitasConvertida}</h2>
            </div>
            <DashboardStyle.IconBadge bg="rgba(16, 185, 129, 0.12)">
              <RiMoneyDollarCircleFill size={tamanhoIcones} color="#10B981" />
            </DashboardStyle.IconBadge>
          </DashboardStyle.Caixa>
        </Card>

        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Despesas mês</h3>
              <FontDespesa>{despesasConvertida}</FontDespesa>
            </div>
            <DashboardStyle.IconBadge bg="rgba(244, 63, 94, 0.12)">
              <IoBagHandle size={tamanhoIcones} color="#F43F5E" />
            </DashboardStyle.IconBadge>
          </DashboardStyle.Caixa>
        </Card>

        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Saldo atual</h3>
              <h2>{saldoAtualConvertida}</h2>
            </div>
            <DashboardStyle.IconBadge bg="rgba(27, 58, 140, 0.12)">
              <GiReceiveMoney size={tamanhoIcones} color="#1B3A8C" />
            </DashboardStyle.IconBadge>
          </DashboardStyle.Caixa>
        </Card>
        <Card light>
          <DashboardStyle.Caixa>
            <div style={{ flex: 1, minWidth: "120px" }}>
              <strong>Selecione um mês</strong>
              <MesSelect />
            </div>
            <DashboardStyle.IconBadge bg="rgba(0, 180, 216, 0.12)">
              <MdOutlineCalendarMonth size={tamanhoIcones} color="#00B4D8" />
            </DashboardStyle.IconBadge>
          </DashboardStyle.Caixa>
        </Card>
      </DashboardStyle.Cabecalho>
      <DashboardStyle.Titulo>Despesas</DashboardStyle.Titulo>
      <Graficos />
    </DashboardStyle.Container>
  );

};
