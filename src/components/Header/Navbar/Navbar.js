import s from "./Navbar.module.scss"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className={s.navbar}>
            <ul>
                <li>
                    <NavLink className={s.navItem} style={({ isActive }) => ({
                        color: isActive ? '#3A84F7' : '#222222',
                        })} to="home">
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink className={s.navItem} style={({ isActive }) => ({
                        color: isActive ? '#3A84F7' : '#222222',
                        })} to="tasks">
                        Задания
                    </NavLink>
                </li>
                <li>
                    <NavLink className={s.navItem} style={({ isActive }) => ({
                        color: isActive ? '#3A84F7' : '#222222',
                        })} to="market">
                        Маркет
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;