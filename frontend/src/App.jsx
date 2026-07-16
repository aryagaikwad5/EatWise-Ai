import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Intro from "./pages/Intro";
import Predict from "./pages/Predict";
import ResultPage from "./pages/Result";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/intro" element={<Intro />} />

      <Route path="/predict" element={<Predict />} />

      <Route path="/result" element={<ResultPage />} /> 
      
    </Routes>
  );
}

export default App;