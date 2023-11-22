import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar/>
      <article>
        <section className="between_line"></section>

        <section className="home_about">
          <header>
            <div>
              <h1>Welkom</h1>
              <p>[klein tekstjes]</p>
            </div>
            <Image
            src="/images/home_page/spitsbroeders.jpg"
            width={834}
            height={1000}
            alt="Foto uitgekozen door Riki"
            className="home_image"/>
            <Image
            src="/images/home_page/heks.jpg"
            width={834}
            height={1000}
            alt="Foto uitgekozen door Riki"
            className="home_image"/>
            <Image
            src="/images/home_page/clochard.jpg"
            width={834}
            height={1000}
            alt="Foto uitgekozen door Riki"
            className="home_image"/>
          </header>
        </section>

        <section className="between_line"></section>

        <section className="home_post">
          <h1>Laatste Nieuws:</h1>
          <figure data-behold-id="3Qgyp5yKV3vH9WJpnSqz">Laatste Instagram Post.<br/>Gelieve de pagina te herladen indien je deze tekst kan zien</figure>
          <script src="https://w.behold.so/widget.js" type="module"></script>
        </section>
      </article>

      <section className="between_line"></section>

      <Footer />
    </>
  )
}