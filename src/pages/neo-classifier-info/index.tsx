import { FC } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const NeoClassifierInfo: FC = () => {

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.pageTitle}>
          <p>NeoClassifierInfo</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NeoClassifierInfo;
