import  Logo from "../../images/logo2.svg";
import  icon_facebook from "../../images/icon-facebook.svg";
import  icon_instagram from "../../images/icon-instagram.svg";
import  icon_pinterest from "../../images/icon-pinterest.svg";
import  icon_twitter from "../../images/icon-twitter.svg";
function Footer() {
  return (
    <>
    <footer className="w-full bg-dark-moderate-cyan p-24 flex flex-col items-center space-y-10 font-barlow text-dark-blue">
        <img src={Logo} />

        <ul className="flex space-x-4">
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

        <article className="flex space-x-4">
            <a href="#">
                <img src={icon_facebook} alt="facebook" />
            </a>
            <a href="#">
                <img src={icon_instagram} alt="instagram" />
            </a>
            <a href="#">
                <img src={icon_twitter} alt="twitter" />
            </a>
            <a href="#">
                <img src={icon_pinterest} alt="pinterest" />
            </a>
        </article>

        <article class="text-center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a className="text-yellow" href="https://github.com/emanuel-ra/">Tomas Emanuel Ramirez Abarca</a>.
        </article>
    </footer>
    </>
  )
}

export default Footer