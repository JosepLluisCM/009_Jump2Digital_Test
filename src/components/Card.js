import styled from "styled-components";
import { getCharacter, getCharacters, getEndpoints } from 'rickmortyapi';


/* const promise = getCharacter(1);
console.log(promise);

promise.then((response) => {
  console.log(`Received response: ${response.data.name}`);
  const rick = response.data.name;
});
 */

const rick = await getCharacters()
console.log(rick);

const ricks = await getCharacter(1)
console.log(ricks);

console.log(getEndpoints());




const CardStyled = styled.div`
  border: 2px solid blue;
  width: 200px;
  height: 200px;
`;

const Card = () => {
  return (
    <CardStyled>
      fasosfnbaoi
    </CardStyled>
  );
}

export default Card;