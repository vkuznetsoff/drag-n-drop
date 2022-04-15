
import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <div className="navContainer">
            <NavLink to={'/cards'} className="navItem">Cards</NavLink>
            <NavLink to={'/boards'} className="navItem">Boards</NavLink>
            <NavLink to={'/react-dnd'} className="navItem">React-DND</NavLink>

            
        </div>
    )
}

export default Nav