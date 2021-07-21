import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [sara, setSara] = useState([]);
  const getFabrique = () => {
    axios
      .get("/app/fabrique/get")
      .then((res) => {
        console.log("nekhdem", res.data);
        var a = res.data;
        setSara(a);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getFabrique();
  }, []);
  return (
    <div className="App">
      {sara.map((el) => (
        <div>
          <h1>{el.nom}</h1>
          <h2>{el.formateur}</h2>
          <h3>{el.apprenants}</h3>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
