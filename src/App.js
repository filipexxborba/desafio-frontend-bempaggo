import Form from './Components/Formulario/Form/Form';
import Header from './Components/Headers/Header/Header';
import Intro from './Components/Headers/Intro/Intro';
import { GlobalStorage } from './Context/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Header />
        <Intro title="Pacote de Adesivos" description="Preencha o formulário abaixo com as quantidades desejadas e clique em enviar para prosseguir com o pedido." />
        <Form />
      </GlobalStorage>
    </div>
  );
}

export default App;
