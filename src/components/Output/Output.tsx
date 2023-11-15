import { LocationType } from '../../types/locationTypes';
import HappyFace from '../../images/happy-face.png';
import SadFace from '../../images/sad-face.png';
import './_Output.scss';

interface OutputProps {
    location: LocationType | undefined;
}

export const Output = ({ location }: OutputProps) => {
    return (
        <section className="output">
            {!location && (
                <div className="message">
                    <img src={HappyFace} alt="carinha feliz" />
                    <p>Procura ai...</p>
                </div>
            )}

            {location && location.erro && (
                <div className="message">
                    <img src={SadFace} alt="carinha triste" />
                    <p>Cep não encontrado!</p>
                </div>
            )}

            {location && !location.erro && (
                <>
                    <p>Logadouro: {location.logradouro}</p>
                    <p>Bairro: {location.bairro}</p>
                    <p>Cidade: {location.localidade}</p>
                </>
            )}
        </section>
    );
};
