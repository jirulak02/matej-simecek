"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledButton = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: 0,
  },
});

export const StyledInput = styled(TextField)({
  "&": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  "& .MuiInputBase-root": {
    borderRadius: 0,
  },
});
