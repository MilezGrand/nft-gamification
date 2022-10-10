import s from "./Login.module.scss"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {navigate("authorization")}} id={s.login}>Войти</button>
        </div>
    );
};

export default Login;
