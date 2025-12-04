import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import EditarVistaJuego from "./EditarVistaJuego";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <EditarVistaJuego/>
    <Footer/>
    </div>
  );
}
