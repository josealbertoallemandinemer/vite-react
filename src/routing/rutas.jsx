import React from 'react';
import {Routes,Route,BrowserRouter,Navigate} from "react-router-dom";
import Ini from '../components/pages/Ini';
import Articles from '../components/pages/Articles';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import Crear from '../components/pages/Crear';


export const Rutas =()=>{

return(

    <BrowserRouter>

    <Header></Header>
    <Nav></Nav>

    <section id='content' className='content'>

   <Routes>

      <Route path='/' element={<Ini></Ini>} />
      <Route path='/inicio' element={<Ini></Ini>} />
      <Route path='/articulos' element={<Articles></Articles>} />
      <Route path='/crear-articulos' element={<Crear></Crear>} />



   </Routes>




    </section>

    <Sidebar></Sidebar>
    <Footer></Footer>
    
    
    </BrowserRouter>
)



}

