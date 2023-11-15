import { MagnifyingGlass } from '@phosphor-icons/react';
import './_Form.scss';

export const Form = () => {
    return (
        <form>
            <input type="number" placeholder="insira um cep" />
            <span>
                <MagnifyingGlass size={30} />
            </span>
        </form>
    );
};
