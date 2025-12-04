import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import EditarPerfil from "./EditarPerfil";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <EditarPerfil/>
    <Footer/>
    </div>
  );
}
