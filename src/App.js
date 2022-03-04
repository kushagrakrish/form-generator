import React from "react";
import FormGenerator from "./components/FormGenerator";
import Data from "./components/Data.json";
function App() {
  return (
    <div className='App'>
      <FormGenerator formData={Data} />
    </div>
  );
}

export default App;
