import styles from "./Home.module.scss";
import MainHero from "../../components/MainHero";
import Summary from "../../components/Summary";

const Home = () => {
  return (
    <>
      <MainHero />
      <Summary />
    </>
  );
};

export default Home;
