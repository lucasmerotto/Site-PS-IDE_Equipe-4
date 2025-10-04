'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const projetos = [
    {
      titulo: "Portas Abertas 2025",
      descricao: 'Uma oficina de programação em Portugol para o evento "Portas Abertas".',
      detalhes: "O grupo preparou uma apresentação sobre sua história e conduziu sessões de 30 minutos com os participantes, que tiveram uma boa adesão.",
      imagem: "/carrossel-img1.jpg"
    },
    {
      titulo: "Torneio Feminino de Programação",
      descricao: "Uma colaboração com o Laboratório de Programação Competitiva (LPC).",
      detalhes: "As atividades envolveram o auxílio na organização do torneio, monitoria das participantes durante a prova e a confecção de materiais de divulgação (artes e slides).",
      imagem: null
    },
    {
      titulo: "Semana de Cofferência - Roda de Conversa",
      descricao: "Um evento para divulgar o projeto Program.Ada para outras mulheres da instituição.",
      detalhes: "O grupo apresentou seu papel na comunidade e como o projeto foi criado.",
      imagem:  "/carrossel-img2.jpg"
    },
    {
      titulo: "Ação nas Enchentes",
      descricao: "Uma iniciativa de voluntariado para ajudar vítimas das enchentes.",
      detalhes: "O projeto envolveu a arrecadação de fundos, a compra e distribuição de itens de higiene, roupas e alimentos para animais, além da organização de notas e formulários para prestação de contas.",
      imagem: null
    },
    {
      titulo: "Carpool",
      descricao: "Um projeto de caronas solidárias, criado em resposta às enchentes.",
      detalhes: "O grupo organizou formulários e grupos para conectar colegas que precisavam de transporte para o campus.",
      imagem: null
    },
  ];

export default function ProjetosCarrossel() {
  const [index, setIndex] = useState(0);
  const projetoAtual = projetos[index];
  const blockWidth = `${100 / projetos.length}%`;

  return (
    <div
      className="relative max-w-2xl mx-auto bg-[#e5e5f7] shadow-lg"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Barra de título */}
      <div id="projects"
        className="scroll-mt-40 text-white font-bold px-6 py-2 text-2xl border-t-4 border-l-4 border-r-4 border-b-4 border-black overflow-hidden h-12 flex items-center"
        style={{
          minWidth: 220,
          backgroundImage: "linear-gradient(90deg, #604ABC 0%, #FE7FB4 100%)"
    }}
      >
        Projetos 2024/2025
      </div>

      {/* Imagem */}
      {projetoAtual.imagem && (
        <motion.img
          key={projetoAtual.imagem}
          src={projetoAtual.imagem}
          alt={projetoAtual.titulo}
          className="hidden md:block absolute top-[-8px] right-[-8px] w-52 h-36 object-cover shadow-lg border-2 border-black z-20 drop-shadow-[0_0_8px_#604ABC]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}

      {/* Conteúdo */}
      <div className="pt-6 px-8 text-black bg-white border-l-4 border-r-4 border-b-2 border-black font-mono min-h-60 h-auto md:h-60 overflow-hidden">
        <h2 className="font-bold text-justify mb-2 text-2xl">{projetoAtual.titulo}</h2>
        <p className="mb-2 w-full md:w-96 text-justify text-lg">{projetoAtual.descricao}</p>
        <p className="pb-8 text-lg">{projetoAtual.detalhes}</p>
      </div>

      {/* Barra de navegação */}
      <div className="flex items-center px-2 py-2 bg-gray-200 border-l-4 border-r-4 border-b-4 border-t-2 border-black">
        <button
          className="
            px-3 py-1
            border-2
            border-gray-700
            bg-gray-200
            font-bold
            text-black
            shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
            active:bg-gray-300
            active:shadow-none
            rounded-none
          "
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          {"<"}
        </button>
        <div className="flex-1 h-5 bg-gray-400 mx-2 relative overflow-hidden shadow-[inset_2px_2px_0_theme(colors.gray.600),inset_-2px_-2px_0_theme(colors.gray.300)]">
          <div
            className="
              absolute top-0 h-5 transition-all duration-500 ease-in-out
              border-2 border-gray-700 shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
            "
            style={{
              width: blockWidth,
              left: `calc(${index} * 20%)`,
              background: "linear-gradient(90deg, #604ABC 0%, #FE7FB4 100%)"
            }}
          ></div>
        </div>
        <button
          className="
            px-3 py-1
            border-2
            border-gray-700
            bg-gray-200
            font-bold
            text-black
            shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
            active:bg-gray-300
            active:shadow-none
            rounded-none
          "
          onClick={() => setIndex(index + 1)}
          disabled={index === projetos.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
        