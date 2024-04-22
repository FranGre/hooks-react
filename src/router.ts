import { createElement } from 'react'
import Home from './components/Home'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseCallback from './components/UseCallback'
import Memo from './components/Memo'
import UseMemo from './components/UseMemo'
import UseReducer from './components/UseReducer'

interface Route {
    path: string;
    name: string;
    element: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', name: 'home', element: createElement(Home) },
    { path: '/useState', name: 'useState()', element: createElement(UseState) },
    { path: '/useEffect', name: 'useEffect()', element: createElement(UseEffect) },
    { path: '/useCallback', name: 'useCallback()', element: createElement(UseCallback) },
    { path: '/memo', name: 'memo', element: createElement(Memo) },
    { path: '/useMemo', name: 'useMemo()', element: createElement(UseMemo) },
    { path: '/useReducer', name: 'useReducer()', element: createElement(UseReducer) },
];
