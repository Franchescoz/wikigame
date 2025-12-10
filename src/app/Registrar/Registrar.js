"use client"

import { useState } from "react"

const array=[
    {id:1,nombre:"Pepi" ,correo:"pepi@gmail",contraseña:"1234"}
]
let id=1
export default function Registrar(){
const[nuevoUsuario,setNuevoUsuario]= useState(array)
const[nombre,setNombre]=useState("")
const[email,setEmail]=useState("")
const[contraseña,setContraseña]=useState("")

function registrarUsuario(){
const usuarioNuevo =[
    ...nuevoUsuario,
    {
        id:id++,
        nombre:nombre,
        correo:email,
        contraseña:contraseña
    }
]
 setNuevoUsuario(usuarioNuevo)
}

    return <div>
        <form onSubmit={registrarUsuario}>
            <h1>Registrar</h1>{/* Este formulario es para recoger le usuario , correo y contraseña para registrarlo como nuevo usuario */}
            <input type="text" placeholder="@Usuario" value={nombre} onChange={(e)=> setNombre(e.target.value)}required/>
            <input type="email" placeholder="✉️Correo" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="🔒Contraseña" value={contraseña} onChange={(e)=> setContraseña(e.target.value)}required minLength={6} pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}"/>
            <button type="Submit">Registrar</button>
            <button>¿tienes cuenta?</button>
        </form>
    </div>
    
}