import Image from "next/image";
import styles from "./page.module.css";
import Perfil from "./Perfil/perfil";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import { Navbar } from "./layout";

export default function Home() {
  return (
    <div >
      <Navbar/>
     <IniciarSesion/>
    
    </div>
  );
}
