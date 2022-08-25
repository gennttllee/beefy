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
                    <a target='blank' className={styles.linker} href='https://vote.beefy.finance/#/'>Vote</a>
                    <a target='blank' className={styles.linker} href='https://dashboard.beefy.com/'>Stats</a>
                    <a target='blank' className={styles.linker} href='https://beefy.com/articles/' >Blog</a>
                    <a target='blank' className={styles.linker} href='https://docs.beefy.finance/'>Docs</a>
                    <a target='blank' className={styles.linker} href='https://github.com/beefyfinance/beefy-audits'>Audit </a>
                    <a  target='blank' className={styles.linker} href='https://beefy.com/media-kit/'> Media Kit</a>
                </div>
                <div className={styles.ulList1}>
                    <a target='blank' className={styles.link} href='https://github.com/beefyfinance'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a target='blank' className={styles.link} href='https://t.me/beefyfinance'>
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a target='blank' className={styles.link} href='https://discord.com/invite/yq8wfHd'>
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a target='blank' className={styles.link} href='https://twitter.com/beefyfinance'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a target='blank' className={styles.link} href='https://www.reddit.com/r/Beefy/'>
                        <FontAwesomeIcon icon={faRedditAlien} />
                    </a>
                </div>
            </footer>
        </section>
    )
}

export default Layout