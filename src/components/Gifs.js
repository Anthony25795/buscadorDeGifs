import { useState, useEffect } from "react";
import ListaGifs from "./ListaGifs";


const Gifs = ({item}) => {

    const [gifs, setGifs] = useState([]);

    useEffect ( () => {
        obtenerGifs()
    },[])
    
    const obtenerGifs = async () => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=WCbXL4xwO4EFYqhDvc4dikmXvWu7f91U&q=${encodeURI(item)}&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    

    const gifs = data.map( (gif) => {
        return {
            titulo: gif.title,
            imagen: gif.images.downsized_medium.url
        }
    })
    setGifs(gifs);

    }

    console.log(gifs);
    return(
        <>
            <h2>{item}</h2>
            <div className='gif-container'>
                

                {
                    gifs.map( (gif) => {
                        return <ListaGifs key={gif.imagen} gif={gif}/>

                    })
                }
            </div>
        </>        
    )
}
export default Gifs;