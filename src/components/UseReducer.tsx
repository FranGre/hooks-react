import H1 from "./H1"
import H2 from "./H2"
import Article from "./Article"
import P from "./P"


export default function UseReducer() {

    return (
        <>
            <H1 text='useReducer()' />

            <Article >
                <div className="pb-12">
                    <P text='Usado para manejar estados / variables complejas. useState() es usado estados imples, por ejemplo para los primitivos a pelo, objetos con un solo nivel de propiedades etc…' />
                    <P text='Pero cuando ya tenemos objetos con mas de un nivel de propiedades la cosa se complica un poco más. Para ello, react nos ofrece useReducer.' />
                </div>

                <H2 text='Parámetros' />
                <div>
                    <P text='reducer - funciones de nuestro estado' />
                    <P text='initalState - datos iniciales de nuestro estado' />
                </div>
            </Article>
        </>
    )
}