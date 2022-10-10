import s from "./Market.module.scss";

const Market = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.search}>
                <input type="text" placeholder="Поиск..."></input>
                <img src="search.png" id={s.search}></img>
            </div>

            <div className={s.sort}>
                <span id={s.sort}>Сортировка: </span>
                <span id={s.sortCategory}> по возрастанию</span>
                <img src="arrow.png"></img>
            </div>

            <div className={s.market}>
                <div className={s.marketItem}>
                    <span id={s.title}>Абонемент в спортзал</span>
                    <img src="marketItem1.jpg"></img>
                    <span id={s.price} ><b>300</b> <img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Кофе</span>
                    <img src="marketItem2.jpg"></img>
                    <span id={s.price}><b>40</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Термокружка</span>
                    <img src="VTB-3.jfif"></img>
                    <span id={s.price}><b>80</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Бумажник</span>
                    <img src="VTB-4.jfif"></img>
                    <span id={s.price}><b>120</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Экокуб</span>
                    <img src="VTB-5.jfif"></img>
                    <span id={s.price}><b>100</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Набор шахмат</span>
                    <img src="VTB-6.jfif"></img>
                    <span id={s.price}><b>150</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Сумка</span>
                    <img src="VTB-7.jfif"></img>
                    <span id={s.price}><b>180</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>

                <div className={s.marketItem}>
                    <span id={s.title}>Кардхолдер</span>
                    <img src="VTB-8.jfif"></img>
                    <span id={s.price}><b>200</b><img src="diamond.png" id={s.icon}></img></span>
                    <button>Приобрести</button>
                </div>
            </div>
        </div>
    );
};

export default Market;
