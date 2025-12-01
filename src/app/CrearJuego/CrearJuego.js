"use client"

export default function CrearVistaJuego() {

    return (
        <div>
                    <img src="portadadb3.jpg" />
                    <img src="gameplaydb3s.jpeg" />
                    <img src="gameplaydb3s.jpeg" />
                    <img src="gameplaydb3s.jpeg" />
                    <button>Cambiar</button> 
                    <label>Titulo del juego:</label>
                    <input type="text" placeholder="Titulo del juego"></input>
                    <label>Consolas:</label>
                    <input type="text" placeholder="Consolas"></input>
                    <label>Tipo de juego:</label>
                    <input type="text" placeholder="Tipo de juego"></input>
                    <label>Descripcion:</label>
                    <input type="text" placeholder="Descripcion"></input>
                    
                    
                    <button>Cancelar</button>   
                    <button>Crear</button>      

        </div>
    );
}