import React from 'react'
import { Link } from 'react-router-dom'



const Ini = () => {
  return (
    <div className='jumbo'>
               <h1>Bienvenido al blog con react</h1>
               <p>blog desarrollado con el menu stack (mongo,express,react y node)</p>
              <Link to="/articulos" className='button'>Ver articulos</Link>  
    </div>
  )
}

export default Ini
