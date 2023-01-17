import { Button, Input } from "antd";
import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const NeoClassifier: FC = () => {
  // const [id, setId] = useState<number>();
  // const [name, setName] = useState<string>("");
  const [estDiameterMin, setEstDiameterMin] = useState<number>();
  const [estDiameterMax, setEstDiameterMax] = useState<number>();
  const [relativeVelocity, setRelativeVelocity] = useState<string>("");
  const [missDistance, setMissDistance] = useState<number>();
  // const [orbitingObject, setOrbitingObject] = useState<string>("");
  // const [sentryObject, setSentryObject] = useState<boolean>();
  const [absoluteMagnitude, setAbsoluteMagnitude] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const isFormValid = () => {
    if (estDiameterMin === undefined) {
      setErrorMessage("Est Diameter Min input is not valid!");
      return false;
    }
    if (estDiameterMax === undefined) {
      setErrorMessage("Est Diameter Max input is not valid!");
      return false;
    }
    if (relativeVelocity.length === 0) {
      setErrorMessage("Relative Velocity input is not valid!");
      return false;
    }
    if (missDistance === undefined) {
      setErrorMessage("Miss Distance input is not valid!");
      return false;
    }
    if (absoluteMagnitude === undefined) {
      setErrorMessage("Absolute Magnitude is not valid!");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      const response = await axios.post(`/neo`, {
        id: 0,
        name: "name",
        estDiameterMin: estDiameterMin,
        estDiameterMax: estDiameterMax,
        relativeVelocity: relativeVelocity,
        missDistance: missDistance,
        orbitingObject: "Earth",
        sentryObject: false,
        absoluteMagnitude: absoluteMagnitude,
      });
      setResult(response.data);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.pageTitle}>
          <div>Neo Classifier</div>
        </div>
        <div className={styles.formContainer}>
          <div>
            <div className={styles.label}>Est Diameter Min:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEstDiameterMin(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Est Diameter Max:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEstDiameterMax(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Relative Velocity:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRelativeVelocity(e.target.value)
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Miss Distance:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMissDistance(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Absolute Magnitude:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAbsoluteMagnitude(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <Button
            className={styles.submitButton}
            onClick={() => handleSubmit()}
          >
            Classify
          </Button>
          <div className={styles.errorMessage}>{errorMessage}</div>
          <div className={styles.result}>{result}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NeoClassifier;
