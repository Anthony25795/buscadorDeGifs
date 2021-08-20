import Gifs from "./Gifs";
 const ListaGifs = ({gif}) => {

    return(
        <div className='listaGifs-card'>
            <img src={gif.imagen} alt={gif.titulo}></img>
            <p>{gif.titulo}</p>
        </div>
    )
 }

 export default ListaGifs;