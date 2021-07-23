import "./Header.css"
import image from "../../images/film-text.png"

function Header() {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        <img src={image} alt="" />
      </span>
    </div>
  )
}

export default Header
