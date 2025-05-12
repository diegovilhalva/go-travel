import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

function App() {
  return (
  <Page>
    <Header>
      <Navigation />
      <Hero/>
    </Header>  
  </Page>);
}

export default App;
