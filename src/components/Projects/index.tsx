import ThumbOne from "../../assets/thumb-1.svg"
import ThumbTwo from "../../assets/thumb-2.svg"
import "./styles.css"

function Projects() {
    return (
        <div className="container">
            <div className="container-card">
                <img className="container-card_image" src={ThumbOne} alt="pequena foto" />
                <div className="container-card_text">
                    <p className="container-card_text__2">click here to visit</p>
                    <p className="card_text">css tutorial</p>
                </div>
            </div>
            <div className="container-card">
                <img className="container-card_image" src={ThumbTwo} alt="pequena foto 02" />
                <div className="container-card_text">
                    <p className="container-card_text__1">click here to visit</p>
                    <p className="card_text">html tutorial</p>
                </div>
            </div>
        </div>
    )
}

export default Projects