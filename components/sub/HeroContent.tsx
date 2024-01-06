"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start" >
            <motion.div
            variants={slideInFromTop}
            className="welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="welcome-text text-[13px]" >
                    Desenvolvedor Web Fullstack
                </h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >   
                <span>
                    Transformando Ideias em
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" > Experiências</span>
                
                </span>
            </motion.div>

            <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Olá! Eu sou Kauan Borotto, Desenvolvedor Web Fullstack, atualmente estagiando na QualityStorm e estudante de Engenharia de Software na UTFPR. Seja Bem-vindo(a) à minha jornada digital, onde paixão pela programação e inovação se encontram. Explore meu portfólio e descubra como estou transformando ideias em experiências online. Vamos criar algo incrível juntos!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="mailto:kauanborotto@gmail.com"
        >
            Entre em Contato
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <a target="_blank" href="https://storyset.com/people">
          <Image
            src="./astronaut-bg-hidden.svg"
            alt="astronaut"
            height={750}
            width={750}
          />
        </a>
        
      </motion.div>
    </motion.div>
  )
}

export default HeroContent