import Image from "next/image";
import styles from "./page.module.css";
import Perfil from "./Perfil/perfil";
import VistaJuego from "./VistaJuego";
import { Navbar } from "./layout";
import { Footer } from "../layout";

export default function Home() {
  return (
    <div >
      <Navbar/>
     <VistaJuego/>
     <Footer/>
    
    </div>
  );
}
