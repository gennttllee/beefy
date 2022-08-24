import styles from './wallet.module.css'
import logo from '../../images/logo1.svg'
import { useRef, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import cdc from '../../images/cdc.png'
import clover from '../../images/clover.png'
import coinBase from '../../images/coinbase.png'
import walletConnect from '../../images/wallet.png'

const ConnectWallet = ({ wallet, setWallet, btnRef, connectRef }) => {
    const walletRef = useRef()

    const inside = useCallback((e) => {
        if (walletRef.current){
            if (  walletRef.current.contains(e.target) || btnRef.current === e.target || connectRef.current === e.target) {

            } else {
                setWallet(false)
            }
        }
    },[btnRef, connectRef, setWallet])

    useEffect(() => {
        document.addEventListener('click', inside)
        return () => {
            document.removeEventListener('click', inside)
        };
    }, [inside]);

    return (
        <>
            {wallet && <section ref={walletRef} className={styles.section}>
                <div className={styles.div}>
                    <img className={styles.image} src={logo} alt='logo' />
                    <h2 className={styles.h2}>Get Started</h2>
                    <h3 className={styles.h3}>Connect your wallet</h3>
                    <p className={styles.p}>Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</p>
                </div>
                <div className={styles.diver}>
                    <div className={styles.headContain}>
                        <h3 className={styles.head}>Available wallets</h3>
                        <button onClick={() => setWallet(false)} className={styles.cancel}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className={styles.clover}>
                        <button className={styles.btn}>
                            <div className={styles.imageBackground}>
                                <img className={styles.icon} src={walletConnect} alt='cdc' />
                            </div>
                            <span> Wallet Connect</span>
                        </button>
                        <button className={styles.btn}>
                            <div className={styles.imageBackground}>
                                <img className={styles.icon} src={coinBase} alt='cdc' />
                            </div>
                            <span> Coinbase Wallet</span>
                        </button>
                        <button className={styles.btn}>
                            <div className={styles.imageBackground}>
                                <img className={styles.icon} src={cdc} alt='cdc' />
                            </div>
                            <span> CDC Connect</span>
                        </button>
                        <button className={styles.btn}>
                            <div className={styles.imageBackground}>
                                <img className={styles.icon} src={clover} alt='cdc' />
                            </div>
                            <span> Clover</span>
                        </button>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default ConnectWallet