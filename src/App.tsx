import "./App.css";
import React from "react";
import Form from "./componets/Form/Form";
import Card from "./componets/Card/Card";
import { FormData } from "./interfaces";
import { Box } from "@mui/material";

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

  const ContainerStyle = {
    display: "flex",
    width: "1350px",
    flexDirection: "row",
  };
  const BoxFormStyle = {
    marginRight: "300px",
    marginLeft: "120px",
  };

  return (
    <Box sx={ContainerStyle}>
      <Box sx={BoxFormStyle}>
        <Form onSubmit={handleSubmit} />
      </Box>
      <Box>
        {submittedData.map((data, index) => (
          <Card key={index} data={data} onDelete={() => handleDelete(index)} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
