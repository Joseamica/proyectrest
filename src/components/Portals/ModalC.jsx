import {
  ArrowDownIcon,
  ArrowsExpandIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { ArrowNarrowDownIcon, ArrowSmDownIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../ui/Button/Button";
import { ModalButton } from "../ui/Button/ModalButton";
import Backdrop from "./Backdrop";
import React from "react";

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
    // <div className="flex bg-gray-500 bg-opacity-70 absolute top-0 left-0 right-0 bottom-0 items-end ">
    // <div style={OVERLAY_STYLES}>
    <React.Fragment>
      <Backdrop onClick={onClose}></Backdrop>
      {/* // <Backdrop> */}
      {/* <div style={MODAL_STYLES}> */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, scale: 0 }}
        className="fixed inset-x-0 bottom-0 top-[80%] bg-white rounded-t-lg p-5 z-40"
      >
        {/* header */}
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

// export function Component({ modal, close, setButton, message }) {
//   // const [open, setOpen] = useState(false);
//   return (
//     <div className="component">
//       <button onClick={() => setButton(modal)}>Open Modal</button>
//       <Modalc
//         message="Hello World!"
//         isOpen={modal}
//         onClose={() => setButton(false)}
//       >
//         <div>Hola</div>
//       </Modalc>
//     </div>
//   );
// }
