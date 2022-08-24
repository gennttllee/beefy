import response from "../../data/response";
import { useEffect, useRef} from "react";

const Vault = ({ setResult, setShows, shows, setSelect }) => {

    const clickRef = useRef()

    const sorting = ((data) => {
        let selection = []
        switch (data) {
            case 'eligible':
            case 'myVault':
                setResult([])
                break;
            case 'all':
            case 'clear':
                setResult(response)
                setShows([])
                setSelect([])
                clickRef.current.focus();
                break;
            case 'featured':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            case 'stable coins':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            case 'blue chip':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            case 'beefy vaults':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            case 'single assets':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            case 'lps':
                selection = response.filter(item => item.type === data)
                setResult(selection)
                setShows([...shows, data])
                break;
            default:
                break;
        }
    })

    useEffect(() => {
        const getAll =()=>{
            setResult(response)
            setShows([])
            setSelect([])
            clickRef.current.focus();
        }
        getAll();
    }, [setResult, setSelect, setShows]);

    return (
        <div className="buttonContainer">
            <div className="buttonCover">
                <button ref={clickRef} onClick={() => sorting('all')} className="singleButton1">All Vaults</button>
                <button onClick={() => sorting('eligible')} className="singleButton1">Eligible Vaults</button>
                <button onClick={() => sorting('myVault')} className="singleButton1">My Vaults</button>
            </div>
            <div className="buttonCover1">
                <button onClick={() => sorting('featured')} className="singleButton">Featured</button>
                <button onClick={() => sorting('stable coins')} className="singleButton"> Stablecoins</button>
                <button onClick={() => sorting('blue chip')} className="singleButton">Blue Chip</button>
                <button onClick={() => sorting('beefy vaults')} className="singleButton">Beefy Vaults</button>
            </div>
            <div className="buttonCover1">
                <button onClick={() => sorting('single assets')} className="singleButton">Single assets</button>
                <button onClick={() => sorting('lps')} className="singleButton">Lps</button>
            </div>
            <div className="buttonCover1">
                <button className="singleButton">filters</button>
            </div>
            <div className="buttonCover1">
                <button onClick={() => sorting('clear')} className="singleButton">Clear All
                    {shows.length > 0 && <span className="length">{shows.length}</span>}
                </button>
            </div>
        </div>
    )
}

export default Vault