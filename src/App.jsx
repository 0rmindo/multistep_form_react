import './App.css';

//Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi"

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//Hooks
import { useForm } from './hooks/useForm';
import Steps from './components/Steps';
import { useState } from 'react';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  Comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandle = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandle={updateFieldHandle} />, 
    <ReviewForm data={data} updateFieldHandle={updateFieldHandle} />, 
    <Thanks data={data} />];

  const {currentStep, currentComponent, changeStep, isLastStap, isFristStap} = useForm(formComponents);


  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário a baixo para avaliar o produto</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFristStap && (
                <button type="button" onClick={() => changeStep(currentStep-1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              )}
              {!isLastStap ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ):(
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
