import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <section
      className={`section-center ${!darkMode ? "light-mode" : "dark-mode"}`}
    >
      <div className="container">
        <button className="btn" onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? "DARK 🌙 MODE" : "LIGHT 🌞 MODE"}
        </button>

        {data.map((article) => (
          <Articolo key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}

export default App;
