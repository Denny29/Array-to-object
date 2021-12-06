import "./styles.css";

function printNamesarr(name) {
  return (
    <ul>
      <li>{name[0]}</li>
      <li>{name[1]}</li>
    </ul>
  );
}
function printNamesobj(name) {
  return (
    <ul>
      <li>{name.firstName}</li>
      <li>{name.lastName}</li>
    </ul>
  );
}

export default function App() {
  let people = [
    ["Ariana", "Grande"],
    ["Bruno", "Mars"],
    ["Kendrick", "Lamar"],
    ["Doja", "Cat"]
  ];

  let people2 = [
    { firstName: "Ariana", lastName: "Grande" },
    { firstName: "Bruno", lastName: "Mars" },
    { firstName: "Kendrick", lastName: "Lamar" },
    { firstName: "Doja", lastName: "Cat" }
  ];

  // TODO 1: print out bruno mars's name by referencing people
  // TODO 2: change people to be an array of objects
  // TODO 3: print out bruno mars's name by referencing people

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{people2.map(printNamesobj)}</div>
      <div>{people.map(printNamesarr)}</div>
    </div>
  );
}
