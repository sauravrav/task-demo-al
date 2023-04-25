import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Canaus</title>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="main">
      <article>
{/* Hero */}
      <section className="hero" id="home">
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle">The Number One Consultancy for Abroad Study in Nepal</p>

            <h2 className="h2 hero-title">We Help Students Like You to Achieve Your Dreams</h2>

            <p className="hero-text">
            Studying abroad is a unique opportunity to gain new perspectives, learn new languages, and experience different cultures.
            </p>

            <button className="btn"><a style={{color:'white'}} href="#about">Learn More</a></button>

          </div>

          <figure className="hero-banner">
          <Image
            src="/images/seattle-tower.jpg"
            width={694}
            height={529}
            loading="lazy"
            alt="hero-banner"
            className="w-100 banner-animation"
        />
          </figure>

        </div>
      </section>

{/* About */}

      <section className="section about" id="about">
        <div className="container">

          <figure className="about-banner">
            <Image
              src="/images/sydney-opera.jpg"
              width={700}
              height={532}
              loading="lazy"
              alt="about-banner"
              className="w-100 banner-animation"
            />
          </figure>

          <div className="about-content">

            <h2 className="h2 section-title underline">Why Our Consultancy</h2>

            <p className="about-text">
            We understand that the application process can be overwhelming, which is why we offer comprehensive services to help students navigate every step of the process. Our services include assistance with university selection, admission applications, student visas, and even pre-departure preparations.
            </p>

            <p className="about-text">
            We ensure that our students are fully equipped with the necessary tools and information to make informed decisions about their academic pursuits abroad.
            </p>

            <ul className="stats-list">

              <li className="stats-card">
                <p className="h3 stats-title">5000+</p>

                <p className="stats-text">Satisfied Students</p>
              </li>

              <li className="stats-card">
                <p className="h3 stats-title">20+</p>

                <p className="stats-text">Countries</p>
              </li>

              <li className="stats-card">
                <p className="h3 stats-title">10</p>

                <p className="stats-text">Years Completed</p>
              </li>

            </ul>

          </div>

        </div>
      </section>

{/* Service */}
      <section className="section service" id="services">
        <div className="container">

          <h2 className="h2 section-title underline">Our Services</h2>

          <ul className="service-list">

            <li>
              <div className="service-card">

                  <Image
                      src="/images/uni2.jpg"
                      width={700}
                      height={500}
                      loading="lazy"
                      alt="about-banner"
                      className="w-100"
                  />

                <h3 className="h3 title">University Selection and Application Assistance</h3>

                <p className="text">
                Our University Selection and Application Assistance service simplifies the process of choosing the right university and provides personalized advice on selecting institutions. Our experts assist with the admission process, including form completion, essays, and document submission. We guide students on meeting admission requirements, such as language proficiency and tests.
                </p>

              </div>
            </li>

            <li>
              <div className="service-card">

              <Image
                      src="/images/passport.jpg"
                      width={700}
                      height={500}
                      loading="lazy"
                      alt="about-banner"
                      className="w-100"
                  />

                <h3 className="h3 title">Visa Assistance</h3>

                <p className="text">
                Our Visa Assistance service helps students obtain the required student visa to study abroad. We guide students on the visa application process, required documents, and legal requirements. Our team of experts ensures that students have the necessary information to complete their visa application accurately and efficiently. We assist students in preparing for their visa interviews, addressing any concerns or questions they may have, and helping them obtain the visa on time.
                </p>

              </div>
            </li>

            <li>
              <div className="service-card">

              <Image
                      src="/images/predep.jpg"
                      width={700}
                      height={500}
                      loading="lazy"
                      alt="about-banner"
                      className="w-100"
                  />

                <h3 className="h3 title">Pre-departure Preparation</h3>

                <p className="text">
                We provide guidance on travel arrangements, accommodation, banking, and healthcare, ensuring that students are well prepared for their new environment. Our team of experts also provides advice on cultural differences, academic expectations, and language skills, helping students adapt to their new surroundings. We offer workshops and training sessions to help students develop essential skills, such as time management and intercultural communication.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>

