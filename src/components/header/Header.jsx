import "./Header.css"
import AOS from 'aos'

function Header() {
  AOS.init()
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__link">
          <div className="header__line1"></div>
          <div className="header__host">
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="header__line2 fade-up"> </div>
        </div>
        <div className="header__text">
          <h1 className="fade-up"  data-aos-delay="50" data-aos-duration="1000" data-aos-offset="200">Nest Ielts</h1>
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
        <div className="img">

        </div>
      </div>
    </div>
  )
}

export default Header