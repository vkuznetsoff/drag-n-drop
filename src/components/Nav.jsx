
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <NavLink to={'/cards'} >Cards</NavLink>
           <NavLink to={'/boards'} >Boards</NavLink>

            
        </div>
    )
}

export default Nav