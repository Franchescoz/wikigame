"use client"


export default function IniciarSesion(){
const[nombre,setNombre]=useState("")
const[contraseña,setContraseña]=useState("")

    return<div>
        <form>
            <h1>Iniciar sesión</h1>
            <input type="text" placeholder="@ Usuario" value={nombre} onChange={(e)=> setNombre(e.target.value)}required/>
            <input type="password" placeholder="🔒 Contraseña" value={contraseña} onChange={(e)=> setContraseña(e.target.value)}required/>
            
            <button>Iniciar sesión</button>
            <button>¿no tienes cuenta?</button>
        </form>
    </div>
}