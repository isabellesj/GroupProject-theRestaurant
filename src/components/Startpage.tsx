import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/heroVideo.mp4";

export const Startpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header__video__wrapper">
        <video className="header__video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="header__restaurantName__wrapper">
          <h1 className="header__restaurantName">Trattoria Bella Vita</h1>
        </div>
      </div>
      <section className="startpage__menu">
        <article className="startpage__menu__info__wrapper">
          <h2 className="startpage__menu__title">Upptäck Italien!</h2>
          <p className="startpage__menu__info">
            Välkommen till en charmig restaurang där vår meny tar dig med på en
            smakresa genom det italienska kökets förtrollande rätter. Upplev
            våra kulinariska mästerverk och låt dina smaklökar dansa. Klicka här
            för att se vår meny.
          </p>
          <button
            className="startpage__menu__button"
            onClick={() => {
              navigate("/pages/menu");
            }}
          >
            Meny
          </button>
        </article>
        <div className="startpage__menu__picture"></div>
      </section>
      <section className="startpage__restaurant">
        <div className="startpage__restaurant__picture-first"></div>
        <article className="startpage__restaurant__info__wrapper">
          <h2 className="startpage__restaurant__title">Mat lagad med kärlek</h2>
          <p className="startpage__restaurant__info">
            Trattoria Bella Vita förenar det bästa från det italienska köket med
            en touch av lokala smaker.
          </p>
        </article>
        <div className="startpage__restaurant__picture-second"></div>
      </section>
      <section className="startpage__booking">
        <div className="startpage__booking__picture"></div>
        <article className="startpage__booking__info__wrapper">
          <h2 className="startpage__booking__title">Boka bord</h2>
          <p className="startpage__booking__info">
            Besök oss för en avslappnad stund med ett glas gott vin, en utsökt
            förrätt eller boka ett bord för en minnesvärd kväll med nära och
            kära.
          </p>
          <button
            className="startpage__booking__button"
            onClick={() => {
              navigate("/pages/booking");
            }}
          >
            Boka bord
          </button>
        </article>
      </section>
    </>
  );
};
