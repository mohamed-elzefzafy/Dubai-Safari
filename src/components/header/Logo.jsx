import { useNavigate } from "react-router-dom"
import DubaiLogo from "../../images/logo.png"

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={()=> navigate("/") }>
    <img src={DubaiLogo} alt="Dubai-icon" className="logo-img"/>
    <div className="logo-text">
      <p>DUBAI</p>
      <p>DESERT</p>
      <p>SAFARI</p>
    </div>
  </div>
  )
}

export default Logo;