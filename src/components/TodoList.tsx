import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export const TodoList = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: "Fazer o dever de casa", checked: true },
    { id: 2, label: "Comprar o bolo", checked: false },
  ]);

  const handleAddButton = () => {
    //verificando se o input está vazio
    if (itemInput.trim() === "") return;

    //clonando a lista de array de objetos para inserir um novo item
    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false },
    ]);

    //limpando o input após adicionar o item
    setItemInput("");
  };

  const deleteItem = (id: number) => {
    // alert("Deletando item " + index);

    //utilizando o filter para remover o item da lista
    // setList(list.filter((item, i) => i !== index));

    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    //verificar se a tarefa está marcada ou não
    let newList = [...list];

    //o for foi dado o exemplo para percorrer a lista caso tenha um id
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    // newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  return (
    <div className="w-screen h-2/4 flex flex-col justify-center text-2xl items-center">
      <h1 className="text-4xl mt-36">Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          className="flex border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button
          className="bg-gray-600 rounded-md p-3 text-sm text-white w-28 font-semibold"
          onClick={handleAddButton}
        >
          Adicionar
        </button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              className="w-6 h-6 mr-3"
              // onClick={() => toggleItem(index)}
              onClick={() => toggleItem(item.id)}
            />
            {item.label} -{" "}
            <button
              className="hover:underline"
              // onClick={() => deleteItem(index)}
              onClick={() => deleteItem(item.id)}
            >
              [deletar]
            </button>
          </li>
        ))}
        {/* <li>
          Tarefa específica -{" "}
          <button className="hover:underline">[deletar]</button>
        </li> */}
      </ul>
    </div>
  );
};
