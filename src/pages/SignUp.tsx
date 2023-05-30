import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";

const SignUp = () => {
  return (
    <Layout bgColor="blue">
      <h1>회원가입</h1>
      <Link to="/login">로그인</Link>
    </Layout>
  );
};

export default SignUp;
