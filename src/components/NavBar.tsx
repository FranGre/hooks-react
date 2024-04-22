import { Link } from "react-router-dom"
import { routes } from '../router'

export default function NavBar() {
    const routesFiltered = routes.filter(route => route.path !== '*')

    return (
        <>
            <nav className="flex pb-6">
                <ul className="flex">
                    {routesFiltered.map(route =>
                        <li key={route.path} className="py-2 px-3"><Link to={route.path}>{route.name}</Link></li>
                    )}
                </ul>
            </nav>
        </>
    )
}