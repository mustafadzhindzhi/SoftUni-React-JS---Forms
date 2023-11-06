import { useRef } from 'react'
import './App.css'
import ControlledForm from './components/ConrollerForm.jsx'// import UncontrolledForm from './components/UncontrolledForm.jsx'

function App() {
  const formRef = useRef();

  return (
    <>
      <ControlledForm fromRef={formRef}/>

      <button 
      type="button" 
      onClick={(e)=> {
        e.preventDefault();
        formRef.current.submit()}
      } 
      >Submit</button>
    </>
  )
}

export default App
