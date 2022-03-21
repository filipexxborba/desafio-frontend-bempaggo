import React from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./Form.css";
import FormItem from "../FormItem/FormItem";
import useForm from "../../../Hooks/useForm";

const Form = () => {
  const { labelsData, submitButtonIsDisabled } = React.useContext(GlobalContext);
  const [observations, setObservations] = React.useState("");

  React.useEffect(() => {}, [labelsData]);
  return (
    <form className="container form" onSubmit={useForm('data', 'nenhuma')}>
      {labelsData.map((label, index) => (
        <FormItem key={index} adesivo={label} />
      ))}
      <h3>Ficou alguma dúvida? Existe alguma observação que você deseja inserir no pedido? </h3>
      <textarea value={observations} onChange={(event) => setObservations(event.target.value)}  />
      <button type="submit" className="submit-button" disabled={submitButtonIsDisabled === 0}>Enviar</button>
    </form>
  );
};

export default Form;
