import './App.css';
import List from './components/List/List'
import { useState, useEffect } from 'react'
import {getApiData} from './ApiRequests'
import Pagination from './components/Pagination'
import DetailPage from './components/DetailPage.js'
// import pokeBall from './pokeball.svg';

const App = () => {
  const [listData, setListData] = useState(null)
  const [detailData, setDetailData] = useState(null)
  const [isDetailPage, setIsDetailPage] = useState(false)
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(20);
  useEffect(() => {
    if(listData === null)
      handleApiRequest('https://pokeapi.co/api/v2/pokemon/', false)
  }, [])

  const handleBackClicked = () => {
    handleApiRequest(`https://pokeapi.co/api/v2/pokemon/?$offset=${index}&limit=20`, false)
    // setIsDetailPage(false)
  }

  const handleApiRequest =(endpoint, isDetail) =>{
    getApiData(endpoint).then((response) =>{
      setIsDetailPage(isDetail)
      if(isDetail){
        setDetailData(response)
      } else {
        setListData(response)
      }
    })

  }

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    handleApiRequest(`https://pokeapi.co/api/v2/pokemon/${search}`, true)
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>pokedex</h1>
        <div>
          <input
            onChange={handleChange}
            value={search}
          />
          <h3>{search}</h3>
          <button onClick={handleClick}>Search</button>
        </div>
      {!isDetailPage ? 
      <>
        <Pagination listData={listData} handleClick={handleApiRequest}/>
        <List listData={listData !== null ? listData.results : null}  
              handleClick={handleApiRequest} 
            />
        <Pagination listData={listData} handleClick={handleApiRequest}/>
      </>
      :
      <div>
        <div 
          onClick={handleBackClicked}
         >Back</div>
        <DetailPage 
          info={detailData}
          handleApiRequest={handleApiRequest}/>
      </div>
      }
      </div>
    </div>
  );
}

export default App;
