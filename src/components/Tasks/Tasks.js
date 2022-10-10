import { useEffect, useState } from "react";
import TaskService from "../../controller/http/service/TaskApi";
import TaskItem from "./TaskItem/TaskItem";
import s from "./Tasks.module.scss";
import ItemService from "../../controller/http/service/Rewards";

const SORT_FROM_MAX = 0
const SORT_FROM_MIN = 1

const SortTasks = (filter, tasks) => {
    if (filter == SORT_FROM_MAX) {
        return (tasks.sort((a, b) => {
            if (a.Priority > b.Priority)
                return -1
            else if (a.Priority < b.Priority)
                return 1
            else return 0
        }))
    } else if (filter == SORT_FROM_MIN) {
        return (tasks.sort((a, b) => {
            if (a.Priority > b.Priority)
                return 1
            else if (a.Priority < b.Priority)
                return -1
            else return 0
        }))
    }
}

const Tasks = () => {    
    const [tasks, setTasks] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [curentFilter, setCurrentFilter] = useState(0)

    const FetchData = async () => {
        setLoading(true)

        var _tasks = await TaskService.getTasks();
        
        _tasks.map(async t => {
            var d = new Date(t.Deadline * 1000);
            t.Deadline = `${d.toLocaleDateString()} ${d.toLocaleTimeString().substr(0, 8)}`
        });

        setTasks(SortTasks(curentFilter, _tasks))
        setLoading(false)
    }

    useEffect(() => {
        FetchData();
    }, []);

    useEffect(() => {
        setTasks(SortTasks(curentFilter, tasks))
    }, [curentFilter])

    if (!isLoading) {
        return (
            <div className={s.wrapper}>
                <div className={s.search}>
                    <input type="text" placeholder="Поиск..."></input>
                    <img src="search.png" id={s.search}></img>
                </div>
    
                <div className={s.sort}>
                    <span id={s.sort}>Сортировка: </span>
                    <span id={s.sortCategory}> по важности</span>
                    <img src="arrow.png"></img>
                </div>
    
                <div className={s.tasks}>
                    {tasks.map((task) => (
                        <TaskItem
                            title={task.Title}
                            info={task.Description}
                            price={task.Reward}
                            date={task.Deadline}
                            item={task.Item}
                            key={task.Id}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Tasks;
