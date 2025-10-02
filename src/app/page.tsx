import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer"
import { Objectives } from "./_components/objectives"

const Home = () => {
    return (
        <main className="flex flex-col min-h-screen">
            
            <Nav></Nav>
            <Hero></Hero>
            <Objectives></Objectives>
            <Footer></Footer>
           
        </main>
    )

}

export default Home