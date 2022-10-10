import { useState } from "react";
import s from "./AddTask.module.scss";
import TaskService from "../../controller/http/service/TaskApi";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [rewardId, setRewadId] = useState();
    const [date, setDate] = useState();

    const navigate = useNavigate();

    const submitAction = (e) => {
        e.preventDefault()
    }

    const submit = async () => {
        var myDate = new Date(date)
        var deadline = Math.round(myDate.getTime() / 1000);

        var res = await TaskService.addTask(title, desc, deadline, rewardId);
        console.log(res)
        var code = res.data.code;
        if (code == 1) {
            navigate("/tasks");
        }
    }

    return (
        <div className={s.wrapper} onSubmit={submitAction}>
            <form className={s.addtask}>
                <h2>Добавить задание</h2>
                <input id={s.title} type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea id={s.description} type="text" placeholder="Текст задания" value={desc} onChange={e => setDesc(e.target.value)}/>
                <span>
                    <input id={s.date} type="date" value={date} onChange={e => setDate(e.target.value)}/>
                    <input id={s.reward} type="text" placeholder="Номер награды" value={rewardId} onChange={e => setRewadId(e.target.value)}/>
                </span>
                
                <button onClick={submit}>Добавить</button>
            </form>
        </div>
    );
};

export default AddTask;
