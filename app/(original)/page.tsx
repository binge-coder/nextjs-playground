'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >

        <Link href="/nigamoni" className='btn btn-secondary'> nigamoni </Link>

      </motion.div>
      <Link href="/serveractionCool" className='btn btn-secondary'> server action </Link>
      <Link href={"/layoutboi"} className='btn btn-primary'> layout boi</Link>
      <button className='btn btn-accent btn-outline'> hello kitty </button>

    </>

  )
}
