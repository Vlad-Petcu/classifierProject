import { Button, Input } from "antd";
import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const StarClassifier: FC = () => {
  const [temperature, setTemperature] = useState<number>();
  const [relativeLuminosity, setRelativeLuminosity] = useState<number>();
  const [relativeRadius, setRelativeRadius] = useState<number>();
  const [absoluteMagnitude, setAbsoluteMagnitude] = useState<number>();
  const [color, setColor] = useState<string>("");
  const [spectralClass, setSpectralClass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const isFormValid = () => {
    if (temperature === undefined) {
      setErrorMessage("Temperature input is not valid!");
      return false;
    }
    if (relativeLuminosity === undefined) {
      setErrorMessage("Relative Luminosity input is not valid!");
      return false;
    }
    if (relativeRadius === undefined) {
      setErrorMessage("Relative Radius input is not valid!");
      return false;
    }
    if (absoluteMagnitude === undefined) {
      setErrorMessage("Absolute Magnitude input is not valid!");
      return false;
    }
    if (color.length === 0) {
      setErrorMessage("Color input is not valid!");
      return false;
    }
    if (spectralClass.length === 0) {
      setErrorMessage("Spectral Class input is not valid!");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      const response = await axios.post(`/stars`, {
        temperature: temperature,
        relativeLuminosity: relativeLuminosity,
        relativeRadius: relativeRadius,
        absoluteMagnitude: absoluteMagnitude,
        color: color,
        spectralClass: spectralClass,
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
          <div>Star Classifier</div>
        </div>
        <div className={styles.formContainer}>
          <div>
            <div className={styles.label}>Temperature:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTemperature(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Relative Luminosity:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRelativeLuminosity(Number(e.target.value))
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Relative Radius:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRelativeRadius(Number(e.target.value))
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
          <div>
            <div className={styles.label}>Color:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setColor(e.target.value)
              }
              className={styles.input}
            />
          </div>
          <div>
            <div className={styles.label}>Spectral Class:</div>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSpectralClass(e.target.value)
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

export default StarClassifier;
