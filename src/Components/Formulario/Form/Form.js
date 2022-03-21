import React from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import FormItem from "../FormItem/FormItem";
import LoadingAnimation from "../../Utils/LoadingAnimation/LoadingAnimation";
import "./Form.css";

const Form = () => {
  const { labelsData, submitButtonIsDisabled } = React.useContext(GlobalContext);
  const [observations, setObservations] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const handleFormSubmit = async (event) => {
    // Essa parte do código foi para simular uma possível API ou um envio de um formulário para algum e-mail
    event.preventDefault();
    setIsSending(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSending(false);
    document.location.reload();
  }

  React.useEffect(() => {}, [labelsData]);
  return (
    <form className="container form" onSubmit={handleFormSubmit}>
      {labelsData.map((label, index) => (
        <FormItem key={index} adesivo={label} />
      ))}
      <h3>Ficou alguma dúvida? Existe alguma observação que você deseja inserir no pedido? </h3>
      <textarea value={observations} onChange={(event) => setObservations(event.target.value)}  />
      {!isSending ? <button type="submit" className="submit-button" disabled={submitButtonIsDisabled === 0}>Enviar</button> : <LoadingAnimation />}
    </form>
  );
};

export default Form;
