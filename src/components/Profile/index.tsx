import "./styles.css"
import ImgProfile from "../../assets/perfil.jpg"

 
 function Profile() {
 return (
  <div className="container-img">
    <img className="img" src={ImgProfile} alt="foto-perfil" />
  </div>
 )
}

export default Profile