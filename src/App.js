import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const dictionaryAPI = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeanings(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.clear();
    dictionaryAPI();
  }, []);

  return (
    <div className="App" style={{ height: "100vh", background: "#282c34" }}>
      <Container maxWidth="md">Dictionary</Container>
    </div>
  );
}

export default App;