{/* Test Prep */}

      <section className="section features" id="training">
        <div className="container">

          <h2 className="h2 section-title underline">Test Preparations</h2>

          <ul className="features-list">

            <li>
              <div className="features-card">

                <div className="icon">
                  <ion-icon name="bulb-outline"></ion-icon>
                </div>

                <div className="content">
                  <h3 className="h3 title">TOEFL / IELTS / PTE</h3>

                  <p className="text">
                    We offer 6 weeks test prep for TOEFL, IELTS, and PTE English proficiency tests.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div className="features-card">

                <div className="icon">
                  <ion-icon name="color-palette-outline"></ion-icon>
                </div>

                <div className="content">
                  <h3 className="h3 title">SAT / SAT II</h3>

                  <p className="text">
                  Our SAT test prep service provides comprehensive study materials and expert guidance to help students excel on their exam.
                  </p>
                </div>

              </div>
            </li>

          </ul>

          <figure className="features-banner">
            <img src="../images/hero-banner.png" width="369" height="318" loading="lazy" alt="Features Banner"
              className="w-100 banner-animation" />
          </figure>

          <ul className="features-list">

            <li>
              <div className="features-card">

                <div className="icon">
                  <ion-icon name="code-slash-outline"></ion-icon>
                </div>

                <div className="content">
                  <h3 className="h3 title">GMAT / GRE</h3>

                  <p className="text">
                  With our GMAT and GRE test prep service, students can feel confident and prepared for the exam, enabling them to pursue their academic and career aspirations with confidence.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div className="features-card">

                <div className="icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>

                <div className="content">
                  <h3 className="h3 title">Japanese NLP test</h3>

                  <p className="text">
                  Our Japanese NLP test prep service provides expert guidance, personalized instruction, and practice tests to improve students' scores.
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

{/* Blog */}
      <section className="section blog" id="destinations">
        <div className="container">

          <h2 className="h2 section-title underline">Study Destinations</h2>

          <ul className="blog-list">

            <li>
              <div className="blog-card">

                <figure className="banner">
                  <a href="#">
                    <img src="../images/usa.jpg" width="750" height="350" loading="lazy"
                      alt="USA Image" className="img-cover" />
                  </a>
                </figure>

                <div className="content">

                  <h3 className="h3 title">
                    <a href="#">
                      Study in USA
                    </a>
                  </h3>

                  <p className="text">
                  Studying in the USA provides diverse academic opportunities, cultural exposure, networking, and career prospects.
                  </p>

                  <div className="meta">

                    <button className="share" aria-label="Share">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="banner">
                  <a href="#">
                    <img src="../images/australia.jpg" width="750" height="350" loading="lazy"
                      alt="Australia Image" className="img-cover" />
                  </a>
                </figure>

                <div className="content">

                  <h3 className="h3 title">
                    <a href="#">
                      Study in Australia
                    </a>
                  </h3>

                  <p className="text">
                  Australia provides a world-class education system, a safe and welcoming environment, and ample employment opportunities.
                  </p>

                  <div className="meta">

                    <button className="share" aria-label="Share">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="banner">
                  <a href="#">
                    <img src="../images/canada.jpg" width="750" height="350" loading="lazy"
                      alt="Canada Image" className="img-cover" />
                  </a>
                </figure>

                <div className="content">

                  <h3 className="h3 title">
                    <a href="#">
                      Study in Canada
                    </a>
                  </h3>

                  <p className="text">
                  A Canadian education offers a welcoming, multicultural environment, opportunities for personal growth, world-class research facilities, and global career prospects.
                  </p>

                  <div className="meta">

                    <button className="share" aria-label="Share">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="banner">
                  <a href="#">
                    <img src="../images/japan.jpg" width="750" height="350" loading="lazy"
                      alt="Japan Image." className="img-cover" />
                  </a>
                </figure>

                <div className="content">

                  <h3 className="h3 title">
                    <a href="#">
                      Study in Japan
                    </a>
                  </h3>

                  <p className="text">
                  Immersing oneself in Japanese education offers a unique cultural experience, cutting-edge technology, academic excellence, and global networking opportunities.
                  </p>

                  <div className="meta">

                    <button className="share" aria-label="Share">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </button>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>
  {/* Footer */}
    </>
  );
}
