"use client"
import { motion } from "framer-motion"
const variants = {
    hidden: { opacity: 0, x: -60, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
        {/* flex min-h-screen flex-col items-center justify-between p-24 bg-base-300 */}
        <div className="flex flex-col items-center justify-between p-24 min-h-screen border border-white bg-base-300">
    {children}
        </div>
    </motion.main>
    )  
}