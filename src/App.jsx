import styled from 'styled-components';
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

/* Import Components to Render in the App */
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import ShowMore from './components/ShowMore';


/* Style the App component here, Styled Components object replaces React Component name*/
const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
`;


function App() {
  const queryClient = useQueryClient()

  /* We set the states needed for the app, at the moment the page of Characters that fetches from the API */
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState('');
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

  async function fetchChars({
    pageParam = `https://rickandmortyapi.com/api/character/?page=1`
  }) {
    const response = await fetch(pageParam + (filterText !== '' ? `&name=${filterText}` : ''));
    return response.json();
  }

  const { data, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
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
            .flat()}
        />
      )}
      {hasNextPage && (
        <ShowMore onShowChars={fetchNextPage} onShowClick={showMoreCond} />
      )}
    </AppStyled>
  );
}

export default App;
