import styles from './Card.module.scss'
const Card = ({ image, title, name, description }) => {
    return (
        <div className={styles.cardDiv}>
            <div className={styles.imageDiv}>
                <img src={image} alt="" className={styles.image} />
            </div>
            <div>
                <div>
                    <h3>{title}</h3>
                    <button>{name}</button>
                </div>
                <div>
                    <p>{description}</p>
                <div className={styles.cd12}>
                    <div>
                        <button id={styles.share}>Share</button>
                    </div>
                    <div>
                        <button id={styles.view}>View</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
