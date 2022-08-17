import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed inset-0 bg-gray-700 bg-opacity-90 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default Backdrop;
