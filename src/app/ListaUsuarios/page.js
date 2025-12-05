import { Navbar } from "../layout";
import { Footer } from "../layout";
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
