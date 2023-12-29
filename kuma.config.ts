import { createTheme } from "@kuma-ui/core";
 
const theme = createTheme({
  colors: {
     primary: "#222",
     secondary: "#f6a5ce"
  },
  spacings: {
    sm: "0.5rem",
    md: "1rem",
  },
  breakpoints: {
    sm: "400px",
    md: "700px",
  },
  components: {
    App: {
      defaultProps: {
        bg: "#222", // bg is short for background
        // p: "40px", // p is short for padding
      },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
});
 
type UserTheme = typeof theme;
 
declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}
 
export default theme;