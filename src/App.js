//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contacto from './pages/Contacto';
import Noticias from './pages/Noticias';
import Eventos from './pages/Eventos';
import Transparencia from './pages/Transparencia';
import About from './pages/About';
import Home from './pages/Home';

const App = () =>{
  return (
    <div className='div-main'>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/transparencia' element={<Transparencia/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>

    </div>
 
  );
}

export default App;

/*
| Color       | Uso sugerido              | Hex       |
| ----------- | ------------------------- | --------- |
| Azul marino | Fondo header / base       | `#1E293B` |
| Azul claro  | Botones / enlaces activos | `#3B82F6` |
| Cian        | Acentos o hover           | `#06B6D4` |
| Blanco      | Texto principal           | `#FFFFFF` |
| Gris claro  | Fondos de sección         | `#F1F5F9` |
*/