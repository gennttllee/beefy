import Left from '../small/Left'
import Right from '../small/Right'
import styles from './portfolio.module.css'

const Portfolio = () => {
    return (
        <div className={styles.div}>
            <Left btn={styles.btn} />
            <Right btn={styles.none} />
        </div>
    )
}

export default Portfolio