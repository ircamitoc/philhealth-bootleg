/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a
        onClick={handleOpen}
        style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="h5" sx={{ "&:hover": {textDecoration: "underline"}}}>Disclaimer</Typography>
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            outline: "none",
            borderRadius: "20px",
            boxShadow: "24",
            border: "10px solid #56BEAA"
          }}
        >
          <Typography variant="h4" id="modal-title" sx={{ fontWeight: "bold" }}>
            Disclaimer
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="body1" id="modal-description">
            The PhilHealth Logo, Photographs and information on this Web Site
            may not be reproduced, copied, or downloaded in any form or by any
            means -- graphic, electronic, or mechanical, including recording,
            taping, photocopying, or information storage and retrieval systems
            -- for use in illegal, damaging or pornographic material.
            <br /><br />But PhilHealth information may be used for educational or
            informative purposes and may be reproduced, copied, or downloaded
            without the written permission from PhilHealth.
          </Typography>
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DisclaimerModal;
