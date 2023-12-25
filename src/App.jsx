import { useState, Context } from "react";

import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import PizzaList from "./components/PizzaList";
import { PizzaProvider } from "./contexts/PizzasContext";
import PizzaSelect from "./components/PizzaSelect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PizzaProvider>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Carrito" element={<Carrito />} />

            <Route path="/pizza/:pizzaId" element={<PizzaSelect/>} />

          </Routes>
        </div>
      </PizzaProvider>
    </>
  );
}

export default App;
