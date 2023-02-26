import alfabeto from "../alfabeto";
export default function Letras({
  habilitado,
  setLetrasClicadas,
  letrasClicadas,
  erros,
  setErros,
  letraSeparada,
  setAcertos,
  acertos,
}) {
    function clicarLetra(l) {
    setLetrasClicadas([...letrasClicadas, l]);
    if(!letraSeparada.includes(l)){
        setErros(erros+1)
    }else{
        letraSeparada.forEach(letra =>{
            if(letra === l){
                acertos++
            }
        })
        setAcertos(acertos)
    }
    if((acertos === letraSeparada.length && letraSeparada.length > 0) || erros === 5){
        setLetrasClicadas([...alfabeto])
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
            data-test="letter"
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
