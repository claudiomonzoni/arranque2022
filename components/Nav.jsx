import Link from "next/link"

export default function Nav() {
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
            <a href="#">item 1</a>
          </li>
          <li>
            <a href="#">item 2</a>
          </li>
          <li>
            <a href="#">item 3</a>
          </li>
          <li>
            <Link href="/contacto">
             <a>Contacto</a>
            </Link>
          </li>
        </ul>
        <ul id="social"></ul>
      </nav>
    )
}

