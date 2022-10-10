import s from "./Home.module.scss";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.home}>
                <h2>Описание проекта</h2>
                <span id={s.info}>
                    <p>Мы представляем своё решение на тему «Веб-сервис с элементами геймификации для сотрудников банка ВТБ».
                    Основной задачей нашего проекта мы поставили мотивацию сотрудников к рабочей деятельности, которая способна улучшить корпоративную коммуникацию.</p>
                    При планировании рабочего процесса сотрудникам будут выставляться дополнительные гейм-задания «ачивки», к примеру, составить документацию проекта меньше, чем за 72 часа, согласовать проект с 7 сотрудниками своего офиса, привлечь к разработке решения ещё 2 сотрудников здания. 
                    <p>Все гейм-задания разрабатываются HR-менеджерами и назначаются администраторами рабочих зон. 
                    При успешном прохождении заданий, выполнение подтверждается администратором или подтверждается автоматически, в зависимости от поставленной задачи. И на аккаунт сотрудника зачисляются NFT-токены.
                    Дополнительно токены начисляются за прохождение образовательных программ и ежемесячно от руководителей групп сотрудников. </p>
                    
                </span>
                <h2 id={s.team}>Наша команда</h2>
                <hr/>
                <div className={s.substrat}>
                    <div className={s.cardBlock}>
                        <div className={s.card}>
                            <div id={s.cardHeader}>
                                <img src="icon1.png" width="14px" />
                                <span>Михаил</span>
                            </div>

                            <img src="andrey.jpg" id={s.avatar} />

                            <span id={s.cardInfo}>
                                Презентующий
                                <br/><b>MS Powerpoint</b>
                                
                            </span>
                        </div>

                        <div className={s.card}>
                            <div id={s.cardHeader}>
                                <img src="icon2.png" width="14px" />
                                <span id={s.name}>Артём</span>
                            </div>

                            <img src="artem.jpg" id={s.avatar} />

                            <span id={s.cardInfo}>
                                Backend разработчик
                                <br/><b>Golang, SQL</b>
                            </span>
                        </div>

                        <div className={s.card}>
                            <div id={s.cardHeader}>
                                <img src="icon3.png" width="14px" />
                                <span id={s.name}>Владислав</span>
                            </div>

                            <img src="vlad.jpg" id={s.avatar} />

                            <span id={s.cardInfo}>
                                Frontend разрабочик
                                <br/><b> React.js</b>
                            </span>
                        </div>

                        <div className={s.card}>
                            <div id={s.cardHeader}>
                                <img src="icon4.png" width="14px" />
                                <span id={s.name}>Андрей</span>
                            </div>

                            <img src="misha.jpg" id={s.avatar} />

                            <span id={s.cardInfo}>
                                Дизайнер
                                <br/><b>Figma UI/UX</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
