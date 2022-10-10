import s from "./Profile.module.scss"
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../controller/http/service/Auth";
import AppContext from "../../../AppContext";

const Profile = () => {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();
    const {setIsAuth} = useContext(AppContext);

    const handleClickNFT = () => {
        navigate("/mynft");
    }

    const handleClickLogin = () => {
        localStorage.removeItem("access");
        setIsAuth(false);
        AuthService.logout();
        navigate("/authorization");
    }

    const handleAddTask = () => {
        navigate("/addtask");
    }
    
    return(
        <div className={s.profile}>
            <div id={s.container} onClick={() =>{setIsShown(isShown => !isShown)}}>
                {isShown ? <div className={s.expander} >
                    <img src="expand.png" className={s.arrow}></img>
                </div> : <div className={s.expanderRev} >
                    <img src="expand.png" className={s.arrow}></img>
                </div>}
                
                <img src="avatar.jpg" className={s.avatar}/>
            </div>
            

            {isShown && (<div className={s.dropDown}>
                <span id={s.welcome}>Привет, <b>Артём!</b></span>
                <div id={s.points}>
                    <img src="diamond.png"></img>
                    <b>520</b>
                </div>
                <span id={s.progress}>Прогресс</span>
                <img src="progress.png" width="207px" height="19px" id={s.bar}></img>

                <button onClick={handleClickNFT}>Мои NFT</button>
                <button onClick={handleAddTask}>Добавить задание</button>
                <button onClick={handleClickLogin}>Выйти</button>
            </div>)}
        </div>
    )
}

export default Profile;