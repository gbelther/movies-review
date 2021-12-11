import styled from "styled-components";

interface IButtonProps {
  backgroundColor?: string;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${({ theme, backgroundColor }) =>
    !!backgroundColor ? backgroundColor : theme.colors.background};
  white-space: nowrap;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
  }
`;
