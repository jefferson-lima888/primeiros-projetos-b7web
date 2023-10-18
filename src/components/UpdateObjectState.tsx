import { Person } from "@/types/person";
import React, { useState } from "react";

const UpdateObjectState = () => {
  const [fullName, setFullName] = useState<Person>({
    name: "Jeff",
    lastName: "Lima",
  });

  const handleClearButton = () => {
    setFullName({ name: "", lastName: "" });

    //se fosse só para apagar o campo nome
    // setFullName({ ...fullName, name: "" });
  };

  return (
    <div className="w-screen h-2/4 flex flex-col justify-center text-3xl items-center">
      <h1 className="pb-5 text-5xl">Atualizando um objeto</h1>
      <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        //aqui vamos clonar o objeto e alterar apenas o nome
        onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        //aqui vamos clonar o objeto e alterar apenas o sobrenome
        onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
      />
      <p>Meu nome completo é: </p>
      <p>
        {fullName.name} {fullName.lastName}
      </p>
      <button
        className="bg-blue-500 rounded-md p-3 text-sm text-white w-28 font-semibold mt-3"
        onClick={handleClearButton}
      >
        Limpar tudo
      </button>
    </div>
  );
};

export default UpdateObjectState;
