import './calculadoraIMC.css';
import { useState } from 'react';

// function calculaIMC(altura, peso) {
//     return peso / (altura * altura);
// }

const Calculadora = () => {
    
    let [height, setAltura] = useState(0);
    let [weight, setPeso] = useState(0);
    let [imc, setIMC] = useState('');

    const calculaIMC = () => {
        const resultadoIMC = (weight / (height * height)).toFixed(2);
        if (resultadoIMC < 18.5 && resultadoIMC > 0) {
            return (
                `Seu IMC é ${resultadoIMC} e você está abaixo do peso!`
            )
        } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            return (
                `Seu IMC é ${resultadoIMC} e você está com o peso normal!`
            )
        } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            return (
                `Seu IMC é ${resultadoIMC} e você está com pré-obesidade!`
            )
        } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9 ) {
            return (
                `Seu IMC é ${resultadoIMC} e você está com obesidade grau 1!`
            )
        }  else if (resultadoIMC >= 35 && resultadoIMC <= 39.9 ) {
            return (
                `Seu IMC é ${resultadoIMC} e você está com obesidade grau 2!`
            )
        } else if (resultadoIMC >= 40 ) {
            return (
                `Seu IMC é ${resultadoIMC} e você está com obesidade grau 3!`
            )
        } else if (weight > 300 && height > 300) {
            return (
                'Você não digitou valores válidos, tente novamente!'
                
            )
        } else {
            return (
                'Você não digitou valores válidos, tente novamente!'
            )
        }
    }
    return (
        <main>
            <div className="container">
                <section className='form'>
                    <form>
                        <div className='form__group'>
                            <label className='label' htmlFor="height">Digite a sua Altura</label>
                            <input className='input' id='height' type="number" placeholder="Digite aqui" onBlur={({ target }) => setAltura(parseFloat(target.value))} />
                            <p><small className='text__tooltip'>Exemplo: 1.80</small></p>
                        </div>
                        <div className='form__group'>
                            <label className='label' htmlFor="weight">Digite o seu Peso</label>
                            <input className='input' id='weight' type="number" placeholder='Digite aqui' onBlur={({ target }) => setPeso(parseFloat(target.value))} />
                            <p><small className='text__tooltip'>Exemplo: 95</small></p>
                        </div>
                        <div className='form__group'>
                            <button className='btn' type='button' onClick={(e)=> setIMC(calculaIMC(e))}>Calcular</button>
                        </div>
                    </form>
                    <p className='text'>{imc}</p>
                </section>
                
                <section className='description'>
                    <p className='text'>De acordo com a Organização Mundial da Saúde, a tabela IMC é a seguinte:</p>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>IMC (kg/m²)</th>
                                <th>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menor que 18.5</td>
                                <td>Abaixo do peso</td>
                            </tr>
                            <tr>
                                <td>Entre 18.5 e 24.9</td>
                                <td>Peso normal</td>
                            </tr>
                            <tr>
                                <td>Entre 25.0 e 29.9</td>
                                <td>Pré-obesidade</td>
                            </tr>
                            <tr>
                                <td>Entre 30.0 e 34.9</td>
                                <td>Obesidade Grau 1</td>
                            </tr>
                            <tr>
                                <td>Entre 35.0 e 39.9</td>
                                <td>Obesidade Grau 2</td>
                            </tr>
                            <tr>
                                <td>Acima de 40</td>
                                <td>Obesidade Grau 3</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text'>Nota: o cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular, como é o caso de alguns atletas, podem apresentar um IMC acima do normal. O ideal é consultar um nutricionista para fazer uma avaliação mais detalhada.</p>
                </section>
            </div>
        </main>
    )
}

export default Calculadora;