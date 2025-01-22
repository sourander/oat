import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_termisto: NumericalCriteria = {
  id: "common_criterio_termisto",
  title: "Terminologia",
  description: `Tarkka ja kurssin aiheenmukainen terminologian käyttö osoittaa opiskelijan perehtyneisyyden 
  aiheeseen. Terminologiaa käytetään johdonmukaisesti ja oikein, ja se selitetään tarvittaessa lukijalle. 
  Näin vältetään väärinkäsityksiä ja vahvistetaan tekstin asiantuntevuutta.`,
  weight: -1,
  options: [
    {
      grade: 0,
      desc: "Terminologiaa ei ole käytetty kurssin laajuuden oletettavissa määrin.",
    },
    {
      grade: 1,
      desc: `Termistön käyttö on täysin puutteellista tai lähes kokonaan virheellistä. 
      Käytettyjä termejä ei selitetä.`,
    },
    {
      grade: 2,
      desc: `Terminologiaa on käytetty ja sille on selitys, mutta käyttö ei ole yhtenäistä. Termistö 
      liittyy kurssin toteutukseen ja toteutettuun kokonaisuuteen, mutta termistöä on käytetty sisällön kannalta 
      epärelevantilla tai epäselvällä tavalla.`,
    },
    {
      grade: 3,
      desc: `Termistö on pääosin oikein käytetty ja kattavaa, mutta esiintyy joitakin epäselvyyksiä tai väärinkäsityksiä.`,
    },
    {
      grade: 4,
      desc: `Termistöä on käytetty oikein ja kattavasti, pieniä puutteita tai epätarkkuuksia esiintyy tai 
      joitakin tärkeitä termejä ei ole selitetty.`,
    },
    {
      grade: 5,
      desc: `Termistöä on käytetty asiantuntevasti, virheettömästi ja kattavasti. Opiskelijalla ei ole 
      haasteita käyttää kurssin teknistä termistöä lauseissa tai selittää käsitteitä omin sanoineen.`,
    },
  ],
};

export default common_criterion_termisto;