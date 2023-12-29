import ThumbOne from "@assets/thumb-1.svg";
import ThumbTwo from "@assets/thumb-2.svg";
import { Box, Image, Text } from "@kuma-ui/core";

function Projects() {
  return (
    <Box display="flex" justifyContent="center" gap="2rem" margin="1rem auto">
      <Box height={301} width={390}>
        <Image src={ThumbOne} alt="pequena foto" />
        <Box bg="#222" padding="10px 15px">
          <Text
            color="#fff"
            paddingBottom={10}
            fontSize={10}
            fontFamily={["Roboto", "sans-serif"]}
          >
            click here to visit
          </Text>
          <Text
            color="#fff"
            fontWeight={800}
            fontSize={24}
            lineHeight="19px"
            fontFamily={["Roboto", "sans-serif"]}
            textTransform="uppercase"
          >
            css tutorial
          </Text>
        </Box>
      </Box>
      <Box height={301} width={390}>
        <Image src={ThumbTwo} alt="pequena foto 02" />
        <Box bg="#222" padding="10px 15px">
          <Text
            color="#fff"
            paddingBottom={10}
            fontSize={10}
            fontFamily={["Roboto", "sans-serif"]}
          >
            click here to visit
          </Text>
          <Text
            color="#fff"
            fontWeight={800}
            fontSize={24}
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
