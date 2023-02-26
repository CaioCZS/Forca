import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {
  const [habilitado, setHabilitado] = useState(true);
  const [letraSeparada, setLetraSeparada] = useState([]);
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [erros, setErros] = useState(0);
  return (
    <>
      <Jogo
        letraSeparada={letraSeparada}
        setLetraSeparada={setLetraSeparada}
        setHabilitado={setHabilitado}
        palavras={palavras}
        letrasClicadas={letrasClicadas}
        erros={erros}
      />
      <Letras
        letraSeparada={letraSeparada}
        habilitado={habilitado}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        setErros={setErros}
        erros={erros}
      />
    </>
  );
}
