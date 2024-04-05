import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./loader.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "none",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Loader() {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div class="lds-ripple"><div></div><div></div></div>
        </Box>
      </Modal>
    </div>
  );
}
