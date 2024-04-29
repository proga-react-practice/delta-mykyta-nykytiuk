import React from "react";
import Form from "./componets/Form/Form";
import Card from "./componets/Card/Card";
import { FormData } from "./interfaces";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

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
    flexDirection: { sm: "row", xs: "column" },
    width: { sm: "1350px", xs: "100%" },
    justifyContent: { sm: "flex-start", xs: "center" },
    alignItems: { sm: "flex-start", xs: "center" },
    marginLeft: { sm: "0", xs: "12%" },
    marginTop: "50px",
    marginBottom: "50px",
    backgroundColor: "background.default",
  };

  const FormLayout = {
    marginRight: { sm: "300px", xs: "0" },
    marginLeft: { sm: "200px", xs: "0" },
    marginBottom: "30px",
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={ContainerStyle}>
        <Box sx={FormLayout}>
          <Form onSubmit={handleSubmit} />
        </Box>
        <Box>
          {submittedData.map((data, index) => (
            <Card
              key={index}
              data={data}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
