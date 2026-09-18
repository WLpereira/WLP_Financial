import { StylesConfig } from "react-select";

export const estiloConstumizado: StylesConfig<unknown, false> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    padding: "2px 4px",
    backgroundColor: "#FFFFFF",
    border: isFocused ? "1.5px solid #00B4D8" : "1.5px solid #CBD5E1",
    boxShadow: isFocused ? "0 0 0 3px rgba(0, 180, 216, 0.18)" : "none",
    borderRadius: "10px",
    fontSize: "0.92rem",
    fontWeight: 500,
    color: "#0F172A",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: isFocused ? "#00B4D8" : "#94A3B8",
    },
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "12px",
    boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
    border: "1px solid #E2E8F0",
    overflow: "hidden",
    zIndex: 99,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? "not-allowed" : "pointer",
      backgroundColor: isSelected
        ? "#1B3A8C"
        : isFocused
        ? "rgba(0, 180, 216, 0.12)"
        : "transparent",
      color: isSelected ? "#FFFFFF" : isFocused ? "#1B3A8C" : "#1E293B",
      fontSize: "0.9rem",
      fontWeight: isSelected ? 600 : 500,
      padding: "8px 14px",
    };
  },
};