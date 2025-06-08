import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <div>
        <Header />

        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
