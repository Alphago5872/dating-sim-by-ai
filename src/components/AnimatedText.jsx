import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      aria-hidden
      className="text-white text-2xl overflow-scroll h-full"
    >
      {text.split(" ").map((word) =>
        <span className="inline-block">
            {word.split("").map((c) => (
              <motion.span className="inline-block" variants={textVariants}>
                {c}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
        </span>
      )}
    </motion.span>
  );
};

export default AnimatedText;
