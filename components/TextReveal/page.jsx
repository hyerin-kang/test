//텍스트 등장 애니메이션 컴포넌트

import { motion } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({ children }) => {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
