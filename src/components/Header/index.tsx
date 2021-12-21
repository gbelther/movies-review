import { useHistory } from "react-router-dom";

import {
  Container,
  LogoIcon,
  LogoTitle,
  LogoWrapper,
  UserIcon,
  UserLoginWrapper,
  Username,
} from "./styles";

const Header = () => {
  const history = useHistory();

  const handleRedirectToHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <LogoWrapper onClick={() => handleRedirectToHome()}>
        <LogoIcon />
        <LogoTitle>Gbflix</LogoTitle>
      </LogoWrapper>
      <UserLoginWrapper>
        <UserIcon />
        <Username isAuthenticated={false}>{"Fazer login"}</Username>
      </UserLoginWrapper>
    </Container>
  );
};

export { Header };
