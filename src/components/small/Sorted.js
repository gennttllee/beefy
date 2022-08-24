import styles from './sort.module.css'
import response from '../../data/response'

const Sorted = ({ sort, setSort, result, setResult, setName,select, setSelect }) => {
    const sortMe = (data) => {
        const list = [...result]
        const names = []
        switch (data) {
            case 'day':
            case 'daily':
                list.sort((a, b) => parseFloat(b.daily) - parseFloat(a.daily))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            case 'wallet':
                list.sort((a, b) => parseFloat(b.wallet) - parseFloat(a.wallet))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            case 'deposited':
                list.sort((a, b) => parseFloat(b.deposited) - parseFloat(a.deposited))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            case 'tml':
                list.sort((a, b) => parseFloat(b.tml) - parseFloat(a.tml))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            case 'apy':
                list.sort((a, b) => parseFloat(b.apy) - parseFloat(a.apy))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            case 'safety':
                list.sort((a, b) => parseFloat(b.safety) - parseFloat(a.safety))
                setResult(list)
                setName(data)
                names.push(data)
                setSelect([...select,names])
                break;
            default:
                setResult(response)
                break;
        }
        setSort(!sort)
    }

    return (
        <div className={styles.div}>
            <button onClick={() => sortMe('day')} className={styles.btn}>day</button>
            <button onClick={() => sortMe('wallet')} className={styles.btn} >wallet</button>
            <button onClick={() => sortMe('deposited')} className={styles.btn}>deposited</button>
            <button onClick={() => sortMe('apy')} className={styles.btn}>apy</button>
            <button onClick={() => sortMe('daily')} className={styles.btn}>daily</button>
            <button onClick={() => sortMe('tml')} className={styles.btn}>tml</button>
            <button onClick={() => sortMe('safety')} className={styles.btn}>safety</button>
        </div>
    )
}

export default Sorted