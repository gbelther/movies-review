import { useTheme } from "styled-components";
import { Button } from "../Button";

import {
  Avatar,
  Container,
  LogoIcon,
  LogoTitle,
  LogoWrapper,
  AddMovieWrapper,
  UserIcon,
  UserLoginWrapper,
  Username,
} from "./styles";

const Header = () => {
  const theme = useTheme();

  return (
    <Container>
      <LogoWrapper>
        <LogoIcon />
        <LogoTitle>Movie-Review</LogoTitle>
      </LogoWrapper>
      <AddMovieWrapper>
        <Button color={theme.colors.success}>ADICIONAR FILME</Button>
      </AddMovieWrapper>
      <UserLoginWrapper>
        {false ? <Avatar src="" /> : <UserIcon />}
        <Username isAuthenticated={false}>{"Fazer login"}</Username>
      </UserLoginWrapper>
    </Container>
  );
};

export { Header };
