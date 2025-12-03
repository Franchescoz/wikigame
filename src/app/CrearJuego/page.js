import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import CrearVistaJuego from "./CrearJuego";

export default function Home() {
  return (
    <div >
      <Navbar/>
    <CrearVistaJuego/>
    <Footer/>
    </div>
  );
}
