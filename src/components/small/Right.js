import styles from './port.module.css'


const Right = () => {
    return (
        <div className={styles.porter}>
            <h1 className={styles.h2}>Platform</h1>
            <div className={styles.flex1}>
                <div className={styles.head}>
                    <p className={styles.p9}>TVLi</p>
                    <p className={styles.p10}>$349.53M</p>
                </div>
                <div className={styles.head}>
                    <p className={styles.p9}>VAULTS</p>
                    <p className={styles.p10}>658</p>
                </div>
                <div className={styles.head}>
                    <p className={styles.p9}>DAILY BUYBACK</p>
                    <p className={styles.p10}>$942</p>
                </div>
            </div>
        </div>
    )
}

export default Right