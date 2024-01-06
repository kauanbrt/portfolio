import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
import { FaInstagram, FaYoutube, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[5]">
          <div className="w-full flex flex-col items-center justify-center m-auto">
              <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                  
  
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-[16px]">Comunidade</div>
                      <a href="https://www.youtube.com/channel/UCrWOKzBeiWnR1BDqazEjFVQ" className='linkHover'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>    
                        </p>
                      </a>
                      <a href="https://github.com/kauanbrt" className='linkHover'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer" >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>    
                        </p>
                      </a>
                      {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                          <RxDiscordLogo />
                          <span className="text-[15px] ml-[6px]">Discord</span>    
                      </p> */}
                  </div>
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-[16px]">Redes Sociais</div>
                      <a href="https://www.instagram.com/kauanbrt_/" className='linkHover'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                      </a>
                      <a href="https://twitter.com/KauanBrt_" className='linkHover'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaXTwitter />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </p>
                      </a>
                      <a href="https://www.linkedin.com/in/kauan-borotto-7904401a3/" className='linkHover'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                        </p>
                      </a>
                  </div>
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-[16px]">Sobre</div>
                      <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <a href="#about-me" className='linkHover'>
                            <span className="text-[15px] ml-[6px]">Sobre mim</span> 
                        </a>   
                      </p>
                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <a href="mailto:kauanborotto@gmail.com" className='linkHover'>
                            <span className="text-[15px] ml-[6px]">Torne-se patrocinador</span>
                        </a>    
                      </p>
                      <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <a href="mailto:kauanborotto@gmail.com" className='linkHover'>
                            <span className="text-[15px] ml-[6px]">kauanborotto@gmail.com</span>  
                        </a>  
                      </p>
                  </div>
              </div>
  
              <div className="mb-[20px] text-[15px] text-center">
                  &copy; Kauan Borotto - 2024 - Todos os Direitos Reservados
              </div>
          </div>
      </div>
    )
  }
  
  export default Footer