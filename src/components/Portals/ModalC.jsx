import { useState } from "react";
import * as ReactDOM from "react-dom";

const MODAL_STYLES = {
  borderRadius: 10,
  position: "fixed",
  top: "70%",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export const Modalc = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
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
