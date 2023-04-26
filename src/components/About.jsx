import Image from "next/image";

const About = () => {
    return ( 
      <section className="section about" id="about">
      <div className="container">

        <figure className="about-banner">
          <Image
            src="/images/al.jpg"
            width={700}
            height={532}
            loading="lazy"
            alt="about-banner"
            className="w-100 banner-animation"
          />
        </figure>

        <div className="about-content">

          <h2 className="h2 section-title underline">About Us</h2>

          <p className="about-text">
          Combining our unrivaled specialism in specific digital activities with a strategic & differentiated approach, Aakash Labs is able to meet the increasingly complex needs of clients in an effortless yet productive manner in the constantly evolving digital landscape.
          </p>

          <p className="about-text">
          Aakash Labs provides an advanced implementation of digital technologies in areas that are crucial to your business, supporting your ambition and helping to retain your customer base. We give life to your ideas.
          </p>

          <ul className="stats-list">

            <li className="stats-card">
              <p className="h3 stats-title">40768</p>

              <p className="stats-text">Working Hours</p>
            </li>

            <li className="stats-card">
              <p className="h3 stats-title">254</p>

              <p className="stats-text">Projects</p>
            </li>

            <li className="stats-card">
              <p className="h3 stats-title">400</p>

              <p className="stats-text">LOVELY CLIENTS</p>
            </li>

          </ul>

        </div>

      </div>
    </section>
     );
}
 
export default About;