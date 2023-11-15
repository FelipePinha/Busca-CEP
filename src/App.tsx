import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Output } from './components/Output/Output';
import Truck from './images/Caminhao.png';

import { LocationType } from './types/locationTypes';
import './styles/app.scss';

function App() {
    const [location, setLocation] = useState<LocationType>();

    return (
        <div className="app-container">
            <div className="wrapper">
                <header className="title-container">
                    <h1>Busca Cep</h1>
                    <p>Encontre endereços em segundos!</p>
                </header>
                <Form setLocation={setLocation} />
                <Output location={location} />
                <img src={Truck} alt="caminhão" />
            </div>
        </div>
    );
}

export default App;
