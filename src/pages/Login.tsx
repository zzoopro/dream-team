import styled, { ThemeProps } from "styled-components";
import Layout from "../components/common/Layout";
import { Link } from "react-router-dom";
import { Theme } from "../styles/theme";
import Input from "../components/auth/Input";
import { FlexBox } from "../components/common/styledComponents";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 10vh;
`;
const RowBox = styled(FlexBox)`
  justify-content: end;
  margin-top: 10px;
`;
const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.theme.point800};
  margin-right: 10px;
`;

const Button = styled.button<{ bgColor: string; textColor: string }>`
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  background-color: ${(props) =>
    props.bgColor === "point" ? props.theme.point800 : props.bgColor};
  color: ${(props) =>
    props.textColor === "point" ? props.theme.point800 : props.textColor};
  margin-top: 20px;
`;

const StyledLink = styled(Link)<{ bgColor: string; textColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  background-color: ${(props) =>
    props.bgColor === "point" ? props.theme.point800 : props.bgColor};
  color: ${(props) =>
    props.textColor === "point" ? props.theme.point800 : props.textColor};
  margin-top: 10px;
  text-decoration: none;
`;

const Login = () => {
  const onSubmit = () => {};

  return (
    <Layout>
      <ColumnBox>
        <Title>Dream Team</Title>
        <Form onSubmit={onSubmit}>
          <RowBox>
            <Label htmlFor="userId">아이디</Label>
            <Input type="text" id="userId" />
          </RowBox>
          <RowBox>
            <Label htmlFor="password">비밀번호</Label>
            <Input type="password" id="password" />
          </RowBox>
          <Button bgColor="point" textColor="white">
            로그인
          </Button>
          <StyledLink to="/signup" bgColor="#000" textColor="white">
            회원가입
          </StyledLink>
        </Form>
      </ColumnBox>
    </Layout>
  );
};

export default Login;
