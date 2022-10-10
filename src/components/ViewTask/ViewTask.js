import s from "./ViewTask.module.scss";
import AppContext from "../../AppContext";
import {useContext, useEffect, useState} from 'react';
import ItemService from "../../controller/http/service/Rewards";

const ViewTask = () => {
    const { title, info, item} = useContext(AppContext);
    const [rewards, setRewards] = useState();
    const [isLoading, setLoading] = useState(true);

    const FetchRewards = async () => {
        setLoading(true)
        setRewards(await ItemService.getItemById(item));
        setLoading(false)
    };

    useEffect(() => {
        FetchRewards();
    }, [])

    if (!isLoading) {
        return (
            <div className={s.wrapper}>
                <h2>{title}</h2>
                <div className={s.view}>
                    <span id={s.info}>{info}</span>
                </div>
                <h2>Решение</h2>
                <div className={s.upload}>
                    <textarea></textarea>
                    <button id={s.btn}>Отправить</button>
                </div>
    
                <h2>Награды</h2>
                <div className={s.reward}>
                    <div>
                        <h2>{rewards.title}</h2>
                        <span>{rewards.price}<img src="diamond.png"/></span>
                    </div>
                </div>
                
            </div>
        );
    }
};

export default ViewTask;
