import { RiAngularjsFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Techologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -150}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavascriptLine className="text-7xl text-yellow-400"/>
        </motion.div>

        <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiTypescript className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiAngularjsFill className="text-7xl "/>
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <MdOutlineCss className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMysql className="text-7xl text-sky-700"/>
        </motion.div>

        <motion.div 
           variants={iconVariants(4)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGitSquare className="text-7xl text-red-700"/>
        </motion.div>

        <motion.div 
                   variants={iconVariants(2.5)}
                   initial="initial"
                   animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiPhp className="text-7xl text-cyan-400"/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
