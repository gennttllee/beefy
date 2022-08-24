import Sorted from "../small/Sorted"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faSearch, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"

const Search = ({ sort, setSort, divRef, setResult, setName, select, setSelect, result, name, setShows }) => {

    const wallet = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.wallet) - parseFloat(a.wallet))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.wallet) - parseFloat(b.wallet))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }

    const apy = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.apy) - parseFloat(a.apy))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.apy) - parseFloat(b.apy))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }

    const deposited = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.deposited) - parseFloat(a.deposited))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.deposited) - parseFloat(b.deposited))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }

    const tml = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.tml) - parseFloat(a.tml))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.tml) - parseFloat(b.tml))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }

    const daily = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.daily) - parseFloat(a.daily))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.daily) - parseFloat(b.daily))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }

    const safety = (data) => {
        let req = [...result]
        let minor = []
        switch (data) {
            case 'ascending':
                req.sort((a, b) => parseFloat(b.safety) - parseFloat(a.safety))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            case 'descending':
                req.sort((a, b) => parseFloat(a.safety) - parseFloat(b.safety))
                setResult(req)
                minor.push(data)
                setShows(minor)
                break;
            default:
                break;
        }
    }


    return (
        <div className="diver">
            <div className="inputDiv">
                <input className="input" type='text' placeholder='search...' />
                <FontAwesomeIcon className="icon" icon={faSearch} />
            </div>
            <div className="wallet1">
                <div className="specificDiv">
                    <p className="specificP">Wallet</p>
                    <div className="specificButtonDiv">
                        <button onClick={() => wallet('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> wallet('descending')} className="specificB">
                            <FontAwesomeIcon className="king1"  icon={faCaretDown} />
                        </button>
                    </div>
                </div>
                <div className="specificDiv">
                    <p className="specificP">Deposited</p>
                    <div className="specificButtonDiv">
                        <button onClick={()=> deposited('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> deposited('descending')} className="specificB">
                            <FontAwesomeIcon className="king1" icon={faCaretDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="wallet1">
                <div className="specificDiv">
                    <p className="specificP">Apy</p>
                    <div className="specificButtonDiv">
                        <button onClick={()=> apy('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> apy('descending')} className="specificB">
                            <FontAwesomeIcon className="king1" icon={faCaretDown} />
                        </button>
                    </div>
                </div>
                <div className="specificDiv">
                    <p className="specificP">daily</p>
                    <div className="specificButtonDiv">
                        <button onClick={()=> daily('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> daily('descending')} className="specificB">
                            <FontAwesomeIcon className="king1" icon={faCaretDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="wallet2">
                <div className="specificDiv">
                    <p className="specificP">tml</p>
                    <div className="specificButtonDiv">
                        <button onClick={()=> tml('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> tml('descending')} className="specificB">
                            <FontAwesomeIcon className="king1" icon={faCaretDown} />
                        </button>
                    </div>
                </div>
                <div className="specificDiv">
                    <p className="specificP">safety</p>
                    <div className="specificButtonDiv">
                        <button onClick={()=> safety('ascending')} className="specificB">
                            <FontAwesomeIcon className="king" icon={faCaretUp} />
                        </button>
                        <button onClick={()=> safety('descending')} className="specificB">
                            <FontAwesomeIcon className="king1" icon={faCaretDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div ref={divRef} className="inputDiv1">
                <button onClick={() => setSort(!sort)} className="singleButton5"> <span className='sortBy'>Sort by <span className="spanSort">{name}</span></span>
                    <FontAwesomeIcon className="icon" icon={sort ? faAngleUp : faAngleDown} />
                </button>
                {sort && <>
                    <Sorted
                        sort={sort}
                        setSort={setSort}
                        result={result}
                        setResult={setResult}
                        setName={setName}
                        select={select}
                        setSelect={setSelect}
                    />
                </>}
            </div>
        </div>
    )
}

export default Search