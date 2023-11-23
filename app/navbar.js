import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Split from "./split";

export default function Navbar() {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/304ae3bd01.js" crossorigin="anonymous"></script>
      </Head>
      <header className="navbar_container">
        <nav>
          {/* pfp */}
          <Image
            src="/profile/eric_pfp2.jpg"
            width={150}
            height={150}
            alt="Picture of Riki"
            className="riki_pfp"/>
          {/* items */}
          <ul className="large_navbar">
              <li><a href="/">Startpagina</a></li>
              <li><Link href="/">Biografie</Link></li>
              <li><Link href="../news">Nieuws</Link></li>
              <li><Link href="/">Galerij</Link></li>
              <li><Link href="/">Contact</Link></li>
          </ul>
          {/* mobile icons */}
          <ul className="icon_navbar">
              <li><a href="/"><Image src="/navbar_icons/house-solid.svg" width={100} height={100} alt="Startpagina icon" className="navbar_icon"/></a></li>
              <li><Link href="/"><Image src="/navbar_icons/address-card-solid.svg" width={100} height={100} alt="Biografie icon" className="navbar_icon"/></Link></li>
              <li><Link href="../news"><Image src="/navbar_icons/bell-solid.svg" width={100} height={100} alt="Nieuws icon" className="navbar_icon"/></Link></li>
              <li><Link href="/"><Image src="/navbar_icons/folder-open-solid.svg" width={100} height={100} alt="Galerij icon" className="navbar_icon"/></Link></li>
              <li><Link href="/"><Image src="/navbar_icons/envelope-solid.svg" width={100} height={100} alt="Contact icon" className="navbar_icon"/></Link></li>
          </ul>
        </nav>
      </header>
      <Split/>
    </>
  )
}