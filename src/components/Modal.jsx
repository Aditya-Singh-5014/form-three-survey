// src/components/Modal.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Modal.css";
import { FaTimes } from "react-icons/fa";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ visible, closeModal, children }) => {
  if (!visible) return null;

  return (
    <motion.div
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="modal-content" variants={modalVariants}>
        <span className="close" onClick={closeModal}>
          <FaTimes />
        </span>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
