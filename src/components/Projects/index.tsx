import ThumbOne from "@assets/thumb-1.svg";
import ThumbTwo from "@assets/thumb-2.svg";
import "./styles.css";
import { Box, Image, Text } from "@kuma-ui/core";

function Projects() {
  return (
    <Box display="flex" justifyContent="center" gap="2rem" margin="1rem auto">
      <Box height="301px" width="390px">
        <Image src={ThumbOne} alt="pequena foto" />
        <Box bg="#222" padding="10px 15px">
          <Text
            color="#fff"
            paddingBottom="10px"
            fontSize="10px"
            fontFamily={["Roboto", "sans-serif"]}
          >
            click here to visit
          </Text>
          <Text
            color="#fff"
            fontWeight="800"
            fontSize="24px"
            lineHeight="19px"
            fontFamily={["Roboto", "sans-serif"]}
            textTransform="uppercase"
          >
            css tutorial
          </Text>
        </Box>
      </Box>
      <Box height="301px" width="390px">
        <Image src={ThumbTwo} alt="pequena foto 02" />
        <Box bg="#222" padding="10px 15px">
          <Text
            color="#fff"
            paddingBottom="10px"
            fontSize="10px"
            fontFamily={["Roboto", "sans-serif"]}
          >
            click here to visit
          </Text>
          <Text
            color="#fff"
            fontWeight="800"
            fontSize="24px"
            lineHeight="19px"
            fontFamily={["Roboto", "sans-serif"]}
            textTransform="uppercase"
          >
            html tutorial
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
