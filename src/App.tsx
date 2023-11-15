import { Form } from './components/Form/Form';
import { Output } from './components/Output/Output';
import './styles/app.scss';

function App() {
    return (
        <div className="app-container">
            <div className="container">
                <header className="title-container">
                    <h1>Busca Cep</h1>
                    <p>Encontre endereços em segundos!</p>
                </header>
                <Form />
                <Output />
            </div>
        </div>
    );
}

export default App;
