import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Pages from './components/Pages';

const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
`;





function App() {
  const [page, setPage] = useState(1);

  function nextPage() {
    setPage(page + 1);
    console.log(charList);
  }
  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
      /* console.log(charList); */
    }
  }
  
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    async function fetchChars() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const resData = await response.json();

      const newArr = charList.concat(resData.results);

      setCharList(newArr);
      /* console.log(charList); */
    }

    fetchChars();

  }, [page]);
    

    
  return (
    <AppStyled>
      <Header />
      <SearchBar />
      
      <CardList list={charList}/>
      <Pages onPrev={previousPage} onNext={nextPage} currentPage={page}/>  
    </AppStyled>
  );
}

export default App;
