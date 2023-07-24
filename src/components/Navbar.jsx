import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import leetcode from "../assets/leetcode.svg"
import "./Navbar.css"

export default function Navbar() {

  return (
    <div className="nav--container">
        <div className="nav--left">
            <ul>
                <motion.li 
                  whileHover={{textDecoration: "underline",scale : 0.8}}
                  whileTap = {{scale : 1.2}}
                  >
                    <Link to="/">Home</Link>
                </motion.li>
                <motion.li 
                  whileTap={{scale : 1.2}}
                  whileHover={{textDecoration: "underline",scale : 0.8}}>
                    <Link to="/about">About</Link>
                </motion.li>
                <motion.li                   
                  whileTap={{scale : 1.2}}
                  whileHover={{textDecoration: "underline",scale : 0.8}}>
                    <Link to="/skills">Skills</Link>
                </motion.li>
                <motion.li                   
                  whileTap={{scale : 1.2}}
                  whileHover={{textDecoration: "underline",scale : 0.8}}>
                    <Link to="/projects">Projects</Link>
                </motion.li>
                <motion.li 
                  whileTap={{scale : 1.2}}
                  whileHover={{textDecoration: "underline",scale : 0.8}}>
                    <Link to="/contact">Contact</Link>
                </motion.li>
            </ul>
        </div>
        <div className="nav--right">
            <img           
              className='nav--leetcode'        
              // whileTap={{scale : 1.2}}
              // whileHover={{textDecoration: "underline"}} 
              src={leetcode} 
              />
        </div>
    </div>
  )
}
