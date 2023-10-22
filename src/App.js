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
  border: 2px solid red;
`;
function App() {
  return (
    <AppStyled>
      <Header />
      <SearchBar />
      <Pages />
      <CardList />  
    </AppStyled>
  );
}

export default App;
