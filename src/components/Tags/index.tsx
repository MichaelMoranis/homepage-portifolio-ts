import Js from "@assets/javascript.svg"
import Css from "@assets/css.svg"
import NodeJs from "@assets/nodejs.svg"
import Html from "@assets/html.svg"
import ReactJs from "@assets/reactjs.svg"
import { Box, Image } from '@kuma-ui/core'

interface Tag {
  src: string,
  alt: string
}

const tagsData: Tag[] =  [
  {src: Js, alt: "logo javascript"},
  {src: Css, alt: "logo css"},
  {src: NodeJs, alt: "logo node js"},
  {src: Html, alt: "logo html"},
  {src: ReactJs, alt: "logo react js"},
]

function Tags() {
    return (
      <Box 
        display="flex"
        justifyContent="center"
        gap="60.445px"
        margin="3rem auto"
      >
        {tagsData.map((tag, index) => (
          <Image key={index} src={tag.src} alt={tag.alt} />
        ))}
      </Box>
    )
}

export default Tags