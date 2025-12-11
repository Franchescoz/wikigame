"use client"

import { useState } from "react"

const imagenes=[
    {id:1,src:"fornite.png", alt:"fortnite"},
    {id:2,src:"gta.jpeg" ,alt:"gta"},
    {id:3,src:"minecraft.jpeg", alt:"fortnite"}

]
export default function Landing(){
const [index,setIndex] = useState(1)

function continuar(){
    if(index<imagenes.length-1){
        setIndex(index+1)
    }else{
        setIndex(0)
    }
}
function anterior(){
    if(index>0){
        setIndex(index-1)
    }else{
        setIndex(imagenes.length-1)
    }
}
const arrayImagenes=[imagenes[index]]
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
        {arrayImagenes.map(imagen=><div key={imagen.id}>
            <img src={imagen.src} width={90} height={90}></img>
            
            <button onClick={anterior}>Anterior</button>
            <button onClick={continuar}>Siguiente</button>
        </div>
            )}
        
       
           
            {/*.map para mostrar las imagenes en un carrusel */}
            
            
        
        
    </div>
}