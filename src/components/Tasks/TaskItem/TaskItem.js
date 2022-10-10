import s from "./TaskItem.module.scss";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../AppContext";
import { useContext } from "react";

const TaskItem = (props) => {
    const navigate = useNavigate();

    const { setTitle,setInfo,setItem } = useContext(AppContext);

    const clickHandler= () => {
        navigate("/viewtask");
        setTitle(props.title);
        setInfo(props.info);
        setItem(props.item)
    }

    return (
        <div className={s.task} onClick={clickHandler}>
            <span id={s.header} >
                <b>{props.title}</b>
            </span>
            <p id={s.info}>
                {props.info}
            </p>
            <span id={s.price}>{props.price} <img src="diamond.png" id={s.icon}/></span>
            <span id={s.date}>{props.date}</span>
        </div>
    );
};

export default TaskItem;
