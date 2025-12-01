"use client"
const array=[
    {id:1 , src:"portadadb3.jpg"},
    {id:2 ,  src:"portadaIE.jpg"},
    {id:3 ,  src:"portadaTS.jpeg"},
    {id:4 ,  src:"portadaM.jpeg"},
    
]

export default function Perfil(){

    return<div>
        <img src="logo 3.jpg"></img>
        <button>Banear</button>
        <button>Editar</button>
        <h1>Fran el largo</h1>
        <label>Fecha de registro : 12/01/2004</label>
        <textarea>Descripcion</textarea>
        <label>Favorito:</label>
        {array.map(juego=><div key={juego.id}>
            <Juegos objeto={juego}/>
            </div>)
        }

    </div>
}
function Juegos({objeto}){

    return<div>
        <img src={objeto.src}></img>
    </div>
}