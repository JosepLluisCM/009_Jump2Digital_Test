import styled from "styled-components";
import portal from "./assets/ezgif.com-gif-maker.gif";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useState } from "react";

/* Import Components to Render in the App */
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

/* Style the App component here, Styled Components object replaces React Component name*/
const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 450px) {
    padding: 0 2rem 0 2rem;
  }
`;
const PortalStyled = styled.img`
  position: fixed;
  scale: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -25%);
  z-index: -1;
  filter: blur(4px);
  @media (max-width: 450px) {
    scale: 100%;
    transform: translate(-50%, -50%);
  }
`;

function App() {
  /* We set the states needed for the app, only the text from the input is needed, as tanQuery manages the other States*/
  const [filterText, setFilterText] = useState("");

  /* We show more characters on scroll bottom*/
  window.onscroll = function () {
    const totalPageHeight = document.body.scrollHeight;
    const scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= totalPageHeight) {
      /*  console.log("at the bottom"); */
      fetchNextPage();
    }
  };

  /* The Function to Fetch the data from API, transform into JSON DATA, and filter if FILTERTEXT is not an empty string */
  async function fetchChars({
    pageParam = `https://rickandmortyapi.com/api/character/?page=1`,
  }) {
    const response = await fetch(
      pageParam + (filterText !== "" ? `&name=${filterText}` : "")
    );
    return response.json();
  }

  /* This is the Query Function, it manages all states and data, also refetches when needed for more characters */
  const { data, fetchNextPage, isError, isLoading } = useInfiniteQuery({
    queryKey: ["characters", { filterText }],
    queryFn: fetchChars,
    getNextPageParam: (lastPage, pages) => lastPage.info?.next,
  });

  /* Here we manage the info that is show on the screen depending the State of the fetch, loading, error or good, the list is shown*/
  let fetchContent = null;
  if (data && data.pages[0].error) {
    fetchContent = <p>No Characters with that name</p>;
  } else {
    fetchContent = data && (
      <CardList
        list={data.pages
          .map((page) => page.results)
          .filter((results) => Boolean(results))
          .flat()}
      />
    );
  }

  return (
    <AppStyled>
      <PortalStyled src={portal} />
      <Header />
      <SearchBar value={filterText} onChangeInput={setFilterText} />
      {isLoading && <p>LOADING</p>}
      {isError && <p>ERROR</p>}
      {fetchContent}
    </AppStyled>
  );
}

export default App;
