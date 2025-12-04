import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import ListaJuegosAdmin from "./Listaadmin";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <ListaJuegosAdmin/>
    <Footer/>
    </div>
  );
}
