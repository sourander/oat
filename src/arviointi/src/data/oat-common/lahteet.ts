import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_lahteet: NumericalCriteria = {
  id: "common_criterion_lahteet",
  title: "Lähdeviitteet",
  description: `Hyvin käytetyt lähdeviitteet tukevat kirjoituksen argumentteja. Työ ikään kuin 
  keskustelee lähdeteosten kanssa. Valittujen lähteiden tulee olla luotettavia ja ajantasaisia.
  Noudata ohjeistettua viittaustyyliä.`,
  weight: -1,
  options: [
    { grade: 0, desc: "Lähdeaineisto on riittämätön." },
    {
      grade: 1,
      desc: `Lähdeaineistoa on listattu, mutta runko on kirjoitettu ilman lähteitä.`,
    },
    {
      grade: 2,
      desc: `Lähdeaineistoa ja tekstin sisäiset viittaukset ovat käytössä. Lähteitä on käytetty, 
      mutta ne eivät ole luotettavia tai eivät tue opiskelijan argumentointia tai niiden yhteys tekstin
      sisältöön on epäselvä. `,
    },
    {
      grade: 3,
      desc: `Lähteitä on käytetty, ja ne tukevat opiskelijan argumentointia. Lähdeaineiston 
      käyttö on systemaattista ja lukijalle selkeää.`,
    },
    {
      grade: 4,
      desc: `Lähdeaineisto on tarkoituksenmukaista ja monipuolista. Opiskelija on etsinyt itsenäisesti 
      tietoa, joka auttaa häntä ymmärtämään kurssin aiheita. Teksti käy keskustelua lähteiden kanssa.`,
    },
    {
      grade: 5,
      desc: `Lähdeaineisto on kriittisesti arvioitu ja punnittu. Lähteet ovat luotettavia ja huolella valittu.
      Opiskelija esittelee uusia näkökulmia ja argumentoi niitä lähteiden avulla tai lähteiden innoittamana.`,
    },
  ],
};

export default common_criterion_lahteet;
