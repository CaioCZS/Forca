import alfabeto from "../alfabeto";
export default function Letras({
  habilitado,
  setLetrasClicadas,
  letrasClicadas,
  erros,
  setErros,
  letraSeparada
}) {
  function clicarLetra(l) {
    let nvArray = [...letrasClicadas, l]
    setLetrasClicadas(nvArray);
    if(!letraSeparada.includes(l)){
        setErros(erros+1)
    }
  }
  return (
    <div className="letras">
      <div className="botoesLetras">
        {alfabeto.map((l) => (
          <button
            key={l}
            disabled={letrasClicadas.includes(l) ? true : habilitado}
            onClick={() => clicarLetra(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
