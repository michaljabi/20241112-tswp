import { useState } from 'react'
import { AppMyOwnHook } from './facade-my-own-hook/AppMyOwnHook'
import { AppWithHigherOrderComponent } from './proxy-higher-order-component/AppWithHigherOrderComponent'

const APPS = {
    PROXY: 'proxy',
    FACADE: 'facade',
}

// Przejście na strategy pattern
const componentStrategy = {
    [APPS.PROXY]: AppWithHigherOrderComponent,
    [APPS.FACADE]: AppMyOwnHook
}

export function App() {

    const [chosenApp, setChosenApp] = useState(APPS.PROXY)

    // Strategy, wbierz z obiektu prawidłowy komponent:
    // @ts-ignore
    const ComponentToRender = componentStrategy[chosenApp]

    return <>
        <main className="container">
            <nav className="my-6">
                <button className="button mr-3" onClick={() => setChosenApp(APPS.PROXY)}> Proxy Example </button>
                <button className="button" onClick={() => setChosenApp(APPS.FACADE)}> Facade Example </button>
            </nav>
            <ComponentToRender />
            {
                /*chosenApp === APPS.FACADE
                &&
                <AppMyOwnHook />*/
            }
            {
                /*chosenApp === APPS.PROXY
                &&
                <AppWithHigherOrderComponent />*/
            }
        </main>
    </>
}
