import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../contexts/PizzasContext';
import { Link } from 'react-router-dom';
export const Pizza = (
{desc,
id,
img,
ingredients,
name,
price
}) => {

    const [cart, setCart] = useContext(CartContext)

    const addToCarrito = () =>{
        setCart ((currItems)=>{

            const isPizzaFound= currItems.find( (item)=> item.id === id)
            if (isPizzaFound){
                return currItems.map ((item) => {
                    if(item.id ===id){
                        return {...item, quantity: item.quantity +1};
                    }else{
                        return item
                    }
                })
            }else {
                return [...currItems, {id, quantity: 1, price, name, ingredients ,img, desc} ]
            }
        })
    }

    const removePizza= (id) =>{

        setCart ((currItems)=>{
            if (currItems.find ((item) => item.id === id) ?.quantity === 1){
                return currItems.filter ((item)=> item.id !== id)
            }else{
                return currItems.map ((item)=>{
                    if(item.id ===id){
                        return {...item, quantity: item.quantity -1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const getPizzaById = (id) =>{
return cart.find ((item)=> item.id === id)?.quantity || 0
    }

  const quantityPerItem=  getPizzaById(id);

  return (
    <>
    <div>

<Card 

style={{ width: '18rem' }}>
    
      <Card.Img variant="top" src= {img}/>
      <Card.Body>
        <Card.Title> {name} </Card.Title>
      
        <Card.Text>
  <ul>
    {ingredients.map((ingredient, i) => (
      <li key={i}>{ingredient}</li>
    ))}
  </ul>
</Card.Text>
        <Card.Text>
         ${price}
        </Card.Text>
        <div className='d-flex gap-3'>
        {
            quantityPerItem === 0 ? (
                <Button variant="primary" onClick={()=> addToCarrito ()}> + Agregar </Button>
            ): (<Button variant="success" onClick={()=> addToCarrito ()}> Agrega mas </Button>)

        }

        </div>
       
      </Card.Body>
<div >
{quantityPerItem >0 && (

<div className='d-flex justify-content-evenly'>
    <div className='text-center bg-warning' style={{ width: '40px', height: '40px' }}>
    {quantityPerItem}
    </div>
    <div>
     <Button  width= "24%" variant="danger" onClick={()=> removePizza (id)}> Eliminar </Button>
    </div>
    <div>
        <Link to={`/pizza/${id}`} className="text-white ms-3 text-decoration-none bg-primary">
          Ver detalles
        </Link>
      </div>
</div>
)}

    
</div>
      


    </Card>


    </div>

    </>
  )
}

export default Pizza