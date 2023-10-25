import styled from 'styled-components';

import { useState, useEffect } from 'react';

/* Import Components to Render in the App */
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Pages from './components/Pages';


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
  /* We update the page to Fetch by the Api later */
  function showMore() {
    setPage(page + 1);
    console.log(charList);
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
    
  return (
    <AppStyled>
      <Header />
      <SearchBar />
      <CardList list={charList}/>
      <Pages onShowChars={showMore} currentPage={page}/>  
    </AppStyled>
  );
}

export default App;
