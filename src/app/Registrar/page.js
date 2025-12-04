import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import Registrar from "./Registrar";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <Registrar/>
    <Footer/>
    </div>
  );
}
