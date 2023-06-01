import Footer from "../components/common/Footer";
import Header, { Pages } from "../components/common/Header";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <Header page={Pages.home} />
      <h1>HOME</h1>
      <Footer />
    </Layout>
  );
};

export default Home;
