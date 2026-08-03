import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
