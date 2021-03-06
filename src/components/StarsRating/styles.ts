import styled, { css } from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IStarProps {
  isSelectable?: boolean;
}

export const Container = styled.section``;

export const FillStar = styled(AiFillStar).attrs({
  color: "yellow",
})<IStarProps>`
  ${({ isSelectable }) =>
    isSelectable &&
    css`
      :hover {
        font-size: 1.25rem;
      }
    `}
`;

export const EmptyStar = styled(AiOutlineStar).attrs({
  color: "yellow",
})<IStarProps>`
  ${({ isSelectable }) =>
    isSelectable &&
    css`
      :hover {
        font-size: 1.25rem;
      }
    `}
`;
