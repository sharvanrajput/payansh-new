import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x - 15, y: position.y - 15 }} // Adjust for centering
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    />
  );
};

export default CustomCursor;
