import { Link } from "react-router-dom";

export const ContactComponent = () => {
  return (
    <>
      <div className="contact">
        <h1 className="contact__header">Kontakta oss</h1>
        <div className="contact__container">
          <section className="contact__address">
            <h2 className="contact__address-title">Adress</h2>
            <p>Drottinggatan 5</p>
            <p>123 45</p>
            <p>Stockholm</p>
          </section>
          <section className="contact__phone">
            <h2 className="contact__phone-title">Telefonnummer</h2>
            <p>08-123 45 67</p>
          </section>
          <section className="contact__email">
            <h2 className="contact__email-title">Email</h2>
            <Link className="contact__email-link" to="#">
              TrattoriaBellaVita@restaurang.se
            </Link>
          </section>
          <section className="contact__open">
            <h2 className="contact__open-title">Öppettider</h2>
            <article className="contact__open-businessday">
              <p>Måndag - Fredag</p>
              <p>11:00 - 22:00</p>
            </article>
            <article className="contact__open-weekend">
              <p>Lördag - Söndag</p>
              <p>12:00 - 23:00</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};
