import React from 'react'
import {motion} from "framer-motion";

export default function Skill(props) {
  return (
    <motion.div 
      whileHover={ {scale : 1.1 ,  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)' }}
      className= {`skill ${props.skill}`}>
        <img src={`/src/assets/${props.skill}.png`} className={`${props.skill}`} />
    </motion.div>
  )
}