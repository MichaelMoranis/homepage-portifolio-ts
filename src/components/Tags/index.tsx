import './styles.css'
import Js from "@assets/javascript.svg"
import Css from "@assets/css.svg"
import NodeJs from "@assets/nodejs.svg"
import Html from "@assets/html.svg"
import ReactJs from "@assets/reactjs.svg"
import { Box, Image } from '@kuma-ui/core'

function Tags() {
    return (
      <Box 
        display="flex"
        justifyContent="center"
        gap="60.445px"
        margin="3rem auto"
      >
        <Image src={Js} alt="logo javascript" />
        <Image src={NodeJs} alt="logo nodejs" />
        <Image src={Html} alt="logo html" />
        <Image src={ReactJs} alt="logo reactjs" />
        <Image src={Css} alt="logo css" />
      </Box>
    )
}

export default Tags