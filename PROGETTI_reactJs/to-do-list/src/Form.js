import React, { useEffect, useState } from "react";
import Todo from "./Todo";
const Form = () => {
  const [toDo, setTodo] = useState({
    id: new Date(Date.now()).getTime().toString(),
    todo: "",
    completed: false,
  });

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todo");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [isCheck, setIsCheck] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(toDo);
    if (toDo.todo) {
      setTodos([...todos, { ...toDo }]);

      setTodo({
        id: new Date(Date.now()).getTime().toString(),
        todo: "",
        completed: false,
      });
    } else alert("inserisci una sbatti");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setTodo({ ...toDo, [name]: value });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((el) => el.id !== id));
  };
  const checkTodo = (id) => {
    console.log(isCheck);

    setIsCheck(!isCheck);
  };
  return (
    <>
      <form
        className="bg-dark shadow m-auto mb-3 col-md-4 p-3"
        onSubmit={submitHandler}
      >
        <h3
          className="mb-3"
          style={{
            textAlign: "center",
            fontWeight: "400",
            color: "whitesmoke",
          }}
        >
          Add some <b style={{ fontWeight: "600" }}>sbatti®</b> to do
        </h3>
        <div className="form-group col-sm-9 d-flex align-items-center justify-content-evenly">
          <input
            type="text"
            name="todo"
            className="col-4 p-1"
            value={toDo.todo}
            onChange={changeHandler}
          ></input>
          <button
            type="submit"
            className="btn btn-outline-primary col-6"
            onClick={submitHandler}
          >
            Add sbatti®
          </button>
        </div>
      </form>
      {todos.length === 0 ? (
        <div className="container d-flex align-items-center m-3 justify-content-center">
          <p>
            Non hai <b>sbatti®</b> 😎
          </p>
        </div>
      ) : (
        <>
          <Todo
            todo={todos}
            key={toDo.id}
            removeTodo={removeTodo}
            checkTodo={checkTodo}
            isCheck={isCheck}
          />
          <div className="d-flex align-items-center justify-content-center">
            <button
              onClick={() => setTodos([])}
              className="btn btn-outline-danger m-2"
            >
              Elimina tutti gli sbatti®
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
