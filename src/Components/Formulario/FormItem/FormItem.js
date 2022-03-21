import React from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./FormItem.css";

const FormItem = ({ adesivo }) => {
  const { submitButtonIsDisabled, setSubmitButtonIsDisabled, orderData } = React.useContext(GlobalContext);
  const { title, description, specifications, image_url } = adesivo;
  let [quantity, setQuantity] = React.useState(0);

  const handleClickButton = (event, opt) => {
    event.preventDefault();
    if (opt === 1) {
      setQuantity(Number(quantity) - 1);
      setSubmitButtonIsDisabled(Number(submitButtonIsDisabled) - 1);
    }
    if (opt === 2) {
      setQuantity(Number(quantity) + 1);
      setSubmitButtonIsDisabled(Number(submitButtonIsDisabled) + 1);
    }
  };

  return (
    <section className="form__item">
      <div className="form__item-image">
        <img src={image_url} />
      </div>
      <div className="form__item-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="form__item-inputs">
          <button onClick={(event) => handleClickButton(event, 1)} disabled={quantity === 0}>-</button>
          <input type="number" min="0" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
          <button onClick={(event) => handleClickButton(event, 2)}>+</button>
        </div>
        <ul className="form__item__ul">
          {specifications.map((specification, index) => (
            <li className="form__item__ul-item" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
              </svg>
              <p>{specification}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormItem;
