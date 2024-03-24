import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "./../assets/homehero.jpg";
import Footer from "../components/Footer";
import Teams from "../components/ContactForm";

function TeamsUs() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Teams"
        btnClass="hide"
      />
      <Teams />
      <Footer />
    </>
  );
}

export default TeamsUs;
