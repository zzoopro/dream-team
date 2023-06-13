import { useState } from "react";
import Footer from "../components/common/Footer";
import Header, { Pages } from "../components/common/Header";
import Layout from "../components/common/Layout";
import TimeSlider from "../components/common/Slider";

const Home = () => {
  const [value, setValue] = useState(12); // 초기 값은 12로 설정합니다.

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Header page={Pages.home} />
      <h1>HOME</h1>
      <TimeSlider />
      <Footer />
    </Layout>
  );
};

export default Home;
