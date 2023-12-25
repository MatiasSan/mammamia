import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/PizzasContext";

const Nav = () => {

    const [cart, setCart]= useContext(CartContext)


    const quantity =cart.reduce((acc,curr)=> {
        return acc + curr.quantity
    }, 0)
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand>Mamma Mia!</Navbar.Brand>
      <div className="ml-3 d-flex">
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link to="/Carrito" className="text-white ms-3 text-decoration-none">
          Carrito
        </Link>
        <ul className="nav-list text-white">
        <li>
            Pizzas Seleccionadas: <span className="cart-count"> {quantity} </span>
        </li>
      </ul>
      </div>


    </Navbar>
  );
};

export default Nav;