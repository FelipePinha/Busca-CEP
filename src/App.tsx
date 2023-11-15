import { Form } from './components/Form/Form';
import { Output } from './components/Output/Output';
import Truck from './images/Caminhao.png';
import './styles/app.scss';

function App() {
    return (
        <div className="app-container">
            <div className="wrapper">
                <header className="title-container">
                    <h1>Busca Cep</h1>
                    <p>Encontre endereços em segundos!</p>
                </header>
                <Form />
                <Output />
                <img src={Truck} alt="caminhão" />
            </div>
        </div>
    );
}

export default App;
