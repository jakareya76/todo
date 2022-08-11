import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AiTwotoneDelete } from "react-icons/ai";
import GetLocalStorage from "./GetLocalStorage";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(GetLocalStorage());

  const addTodo = () => {
    if (!input) {
      toast.error("Please Enter A Value");
    } else {
      setTodo((prevState) => {
        return [...prevState, input];
      });
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodo((prevState) => {
      return prevState.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center">
      <div className="w-[350px] h-[450px] bg-zinc-800 rounded-sm">
        <h1 className="text-center py-5 text-3xl font-bold text-zinc-300 underline font-mono">
          Todo App
        </h1>
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter A Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 w-[70%] bg-transparent border-b-2 border-zinc-300 text-zinc-300 outline-none font-mono placeholder:text-zinc-300"
          />
          <button
            onClick={addTodo}
            className="bg-zinc-700 text-zinc-300 pt-1 pb-[10px] px-4 mx-2 text-3xl font-bold rounded-sm"
          >
            +
          </button>
        </div>
        <div className="w-full p-5">
          <ul className="flex flex-col">
            {todo.map((curElem, idx) => {
              return (
                <div className="flex items-center" key={idx}>
                  <AiTwotoneDelete
                    size={20}
                    className="text-zinc-500 mx-1 cursor-pointer hover:text-red-500"
                    onClick={() => deleteTodo(idx)}
                  />
                  <li className="text-zinc-300 font-mono font-semibold my-1">
                    {curElem}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
