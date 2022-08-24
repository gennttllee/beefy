import Layout from "../../layout/Layout";
import './App.css'
import data from '../../data/data'
import { useState, useRef, useEffect } from 'react'
import VaultType from "../../components/big/VaultType";
import response from '../../data/response'
import Table from '../../components/big/Table'
import Search from "../../components/big/Search";
import Vault from "../../components/big/Vault";
import ConnectWallet from "../../components/big/ConnectWallet";

function App() {
  const twoRef = useRef();
  const divRef = useRef();
  const btnRef = useRef();
  const connectRef = useRef();
  const [select, setSelect] = useState([])
  const [result, setResult] = useState([])
  const [show, setShow] = useState(null)
  const [shows, setShows] = useState([])
  const [wallet, setWallet] = useState(false)
  const [nav, setNav] = useState(false)
  const [sort, setSort] = useState(false)
  const [name, setName] = useState('')

  const sect = (item) => {
    let selection = [...select];
    let files = []
    if (selection.includes(item)) {
      selection = selection.filter(element => element !== item)
    } else {
      selection.push(item)
    }
    setSelect(selection);
    if (selection.length > 0) {
      selection.forEach(element => {
        const req = files.find(item => item.name === element || item.name1 === element)
        if (req) {
          console.log('no')
        } else {
          const myFiles = response.filter(product => product.name === element || product.name1 === element)
          files.push(...myFiles)
        }
      })
      setResult(files)
    } else {
      setResult(response)
    }
  };

  useEffect(() => {
    document.addEventListener('click', outside)
    return () => {
      document.removeEventListener('click', outside)
    };
  }, []);

  const outside = (e) => {
    if (twoRef.current && twoRef.current.contains(e.target)) {
    } else setNav(false)

    if (divRef.current && divRef.current.contains(e.target)) {
    } else setSort(false)
  }

  return (
    <Layout wallet={wallet} setWallet={setWallet} connectRef ={connectRef} >
      <section className="section">
        <div className="container">
          {data.map((item, index) => <div onMouseEnter={() => setShow(item.name)}
            onMouseLeave={() => setShow(null)}
            onClick={() => sect(item.name)}
            className="div" key={index}>
            {show === item.name && <div className="show">
              <p className="peanut">{show}</p>
            </div>}
            {select.length > 0 ?
              select.includes(item.name) ?
                <img className="img" src={item.image} alt='item' />
                : <img className="img" src={item.alt} alt='item' />
              : <img className="img" src={item.image} alt='item' />}
          </div>)}
        </div>
        <Vault
          setResult={setResult}
          setShows={setShows}
          shows={shows}
          setSelect={setSelect}
        />
        <VaultType
          name={name}
          setName={setName}
          result={result}
          setResult={setResult}
          twoRef={twoRef}
          select={select}
          setSelect={setSelect}
          setNav={setNav}
          nav={nav}
          data={data}
          sect={sect}
        />
        <div className="div2">
          <Search
            sort={sort}
            setSort={setSort}
            name={name}
            setName={setName}
            result={result}
            setResult={setResult}
            divRef={divRef}
            select={select}
            setSelect={setSelect}
            setShows={setShows}
          />
          {result.length > 0 ? result.map((item, index) => <Table
            key={index}
            item={item}
          />) : <div className="lastDiv">
            <h2 className="h4">You havent connected your wallet </h2>
            <p className="commentP">connect to view all eligible vaults</p>
            <button ref={btnRef} onClick={() => setWallet(!wallet)} className="connect">connect wallet</button>
          </div>}
        </div>
      </section>
        <ConnectWallet
          wallet={wallet}
          setWallet={setWallet}
          btnRef = {btnRef}
          connectRef = {connectRef}
        />
    </Layout>
  );
}

export default App;
