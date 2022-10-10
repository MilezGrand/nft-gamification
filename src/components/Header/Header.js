import s from "./Header.module.scss"
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import AppContext from "../../AppContext";
import Login from "./Profile/Login/Login";
import { useContext} from "react";

const Header = () => {
    const {isAuth} = useContext(AppContext);

    return(
        <div className={s.wrapper}>
            <div className={s.header}>
                <Navbar className={s.test}/>

                {isAuth ? <Profile/> : <Login/>}
                
            </div>
            
        </div>
    )
}

export default Header;