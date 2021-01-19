import React, { useState } from "react";
import "./styles.css";

const wilders = [
  { id: 1, name: "Miguel" },
  { id: 2, name: "Christophe" },
  { id: 3, name: "Benoit" }
];

export default function App() {
  const [search, setSearch] = useState("");
  // wilders dont le nom fait plus de 6 lettre
  // const result = wilders.filter((wilder) => wilder.name.length > 6);
  const result = wilders.filter((wilder) => {
    /*console.log("tout l'objet wilder", wilder);
    console.log("le nom du wilder", wilder.name);
    console.log(wilder.name.includes(search));
    */
    // console.log(wilder.name.toLowerCase(), "contient-il", search.toLowerCase(), "?");

    return wilder.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(result);
  return (
    <div className="App">
      <h1>Hello {search}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={(e) => setSearch(e.target.value)} />
      {result.map((wilder) => (
        <option key={wilder.id} value={wilder.id}>
          {wilder.name}
        </option>
      ))}
      {/* <button type="button" onClick={() => setSearch("salut")}>
        Change search
      </button> */}
    </div>
  );
}
