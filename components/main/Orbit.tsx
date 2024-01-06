"use client"

import Image from 'next/image'
import React from 'react'
import OrbitSkillDataProvider from '@/components/sub/OrbitSkillDataProvider'
import { Skill_data } from "@/constants"
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Orbit = () => {
  return (
    <section id="skills" className="w-full h-full text-center z-[5]">
        <motion.div
          
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="text-[4rem] font-medium text-center"
        >
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Skills
          </span>
        </motion.div>

        <div className="flex items-center justify-center rounded-full static">
        <div className="w-4/5 h-screen relative flex items-center justify-center rounded-full bg-circularOrbit">
            <Image
                src="./web.png"
                alt="web"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin"
            />
            <div className="flex items-center justify-center rounded-full static">
              {Skill_data.map((image, index) => (
                <OrbitSkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                  x={image.x}
                  y={image.y}
                />
              ))}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Orbit