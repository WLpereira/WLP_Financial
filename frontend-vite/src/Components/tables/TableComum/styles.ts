import styled from "styled-components";

type Colors = {
  shadowColor?: string;
  textColor?: string;
  headerColor?: string;
  bodyColor?: string;
};

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background: #FFFFFF;
  border-radius: 14px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04);
  margin: 12px 0;
  box-sizing: border-box;

  *::-webkit-scrollbar {
    height: 6px;
  }
  *::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 999px;
  }
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 580px;
  font-size: 0.88rem;
  color: #1E293B;

  th {
    background-color: ${(props: Colors) => props.headerColor || "#F8FAFC"};
    color: #475569;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid #E2E8F0;
    white-space: nowrap;
  }

  td {
    padding: 12px 14px;
    border-bottom: 1px solid #F1F5F9;
    font-weight: 500;
    color: #334155;
    text-align: left;
    vertical-align: middle;
  }

  tr {
    background-color: #FFFFFF;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: #F8FAFC;
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

export const Container = styled.main`
  display: block;
  color: #1E293B;
  width: 100%;

  header {
    margin-bottom: 1em;
  }
`;

