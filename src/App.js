import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Contactt from "./Components/Contactt";
import React from "react";
import { Suspense } from "react";
const Admin = React.lazy(() => import("./Components/Admin"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactt />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

