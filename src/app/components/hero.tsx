import Image from 'next/image'

export function Hero() {
    return (
        <section className="overflow-hidden relative mt-18 w-full
        h-[calc(100vh-5rem)]      /* padrão para mobile */
        sm:h-[calc(110vh-5rem)]   /* telas >= 640px */
        md:h-[calc(110vh-5rem)]   /* telas >= 768px */
        lg:h-[calc(130vh-5rem)]   /* telas >= 1024px */
      ">
            <Image 
            src="/background.svg"
            alt="Banner Program.Ada"
            className="object-cover object-center"
            fill
            />
        </section>
        
    )
}