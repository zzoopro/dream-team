import styled from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import ColumnBox from "../components/common/ColumnBox";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "NotoSans-kr";
  font-weight: 600;
  font-size: 66px;
`;

const Login = () => {
  const onSubmit = () => {};

  return (
    <Layout>
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
  );
};

export default Login;
