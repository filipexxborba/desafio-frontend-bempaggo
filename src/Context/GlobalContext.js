import React from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = React.useState(0);

  const labelsData = [
    {
      title: "Adesivo React",
      description:
        "Sticker em Vinil, impresso em alta resolução. Ideal para notebooks e computadores.",
      specifications: [
        "Impermeável e proteção UV",
        "Impresso em alta resolução",
        "Ótima durabilidade",
      ],
      image_url: 'https://www.stickersdevs.com.br/wp-content/uploads/2022/01/react-adesivo-sticker-600x600.png'
    },
    {
      title: "Adesivo Vue",
      description:
        "Sticker em Vinil, impresso em alta resolução. Ideal para notebooks e computadores.",
      specifications: [
        "Impermeável e proteção UV",
        "Impresso em alta resolução",
        "Ótima durabilidade",
      ],
      image_url: 'https://www.stickersdevs.com.br/wp-content/uploads/2022/01/vuejs-adesivo-sticker-600x600.png'
    },
    {
      title: "Adesivo Angular",
      description:
        "Sticker em Vinil, impresso em alta resolução. Ideal para notebooks e computadores.",
      specifications: [
        "Impermeável e proteção UV",
        "Impresso em alta resolução",
        "Ótima durabilidade",
        
      ],
      image_url: 'https://www.stickersdevs.com.br/wp-content/uploads/2015/03/angular-stickers-adesivo.png'
    },
  ];

  const orderData = [];
  const verifyAndManipulateOrder = (label, quantity) => {
    const currentLabel = orderData.indexOf(label);
    if(currentLabel !== -1){
      orderData[currentLabel].quantity = quantity;
    }else{
      orderData.push({label: label, quantity: quantity})
    }
  }

  return <GlobalContext.Provider value={{
    labelsData,
    submitButtonIsDisabled,
    setSubmitButtonIsDisabled,
    orderData
  }}>{children}</GlobalContext.Provider>;
};
