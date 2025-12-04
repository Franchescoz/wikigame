import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import IniciarSesion from "./IniciarSesion";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <IniciarSesion/>
    <Footer/>
    </div>
  );
}
