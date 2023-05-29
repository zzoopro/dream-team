import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import ColumnBox from "../components/common/ColumnBox";

import { delay, motion } from "framer-motion";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Login = () => {
  const onSubmit = () => {};

  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ type: "tween" }}
    >
      <Layout styles={{ style: { backgroundColor: "green" } }}>
        <ColumnBox>
          <Title>Dream Team</Title>
          <Form onSubmit={onSubmit}>
            <input type="text" />
            <input type="password" />
            <button>로그인</button>
          </Form>
          <Link to="/signup">회원가입</Link>
        </ColumnBox>
      </Layout>
    </motion.div>
  );
};

export default Login;
