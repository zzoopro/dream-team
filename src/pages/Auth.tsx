import styled, { ThemeProps } from "styled-components";
import Layout from "../components/common/Layout";
import { useLocation } from "react-router-dom";
import { Theme } from "../styles/theme";

import { FlexBox } from "../components/common/styledComponents";

import { AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./SignUp";
import Header, { Pages } from "../components/common/Header";

const ColumnBox = styled(FlexBox)`
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Roboto-mono";
  font-weight: 700;
  font-size: 40px;
  color: ${(props: ThemeProps<Theme>) => props.theme.point400};
  margin-top: 10vh;
`;

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Header page={Pages.auth} />
      <ColumnBox>
        <Title>Dream Team</Title>
        <AnimatePresence initial={false} mode="sync">
          {pathname === "/login" && <Login />}
          {pathname === "/signup" && <Signup />}
        </AnimatePresence>
      </ColumnBox>
    </Layout>
  );
};

export default Auth;
