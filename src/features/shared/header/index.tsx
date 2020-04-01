import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectIsAccountAuthenticated } from "../session-loader/selectors";
import { exitFromAccount } from "../session-loader/services/utils";
import { Link } from "@ui/atoms";
import { TogglerTheme } from "@features/toggler-theme/toggler-theme";

export const Header = () => {
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);

  return (
    <StyledHeader>
      <Link to="/">лого</Link>
      {isAccountAuthenticated ? <AuthenticatedNavbar /> : <GuestNavbar />}
      <TogglerTheme />
    </StyledHeader>
  );
};

const AuthenticatedNavbar = () => {
  const dispatch = useDispatch();
  return (
    <NavBar>
      <Ul>
        <Li>
          <Link to="/">перевод</Link>
        </Li>
        &nbsp;
        <Li>
          <Link to="/">история переводов</Link>
        </Li>
        &nbsp;
        <Li>
          <Link to="/">пополнить баланс</Link>
        </Li>
        &nbsp;
        <Li>
          <Link to="/" onClick={() => exitFromAccount(dispatch)}>
            выйти
          </Link>
        </Li>
      </Ul>
    </NavBar>
  );
};

const GuestNavbar = () => (
  <NavBar>
    <Ul>
      <Li>
        <Link to="/signUp">зарегистрироваться</Link>
      </Li>
      &nbsp;
      <Li>
        <Link to="/signIn">войти</Link>
      </Li>
    </Ul>
  </NavBar>
);

const StyledHeader = styled.header`
  display: flex;
  padding: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

const NavBar = styled.nav`
  margin-left: auto;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
`;
