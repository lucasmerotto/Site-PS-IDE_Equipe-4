"use client";


export function Nav() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-purple-400 
        flex items-center justify-center px-4 z-50 backdrop-blur-md">
            
            <nav className='flex gap-30 text-[var(--nav)] text-xl font-sans  ' style={{ fontFamily: "var(--font-vt323)" }}
>

                        <a href="#aboutUs" className="cursor-pointer hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg" >Quem somos nós?</a>
                        <a href="#objectives" className="cursor-pointer 
                        hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Nossos objetivos</a>
                        <a href="#projects" className="cursor-pointer 
                        hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Projetos</a>
                        <a href="#meninasDigitais" className="cursor-pointer 
                        hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Meninas Digitais</a>
                        <a href="#members" className="cursor-pointer 
                        hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Integrantes</a>
                        <a href="#contacts" className="cursor-pointer 
                        hover:text-purple-500 px-5 py-1/2 rounded-3xl 
                        transition transform hover:bg-white/20 hover:scale-105 hover:shadow-lg">Contate-nos</a>
            </nav>
        </header>
    )
}