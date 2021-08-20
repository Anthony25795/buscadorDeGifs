import {useState} from "react";
import Buscador from './Buscador';
import Gifs from "./Gifs";
import '../styles/index.css';

const App = () => {

    const [busqueda,setBusqueda] = useState(['']);
    //const handleAdd = () => {
      //  setBusqueda([...busqueda, 'Conejo']);
    //}

    return(<>         
                <h1>Buscador de Gifs</h1>
                <hr />
                <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>

                {
                    busqueda.map( (item)=> {
                        return <Gifs key={item} item={item}/>
                    })
                }
            </>       
        );
}
export default App;