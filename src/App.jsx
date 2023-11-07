import ControlledForm from "./components/ConrollerFormRaw.jsx";
import "./App.css";
import { useRef } from "react";


function App() {
  const formRef = useRef();

  return (
    <>
      <ControlledForm formRef={formRef} />

      <button
        type="button"
        onClick={() => formRef.current.submit()}
      >
        Submit
      </button>
    </>
  )
}

export default App;
