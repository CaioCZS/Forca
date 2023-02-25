import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {
  const [habilitado , setHabilitado] = useState(true)
  return (
    <>
      <Jogo habilitado={habilitado} setHabilitado={setHabilitado}/>
      <Letras habilitado={habilitado}/>
    </>
  );
}
