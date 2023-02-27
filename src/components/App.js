import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";
import Chute from "./Chute";

export default function App() {
  const [habilitado, setHabilitado] = useState(true);
  const [letraSeparada, setLetraSeparada] = useState([]);
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [palavraChute, setPalavraChute] = useState("");
  const [palavraSorteada, setPalavraSorteada] = useState("");
  return (
    <>
      <Jogo
        letraSeparada={letraSeparada}
        setLetraSeparada={setLetraSeparada}
        setHabilitado={setHabilitado}
        palavras={palavras}
        letrasClicadas={letrasClicadas}
        erros={erros}
        acertos={acertos}
        setLetrasClicadas={setLetrasClicadas}
        setErros={setErros}
        setAcertos={setAcertos}
        setPalavraSorteada={setPalavraSorteada}
      />
      <Letras
        letraSeparada={letraSeparada}
        habilitado={habilitado}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        setErros={setErros}
        erros={erros}
        acertos={acertos}
        setAcertos={setAcertos}
        setHabilitado={setHabilitado}
      />
      <Chute
        habilitado={habilitado}
        palavraChute={palavraChute}
        setPalavraChute={setPalavraChute}
        palavraSorteada={palavraSorteada}
        setLetrasClicadas={setLetrasClicadas}
        setAcertos={setAcertos}
        letraSeparada={letraSeparada}
        setErros={setErros}
        setHabilitado={setHabilitado}
      />
    </>
  );
}
