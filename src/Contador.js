import {useState} from 'react';

function Contador({valor, numero}) {

    const [conteo, setConteo] = useState(valor);

    const handleIncrease = () => {
        setConteo(conteo + 1);
    }

    const handleDecrease = () => {
        setConteo(conteo - 1);
    }

    const handleReset = () => {
        setConteo(valor);
    }
    
    return (
        <>
        <h1>Contador {numero}</h1> 
        <h2>{conteo}</h2>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>-</button>
        </>
    )
}

export default Contador
