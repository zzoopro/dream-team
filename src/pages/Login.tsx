import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../components/auth/Input";
import { FlexBox } from "../components/common/styledComponents";

import { motion } from "framer-motion";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 5vh;
`;

export const RowBox = styled(FlexBox)`
  justify-content: end;
  margin-top: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.theme.point800};
  margin-right: 10px;
`;

export const Button = styled.button<{ bgcolor: string; textcolor: string }>`
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  background-color: ${({ bgcolor, theme }) =>
    bgcolor === "point" ? theme.point800 : bgcolor};
  color: ${({ textcolor, theme }) =>
    textcolor === "point" ? theme.point800 : textcolor};
  margin-top: 20px;
`;

export const StyledLink = styled(Link)<{ bgcolor: string; textcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  background-color: ${({ bgcolor, theme }) =>
    bgcolor === "point" ? theme.point800 : bgcolor};
  color: ${({ textcolor, theme }) =>
    textcolor === "point" ? theme.point800 : textcolor};
  margin-top: 10px;
  text-decoration: none;
`;

const Login = () => {
  const onSubmit = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <RowBox>
        <Label htmlFor="userId">아이디</Label>
        <Input type="text" id="userId" />
      </RowBox>
      <RowBox>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" />
      </RowBox>
      <Button bgcolor="point" textcolor="white">
        로그인
      </Button>
      <StyledLink to="/signup" bgcolor="#000" textcolor="white">
        회원가입
      </StyledLink>
    </Form>
  );
};

export default Login;
