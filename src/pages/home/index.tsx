import { FC } from "react";
import "../../App.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.contentContainer}>
        <p className={styles.pageTitle}>Home</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.imageContainer}>
          <img
            className={styles.homeImage}
            src={
              "https://th.bing.com/th/id/R.67288cc426e7b1846eb520e3eb5a849b?rik=cwEmI%2bnkCTmbEA&pid=ImgRaw&r=0"
            }
            alt="Not for you!"
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
