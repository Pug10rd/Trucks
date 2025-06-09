import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const Navigation = ({ position }) => {
  return (
    <Container>
      <StyledNavLink $position={position} to="/">
        <Text>Home</Text>
      </StyledNavLink>
      <StyledNavLink $position={position} to="/catalog">
        <Text>Catalog</Text>
      </StyledNavLink>
      <StyledNavLink $position={position} to="/favorites">
        <Text>Favorites</Text>
      </StyledNavLink>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

const StyledNavLink = styled(NavLink)`
  color: #101828;
  text-decoration: none;
  position: relative;

  &.active {
    color: #e44848;

    ${({ $position }) =>
      $position === "header" &&
      css`
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 100%;
          background-color: #e44848;
        }
      `}
  }
`;
