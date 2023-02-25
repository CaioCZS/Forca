export default function Jogo({habilitado,setHabilitado}) {
  function escolherPalavra(){
    setHabilitado(false)
  }
  
  return (
    <div className="jogo">
      <div className="forca">
        <img src="./images/forca0.png" alt="imagem da forca" />
      </div>
      <div className="palavra">
        <button onClick={escolherPalavra}>Escolher palavra</button>
        <div className="palavraEscolhida">
          quarentena
        </div>
      </div>
    </div>
  );
}
