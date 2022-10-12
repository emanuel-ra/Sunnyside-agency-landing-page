import { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import icon_hamburger from "../../images/icon-hamburger.svg";
import icon_arrow_down from "../../images/icon-arrow-down.svg";
import desktop_image_header from "../../images/desktop/image-header.jpg";
import mobile_image_header from "../../images/mobile/image-header.jpg";

function Navbar() {
  
  const [active, setActive] = useState(false);

  useEffect(() => {
     
    let links = document.querySelectorAll('.link');

    links.forEach( (link) => {
      link.addEventListener('click', (e)=>{
        links.forEach( (l) => {
          l.classList.remove('active');
        });
        link.classList.add('active');
      });
    });  

  }, []);
  

  return (
    <>
      <nav className="relative">
          
          <picture>
            <source srcSet={mobile_image_header} media="(max-width: 375px)" type="image/jpg" />
            <img src={desktop_image_header} alt="Sunnyside" />
          </picture>
          
          <section className="w-full absolute text-center flex flex-col justify-center items-center top-1/4 space-y-10 lg:space-y-24 animate-bounce" >
            <h1 className="text-white text-6xl">We are creatives</h1>
            <object data={icon_arrow_down}></object>
          </section>

          <section className="w-full absolute top-0 left-0 p-5 ">

              <div className="flex justify-between mb-5">

                <img src={logo} alt="Sunnyside" />

                <ul className="space-x-2 hidden lg:flex">
                  <li>
                    <a className="link font-barlow" href="#">About</a>
                  </li>
                  <li>
                    <a className="link font-barlow" href="#">Services</a>
                  </li>
                  <li>
                    <a className="link font-barlow" href="#">Projects</a>
                  </li>
                  <li>
                    <a className="link font-fraunces" href="#">CONTACT</a>
                  </li>
                </ul>

                <button onClick={()=>{ setActive(!active) }} id="btn_mobile_menu" className="lg:hidden">
                  <img src={icon_hamburger} alt="icon hamburger" />
                </button>

              </div>

              <section className={`${active ? "menu-show":"menu-hidden"} `} id="mobile_nav_menu">

                <section className="flex justify-end">
                  <div className="mt-3" style={{width: "0",height:"0",borderBottom:"50px solid white",borderLeft:" 50px solid transparent"}}></div>
                </section>

                <section className="w-full  bg-white h-[300px] p-10 flex items-center justify-center">
                  
                  <ul className="space-y-8 text-center font-barlow text-lg text-dark-grayish-blue">
                    <li>
                      <a href="#" className="link">About</a>
                    </li>
                    <li>
                      <a href="#" className="link">Services</a>
                    </li>
                    <li>
                      <a href="#" className="link">Projects</a>
                    </li>
                    <li>
                      <a href="#" className="link">CONTACT</a>
                    </li>
                  </ul>
                </section>

              </section>

          </section>
          
      </nav>
    </>
  );
}

export default Navbar;
