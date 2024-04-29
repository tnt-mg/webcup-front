import { motion } from "framer-motion"

const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.5, 1.2, 0.8, 1.0],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
}

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.div
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
