import s from "./Authorization.module.scss"
import { useContext, useState } from "react";
import AuthService from "../../controller/http/service/Auth"
import { parseAccess } from "../../usecase/token/token";
import AppContext from "../../AppContext";
import { useNavigate } from "react-router-dom";


const Autorization = () => {
    const { setUser, setIsAuth } = useContext(AppContext);
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitAction = (e) => {
        e.preventDefault()
    }
    const submit = async () => {
        var res = await AuthService.login(login, password);

        var code = res.data.code;
        var message = res.data.message;
        
        if (code == 1) {
            localStorage.setItem("access", message);
            var user = parseAccess(message);
            console.log(user);
            setUser(user);
            setIsAuth(true);
            navigate('/home');
            return;
        }
    }

    return(
        <div className={s.wrapper}>
            <div className={s.auto}>
                <div className={s.block}>
                    <form onSubmit={submitAction}>
                        <h2>Авторизация</h2>
                        <span id={s.label}>Логин</span>
                        <input type="text" value={login} onChange={e => setLogin(e.target.value)} ></input>
                        <span id={s.label}>Пароль</span>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                        <span id={s.recover}>Забыли пароль?</span>
                        <div id={s.login}>
                            <button onClick={submit}>Войти</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Autorization;