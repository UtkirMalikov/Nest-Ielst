import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__link">
          <div className="header__line1"></div>
          <div className="header__host">
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="header__line2"> </div>
        </div>
        <div className="header__text">
          <h1>Nest Ielts</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="header__reg">
            <div className="header__reg1">
              <a href="#">Ro'yxatdan o'tish</a>
            </div>
            <div className="header__reg2">
              <a href="#">Aloqa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header