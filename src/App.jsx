import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home";
import CollectionsPage from "./pages/CollectionsPage";
import Details from "./pages/Details";
import Success from "./pages/Success";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
