import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <Logo />
        <Navigation position="header" />
      </HeaderSection>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: var(--color-lightGray);
  padding: 24px 0;
`;

const HeaderSection = styled.div`
  width: 1352px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 450px;
`;
