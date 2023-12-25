import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/PizzasContext';

function PizzaSelect() {
  const { pizzaId } = useParams();
  const [cart, setCart] = useContext(CartContext);

  // Convertir pizzaId a minúsculas
  const selectedPizzaId = pizzaId.toLowerCase();

  // Encontrar la pizza con el id correspondiente
  const selectedPizza = cart.find((item) => item.id.toLowerCase() === selectedPizzaId);

  // Verificar si la pizza está seleccionada y mostrar los detalles
  return (
    <div>
      {selectedPizza ? (
        <div key={selectedPizza.id}>
          <h1>{selectedPizza.name}</h1>
          <img src= {selectedPizza.img}  width= "200px" height= "100px"></img>
          <h2>Detalles de la pizza {selectedPizza.id}</h2>
          <p>Descripción: {selectedPizza.desc}</p>
          <p>Ingredientes: {selectedPizza.ingredients.join(', ')}</p>
          <p>Precio: ${selectedPizza.price}</p>
        </div>
      ) : (
        <p>No se encontró la pizza seleccionada</p>
      )}
    </div>
  );
}

export default PizzaSelect;