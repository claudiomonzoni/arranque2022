import Slider from "../components/Slide";
import Footer from "../components/Footer";
import Link from "next/link"

export default function Home() {
  return (
    <div >
        <div id="cuerpo">
          <nav id="nav">
            <button className="menu-toggle">Menu</button>
            <div className="logo">
              <img src="https://via.placeholder.com/150x50" alt="" />
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

          <section>
            <div className="slider">
              <Slider></Slider>
            </div>
          </section>

        
          <section>
            <div className="conte">
              <h1>Que onda</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ipsa voluptas consectetur? Tenetur eius, aliquam error
                exercitationem fugiat asperiores quis explicabo deserunt totam,
                quidem, ipsa veritatis animi assumenda nisi odit! Blanditiis
                asperiores impedit atque voluptatum voluptas odit quae
                perferendis, error architecto, illum dolorem voluptatem magni
                explicabo, iusto iste dolore ut? Ut officia at, et culpa error
                quidem. In corporis illum quod? Laudantium, error praesentium!
                Sit repellat nemo a ut eaque illum similique aperiam sint
                corporis commodi eligendi dolores omnis quo asperiores dicta
                optio vitae minus ipsa, architecto nulla in non? 
              </p>
            </div>
          </section>
        </div>
    <Footer></Footer>

    </div>
  );
}
