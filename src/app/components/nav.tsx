"use client";


export function Nav() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-[var(--background)] 
        flex items-center justify-center px-4 z-50 backdrop-blur-md">
            
            <nav className='flex gap-30 text-[var(--nav)] text-xl font-sans '>

                        <a href="#Header" className="cursor-pointer hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg" >Quem somos nós?</a>
                        <a href="#Header" className="cursor-pointer 
                        hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Nossos objetivos</a>
                        <a href="#Header" className="cursor-pointer 
                        hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Projetos</a>
                        <a href="#Header" className="cursor-pointer 
                        hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Meninas Digitais</a>
                        <a href="#Header" className="cursor-pointer 
                        hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Integrantes</a>
                        <a href="#Header" className="cursor-pointer 
                        hover:text-[var(--nav_hover)] px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Contate-nos</a>
            </nav>
        </header>
    )
}