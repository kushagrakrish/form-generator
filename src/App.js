import React from "react";
import FormGenerator from "./components/FormGenerator";
import Data from "./components/Data.json";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Submitted");
  };
  return (
    <div className='App'>
      <FormGenerator formData={Data} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
