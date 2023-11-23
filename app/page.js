import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";
import Split from "./split";
import Script from "next/script";

const handleOnReady = () => {
  setState((actual) => ({
    ...actual,
    scriptLoaded: true,
  }));
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Test</title>
        
      </Head>
      
      <Navbar/>
      <article>
        <section className="home_about">
          <header>
            <div>
              <h1>Welkom</h1>
              <p>[klein tekstje]</p>
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

        <Split/>

        <section className="home_post">
          <h1>Laatste Nieuws:</h1>
          <figure data-behold-id="UAkIjTZxmkpylMFcB6bG">{/* Laatste Instagram Post. Gelieve de pagina te herladen indien je deze tekst kan zien. */}</figure>
          <Script src="https://w.behold.so/widget.js" type="module" />
        </section>
      </article>
      
      <Footer />
    </>
  )
}