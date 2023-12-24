import "./styles.css"
import googleIcon from "@assets/google-logo.svg"
import metaIcon from "@assets/meta-logo.svg"

function ContainerText() {
  return (
    <>
      <div className="container-text">
        <div className="container-text__box">
          <div className="container-text__title">
            <img src={googleIcon} alt="" />
            <h3 className="container-title__text">Google experience</h3>
          </div>
            <p className="text__">
                As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </p>
        </div>
        <div>
          <div className="container-text__title">
            <img src={metaIcon} alt="" />
            <h3 className="container-title__text">Meta experience</h3>
          </div>
            <p className="text__">
                As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </p>
        </div>
      </div>
    </>
  );
}

export default ContainerText;
