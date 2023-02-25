export default function Jogo() {
  return (
    <div className="jogo">
      <div className="forca">
        <img src="./images/forca0.png" alt="imagem da forca" />
      </div>
      <div className="palavra">
        <button>Escolher palavra</button>
        <div className="palavraEscolhida">
          Quarentena
        </div>
      </div>
    </div>
  );
}
