import styled from "styled-components";

import { HiUserCircle } from "react-icons/hi";
import { BiCameraMovie } from "react-icons/bi";

export const Container = styled.header`
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Logo
export const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const LogoIcon = styled(BiCameraMovie)`
  height: 2rem;
  width: 2rem;
`;

export const LogoTitle = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: none;
  }
`;

// Navigation
export const AddMovieWrapper = styled.section``;

// Login Info
export const UserLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

export const UserIcon = styled(HiUserCircle)`
  height: 2rem;
  width: 2rem;
`;

interface IUsernameProps {
  isAuthenticated: boolean;
}

export const Username = styled.p<IUsernameProps>`
  font-size: 0.9375rem;
  font-weight: bold;
  color: ${(props) =>
    props.isAuthenticated
      ? ({ theme }) => theme.colors.success
      : ({ theme }) => theme.colors.failure};

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: none;
  }
`;
