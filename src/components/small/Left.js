import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import styles from './port.module.css'
import { useState } from "react"


const Left = (props) => {
    const [eye, setEye] = useState(true)
    return (
        <div className={styles.porter}>
            <div className={styles.port}>
                <h1 className={styles.h1}>Portfolio</h1>
                <button onClick={() => setEye(!eye)} className={props.btn}>
                    <FontAwesomeIcon icon={eye ? faEyeSlash : faEye} />
                </button>
            </div>
            <div className={styles.flex}>
                <div className={styles.head} >
                    <p className={styles.p1}>Deposit</p>
                    <p className={eye ? styles.p2 : styles.pp2}>$0.00</p>
                </div>
                <div className={styles.head}>
                    <p className={styles.p1}>MONTHLY YIELD</p>
                    <p className={eye ? styles.p2 : styles.pp2}>$0.00</p>
                </div>
                <div className={styles.head}>
                    <p className={styles.p1}>DAILY YIELD</p>
                    <p className={eye ? styles.p2 : styles.pp2}>$0.00</p>
                </div>
                <div className={styles.head}>
                    <p className={styles.p1}>AVG. APY</p>
                    <p className={eye ? styles.p2 : styles.pp2}>0%'</p>
                </div>
            </div>
        </div>
    )
}

export default Left