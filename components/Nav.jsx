import Link from "next/link";
import { useEffect } from "react";
//para usar active class en el menu
import { useRouter } from "next/router";

export default function Nav() {
  
  //menu efecto al hacer scroll
  useEffect(function onFirstMount() {
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
          <a className={router.pathname == "/acerca" ? "active" : "" }>Acerca</a>
          </Link>
        </li>
        <li>
          <a href="#">item 2</a>
        </li>
        <li>
          <a href="#">item 3</a>
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
