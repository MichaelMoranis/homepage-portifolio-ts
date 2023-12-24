import './styles.css'
import Js from "@assets/javascript.svg"
import Css from "@assets/css.svg"
import NodeJs from "@assets/nodejs.svg"
import Html from "@assets/html.svg"
import ReactJs from "@assets/reactjs.svg"



function Tags() {
    return (
      <div className="tags">
        <img src={Js} alt="logo javascript" />
        <img src={NodeJs} alt="logo nodejs" />
        <img src={Html} alt="logo html" />
        <img src={ReactJs} alt="logo reactjs" />
        <img src={Css} alt="logo css" />
      </div>
    )
}

export default Tags