import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import NameForm from "./PersonForm";
import NameList from "./NameList";

function LiftingState() {
  const initialState = [
    { id: uuidv4(), name: "Jønke" },
    { id: uuidv4(), name: "Fehår" },
    { id: uuidv4(), name: "Blondie" },
  ];

  const [names, setNames] = useState(initialState);
  const [newName, setNewName] = useState({ id: "", name: "" });

  const addName = (name) => {
    // hvis name.id er tomt
    if (name.id === "") {
      // gener et nyt ID og push til names arrayet.
      name.id = uuidv4();
      names.push(name);
    } else {
      //hvis id != "", så er det et eksiterende name. Find det og ændre det
      let nameToEdit = names.find((n) => n.id === name.id);
      nameToEdit.name = name.name;
    }
    // opdater vores state med den nye Array
    setNames([...names]);
    // Gør vores component klar til at modtage et nyt name.
    setNewName({ id: "", name: "" });
  };

  const removeName = (name) => {
    names.splice(name);
    setNames([...names]);
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>
      <div className="row">
        <div className="col-6 allTodos">
          <NameList names={names} removeName={removeName} />
        </div>
        <div className="col-5 new-todo">
          <NameForm addName={addName} nextName={newName} />
        </div>
      </div>
    </div>
  );
}

export default LiftingState;
