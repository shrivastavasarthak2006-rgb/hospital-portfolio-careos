import { AnimatePresence, motion } from "framer-motion";
import Logo from "../common/Logo";

export default function SplashScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-care-radial"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="mb-5"
            >
              <Logo />
            </motion.div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-care-teal">
              The AI Layer for Healthcare
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
