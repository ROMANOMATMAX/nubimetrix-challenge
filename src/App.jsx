import styled from 'styled-components';
import { Logo } from './components/logo/Logo';
import { AsideImageBanner } from './components/banner/AsideImageBanner';

const MainPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
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
  return (
    <MainPageLayout>
      <Header>
        1
      </Header>
      <Aside>
        2
      </Aside>
      <MainContent>
        3
      </MainContent>
    </MainPageLayout>  
  )
}

export default App
