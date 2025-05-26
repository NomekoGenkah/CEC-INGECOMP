//import Navbar from "./components/navbar/Navbar";
import './Contacto.css';
const Contacto = () => {
    return(
        <div className="contacto-div">
            <div className="contactos-box">
                <h2>Contactos</h2>
                <div className='contacto-item'>
                    <span>Centro de Estudiantes:</span>
                    <span>cec.ingecomp@userena.cl</span>
                </div>
                <div className='contacto-item'>
                    <span>Asistente social:</span>
                    <span>kambler@userena.cl</span>
                </div>
                <div className='contacto-item'>
                    <span>Jefe de carrera:</span>
                    <span>mramos@userena.cl</span>                    
                </div>
            </div>
            <div className='contacto-input'>
                <h2>¡Contáctanos!</h2>

                <form>
                    <label htmlFor='asunto'>Asunto</label>
                    <input type='text' id='asunto' name='asunto'/>

                    <label htmlFor='email'>Correo electrónico (opcional)</label>
                    <input type='email' id='email' name='email'/>

                    <label htmlFor='mensaje'>Sugerencia, inquietud, hecho de relevancia ocurrido:</label>
                    <textarea id='mensaje' name='mensaje' rows="5"></textarea>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;