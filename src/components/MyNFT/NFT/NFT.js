import s from "./NFT.module.scss"

const NFT = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.task}>
                <span id={s.header}></span>
                <h2>{props.title}</h2>
                <span id={s.price}><b>{props.price}</b> <img src="diamond.png" id={s.icon}/></span>
            </div>
        </div>
    )
}

export default NFT;