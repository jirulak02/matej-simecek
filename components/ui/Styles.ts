"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledButton = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: "0.125rem",
  },
});

export const StyledInput = styled(TextField)({
  "&": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  "& .MuiInputBase-root": {
    borderRadius: "0.125rem",
  },
  "&.MuiTextField-root": {
    borderRadius: "0.125rem",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});
