import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import { Objectives } from "./components/objectives";
import { AboutUs } from "./components/aboutus";
import { Info } from "./components/info";
import VerticalCarousel from './components/grid-integrantes';
import Contact from "./components/contacts";

import ProjetosCarrossel from "./components/projetos-carrossel"

const Home = () => {
     return (
        <main className="flex flex-col min-h-screen">
            
            <Nav />
            <Hero />
            <AboutUs />
            <Objectives />
            <ProjetosCarrossel />
            <Info />
            <VerticalCarousel />
            <Contact />
            <Footer />
           
        </main>
    )

}

export default Home