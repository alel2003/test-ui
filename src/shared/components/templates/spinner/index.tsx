import { motion } from "framer-motion"

export default function Spiner() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-gray-300 border-t-[#7CFC00]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="mt-4 text-lg font-semibold text-[#7CFC00]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        Loading application...
      </motion.p>
    </div>
  )
}
