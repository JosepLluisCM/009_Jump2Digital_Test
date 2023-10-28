import styled from 'styled-components';
import { useInfiniteQuery } from "@tanstack/react-query";

import { useState } from "react";

/* Import Components to Render in the App */
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';


/* Style the App component here, Styled Components object replaces React Component name*/
const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
`;


function App() {
  

  /* We set the states needed for the app, only the text from the input is needed, as tanQuery manages the other States*/
  const [filterText, setFilterText] = useState('');


  /* We show more characters on scroll bottom*/
  window.onscroll = function() {
    const totalPageHeight = document.body.scrollHeight; 
    const scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= totalPageHeight) {
     /*  console.log("at the bottom"); */
      fetchNextPage();
    }
  }

  /* The Function to Fetch the data from API, transform into JSON DATA, and filter if FILTERTEXT is not an empty string */
  async function fetchChars({
    pageParam = `https://rickandmortyapi.com/api/character/?page=1`
  }) {
    const response = await fetch(pageParam + (filterText !== '' ? `&name=${filterText}` : ''));
    return response.json();
  }

  /* This is the Query Function, it manages all states and data, also refetches when needed for more characters */
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["characters", { filterText }],
    queryFn: fetchChars,
    getNextPageParam: (lastPage, pages) => lastPage.info?.next,
  });

  
  return (
    <AppStyled>
      <Header />
      <SearchBar value={filterText} onChangeInput={setFilterText} />
      {data && (
        <CardList
          list={data.pages
            .map((page) => page.results)
            .filter((results) => Boolean(results))
            .flat()} />
      )}
      
    </AppStyled>
  );
}

export default App;
