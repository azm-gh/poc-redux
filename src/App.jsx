import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTopping, toggleGluten } from './app/pizzaSlice'

function App() {

  const pizza = useSelector((state) => state.pizza)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map(topping => 
        <li key={topping}>{topping}</li>
      )}

      <button onClick={() => dispatch(addTopping('olives'))}>Add Olives</button>
      <button onClick={() => dispatch(addTopping('cheese'))}>Add Cheese</button>
      <button onClick={() => dispatch(addTopping('tomatoes'))}>Add Tomateos</button>

     
    
    </>
  )
  
}

export default App
