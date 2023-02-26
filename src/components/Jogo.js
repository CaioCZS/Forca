
export default function Jogo({
  letraSeparada,
  setLetraSeparada,
  setHabilitado,
  palavras,
  letrasClicadas,
  erros,
  setErros,
  acertos,
  setAcertos,
  setLetrasClicadas
}) {
  function escolherPalavra() {
    setHabilitado(false);
    let sorteada = palavras[Math.floor(Math.random() * palavras.length)];
    setLetraSeparada(sorteada.split(""));
    if(letraSeparada.length > 0){
      setLetrasClicadas([]);
      setErros(0);
      setAcertos(0);
    }
  }
  const classeResuldado =
    acertos === letraSeparada.length && letraSeparada.length > 0
      ? "verde"
      : erros === 6
      ? "vermelho"
      : "";

  return (
    <div className="jogo">
      <div className="forca">
        <img data-test="game-image" src={`./images/forca${erros}.png`} alt="imagem da forca" />
      </div>
      <div className="palavra">
        <button data-test="choose-word" onClick={escolherPalavra}>Escolher palavra</button>
        <div data-test="word" className="palavraEscolhida">
          {letraSeparada.map((l, index) => (
            <span className={classeResuldado} key={index}>
              {letrasClicadas.includes(l) ? l : "_"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
