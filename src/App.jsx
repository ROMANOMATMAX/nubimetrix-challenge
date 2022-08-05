import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AsideImageBanner } from './components/aside-banner/AsideImageBanner';
import { IngredientList } from './components/forms/IngredientList';
import { RecipeForm } from './components/forms/RecipeForm';
import { Logo } from './components/logo/Logo';
import { AddRecipeButton } from './components/recipes/AddRecipeButton';
import { Recipe } from './components/recipes/Recipe';
import { RecipesTable } from './components/recipes/RecipesTable';
import { getRecipes } from './services/getRecipes';

const MainPageLayout = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "aside aside"
    "main-content main-content";

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "header header"
      "aside main-content";
  }
`
const Header = styled.header`
  grid-area: header;
`
const Aside = styled.aside`
  grid-area: aside;
`
const MainContent = styled.section`
  grid-area: main-content;
`

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);
  console.log('env', import.meta.env.VITE_APP_API_BASE_URL);
  return (
    <>
      <MainPageLayout>
        <Header>
          <Logo />
        </Header>
        <Aside>
          <AsideImageBanner />
        </Aside>
        <MainContent>
          <RecipesTable
            recipes={recipes}
          />
        </MainContent>
      </MainPageLayout>  
      <AddRecipeButton
        changeModalStatus={setModalOpened}
      />
      { modalOpened && <RecipeForm changeModalStatus={setModalOpened}/>}
      {/* <IngredientList /> */}
    </>
  )
}

export default App
