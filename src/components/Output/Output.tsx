import { LocationType } from '../../types/locationTypes';
import HappyFace from '../../images/happy-face.png';
import './_Output.scss';

interface OutputProps {
    location: LocationType;
}

export const Output = ({ location }: OutputProps) => {
    console.log(location);

    return (
        <section className="output">
            {!location && (
                <div className="wait-message">
                    <img src={HappyFace} alt="carinha feliz" />
                    <p>Procura ai...</p>
                </div>
            )}

            {location && (
                <>
                    <p>Logadouro: {location.logradouro}</p>
                    <p>Bairro: {location.bairro}</p>
                    <p>Cidade: {location.localidade}</p>
                </>
            )}
        </section>
    );
};
