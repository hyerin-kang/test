import { motion } from "framer-motion";
import { Breadcrumb } from "../Breadcrumb/page";
import "./subMainBg.scss";
import { containerVariants, itemVariants } from "@/lib/framerMotion";
export const SubMainBg = ({ data, video, title, subText }) => (
  <div className="subPage-main">
    <video autoPlay muted loop playsInline>
      <source src={video} type="video/mp4" />
    </video>
    <div className="main-inner">
      <div className="main-screen">
        <div className="flex">
          {/* 페이지 경로 */}
          <Breadcrumb data={data} />

          {/* 서브타이틀 */}
          <div className="title-area">
            <motion.div
              className="title-line"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {title.map((item, index) => {
                return (
                  <motion.span variants={itemVariants} key={index}>
                    {item}
                  </motion.span>
                );
              })}
              <motion.p variants={itemVariants} className="sub-text">
                {subText}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
