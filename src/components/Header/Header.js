import "./Header.css"
import image from "../../images/film-text.png"

function Header() {
  return (
    <div>
      <span className="header">
        <img src={image} alt="" />
      </span>
    </div>
  )
}

export default Header
