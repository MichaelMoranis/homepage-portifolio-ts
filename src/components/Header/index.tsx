import "./styles.css"
import Logo from "@assets/logo.svg"
import { Box, Flex } from "@kuma-ui/core";

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
          <img src={Logo} alt="logo" />
      </Box>
        <nav className="header-nav">
          <ul className="menu-list">
            <li>home</li>
            <li>projects</li>
            <li>experience</li>
            <li>contact</li>
          </ul>
        </nav>
      </Flex>
    </>
  );
}
export default Header