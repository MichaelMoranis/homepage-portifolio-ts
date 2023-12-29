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
        as="button"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="204px"
          height="64px"
          borderRadius={50}
          bg="#fff"
          fontSize="21.32px"
          fontWeight="500"
          fontFamily={["Roboto", "sans-serif"]}
          cursor="pointer"
          _hover={{
            bg: "#ff8660",
            color: "#fff"
          }}
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
          _hover={{
            bg: "#fff",
            color: "#000"
          }}
        >
          Download CV
        </Box>
      </HStack>
    </>
  );
}

export default Button;
