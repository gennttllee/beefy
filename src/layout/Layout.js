import styles from './layout.module.css'
import Connect from '../components/big/Connect'
import Portfolio from '../components/big/Portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faRedditAlien, faTelegram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children, wallet, setWallet, connectRef }) => {

    return (
        <section className={styles.container}>
            <nav className={styles.nav}>
                <Connect
                    wallet={wallet}
                    setWallet={setWallet}
                    connectRef={connectRef}
                />
                <Portfolio />
            </nav>
            <main className={styles.main}>
                <div className={styles.child}>{children}</div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.ulList}>
                    <a className={styles.linker} href='/'>Vote</a>
                    <a  className={styles.linker} href='/'>Stats</a>
                    <a  className={styles.linker} href='/' >Blog</a>
                    <a  className={styles.linker} href='/'>Docs</a>
                    <a  className={styles.linker} href='/'>Audit </a>
                    <a  className={styles.linker} href='/'> Media Kit</a>
                </div>
                <div className={styles.ulList1}>
                    <a className={styles.link} href='/'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className={styles.link} href='/'>
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a className={styles.link} href='/'>
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a className={styles.link} href='/'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className={styles.link} href='/'>
                        <FontAwesomeIcon icon={faRedditAlien} />
                    </a>
                </div>
            </footer>
        </section>
    )
}

export default Layout