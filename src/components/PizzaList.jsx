import React from "react";
import storePizza from "../data/pizzas.json";
import Pizza from "./Pizza";


const PizzaList = () => {
  return (
  
  <div className="d-flex gap-3 mt-4">
    
    
    {storePizza.map((product, idx) => {

        return <Pizza key={product.idx}  {...product} />

  })}
  
  </div>
  
  )
};

export default PizzaList;
