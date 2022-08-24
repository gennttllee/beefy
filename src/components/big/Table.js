import styles from './table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faSignal } from '@fortawesome/free-solid-svg-icons';

const Table = ({ item }) => {

  return (
    <div className={styles.container}>
      <img className={styles.corner} src={item.image} alt='img' />
      <div className={styles.div}>
        <div className={styles.child}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src={item.image} alt='item' />
            <img className={styles.image1} src={item.image1} alt='item' />
          </div>
          <div className={styles.paraDiv}>
            <h1 className={styles.para}>
              <span>{item.name}</span> -
              <span>{item.name1}</span>
            </h1>
            <button className={styles.btn}>curve</button>
            {item.slash && <button className={styles.btn1}>
              <FontAwesomeIcon className={styles.icon} icon={faFire} />
              <span>Ludo boost</span>
            </button>}
          </div>
        </div>
        <div className={styles.deposit}>
          <div>
            <p className={styles.word}>WALLET</p>
            <p className={styles.para2}>{item.wallet}</p>
          </div>
          <div>
            <p className={styles.word}>DEPOSIT</p>
            <p className={styles.para2}>{item.deposited}</p>
          </div>
        </div>
        <div className={styles.apy}>
          <div>
            <p className={styles.word}>APY</p>
            <p className={item.slash ? styles.para2 : styles.para3}>{item.apy}%</p>
            {item.slash && <p className={styles.slash}>{item.slash}%</p>}
          </div>
          <div>
            <p className={styles.word}>DAILY</p>
            <p className={item.slash ? styles.para2 : styles.para3}>{item.daily}%</p>
            {item.slash && <p className={styles.slash}>{item.daily}%</p>}
          </div>
        </div>
        <div className={styles.apy1}>
          <div>
            <p className={styles.word}>TML</p>
            <p className={styles.para2}>${item.tml}M</p>
          </div>
          <div>
          <p className={styles.word}>SAFETY</p>
            <p className={styles.para2}>{item.safety}
              <FontAwesomeIcon className={styles.signal} icon={faSignal} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table