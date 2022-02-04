import React from "react";

const List = (props) => {
  console.log(props);
  return (
    <ul className="user-list">
      {props.data.map((person) => {
        return (
          <li key={person.id}>
            <Person {...person} deleteItem={props.deleteItem} />
          </li>
        );
      })}
    </ul>
  );
};
const Person = ({ id, img, nome, stato, deleteItem }) => {
  return (
    <article>
      <img src={img} alt="" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn-delete" onClick={() => deleteItem(id)}>
            𝗫
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
