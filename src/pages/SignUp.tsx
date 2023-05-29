import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ type: "tween" }}
    >
      <Layout styles={{ style: { backgroundColor: "blue" } }}>
        <h1>회원가입</h1>
        <Link to="/login">로그인</Link>
      </Layout>
    </motion.div>
  );
};

export default SignUp;
