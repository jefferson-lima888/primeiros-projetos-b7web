import React, { useState } from "react";

const Contador = () => {
  // let count = 0;
  const [count, setCount] = useState<number>(0);
  const [showSecret, setShowSecret] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const incrementButton = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };

  const showButton = () => {
    setShowSecret(!showSecret);
  };

  const showText = () => {
    alert(nameInput);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button className="bg-blue-500 p-3" onClick={incrementButton}>
        +1
      </button>
      <button className="bg-blue-500 p-3 mt-4" onClick={showButton}>
        {showSecret ? "Oculttar" : "Mostrar área secreta"}
      </button>
      {showSecret && (
        <div className="p-3 bg-blue-300 rounded-md mt-3">Área secreta</div>
      )}

      <input
        type="text"
        className="border border-black p-3 text-xl text-black rounded mt-6"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>
      <button onClick={showText}>Mostrar valor do campo</button>
    </div>
  );
};

export default Contador;
