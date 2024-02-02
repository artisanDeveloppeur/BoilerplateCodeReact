import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

const dataTabs = [
  {
    title: "Onglet 1",
    description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat lacus erat, quis tristique sapien euismod eu. Pellentesque sit amet dui ex. Mauris lectus purus, blandit quis tincidunt non, cursus quis lorem."
  },
  {
    title: "Onglet 2",
    description: "2 Proin in gravida justo, a sodales purus. Nullam id felis id metus porta pulvinar eu at quam. Nam rutrum sed lorem non malesuada. Nullam vulputate tortor vitae neque molestie auctor. Nulla id lacus diam.",
  },
  {
    title: "Onglet 3",
    description: "3 Quisque vitae lacus eros. Vestibulum et metus feugiat urna efficitur venenatis sit amet eget metus. Nunc erat libero, placerat in nunc a, auctor fermentum enim.",
  },

];

const contentVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const imgVariants = {
  initial: { scale: 0.1 },
  animate: { scale: 1 },
  exit: { scale: 0.1 },
};

export function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className="tab__container" key={activeTab}>
          <div className="tab__header">
            {dataTabs.map((item, index) => (
              <li
                className={`${index === activeTab && "active"} tab__button`}
                key={item.title}
                onClick={() => setActiveTab(index)}>
                {item.title}
              </li>
            ))}
          </div>
          <div className="tab__content">
            <motion.p
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}>
              {dataTabs[activeTab].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}