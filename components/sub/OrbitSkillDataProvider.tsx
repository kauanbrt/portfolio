"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    x: number;
    y:number;
}

const OrbitSkillDataProvider = ({ src, width, height, index, x, y} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (

    <motion.div
        className='absolute'
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index * animationDelay}}
    >
        <motion.div
            ref={ref}
            initial={{x:0, y:0}}
            animate={inView ? {x: x, y: y} : {x:0, y:0}}
            transition={{duration:1.5, delay: index * animationDelay}}
        >
            <motion.div className="div" whileHover={{scale: 1.2}}>
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt='skill image'
                />
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default OrbitSkillDataProvider