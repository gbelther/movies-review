import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerComponent = styled(ClipLoader).attrs({
  color: "#FFF",
  size: "16px",
})``;
