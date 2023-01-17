import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NeoClassifier from "./pages/neo-classifier";
import NeoClassifierInfo from "./pages/neo-classifier-info";
import StarClassifier from "./pages/star-classifier";
import StarClassifierInfo from "./pages/star-classifier-info";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="star-classifier-info" element={<StarClassifierInfo />} />
      <Route path="star-classifier" element={<StarClassifier />} />
      <Route path="neo-classifier-info" element={<NeoClassifierInfo/>} />
      <Route path="neo-classifier" element={<NeoClassifier />} />
    </Routes>
  );
};

export default App;
