import styled from 'styled-components';

import { useState, useEffect } from 'react';

/* Import Components to Render in the App */
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import ShowMore from './components/ShowMore';






async function filter() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=qua`);
  const resData = await response.json();
  console.log(resData);
}
filter();










/* Style the App component here, Styled Components object replaces React Component name*/
const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
`;


function App() {
  /* We set the states needed for the app, at the moment the page of Characters that fetches from the API */
  const [page, setPage] = useState(1);
  const [showMoreCond, setShowMoreCond] = useState(true);
  /* We Show more characters on the First Click and THEN update the showMore state to hide the button */
  function showMore() {
    setPage(page + 1);
    setShowMoreCond(false);
    /* console.log(charList); */
  }
  /* And then we show more characters on scroll bottom only if setShowMore is false, (the button has been clicked once)*/
  window.onscroll = function() {
    const totalPageHeight = document.body.scrollHeight; 
    const scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= totalPageHeight) {
     /*  console.log("at the bottom"); */
      if (!showMoreCond) setPage(page + 1);
    }
  }
  
  /* Set the State for the character List fetched by the API, later it'll be rendered on screen */
  const [charList, setCharList] = useState([]);
  /* This useEffects runs at the start of the app and on every page state update, and the new informations updates the CardList Component */
  useEffect(() => {
    async function fetchChars() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const resData = await response.json();
      /* Add the newly fetched page to the full array of characters */
      const newArr = charList.concat(resData.results);
      setCharList(newArr);
    }
    fetchChars();
    /* Warning here bc charList ins't on the dependencies array, but if I put it, infinite loop created, need to research on that topic, all working atm */
  }, [page]);
    

  /*  */
  function handleInputChange(event) {
    
    /* console.log("tick"); */
  };


  return (
    <AppStyled>
      <Header />
      <SearchBar onChangeInput={handleInputChange}/>
      <CardList list={charList} currentPage={page}/>
      <ShowMore onShowChars={showMore} onShowClick={showMoreCond}/>  
    </AppStyled>
  );
}

export default App;
