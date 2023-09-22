"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledButtonPrimary = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: "0.125rem",
    color: "rgb(var(--white))",
    backgroundColor: "rgb(var(--primary-light))",
    boxShadow: "none",
    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
  },
  "&.MuiButton-root:hover": {
    backgroundColor: "rgb(var(--primary-dark))",
    transform: "scale(1.05)",
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-focused": {
    boxShadow: "none",
  },
  "&.MuiButton-root.Mui-disabled": {
    cursor: "not-allowed",
    backgroundColor: "rgb(156 163 175)",
    color: "rgb(var(--primary-dark))",
  },
});

export const StyledButtonSecondary = styled(Button)({
  "&.MuiButton-root": {
    borderRadius: "0.125rem",
    backgroundColor: "rgb(var(--white))",
    color: "rgb(var(--primary-dark))",
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
    color: "rgb(var(--primary-dark))",
  },
});

export const StyledInput = styled(TextField)({
  "&": {
    backgroundColor: "rgba(var(--white), 0.25)",
  },
  "& .MuiInputBase-root": {
    borderRadius: "0.125rem",
  },
  "& .MuiInputBase-input": {
    color: "rgb(var(--white))",
    borderColor: "transparent",
  },
  "&.MuiTextField-root": {
    borderRadius: "0.125rem",
  },
  "& .MuiInputLabel-root": {
    color: "rgb(var(--white))",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgb(var(--white))",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(var(--white))",
  },
  "&:hover .MuiInputBase-multiline .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(var(--white))",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(var(--white))",
  },
});
