import HomeTop from "@/mycomp/homeComps/HomeTop";
import ServiceDisplay from "@/mycomp/homeComps/ServiceDisplay";
import Services from "@/mycomp/homeComps/Services";
import AppStore from "@/mycomp/showcase/AppStore";

export default function Home() {
  return (
    <>
      <HomeTop />
      <AppStore />
      <ServiceDisplay />
      <Services />
    </>
  );
}
