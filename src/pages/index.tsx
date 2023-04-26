import Head from "next/head";
import Image from "next/image";
import TheSlider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import About from "../components/About"
import Theteam from "../components/Theteam"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aakash Labs</title>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="main">
      <article>
        <TheSlider />
        <About />
      <section className="section blog" id="our-team">
        <div className="container">

          <h2 className="h2 section-title underline">Our Team</h2>

          <ul className="blog-list">
            {[1,2,3,4].map(()=>(<Theteam/>))}
          </ul>

        </div>
      </section>
{/* Blog */}
      <section className="section blog" id="contact-form">
        <div className="container">
          <h2 className="h2 section-title underline">Contact Us Form</h2>
          <ul className="blog-list">

          <ContactForm />
          </ul>
        </div>
      </section>

    </article>
  </main>
  {/* Footer */}
    </>
  );
}
