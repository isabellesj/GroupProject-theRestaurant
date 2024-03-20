import React from "react";
import "../scss/footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer-adress">
          <p className="footer__info-title">Hitta Oss:</p>
          <p className="footer__info">Drottinggatan 5</p>
          <p className="footer__info">Stockholm</p>
          <p className="footer__info">123 45</p>
        </div>
        <div className="footer-contact">
          <p className="footer__info-title">Kontakta oss:</p>
          <p className="footer__info">Trattoria@restaurang.se</p>
          <p className="footer__info">08-123456</p>
        </div>
        <div className="footer__socials">
          <i id="socials__icon" className="fa-brands fa-facebook"></i>
          <i id="socials__icon" className="fa-brands fa-instagram"></i>
          <i id="socials__icon" className="fa-brands fa-linkedin"></i>
        </div>
      </section>
    </footer>
  );
};
