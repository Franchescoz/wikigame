import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./layout";
import Landing from "./Landing";
export default function Home() {
  return (
    <div >
      <Navbar/>
    <Landing/>
    <Footer/>
    </div>
  );
}
