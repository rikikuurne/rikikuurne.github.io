import Script from "next/script";
import Navbar from "../navbar";
import Footer from "../footer"

export default function Page() {
  return (
    <>
        <Navbar/>
        
        <article>
          <section className="news_section">
            <div>
              <h1>Nieuws</h1>
              <p>Klik op een post om meer te lezen.</p>
            </div>
            <figure data-behold-id="j7tRJxCY9fyS1dM9ANM7" className="mobile_posts">Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
            <figure data-behold-id="WF8xAoftVsXDI9fCEHFz" className="pc_posts">Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
            <Script src="https://w.behold.so/widget.js" type="module" />
          </section>
        </article>

        <Footer/>
    </>
  )
}