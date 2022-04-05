const GetLocalStorage = () => {
  const todo = localStorage.getItem("Todo");

  if (!todo) {
    return [];
  } else {
    return JSON.parse(todo);
  }
};

export default GetLocalStorage;
