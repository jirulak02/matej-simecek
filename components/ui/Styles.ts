"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledButtonPrimary = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: "0.125rem",
    backgroundColor: "rgb(0 161 193)",
    boxShadow: "none",
    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
  },
  "&.MuiButton-root:hover": {
    backgroundColor: "rgb(10 45 77)",
    transform: "scale(1.05)",
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-focused": {
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-disabled": {
    cursor: "not-allowed",
    backgroundColor: "rgb(156 163 175)",
    color: "rgb(10 45 77)",
  },
});

export const StyledButtonSecondary = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: "0.125rem",
    backgroundColor: "white",
    color: "rgb(10 45 77)",
    boxShadow: "none",
    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
  },
  "&.MuiButton-root:hover": {
    backgroundColor: "rgb(229 229 229)",
    transform: "scale(1.05)",
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-focused": {
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-disabled": {
    cursor: "not-allowed",
    backgroundColor: "rgb(156 163 175)",
    color: "rgb(10 45 77)",
  },
});

export const StyledInput = styled(TextField)({
  "&": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  "& .MuiInputBase-root": {
    borderRadius: "0.125rem",
  },
  "& .MuiInputBase-input": {
    color: "white",
    borderColor: "transparent",
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
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
});
