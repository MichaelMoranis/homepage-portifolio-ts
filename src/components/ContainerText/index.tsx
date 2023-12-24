import googleIcon from "@assets/google-logo.svg";
import metaIcon from "@assets/meta-logo.svg";
import { Box, Text, Image, Heading } from "@kuma-ui/core";

function ContainerText() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box className="container-text__box">
          <Box
            display="flex"
            justifyContent="flext-start"
            alignItems="center"
            gap="2rem"
          >
            <Image src={googleIcon} alt="" />
            <Heading 
             color="#fff"
             fontSize="28px"
             fontFamily={["Roboto", "sans-serif"]}
             className="container-title__text">
              Google experience
            </Heading>
          </Box>
          <Text
            color="#fff"
            fontSize="16px"
            margin="20px auto"
            width="72vh"
            height="90px"
            fontFamily={["Roboto", "sans-serif"]}
          >
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="flext-start"
            alignItems="center"
            gap="2rem"
          >
            <Image src={metaIcon} alt="imagem icone da meta" />
            <Heading 
              color="#fff"
              fontSize="28px"
              fontFamily={["Roboto", "sans-serif"]}
              >
                Meta experience
            </Heading>
          </Box>
          <Text
            color="#fff"
            fontSize="16px"
            margin="20px auto"
            width="72vh"
            height="90px"
            fontFamily={["Roboto", "sans-serif"]}
          >
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ContainerText;
