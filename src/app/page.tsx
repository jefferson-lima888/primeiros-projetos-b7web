"use client";
import { EmojiRating } from "@/components/Ex2_EmojiRating";
import { StudentTable } from "@/components/StudentTable";
import { students } from "./../data/students";
import BtnEvent from "@/components/BtnEvent";
import CustomButton from "@/components/CustomButton";
import FormEvent from "@/components/FormEvent";
import Contador from "@/components/Contador";
import UpdateObjectState from "@/components/UpdateObjectState";
import { TodoList } from "@/components/TodoList";
import Clock from "@/components/Clock";

export default function Page() {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "medium",
    hour12: false,
  }).format();

  const hour = new Date().getHours();

  //uma forma de mostrar a frase
  // let greeting = '';

  // if(hour >= 0 && hour < 12) {
  //   greeting = 'Bom dia 😁';
  // } else if (hour >=12 && hour < 18) {
  //   greeting = 'Boa tarde 🤓';
  // } else if (hour >= 18 && hour <= 23) {
  //   greeting = 'Boa noite 😴';
  // }

  const handleButton1 = () => alert("clicou no botão 1");
  const handleButton2 = () => alert("clicou no botão 2");
  const handleButton3 = () => alert("clicou no botão 3");

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
        <Clock />
        {/* uma forma de mostrar a frase */}
        {/* {greeting} */}
        {/* <div className="text-9xl">{fullTime}</div>
        <div className="text-5xl font-bold">
          {hour >= 0 && hour < 12 && "Bom dia 😁"}
          {hour >= 12 && hour < 18 && "Boa tarde 🤓"}
          {hour >= 18 && hour <= 23 && "Boa noite 😴"}
        </div> */}
        <div>
          <EmojiRating rate={3} />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="container mx-auto">
        <h1 className="text-5xl mb-5">Lista de estudantes</h1>
        <StudentTable students={students} />
        <BtnEvent />
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <CustomButton label="Clique 1" onClick={handleButton1} />
        <CustomButton label="Clique 2" onClick={handleButton2} />
        <CustomButton label="Clique 3" onClick={handleButton3} />
      </div>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-900">
        <FormEvent />
      </div>
      <Contador />

      <UpdateObjectState />

      <TodoList />
    </>
  );
}
