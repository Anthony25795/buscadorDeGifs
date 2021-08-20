import { useState } from "react";
import PropTypes from 'prop-types';

const Buscador = ({busqueda, setBusqueda}) => {

    const [valorInput, setValorInput] = useState('');

    const handleUpdate = (evento) => {
        setValorInput(evento.target.value);

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(valorInput.trim().length >= 1){
            setBusqueda([valorInput, ...busqueda]);
            //setBusqueda((itemsBusqueda)=> [...itemsBusqueda, valorInput]); esto funciona igual que la línea de arriba, sin la necesitadad de exportar el parámetro 1, que es busqueda, sino que como ya viene dentro de "setBusqueda"(parametro1), sólo se importa "setbusqueda" y luego se extrae "busqueda" (parametro1) que en este caso lo nombramos "itemsBusqueda", pero realmente sigue siendo el parametro1.
            setValorInput('');
        }

    }



    return( 
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={valorInput} onChange={handleUpdate} placeholder='Escribir una categoría'/>
                    <button type='submit'>Agregar</button>
                </form>
            </>
        
        );
}

export default Buscador;

Buscador.propTypes = {
    busqueda: PropTypes.array,
    setBusqueda: PropTypes.func
}