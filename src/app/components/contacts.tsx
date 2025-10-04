"use client";

export default function Contact() {
  return (
    <section id="contacts" className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-4 border-black border-2">
        <div className="w-full max-w-2xl border border-black shadow-md">
          
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white text-4xl px-4 py-2 border-b border-black">
            <h2 className="font-bold">Contate-nos</h2>
          </div>

          <form className="divide-y divide-black">
            <div className="p-3 flex flex-col">
              <label className="text-sm font-semibold text-gray-800">Nome:</label>
              <input
                type="text"
                className="mt-1 text-black border border-black px-2 py-1"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="p-3 flex flex-col">
              <label className="text-sm font-semibold text-gray-800">Email:</label>
              <input
                type="email"
                className="text-black mt-1 border border-black px-2 py-1"
                placeholder="Digite seu email"
              />
            </div>

            <div className="p-3 flex flex-col">
              <label className="text-sm font-semibold text-gray-800">Mensagem:</label>
              <textarea
                className="text-black mt-1 border border-black px-2 py-1 h-40 resize-none"
                placeholder="Digite sua mensagem"
              />
            </div>

            <div className="p-3 flex justify-start">
              <button
                type="submit"
                className="text-gray-800 border border-black px-4 py-2 hover:bg-purple-700 hover:text-white transition transform hover:scale-106">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
