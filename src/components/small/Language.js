import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import icon from '../../images/iconquestion.svg'

const Language = (props) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <a href="https://app.1inch.io/#/56/swap/BNB/BIFI" className={props.btn}>
                <img className={props.quest} src={icon} alt='icon' />
                <span> $432</span>
            </a>
            <div className={props.empty}>
                <button onClick={() => setShow(!show)} className={props.btn1}>
                    <span>EN</span>
                    <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} />
                </button>
                {show && <div className={props.abs}>
                    <button onClick={() => setShow(!show)}  className={props.lang}>Deutsche</button>
                    <button onClick={() => setShow(!show)} className={props.lang}>English </button>
                    <button onClick={() => setShow(!show)} className={props.lang}>中文 </button>
                </div>}
            </div>
        </>
    )
}

export default Language