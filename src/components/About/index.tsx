import { Box } from "@kuma-ui/core";
import "./styles.css";

type AboutProps = {
  text: string,
  special?: string
}

function About( {text, special}: AboutProps ) {
  const className = special ? "projects" : "text"
  
  return (
    <Box className={className}>
        {text}.
    </Box>
  );
}



export default About;
