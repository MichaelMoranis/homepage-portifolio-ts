import "./styles.css"
import Logo from "@assets/logo.svg"
import { Box, Flex, HStack, Image, Text } from "@kuma-ui/core";

function Header() {
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        fontFamily={["Roboto", "sans-serif"]}
        bg="#222"
        height="82px"
      >
      <Box>
          <Image src={Logo} alt="#"/>
      </Box>
        <Box className="header-nav">
          <HStack 
            display="inline-flex"
            alignItems="flex-start"
            gap="71px"
            listStyle="none"
          >
            <Text color="white">home</Text>
            <Text color="white">projects</Text>
            <Text color="white">experience</Text>
            <Text color="white">about</Text>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
export default Header