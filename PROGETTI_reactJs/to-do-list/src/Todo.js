import React from "react";

const Todo = ({ todo, removeTodo, checkTodo, isCheck }) => {
    console.log(todo)
   
  return ( 
    <div className=" d-flex flex-column justify-content-center  align-items-center">
      {todo.map((el) => {
          
        return (
          <div
            key={el.id}
            style={{ backgroundColor: "#dfdff958", borderRadius: '5px'}}
            className="shadow-sm container  p-2 col-6 d-flex justify-content-between m-2"
          >
            <b style={{textDecoration: isCheck ? 'line-through': '' }} className="p-1">{el.todo}</b>
            <div className="d-flex justify-content-beetwen">
              <button onClick={()=>checkTodo(el.id)} className="btn btn-outline-primary mx-2">V</button>
              <button onClick={()=>removeTodo(el.id)} className="btn btn-outline-danger">X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
