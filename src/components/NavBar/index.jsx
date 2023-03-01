import "./navbar.css";
import CardWidget from "../CardWidget";

function NavBar () {
    return (
        <div className="menu">
            <ul className="lista">
                <li>
                    <button>Productos</button>
                </li>
                <li>
                    <button>Contacto</button>
                </li>
            </ul>
            <CardWidget />
        </div>
        
    )
}

export default NavBar;