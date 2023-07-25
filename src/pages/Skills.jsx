import React from 'react'
import {motion} from "framer-motion"
import Skill from '../components/Skill'
import "./Skills.css"
export default function Skills() {
  const skills = ["react","redux","node","python","cpp","javascript","css","git","mongodb","framer"];

  return (
    <div className="skills--parent">
      <motion.div className='skills--container'>
        {skills.map((skill) => <Skill key={`${skill}`} skill = {`${skill}`} />)}
      </motion.div>
    </div>
  )
}