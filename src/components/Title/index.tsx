import { Box, Heading } from "@kuma-ui/core";
import "./styles.css";

function Title() {
  return (
    < Box 
     textAlign="center"
     color="#fff"
     m="3rem auto"
     >
      <Heading 
       textAlign="center"
       color="#fff"
       fontFamily={["Roboto", "sans-serif"]}
       fontWeight="800"
       fontSize="55px"
       fontStyle="normal"
       lineHeight="63.357px"
       >
        I do code and <br /> make content <span className="title-phrase">about it!</span>
      </Heading>
    </Box>
  );
}

export default Title;
