import "./styles.css"
import Logo from "../../assets/logo.svg"

function Header() {
  return (
    <>
      <div className='header'>
      <div>
          <img src={Logo} alt="logo" />
         </div>
        <nav className="header-nav">
          <ul className="menu-list">
            <li>home</li>
            <li>projects</li>
            <li>experience</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header