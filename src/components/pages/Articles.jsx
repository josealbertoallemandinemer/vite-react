import React from 'react'
import {useState,useEffect} from 'react'


const Articles = () => {


 const [articulos, setArticulos]= useState([]);

 useEffect(()=>{

  let data =[{
    _id:1,
    titulo:"titulo 1",
    contenido:"contenido"


  },
  {
    _id:2,
    titulo:"titulo 1",
    contenido:"contenido"


  },
  {
    _id:3,
    titulo:"titulo 1",
    contenido:"contenido"


  }


];

setArticulos(data);

 }, [])


  return (
    <>

      {articulos.map(articulo=>{

        return (

          <article key={articulo._id} className="articulo-item">
       
          <div className='mascara'>
   
                <img src='https://hospitalveterinariodonostia.com/wp-content/uploads/2022/02/Personalidad-gatos.png'></img>
   
          </div>
   
          <div className='datos'>
   
          <h3 className="title">{articulo.titulo}</h3>
           <p className="description">{articulo.contenido}</p>
   
           <button className="edit">Editar</button>
           <button className="delete">Borrar</button>
   
          </div>
          
          
          
         </article>

        );

      })}

     

     


    </>
  )
}

export default Articles
