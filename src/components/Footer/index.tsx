import { Box, Heading, Text, Image } from "@kuma-ui/core";

function Footer() {
  return (
    <Box
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor="#222"
      mt="5rem"
    >
      <Heading
        color="white"
        fontSize="2rem"
        fontFamily={["Roboto", "sans-serif"]}
        mb="2rem"
        mt="2rem"
      >
        Contact
      </Heading>
      <Text
        width="600px"
        height="150px"
        fontSize="1.3rem"
        fontFamily={["Roboto", "sans-serif"]}
      >
        Seasoned Full Stack Software Engineer with over 8 years of hands-on
        experience in designing and implementing robust, scalable, and
        innovative web solutions. Adept at leveraging a comprehensive skill set
        encompassing front-end and back-end technologies
      </Text>
      <Text>michaelmoranesul@gmail.com</Text>
      <Box>
       <Image />
       <Image />
       <Image />
      </Box>
    </Box>
  );
}

export default Footer;
