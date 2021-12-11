import { useTheme } from "styled-components";

import {
  Avatar,
  Container,
  LogoIcon,
  LogoTitle,
  LogoWrapper,
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
      <UserLoginWrapper>
        {false ? <Avatar src="" /> : <UserIcon />}
        <Username isAuthenticated={false}>{"Fazer login"}</Username>
      </UserLoginWrapper>
    </Container>
  );
};

export { Header };
