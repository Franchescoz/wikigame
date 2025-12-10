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
    if(index>1){
        setIndex(index+1)
    }else{
        setIndex(Array.length)
    }
}
function anterior(){

}
    return<div>
      
            <h1>WIKIGAME</h1>
             <p>El portal de información de videojuegos que ve desde estos juegos</p>

        <img src="needforspeed.jpg" alt="needforspeed" width={100}></img> 
        <img src="glicht.jpg" alt="glicht" width={100}/>

    
        <p>Hasta incluso estos juegos de Nintendo</p>

      
        <img src="pokemon.jpg" alt="pokemon" width={100}></img>
        <img src="toyStory3.jpg" alt="toy story" width={100}></img>

      
        <button>Registrarse</button>
        <button>Iniciar sesión</button>
        
        <img src={imagenes.src[index]} alt={"foto"}width={100}></img>
        <button onClick={continuar}>Siguiente</button>
        <button onClick={anterior}>Anterior</button>
           
            {/*.map para mostrar las imagenes en un carrusel */}
            
            
        
        
    </div>
}