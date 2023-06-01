import Input from "../components/auth/Input";
import { Button, Form, Label, RowBox, StyledLink } from "./Login";

const Signup = () => {
  const onSubmit = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <RowBox>
        <Label htmlFor="username">닉네임</Label>
        <Input type="text" id="username" />
      </RowBox>
      <RowBox>
        <Label htmlFor="userId">아이디</Label>
        <Input type="text" id="userId" />
      </RowBox>
      <RowBox>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" />
      </RowBox>
      <RowBox>
        <Label htmlFor="checkPassword">비밀번호 확인</Label>
        <Input type="password" id="checkPassword" />
      </RowBox>

      <Button bgcolor="point" textcolor="white">
        회원가입
      </Button>
      <StyledLink to="/login" bgcolor="#000" textcolor="white">
        로그인
      </StyledLink>
    </Form>
  );
};

export default Signup;
