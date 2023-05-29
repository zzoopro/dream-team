import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <h1>Main</h1>
      <img src="/images/football_field.svg" alt="" />
      <Footer />
    </Layout>
  );
};

export default Home;
