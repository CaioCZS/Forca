import { useState } from "react";

export default function Letras({habilitado}) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  return (
    <div className="letras">
      <div className="botoesLetras">
        {alfabeto.map((l) => (
          <button disabled={habilitado} onClick={() => alert("a")}>{l}</button>
        ))}
      </div>
    </div>
  );
}
