// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";

function App() {
  function handleSubmit(formData: FormData) {
    console.log(formData);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
