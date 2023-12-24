import { Box, HStack } from "@kuma-ui/core";

function Button() {
  return (
    <>
      <HStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        m="3rem 0"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="204px"
          height="64px"
          borderRadius="50px"
          bg="#fff"
          fontSize="21.32px"
          fontWeight="500"
          fontFamily={["Roboto", "sans-serif"]}
          cursor="pointer"
        >
          Get in Touch
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="204px"
          height="64px"
          borderRadius="50px"
          bg="#000"
          border="1px solid #222"
          color="#fff"
          fontSize="21.32px"
          fontWeight="500"
          fontFamily={["Roboto", "sans-serif"]}
          cursor="pointer"
        >
          Download CV
        </Box>
      </HStack>
    </>
  );
}

export default Button;
