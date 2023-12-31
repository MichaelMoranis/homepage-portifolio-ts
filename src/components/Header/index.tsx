import Logo from "@assets/logo.svg";
import { Box, Flex, HStack, Image, Text } from "@kuma-ui/core";

interface ItemList {
  color: string;
  text: string;
}

const arrItemList: ItemList[] = [
  {
    color: "white",
    text: "home",
  },
  {
    color: "white",
    text: "projects",
  },
  {
    color: "white",
    text: "experience",
  },
  {
    color: "white",
    text: "about",
  },
];

function Header() {
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        fontFamily={["Roboto", "sans-serif"]}
        bg="#222"
        height={82}
      >
        <Box>
          <Image src={Logo} alt="#" />
        </Box>
        <Box className="header-nav">
          <HStack
            display="inline-flex"
            alignItems="flex-start"
            gap="71px"
            listStyle="none"
          >
            {arrItemList.map((list, index) => (
              <Text
                key={index}
                color={list.color}
                cursor="pointer"
                _hover={{
                  color: "orange",
                }}
                fontSize={"fontSizes.lg"}
              >
                {list.text}
              </Text>
            ))}
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
export default Header;
