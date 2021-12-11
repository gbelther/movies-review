import styled from "styled-components";

interface IButtonProps {
  color?: string;
}

export const Button = styled.button<IButtonProps>`
  background: ${({ theme, color }) =>
    !!color ? color : theme.colors.background};
  height: 2rem;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
  }
`;
