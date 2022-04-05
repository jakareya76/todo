import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
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
    <div className="bg-gray-100 w-full h-screen grid place-items-center">
      <div className="bg-white w-72 sm:w-80 h-96 shadow-xl rounded-md">
        <h1 className="text-center my-5 text-2xl font-bold text-blue-400">
          Todo App
        </h1>

        <div className="flex items-center justify-center">
          <input
            className="border-b-2 outline-none sm:py-2 sm:px-4 mr-1"
            type="text"
            placeholder="Enter A Item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="text-4xl" onClick={addTodo}>
            <MdOutlineAddCircle className="text-blue-500 hover:text-green-600" />
          </button>
        </div>

        <ol className="flex flex-col ml-8 mt-2">
          {todo.map((curElem, index) => {
            return (
              <div className="flex items-center mt-2" key={index}>
                <MdDelete
                  className="text-2xl cursor-pointer hover:text-red-500"
                  onClick={() => deleteTodo(index)}
                />
                <li className="text-lg font-semibold">{curElem}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
