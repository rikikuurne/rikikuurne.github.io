import Script from "next/script";
import Navbar from "../navbar";
import Footer from "../footer"
import Image from "next/image";

export default function Page() {
  return (
    <>
        <Navbar/>

        <article>
          <section className="temp_section">
            <div>
                <h1>Biografie</h1>
                <h2>Sorry voor het stof! We staan even met sloophamers onze oude website kapot te beuken.
                    <br/>Deze pagina is nog niet klaar, kom dus zeker later nog eens terug.</h2>
                <Image
                src="/images/temporary/bob.png"
                width={834}
                height={1000}
                alt="Foto uitgekozen door Riki"
                className="temp_image"/>
            </div>
          </section>
        </article>

        <Footer/>
    </>
  )
}