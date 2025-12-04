import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import Perfil  from"./perfil"
export default function Home() {
  return (
    <div >
      <Navbar/>
    <Perfil/>
    <Footer/>
    </div>
  );
}
