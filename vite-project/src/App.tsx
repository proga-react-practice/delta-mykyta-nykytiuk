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

  function handleDelete(index: number) {
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  }

  return (
    <div id="container">
      <div id="formCar">
        <Form onSubmit={handleSubmit} />
      </div>
      <div id="cardCar">
        {submittedData.map((data, index) => (
          <Card key={index} data={data} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
