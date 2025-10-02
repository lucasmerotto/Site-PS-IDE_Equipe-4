import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer"
import { Objectives } from "./_components/objectives"
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