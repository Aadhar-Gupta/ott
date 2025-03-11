import HomeTop from "./homeComps/HomeTop";
import ServiceDisplay from "./homeComps/ServiceDisplay";
import Services from "./homeComps/Services";
import AppStore from "./showcase/AppStore";

function Home() {
  return (
    <>
      <HomeTop />
      <AppStore />
      <ServiceDisplay />
      <Services />
    </>
  );
}

export default Home;
