"use client"
import { useState } from "react"

export default function IniciarSesion(){
const[nombre,setNombre]=useState("")
const[contraseña,setContraseña]=useState("")

    return<div>
        <form>
            <h1>Iniciar sesión</h1>{/* Estos inputs son los que recogeran el nombre de usuario y la contraseña para despues comprobar que existe */}
            <input type="text" placeholder="@ Usuario" value={nombre} onChange={(e)=> setNombre(e.target.value)}required/>
            <p>{nombre.length>0?"Usuario valido":"Pon el usuario"}</p>
            <input type="password" placeholder="🔒 Contraseña" value={contraseña} onChange={(e)=> setContraseña(e.target.value)}required/>
            <p>{contraseña.length>7?"Contraseña valida":"La contraseña debe tener al menos 8 caracteres"}</p>
            
            <button>Iniciar sesión</button>
            <button>¿no tienes cuenta?</button>
        </form>
    </div>
}