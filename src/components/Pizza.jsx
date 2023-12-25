import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../contexts/PizzasContext';
import { Link } from 'react-router-dom';
export const Pizza = ({ desc, id, img, ingredients, name, price }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCarrito = () => {
    setCart((currItems) => {
      const isPizzaFound = currItems.find((item) => item.id === id);
      if (isPizzaFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          { id, quantity: 1, price, name, ingredients, img, desc },
        ];
      }
    });
  };

  const removePizza = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getPizzaById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getPizzaById(id);

  return (
    <>
      <div className="row">
        <div className="col-12  mb-4">
          <Card className="pizza-card">
            <Card.Img variant="top" src={img} className="pizza-card-image" />
            <Card.Body>
              <Card.Title className="pizza-card-title">{name}</Card.Title>
              <Card.Text className="pizza-card-text">
                <ul className="pizza-card-ingredients">
                  {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Text className="pizza-card-price">${price}</Card.Text>
              <div className="d-flex gap-3">
                {quantityPerItem === 0 ? (
                  <Button
                    className="green-olive-button"
                    onClick={() => addToCarrito()}
                  >
                    + Agregar
                  </Button>
                ) : (
                  <Button variant="success" onClick={() => addToCarrito()}>
                    Agrega más
                  </Button>
                )}
              </div>
            </Card.Body>
            <div>
              {quantityPerItem > 0 && (
                <div className="d-flex justify-content-evenly pizza-card-actions">
                  <div className="text-center bg-warning pizza-card-quantity">
                    {quantityPerItem}
                  </div>
                  <div>
                    <Button
                      className="rounded-pill"
                      variant="danger"
                      onClick={() => removePizza(id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                  <div>
                    <Link
                      to={`/pizza/${id}`}
                      className="btn btn-primary rounded-pill text-white text-decoration-none bg-primary pizza-card-details"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Pizza;
