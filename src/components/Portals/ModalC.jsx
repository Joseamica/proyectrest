import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import * as ReactDOM from "react-dom";

import React from "react";
import { Backdrop } from "./Backdrop";

export const Modalc = ({
  message,
  isOpen,
  onClose,
  children,
  title = "title",
}) => {
  const variants = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 1500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <React.Fragment>
      {/* C-START: Backdrop */}
      <Backdrop onClick={onClose}></Backdrop>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, scale: 0 }}
        className="fixed inset-x-0 bottom-0 top-[80%] bg-white rounded-t-lg p-5 z-40"
      >
        {/* C-START: HEADER */}
        <div className="flex flex-row justify-between">
          <span>{title}</span>
          <button onClick={onClose}>
            <ChevronDownIcon className="h-5 w-5" />
          </button>
        </div>
        {/* children */}
        {children}
      </motion.div>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};
