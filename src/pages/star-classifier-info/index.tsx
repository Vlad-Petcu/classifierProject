import { FC } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const StarClassifierInfo: FC = () => {

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.pageTitle}>
          <p>Star Classifier Info</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StarClassifierInfo;
