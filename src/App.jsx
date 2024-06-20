import { useState } from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container d-flex">
        <Sidebar />
        <div className="app-content">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
