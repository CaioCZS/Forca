import alfabeto from "../alfabeto";

export default function Chute({
  habilitado,
  palavraSorteada,
  palavraChute,
  setPalavraChute,
  setLetrasClicadas,
  letraSeparada,
  setAcertos,
  setErros,
  setHabilitado,
}) {
  function darChute() {
    setLetrasClicadas([...alfabeto]);
    if (palavraChute === palavraSorteada) {
      setAcertos(letraSeparada.length);
    } else {
      setErros(6);
    }
    setPalavraChute("");
    setHabilitado(true);
  }

  return (
    <div className="chute">
      <div>
        <span>Já sei a palavra!</span>
        <input
          data-test="guess-input"
          disabled={habilitado}
          value={palavraChute}
          onChange={(e) => setPalavraChute(e.target.value)}
        ></input>
        <button
          data-test="guess-button"
          disabled={habilitado}
          onClick={() => darChute()}
        >
          Chutar
        </button>
      </div>
    </div>
  );
}
