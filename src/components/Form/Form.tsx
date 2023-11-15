import { useState, ChangeEvent, FormEvent } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { LocationType } from '../../types/locationTypes';
import './_Form.scss';
interface FormProps {
    setLocation: (data: LocationType) => void;
}

export const Form = ({ setLocation }: FormProps) => {
    const [cep, setCep] = useState('');
    const [error, setError] = useState(false);

    const handleChangeCep = (e: ChangeEvent<HTMLInputElement>) => {
        setCep(e.target.value);
    };

    const handleCepRequest = async (e: FormEvent) => {
        e.preventDefault();

        if (cep === '') {
            setError(true);
            return;
        }

        setError(false);
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setLocation(data);
    };

    return (
        <form onSubmit={handleCepRequest}>
            <input onChange={handleChangeCep} value={cep} type="text" placeholder="insira um cep" />
            <button type="submit">
                <MagnifyingGlass size={30} />
            </button>
            <span className="error">{error && 'O campo deve ser preenchido'}</span>
        </form>
    );
};
