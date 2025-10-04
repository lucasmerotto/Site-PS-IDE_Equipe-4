'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { members } from './MemberList';
import { motion, AnimatePresence } from 'framer-motion';

const VerticalCarousel = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(members.length / cardsPerPage);

  const handleNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

    // Calcula quais cards exibir na página atual
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const membersToDisplay = members.slice(startIndex, endIndex);

  const blockHeight = `${(100 / totalPages)}%`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Atraso entre a animação de cada card
        }
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


  return (
    <div id="members" className="scroll-mt-20 flex max-h-relative p-8">
      

      <div className="flex-1 flex flex-col max-w-[1000px] mx-auto">
        <div className="w-full h-12 text-3xl flex items-center justify-start px-6 text-white font-bold border-l-2 border-r-2 border-t-2 border-black"
          style={{
          backgroundImage: "linear-gradient(90deg, #604ABC 0%, #FE7FB4 100%)",
          fontFamily: "var(--font-sans)"}}>

          Integrantes
        </div>

        <div className="bg-white shadow-xl flex flex-row border-2 border-black h-[400px] p-6 border-l-2 border-r-2 border-b-2">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="flex-1 flex justify-center items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {membersToDisplay.map((member, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center bg-gray-200 p-6 shadow-xl md:min-h-[325px] 
                    transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:drop-shadow-[0_0_8px_#604ABC]"
                    variants={cardVariants}
                  >
                    <div className="w-24 h-24 relative mb-4 p-1">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain shadow-md"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 text-base font-medium mt-2 text-center">
                      {member.course}
                    </p>
                    <p className="text-gray-900 text-s mt-1 text-center">
                      Ingresso na faculdade: {member.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-center justify-center ml-4 border-2 border-gray-700 bg-gray-200 p-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              className="
                px-3 py-1
                border-2 border-gray-700
                bg-gray-200
                font-bold
                text-black
                shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
                active:bg-gray-300
                active:shadow-none
                rounded-none
              "
            >
              <span className="inline-block transform rotate-90">&lt;</span>
            </button>
            <div className="flex-1 w-5 bg-gray-400 my-2 relative overflow-hidden shadow-[inset_2px_2px_0_theme(colors.gray.600),inset_-2px_-2px_0_theme(colors.gray.300)]">
              <div
                className="
                  absolute top-0 w-5 transition-all duration-500 ease-in-out
                  border-2 border-gray-700 shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
                "
                style={{
                  height: blockHeight,
                  top: `calc(${currentPage} * ${100 / totalPages}%)`,
                  background: "linear-gradient(180deg, #604ABC 0%, #FE7FB4 100%)"
                }}
              ></div>
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="
                px-3 py-1
                border-2 border-gray-700
                bg-gray-200
                font-bold
                text-black
                shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888]
                active:bg-gray-300
                active:shadow-none
                rounded-none
              "
            >
              <span className="inline-block transform -rotate-90">&lt;</span>
            </button>
          </div>
        </div>
      </div>

  </div>
  );
};

export default VerticalCarousel;