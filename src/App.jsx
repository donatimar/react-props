import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 bg-light py-5">
        <div className="container d-flex justify-content-center">
          <Card />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
