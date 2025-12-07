"use client"

import { useState } from "react"

const imagenes=[
    {id:1,src:"fornite.png", alt:"fortnite"},
    {id:2,src:"gta.jpeg" ,alt:"gta"},
    {id:3,src:"fornite.png", alt:"fortnite"}

]
export default function Landing(){
const [index,setIndex] = useState(1)

function continuar(){

}
    return<div>
      
            <h1>WIKIGAME</h1>
             <p>El portal de información de videojuegos que ve desde estos juegos</p>

        <img src="needforspeed.jpg" alt="needforspeed"></img> 
        <img src="glicht.jpg" alt="glicht" />

    
        <p>Hasta incluso estos juegos de Nintendo</p>

      
        <img src="pokemon.jpg" alt="pokemon" ></img>
        <img src="toyStory3.jpg" alt="toy story" ></img>

      
        <button>Registrarse</button>
        <button>Iniciar sesión</button>
        {imagenes.map(imagen => <div id={index}>
            <img src={imagen.src} alt={imagen.alt}></img>
            </div>)
            }
            {/*.map para mostrar las imagenes en un carrusel */}
            <button onClick={()=>continuar()}>Anterior</button>
            <button>Siguiente</button>
            
        <img src="fornite.png" alt="fortnite" ></img>
        <img src="gta.jpeg" alt="gta" ></img>
        <img src="minecraft.jpeg" alt="minecraft" ></img>
        
    </div>
}