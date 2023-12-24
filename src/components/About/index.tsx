import "./styles.css";

type AboutProps = {
  text: string,
  special?: string
}

function About( {text, special}: AboutProps ) {
  const className = special ? "projects" : "text"
  
  return (
    <div className={className}>
        {text}.
    </div>
  );
}



export default About;
