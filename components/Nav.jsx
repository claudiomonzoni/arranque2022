import Link from "next/link";
import { useEffect } from "react";
//para usar active class en el menu
import { useRouter } from "next/router";

export default function Nav() {
  
  //menu efecto al hacer scroll
  useEffect(function onFirstMount() {


      //navegacion
      var x = window.matchMedia("(max-width: 479px)");
      esCell(x); // Call listener function at run time
      x.addListener(esCell); // Attach listener function on state changes
      
      // nav
      
      function esCell(x) {
        if (x.matches) {
          // If media query matches
          const menuIco = document.querySelector(".menu-toggle");
          const mainNav = document.querySelector("#nav");
          // const anchor = document.querySelector(".anchor");
          const abierto = false;
      
          function abrirMenuFull() {
            this.abierto = !this.abierto;
            mainNav.classList.remove("menuFullAbierto");
            mainNav.classList.remove("desanimaMenu");
            menuIco.classList.toggle("is-active");
      
            this.abierto
              ? mainNav.classList.toggle("menuFullAbierto")
              : mainNav.classList.toggle("desanimaMenu");
          }
      
          menuIco.addEventListener("click", abrirMenuFull);
          //anchor.addEventListener("click", abrirMenuFull);
        } else {
          return;
        }
      }
      
 

    const body = document.getElementById("nav");
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }
      
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
        } else if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
          ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
          }
          lastScroll = currentScroll;
        });
        
        return () => {
          window.removeEventListener("scroll", function () {
            return;
          });
        };


        

      }, []);
      
      // useRauter para usar active class en el menu
      const router = useRouter();
      return (
        <nav id="nav">
      <button className="menu-toggle">Menu</button>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="https://via.placeholder.com/150x50" alt="" />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/acerca">
          <a className={router.pathname == "/Acerca" ? "active" : "" }>Acerca</a>
          </Link>
        </li>
        <li>
          <Link href="/contentful">
          <a className={router.pathname=="/contentful" ? "active" : ""}>Datos de Contentful</a>
          </Link>
        </li>
        <li>
          <Link href="/fire">
          <a className={router.pathname == "/fire" ? "active" : ""} >Fire</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a className={router.pathname == "/contacto" ? "active" : ""}>Contacto</a>
          </Link>
        </li>
      </ul>
      <ul id="social"></ul>
    </nav>
  );
}
