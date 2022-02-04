import List from "./List";
import data from "./data";
import { useState } from "react";

const [...people] = data;
console.log(people);

function App() {
  const [people, setPeople] = useState(data);

  const deleteItem = (id) => {
    setPeople((oldPeople) => oldPeople.filter((item) => item.id !== id));
  };
  const reloadAllItem = () => {
    setPeople(data);
  };
  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--dark-blue)" }}>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} deleteItem={deleteItem} />
        </div>
        {
          <div className="btn-group">
            <button className="btn btn-reset" onClick={reloadAllItem}>
              {" "}
              Reload{" "}
            </button>

            <button className="btn btn-delete" onClick={() => setPeople([])}>
              {" "}
              Delete all
            </button>
          </div>
        }
      </div>
    </section>
  );
}

export default App;
