import Image from 'next/image'

export function Hero() {
    return (
        <section className="overflow-hidden relative w-screen mt-20 h-[calc(100vh-5rem)]">
            <Image 
            src="/background.svg"
            alt="Banner Program.Ada"
            className="object-cover object-center"
            fill
            />
        </section>
        
    )
}