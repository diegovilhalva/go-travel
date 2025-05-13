import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";
import Steps from "./components/Steps/Steps";

function App() {
  return (
  <Page>
    <Header>
      <Navigation />
      <Hero/>
    </Header>
    <Main>
      <Steps/>
    </Main>  
  </Page>);
}

export default App;
