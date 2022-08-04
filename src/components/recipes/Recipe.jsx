import React from 'react'
import styled from 'styled-components'

const RecipeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "name review"
    "cooked cooked";

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      "name review cooked";
}
`
const RecipeName = styled.header`
  grid-area: name;
`
const RecipeReview = styled.aside`
  grid-area: review;
`
const RecipeStatus = styled.section`
  grid-area: cooked;
`

export const Recipe = () => {
  return (
    <RecipeLayout>
      <RecipeName>
        Name
      </RecipeName>
      <RecipeReview>
        5
      </RecipeReview>
      <RecipeStatus>
        cooked
      </RecipeStatus>
    </RecipeLayout>
  )
}
