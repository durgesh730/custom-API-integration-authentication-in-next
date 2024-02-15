"use client";
import React from "react";
import ModalCom from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({
  children,
  customOpen,
  setOpen,
  title
}) {
  const customClose = () => setOpen(false)

  return (
    <>
      <ModalCom
        open={customOpen}
        onClose={customClose}
        aria-labelledby="blurred-modal-title"
        aria-describedby="blurred-modal-description"
      >
        <Grid
          className="rounded-xl"
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            padding: ".5rem .5rem",
            minWidth: "32%",
            borderRadius: "10px",
            "@media (max-width: 430px)": {
              minWidth: "100%",
            }
          }}
        >
          <div onClick={customClose} className="flex justify-end">
            <IconButton><CloseIcon /></IconButton>
          </div>
          <div className="text-center" >
            <span className="text-2xl font-medium"> {title} </span>
          </div>
          <div
            style={{
              padding: "0rem 2rem",
            }}
          >
            {children}
          </div>
        </Grid>
      </ModalCom>
    </>
  );
}
