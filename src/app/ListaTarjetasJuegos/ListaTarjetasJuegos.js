"use client"
{/*La lista de juegos que habra por fedecto */}
const array=[
    {id:1 , nombre:"Minecraft" , src:"minecraft.jpeg"},
    {id:2 , nombre:"Fortnite" , src:"fornite.png"},
    {id:3 , nombre:"GTA VI" , src:"gta.jpeg"},
    {id:4 , nombre:"FC 26" , src:"fc26.jpg"},
    {id:5 , nombre:"Pokemon GO" , src:"pokemongo.jpg"},
    {id:6 , nombre:"Dragon Ball Z: Budokai Tenkaichi 3" , src:"tenkaichi.png"},
    {id:7 , nombre:"Inazuma Eleven" , src:"inazumaeleven.jpg"},
    {id:8 , nombre:"E-Football" , src:"efootball.jpg"}
]
export default function ListaTarjetasJuegos(){

    return<div>
       
        <button hidden="True">Crear</button>
       
        {
            array.map(juego =><div key={juego.id}>
                <Juego objeto={juego} />
                </div>
        )
        }{/*.map para mostrar la lista*/}
        <button>Prev.</button>
        <button>Siguie.</button>

    </div>
}
function Juego({objeto}){
    return<div>{/*Componente juego donde se renderizara cada juego*/}
        <img src={objeto.src} alt={objeto.nombre} width={40} height={40}></img>
        <p>{objeto.nombre}</p>
    </div>
}