import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import ListaUsuario from "./Listausuario";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <ListaUsuario/>
    <Footer/>
    </div>
  );
}
