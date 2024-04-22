import H1 from "./H1"
import H2 from "./H2"
import H3 from "./H3"
import Article from "./Article"
import P from "./P"
import Callout from "./Callout"
import { CopyBlock, atomOneDark } from 'react-code-blocks'

export default function UseMemo() {

    return (
        <>
            <H1 text='useMemo()' />
            <Article>
                <div className="pb-12">
                    <P text='Permite memorizar el resultado de una función y la vuelve a ejecutar si el valor de las dependencias han cambiado. Sinó, guarda la función en memoria y así ya no la vuelve a ejecutar.' />
                    < P text='Esto es útil cuando tienes una función costosa en términos de rendimiento y quieres evitar que se ejecute nuevamente en cada renderizado, siempre que sus dependencias permanezcan iguales.' />
                </div>

                <H2 text='Parámetros'></H2>
                <div className="pb-12">
                    <ul>
                        <li>función anónima - dentro todo el js / ts</li>
                        <li>array de dependencias</li>
                    </ul>
                </div>

                <H2 text='Consideraciones'></H2>
                <div className="pb-12">
                    <P text='Array de dependencias obligatorio'/>
                    <P text='Cada vez que se modifique el valor de las varibales del array de dependencias, 
                    automáticamente se volverá a ejecutar dicho useMemo() y lo de dentro de él.'/>
                </div>

                <H2 text='Ejemplos'></H2>
                <H3 text='Sin useMemo()' />
                <div className="pb-12">
                    <P text='Os propongo realizar varias veces la misma operación con los mismos numbers, vereis en la consola que se vuelve a llamar a calculate.' />
                    <Callout text='Esto es innecesario. Ya que si los valores de numbers no han cambiado, el resultado es el mismo. Por lo tanto no tiene porque volver a ejecutarse calculate.' />
                    <P text='Esto es un problema de rendimiento' />
                    <CopyBlock
                        customStyle={{
                            marginTop: '25px',
                            overflowY: 'scroll',
                            borderRadius: '15px',
                        }}
                        codeBlock={true}
                        language='tsx'
                        showLineNumbers={false}
                        theme={atomOneDark}
                        text={`
        // App.tsx
        import "./App.css"
        import { useState } from "react"

        export default function App() {
            const [number1, setNumber1] = useState(0)
            const [number2, setNumber2] = useState(0)
            const [result, setResult] = useState(0)

            const calculate = () => {
                console.log("entra en calculate")
                setResult(number1 + number2)
            }

            return (
                <div>
                    <h1>useMemo()</h1>

                    <input
                        type="number"
                        value={number1}
                        onChange={(e) => setNumber1(parseInt(e.target.value))}
                    />
                    
                    <input
                        type="number"
                        value={number2}
                        onChange={(e) => setNumber2(parseInt(e.target.value))}
                    />

                    <button onClick={calculate}>calculate sum</button>

                    <small>Result: {result}</small>
                </div>
            )
        }
                       `} />
                </div>

                <H3 text='Usando useMemo()' />
                <div className="pb-12">
                    <P text='Os propongo realizar varias veces la misma operación con los mismos numbers, vereis en la consola que ya NO se vuelve a llamar a calculate.' />
                    <Callout text='Ya que como el resultado es el mismo, ya no tiene la necesidad de volver a ejecutar calculate.' />
                    <P text='Solucionado el problema de rendimiento' />
                    <CopyBlock
                        customStyle={{
                            marginTop: '25px',
                            overflowY: 'scroll',
                            borderRadius: '15px',
                        }}
                        codeBlock={true}
                        language='tsx'
                        showLineNumbers={false}
                        theme={atomOneDark}
                        text={`
        // App.tsx
        import "./App.css"
        import { useState, useMemo } from "react"

        export default function App() {
            const [number1, setNumber1] = useState(0)
            const [number2, setNumber2] = useState(0)
            const [result, setResult] = useState(0)

            const calculate = useMemo(() => {
                console.log("entra en calculate")
                setResult(number1 + number2)
            }, [number1, number2])

            return (
                <div>
                    <h1>useMemo()</h1>

                    <input
                        type="number"
                        value={number1}
                        onChange={(e) => setNumber1(parseInt(e.target.value))}
                    />
                    
                    <input
                        type="number"
                        value={number2}
                        onChange={(e) => setNumber2(parseInt(e.target.value))}
                    />

                    <button onClick={() => calculate}>calculate sum</button>

                    <small>Result: {result}</small>
                </div>
            )
        }
                       `} />
                </div>


            </Article>
        </>
    )
}