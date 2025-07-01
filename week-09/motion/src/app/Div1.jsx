"use client";

import { motion } from "motion/react";
import styles from "@/app/div.module.css";

export default function Div1() {
  return (
    <motion.div
      className={styles.div1}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <h1>Wooo div 1</h1>
    </motion.div>
  );
}
