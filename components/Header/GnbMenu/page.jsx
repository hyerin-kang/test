import { useState } from "react";
import { motion } from "framer-motion";
import { depthLi, gnbContainer } from "@/lib/framerMotion";

const GnbMenu = ({ gnbMenuName, gnbMenuData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <h3 className="gnb-title">{gnbMenuName}</h3>
      <motion.ul
        className="depth1-menu"
        variants={gnbContainer}
        animate="show"
        initial="hidden"
        exit="exit"
      >
        {gnbMenuData.map((depth1, depth1Idx) => (
          <motion.li variants={depthLi} key={depth1Idx}>
            {depth1.depth && depth1.depth.length > 0 ? (
              <span
                onMouseOver={() => {
                  setHoveredIndex(depth1Idx);
                }}
                // onMouseLeave={() => {
                //   setHoveredIndex(null);
                // }}
              >
                {depth1.value}
              </span>
            ) : (
              <a href={depth1.url}>{depth1.value}</a>
            )}

            {hoveredIndex === depth1Idx &&
              depth1.depth &&
              depth1.depth.length > 0 && (
                <motion.ul
                  className="depth2-menu"
                  variants={gnbContainer}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                >
                  {depth1.depth?.map((depth2, depth2Idx) => {
                    return (
                      <motion.li variants={depthLi} key={depth2Idx}>
                        <a href={depth2.url}>{depth2.value}</a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default GnbMenu;
