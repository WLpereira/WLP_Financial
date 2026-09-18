import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const DragDropImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 1.5rem;
  border: 2px dashed #CBD5E1;
  background: #F8FAFC;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    border-color: #00B4D8;
    background: rgba(0, 180, 216, 0.04);
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.92rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    margin: 0.5rem 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      color: #10B981;
      font-weight: 600;
      font-size: 0.88rem;
    }
  }
`;

