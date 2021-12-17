import styled, { css } from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IStarProps {
  selectable: boolean | undefined;
}

export const Container = styled.section``;

export const FillStar = styled(AiFillStar)<IStarProps>`
  ${({ selectable }) =>
    selectable &&
    css`
      :hover {
        font-size: 1.25rem;
      }
    `}
`;

export const EmptyStar = styled(AiOutlineStar)<IStarProps>`
  ${({ selectable }) =>
    selectable &&
    css`
      :hover {
        font-size: 1.25rem;
      }
    `}
`;
