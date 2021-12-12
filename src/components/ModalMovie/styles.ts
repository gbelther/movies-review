import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";

export const Container = styled.div``;

export const Header = styled.header``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 1rem;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.25rem;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const InputText = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 0.25rem;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const InputTextarea = styled.textarea`
  width: 100%;
  min-height: 4rem;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 0.5rem;
`;

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const FieldsetCasts = styled.fieldset`
  width: 100%;
  min-height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;

  legend {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.25rem;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const AddIcon = styled(GrAddCircle).attrs({
  size: 16,
})`
  cursor: pointer;
`;

export const Footer = styled.section`
  padding: 0.5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MessageError = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.failure};
`;
