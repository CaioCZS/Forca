import { useState } from "react";

export default function Jogo({
  letraSeparada,
  setLetraSeparada,
  setHabilitado,
  palavras,
  letrasClicadas,
  erros
}) {
  function escolherPalavra() {
    setHabilitado(false);
    let sorteada = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(sorteada);
    setLetraSeparada(sorteada.split(""));
  }
  const [palavraSorteada, setPalavraSorteada] = useState("");
  console.log(palavraSorteada)
  return (
    <div className="jogo">
      <div className="forca">
        <img src={`./images/forca${erros}.png`} alt="imagem da forca" />
      </div>
      <div className="palavra">
        <button onClick={escolherPalavra}>Escolher palavra</button>
        <div className="palavraEscolhida">
          {letraSeparada.map((l, index) => (
            <span key={index}>{letrasClicadas.includes(l) ? l : "_"}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
