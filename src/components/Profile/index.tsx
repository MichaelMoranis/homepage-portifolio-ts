import { Box, Image } from "@kuma-ui/core"
import ImgProfile from "@assets/perfil.jpg"

 
 function Profile() {
 return (
  <Box 
    margin="3em auto"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Image 
      height="213px"
      width="213px"
      borderRadius="100px"
      src={ImgProfile}
      alt="foto-perfil" 
    />
  </Box>
 )
}

export default Profile