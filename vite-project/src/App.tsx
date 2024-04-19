// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [submittedData, setSubmittedData] = React.useState<FormData[]>([]);
  function handleSubmit(formData: FormData) {
    console.log(formData);
    setSubmittedData([...submittedData, formData]);
  }

  return (
    <div id="container">
      <div id="formCar">
        <Form onSubmit={handleSubmit} />
      </div>
      <div id="cardCar">
        {submittedData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
