"use client";
export function Footer() {
    return (
        <footer className=" bg-purple-400 
        w-full h-32 flex items-center justify-center px-4 z-50">
            
            <div className='flex gap-40 '>

                <a href="https://www.instagram.com/program.ada.ufrgs/" className="cursor-pointer transition transform hover:scale-112" target="_blank" >
                    <img src="/instagram_icon.png" alt="Instagram Program.Ada" className="w-9 h-9.2 object-cover" />
                </a>
                <a href="https://www.linkedin.com/company/program-ada-ufrgs/?originalSubdomain=br" className="cursor-pointer transition transform hover:scale-112" target="_blank">
                    <img src="/linkedin_icon.png" alt="Linkedin Program.Ada" className="w-9 h-9.2 object-cover" />
                </a>
                <a href="https://idejr.com.br/" className="cursor-pointer transition transform hover:scale-112" target="_blank">
                    <img src="/ide_icon.png" alt="Site IDE" className="w-12 h-9 object-cover" />
                </a>
                       
            </div>
        </footer>
    )
}


