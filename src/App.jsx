import { useInfiniteQuery } from "@tanstack/react-query";
import { AppStyled, PortalStyled, WrapperStyled } from "./App.styled";
import portal from "./assets/ezgif.com-gif-maker.gif";

import { useState } from "react";

/* Import Components to Render in the App */
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

function App() {
  /* We set the states needed for the app, only the text from the input is needed, as tanQuery manages the other States*/
  const [filterText, setFilterText] = useState("");

  /* We show more characters on scroll bottom*/
  window.onscroll = function () {
    const totalPageHeight = document.body.scrollHeight;
    const scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= totalPageHeight) {
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
    fetchContent = (
      <WrapperStyled>
        <p>No Characters with that name.</p>
      </WrapperStyled>
    );
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
      {isLoading && (
        <WrapperStyled>
          <p>LOADING...</p>
        </WrapperStyled>
      )}
      {isError && (
        <WrapperStyled>
          <p>ERROR</p>
        </WrapperStyled>
      )}
      {fetchContent}
    </AppStyled>
  );
}

export default App;
