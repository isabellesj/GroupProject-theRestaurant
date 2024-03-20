export const ShowMenu = () => {
  return (
    <section className="menu">
      <h1 className="menu__title">Meny</h1>
      <article className="menu__wrapper-antipasti">
        <h3 className="menu__title-antipasti">Antipasti / Förrätter</h3>
        <p className="menu__text-food">
          Carpaccio di Manzo: Tunna skivor av oxfilé, serveras med ruccola,
          parmesan, citron och extra jungfruolivolja - 185 kr
        </p>
        <p className="menu__text-food">
          Caprese: Färska mozzarellabollar med körsbärstomater, basilika,
          balsamico och olivolja - 155 kr
        </p>
        <p className="menu__text-food">
          Bruschetta al Pomodoro: Grillat bröd toppat med färsk tomat, vitlök,
          basilika och olivolja - 135 kr
        </p>
      </article>
      <article className="menu__wrapper-primi">
        <h3 className="menu__title-primi">Primi / Pastarätter</h3>
        <p className="menu__text-food">
          Tagliatelle al Tartufo: Färska tagliatellepasta serveras med en krämig
          tryffelsås - 265 kr
        </p>
        <p className="menu__text-food">
          Ravioli di Zucca: Hemlagade ravioli fyllda med pumpa, smör och salvia
          - 245 kr
        </p>
        <p className="menu__text-food">
          Linguine ai Frutti di Mare: Linguinepasta med en mix av färska
          skaldjur, vitlök, chili och persilja - 295 kr
        </p>
        <p className="menu__text-food">
          Gnocchi al Gorgonzola: Hemlagade gnocchipotatis serveras med en krämig
          gorgonzolasås och valnötter - 235 kr
        </p>
      </article>
      <article className="menu__wrapper-secondi">
        <h3 className="menu__title-secondi">Secondi / Varmrätter</h3>
        <p className="menu__text-food">
          Filetto al Pepe Verde: Grillad oxfilé serveras med en grönpepparsås,
          rostade grönsaker och rosmarinpotatis - 425 kr
        </p>
        <p className="menu__text-food">
          Pesce alla Griglia: Färsk grillad fisk serveras med en citron- och
          örtsås, grillad sparris och tomatconcassé - 365 kr
        </p>
        <p className="menu__text-food">
          Saltimbocca alla Romana: Kalvfilé fylld med parmaskinka och salvia,
          serveras med en vitvinssås och potatisgratäng - 345 kr
        </p>
        <p className="menu__text-food">
          Pollo alla Cacciatora: Långsamt tillagad kyckling i en mustig tomatsås
          med lök, champinjoner och rosmarin, serveras med risotto - 295 kr
        </p>
      </article>
      <article className="menu__wrapper-dolci">
        <h3 className="menu__title-dolci">Dolci / Dessert</h3>
        <p className="menu__text-food">
          Tiramisù: Klassisk italiensk dessert med ladyfingers, mascarponekräm
          och espresso - 125 kr
        </p>
        <p className="menu__text-food">
          Panna Cotta: Vaniljpannacotta med en bärkompott och mynta - 145 kr
        </p>
        <p className="menu__text-food">
          Cannoli Siciliani: Krispiga sicilianska cannoli fyllda med ricotta och
          chokladbitar - 155 kr
        </p>
        <p className="menu__text-food">
          Gelato Misti: En mix av hemlagade gelato i olika smaker - 95 kr
        </p>
      </article>
      <p className="menu__text-allergies">
        Allergier? Prata gärna med personalen
      </p>
    </section>
  );
};
