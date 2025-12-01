"use client"
const array=[
    {id:1 , src:"portadadb3.jpg"},
    {id:2 ,  src:"portadaIE.jpg"},
    {id:3 ,  src:"portadaTS.jpeg"},
    {id:4 ,  src:"portadaM.jpeg"},
    
]

export default function EditarPerfil(){

    return<div>
        <img src="logo 3.jpg"></img>
        <button>Cambiar</button>
        <input type="text" placeholder="Fran el largo"></input>
        <label>Fecha de registro : 12/01/2004</label>
        <input type="text" placeholder="Descripcion"></input>
        <button>Cancelar</button>
        <button>Guardar</button>
        <label>Favorito:</label>
        {array.map(juego=><div key={juego.id}>
            <Juegos objeto={juego}/>
            <button>Eliminar</button>
            </div>)
        }

    </div>
}
function Juegos({objeto}){

    return<div>
        <img src={objeto.src}></img>
    </div>
}