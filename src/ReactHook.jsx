import React, { useState } from 'react';


  

function ReactHook() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter(prevCounter => {
      const newValue = prevCounter + 1;
      return newValue <= 20 ? newValue : prevCounter;
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    const updatedCounter = counter - 1;
    const newCounterValue = updatedCounter < 0 ? 0 : updatedCounter;
    setCounter(newCounterValue);
    
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
    
      <button className='ml-2'
      onClick={removeValue}
      >remove value {counter}</button>
      <p className='text-3xl font-semibold font-serif'>footer: {counter}</p>
    </>
  )
}



  

export default ReactHook;