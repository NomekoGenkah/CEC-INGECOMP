import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../logo-cec.jpeg'
//                <img src={logo} alt='logo-cec' width={100} height={100}></img>
// navbar div contiene la imagen y la navbar. 
//debo modificar el div para aplicar el css
//2 columns?

const Navbar = () => {
    return(

        <div className='navbar-div'>
            <div className='logo-div'>
                <img src={logo} alt='logo-cec' width={100} height={100} className='logo-cec'></img>
            </div>
            <header className='navbar-header'>
                <h1>CEC Ingeniería en Computación ULS</h1>
                <nav className='navbar-nav'>
                    <Link to="/">Inicio</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/noticias">Noticias</Link>
                    <Link to="/eventos">Eventos</Link>
                    <Link to="/transparencia">Transparencia</Link>
                    <Link to="/">About</Link>
                </nav>
            </header>
        </div>


    );
}

export default Navbar;