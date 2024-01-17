import { motion } from "framer-motion";
import AnimText from "./AnimText";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function A4Animation() {
  return (
    <motion.span className=" ">
      <motion.span
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className=""
      >
        <motion.span
          variants={itemVariants}
          className=""
        >
          <AnimText delay={1} />
        </motion.span>
      </motion.span>
    </motion.span>
  );
}
