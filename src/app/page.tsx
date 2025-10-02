import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer"
import { Objectives } from "./components/objectives"
import ProjetosCarrossel from "./components/projetos-carrossel"

const Home = () => {
     return (
        <main className="flex flex-col min-h-screen">
            
            <Nav></Nav>
            <Hero></Hero>
            <Objectives></Objectives>
            <ProjetosCarrossel />

            <Footer></Footer>
           
        </main>
    )

}

export default Home