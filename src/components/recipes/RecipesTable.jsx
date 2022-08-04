import styled from 'styled-components';
import { Recipe } from './Recipe';

const TableLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    "name"
    "aside aside"
    "main-content main-content";

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      "header header"
      "aside main-content";
}
`

export const RecipesTable = () => {
  return (
    <div>
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  )
}
