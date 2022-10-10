import { useState, useEffect } from "react";
import s from "./MyNFT.module.scss"
import NFT from "./NFT/NFT";
import ItemService from "../../controller/http/service/Rewards";

const MyNFT = () => {
    const [items, setItems] = useState([]);

    const FetchItems = async () => {
        var items = await ItemService.getItems();
        setItems(items);
    };

    useEffect(() => {
        FetchItems();
    }, []);

    return(
        <div className={s.wrapper}>
            <h2>Моя коллекция</h2>
            <div className={s.container}>
                {items.map((item) => (
                    <NFT
                        title={item.title}
                        price={item.price}
                        key={item.id}
                    />
                ))}        
            </div>
            
        </div>
    )
}

export default MyNFT;