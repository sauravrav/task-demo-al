import Head from "next/head";
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
          <Theteam />
          <ContactForm />
        </article>
       </main>
    </>
  );
}
