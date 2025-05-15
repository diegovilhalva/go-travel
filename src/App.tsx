import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExploreMore from "./components/ExploreMore/ExploreMore";
import Footer from "./components/Footer";
import FrequentTraveler from "./components/FrequentTraveler";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Page from "./components/Page";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>
        <Main>
          <Steps />
          <Services />
          <News />
          <ExploreMore />
          <FrequentTraveler />
          <Testimonials />
        </Main>
        <Footer />
      </Page>
      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default App;
