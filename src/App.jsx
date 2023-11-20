import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data/data.json";
import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  console.log(data);
  const jobCards = data.map((datum) => <Card key={datum.id} {...datum} />);

  return (
    <div className="app">
      <Header />
      <div className="container job-board">{jobCards}</div>
      <Button />
    </div>
  );
}

export default App;
