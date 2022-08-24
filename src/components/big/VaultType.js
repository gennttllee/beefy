import response from "../../data/response"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const VaultType = ({ twoRef, setNav, nav, select, data, setSelect, setResult, sect, setName }) => {
    const [vault, setVault] = useState(false)

    const changed = (e, item) => {
        sect(item);
    }

    const clearAll = () => {
        setSelect([])
        setResult(response)
        setName('')
    }

    const sorting = (data) => {
        let selection = []
        switch (data) {
            case 'all':
                setResult(response)
                setSelect([])
                break;
            case 'lps':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setSelect([...select, data])
                break;
            case 'single assets':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setSelect([...select, data])
                break;
            default:
                break;
        }
        setVault(!vault)
    }

    return (
        <div className="buttonContainer1">
            <div ref={twoRef} className="buttonCover2">
                <button onClick={() => setNav(!nav)} className="singleButton2">Chains <span className="spanLove">{`${select.length > 0 ? `${select.length} selected` : 'All'}`}</span>
                    <FontAwesomeIcon className="icon1" icon={nav ? faAngleUp : faAngleDown} />
                </button>
                {nav && <div className="buttonAbs">
                    {data.map((item, index) => <div className="map" key={index}>
                        <input className="checkbox" onChange={(e) => changed(e, item.name)} checked={select.includes(item.name)} type='checkbox' />
                        <img className="img" src={item.image} alt='images' />
                        <p>{item.name}</p>
                    </div>)}
                </div>}
            </div>
            <div className="buttonCover2">
                <button onClick={() => setVault(!vault)} className="singleButton2">Vault type All
                    <FontAwesomeIcon className="icon1" icon={faAngleDown} />
                </button>
                {vault && <div className="buttonAbs1">
                    <button onClick={() => sorting('all')} className="vaultBtn">all</button>
                    <button onClick={() => sorting('single assets')} className="vaultBtn">single assets</button>
                    <button onClick={() => sorting('lps')} className="vaultBtn">lps</button>
                </div>}
            </div>
            <div className="buttonCover2">
                <button className="singleButton2">filters </button>
            </div>
            <div className="buttonCover2">
                <button onClick={clearAll} disabled={select.length <= 0} className="singleButton2">Clear All
                    {select.length > 0 && <span className="length">{select.length}</span>}
                </button>
            </div>
        </div>
    )
}

export default VaultType