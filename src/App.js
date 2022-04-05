import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <Todo />
      <ToastContainer />
    </>
  );
};

export default App;
