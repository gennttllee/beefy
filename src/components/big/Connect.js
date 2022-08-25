import styles from './connect.module.css'
import logo from '../../images/logo1.svg'
import List from '../small/List'
import { useState } from 'react'
import Language from '../small/Language'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'


const Connect = ({wallet, setWallet, connectRef}) => {
    const [data, setData] = useState(false)
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div className={styles.div}>
                <div> <img className={styles.image} src={logo} alt='logo' /> </div>
                <List class={styles.ul} name={styles.li1} name1={styles.li}  />
                <div className={styles.flex}>
                    <Language btn={styles.btn}
                        quest={styles.quest}
                        empty={styles.empty}
                        btn1={styles.btn1}
                        abs={styles.abs}
                        lang={styles.lang} />
                    <div className={styles.so}>
                        <button onClick={() => setData(!data)} className={styles.spanner}><span className={styles.span}>.</span></button>
                        {data && <div className={styles.lute}>
                            <p className={styles.p1}>all data successfully loaded</p>
                            <button onClick={() => setData(!data)} className={styles.none}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>}
                    </div>
                    <button ref={connectRef} onClick={()=> setWallet(!wallet)} className={styles.connect}>connect wallet</button>
                    <button onClick={() => setToggle(!toggle)} className={styles.visible}>
                        <FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>
            {toggle && <div className={styles.slider}>
                <div className={styles.emptyDiv}></div>
                <div className={styles.slide}>
                    <div className={styles.btnDiv}>
                        <button onClick={() => setToggle(!toggle)} className={styles.none1}>
                            <FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <hr className={styles.hr} />
                    <List class={styles.column} name={styles.col} name1={styles.col1} />
                    <div className={styles.last}>
                        <hr className={styles.hr} />
                        <Language btn={styles.newBtn} quest={styles.newQuest} empty={styles.newEmpty} btn1={styles.newBtn1} abs={styles.newAbs} lang={styles.lang} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Connect