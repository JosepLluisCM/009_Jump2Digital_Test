import styled from "styled-components";

const PagesStyled = styled.div`
  margin: 20px;
    p {
      display: inline-block;
    }
`;

const Pages = () => {
  return (
    <PagesStyled>
      <button>Next Page</button>
      <p>Pag. num 1</p>
      <button>Previous page</button>
    </PagesStyled>
  );
}

export default Pages;