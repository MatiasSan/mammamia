import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../contexts/PizzasContext';

const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <>
      <div className="d-flex justify-content-center vh-100">
        <Card className="d-flex text-white justify-content-center align-content-center bg-custom w-50 h-75 mt-5 text-center">
          <div className=" fw-bold fs-5">Items en el Carrito: {quantity}</div>
          <div className="text-black">
            <ul>
              {cart.map((item, id) => (
                <li key={id} className="text-white fs-5">
                  Nombre Pizza: {item.name} {''}
                  <span>
                    <img
                      src={item.img}
                      width="25px"
                      alt={`Imagen de ${item.name}`}
                    />
                  </span>{' '}
                  {''}
                  Cantidad: {item.quantity}
                </li>
              ))}
            </ul>

            <p className="text-white fw-bold"> Total = ${totalPrice} </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Carrito;
