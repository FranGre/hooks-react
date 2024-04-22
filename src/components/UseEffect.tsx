import H1 from "./H1"
import H2 from "./H2"
import H3 from "./H3"
import Article from "./Article"
import P from "./P"
import Callout from "./Callout"
import { CopyBlock, atomOneDark } from 'react-code-blocks'


export default function UseEffect() {
    return (
        <>
            <H1 text='useEffect()' />
            <Article>
                <div className="pb-12">
                    <P text="Es un hook muy usado, se ejecuta en cada renderizado del componente, incluido en el primer renderizado del componente." />
                </div>
                <H2 text='Parámetros' />
                <div className="pb-12">
                    <P text="Recibe 2 parámetros" />
                    <ul className="pl-12">
                        <li><P text="función anónima -> dentro añades todo el js / ts que quieras" /></li>
                        <li><P text="array de dependencias -> más info abajo" /></li>
                    </ul>
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
        import './App.css'
        import { useEffect } from 'react'

        function App() {

            useEffect(() => {

            }, [])

            return (
                <h1>useEffect()</h1>
            )
        }

        export default App
                        `} />
                </div>

                <H2 text='Consideraciones' />
                <div className="pb-12">
                    <P text='1ro se declara el useEffect() luego el resto de funciones' />
                    <P text='No puedes usar useEffect dentro de un método, pero si puedes usar métodos dentro de useEffect' />
                    <P text='Cuando pasas variables al array de dependencias, estás diciendo: 
                    "Hey React, si alguna de estas variables cambia su valor, 
                    quiero que vuelvas a ejecutar aquellos useEffect que tienen
                    en su array de dependencias estas variables que han sido actualizadas.'/>
                    <P text='Podemos tener todos los useEffect que queramos' />
                </div>

                <H2 text='Usos' />
                <div className="pb-12">
                    <P text='Llamadas a APIs' />
                    <P text='Actualización del DOM' />
                    <P text='Efectos secundarios una vez el componente haya sido montado, actulizado o desmontado' />
                </div>

                <H2 text='Ejemplos' />
                <H3 text='Array sin dependencias' />
                <div className="pb-12">
                    <P text='Ideal para cargar info de una APi. Ya que el useEffect solo se ejecutará cada vez que entremos de nuevo al componente.' />
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
        import './App.css'
        import { useEffect, useState } from "react"
                        
        export default function App() {
                        
            const [counter, setCounter] = useState(0)
                    
            useEffect(() => {
                alert('renderizado inicial')
            },[])
                        
            function sum() {
                setCounter(counter + 1)
            }
                        
            function rest() {
                setCounter(counter - 1)
            }
                        
            return (
                <div>
                    <h1>useEffect() sin dependencias</h1>
                    <small>{counter}</small>
                        
                    <button onClick={sum}>+</button>
                    <button onClick={rest}>-</button>
                </div>
            )
        }    
                        `} />
                </div>

                <H3 text='Array con dependencias' />
                <div className="pb-12">
                    <P text='Cada vez que se cargue de nuevo el componente, cargará el useEffect() sin dependencias y cuando se modifique el valor de counter, solo va a ejecutar el useEffect() que tiene como pendencias la variable counter.' />
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
        import './App.css'
        import { useEffect, useState } from "react"
                        
        export default function App() {
                        
            const [counter, setCounter] = useState(0)
            
            useEffect(() => {
                alert('renderizado inicial')
            }, [])

            useEffect(() => {
                alert(counter)
            }, [counter])
                        
            function sum() {
                setCounter(counter + 1)
            }
                        
            function rest() {
                setCounter(counter - 1)
            }
                        
            return (
                <div>
                    <h1>useEffect() con dependencias</h1>
                    <small>{counter}</small>
                        
                    <button onClick={sum}>+</button>
                    <button onClick={rest}>-</button>
                </div>
            )
        }    
                        `} />
                </div>

                <H3 text='Array con dependencias totales' />
                <div>
                    <P text='Si decidimos no poner el array de dependencias, quiere decir que el useEffect va a depender de cualquier cambio que se haga en el componente. Por lo tanto, a mínimo cambio, se me ejecutará el useEffect()' />
                    <Callout text='Aviso, casi nunca se debería usar sin array, ya que suele provocar un loop infinito' />
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
        import './App.css'
        import { useEffect, useState } from "react"
                        
        export default function App() {
                        
            const [counter, setCounter] = useState(0)

            useEffect(() => {
                alert(counter)
            })
                        
            function sum() {
                setCounter(counter + 1)
            }
                        
            function rest() {
                setCounter(counter - 1)
            }
                        
            return (
                <div>
                    <h1>useEffect() con dependencias totales</h1>
                    <small>{counter}</small>
                        
                    <button onClick={sum}>+</button>
                    <button onClick={rest}>-</button>
                </div>
            )
        }    
                        `} />
                </div>
            </Article>
        </>
    )
}