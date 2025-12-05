"use client"
import { useState } from "react";
export default function VistaJuego() {
    const [editar, setEditar] = useState(false);
    const [titulo, setTitulo] = useState("TITULO DEL JUEGO");
    const [consolas, setConsolas] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("descripcion");
    const portada = "portadadb3.jpg";
    const gameplays = [
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
  ];

  function activarEdicion() {
    setEditar(true);
  }

  function cancelarEdicion() {
    setEditar(false);
  }

  function guardarEdicion() {
    setEditar(false);
  }
   if (editar) {
    return (
      <div>
        <img src={portada} alt="Portada" width={40} height={40} />
        {gameplays.map((imagen, index) => (
          <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
        ))}
        <button>Cambiar</button>
        <form onSubmit={guardarEdicion}>
        <label>Titulo del juego:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <label>Consolas:</label>
        <input type="text" value={consolas} onChange={(e) => setConsolas(e.target.value)} />
        <label>Tipo de juego:</label>
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        <label>Descripcion:</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

        <button onClick={cancelarEdicion}>Cancelar</button>
        <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
    return (
        <div>
                    <button onClick={activarEdicion} >Editar</button>
                    
                    <img src={portada} alt="Portada" width={40} height={70} />
                    {gameplays.map((imagen, index) => (
                    <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
                    ))}
                
                    <h1>{titulo}</h1>
                    <p>Consolas :{consolas}</p>
                    <p >Tipo de juego :{tipo}</p>

                    <textarea value={descripcion} readOnly> </textarea>
                    <button>Favorito</button>    

        </div>
    );
}