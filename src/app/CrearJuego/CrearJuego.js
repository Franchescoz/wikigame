"use client"
import { useState } from "react";
export default function CrearVistaJuego() {
    const [titulo, setTitulo] = useState("Titulo del juego");
    const [consolas, setConsolas] = useState("Consolas");
    const [tipo, setTipo] = useState("Tipo de juego");
    const [descripcion, setDescripcion] = useState("descripcion");
    const portada = "portadadb3.jpg";
    const gameplays = [
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
  ];
    return (
        <div>
                    <img src={portada} alt="Portada" width={40} height={40} />
                    {gameplays.map((imagen, index) => (
                        <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
                    ))}
                    <form >
                    <button>Cambiar</button> 
                    <label>Titulo del juego:</label>
                    <input type="text" placeholder="Titulo del juego" value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
                    <label>Consolas:</label>
                    <input type="text" placeholder="Consolas" value={consolas} onChange={(e)=> setConsolas(e.target.value)}></input>
                    <label>Tipo de juego:</label>
                    <input type="text" placeholder="Tipo de juego" value={tipo} onChange={(e)=> setTipo(e.target.value)}></input>
                    <label>Descripcion:</label>
                    <input type="text" placeholder="Descripcion" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}></input>
                    <button>Cancelar</button>   
                    <button>Crear</button>   
                    </form>
                    
                       

        </div>
    );
}