import { NumericalCriteria } from "../../types/oat-grade-types";

const criterion_termisto: NumericalCriteria = {
  id: "criterion_termisto",
  title: "Terminologia",
  description: `Tarkka ja kurssin aiheenmukainen terminologian käyttö osoittaa opiskelijan perehtyneisyyden 
  aiheeseen. Terminologiaa käytetään johdonmukaisesti ja oikein, ja se selitetään tarvittaessa yleisölle. 
  Näin vältetään väärinkäsityksiä ja vahvistetaan tekstin asiantuntevuutta. Ammattimaiseen toimintaan kuuluu
  myös kyky seurata omaa ajankäyttöä ja tehdä se näkyväksi.`,
  weight: -1,
  options: [
    {
      grade: 0,
      desc: "Terminologiaa ei ole käytetty kurssin laajuuden oletettavissa määrin.",
    },
    {
      grade: 1,
      desc: `Termistön käyttö on täysin puutteellista tai lähes kokonaan virheellistä. 
      Käytettyjä termejä ei selitetä. Opiskelija ei ole ilmoittanut käyttämäänsä tuntimäärää.`,
    },
    {
      grade: 2,
      desc: `Terminologiaa on käytetty ja selitetty. Termistö liittyy kurssin toteutukseen ja toteutettuun 
      kokonaisuuteen, mutta termistöä on käytetty sisällön kannalta epärelevantilla tai epäselvällä tavalla.
      Opiskelija ei ole ilmoittanut käyttämäänsä tuntimäärää. Opiskelija ei ole ilmoittanut käyttämäänsä tuntimäärää 
      tai se on ilmoitettu vain kuvailevin termein.`,
    },
    {
      grade: 3,
      desc: `Termistöä on käytetty. Selitys toistaa opetusmateriaalin tai esimerkin lauseita. Opiskelija
      on ilmoittanut käyttämänsä tuntimäärän.`,
    },
    {
      grade: 4,
      desc: `Termistöä on käytetty oikein ja kattavasti, pieniä puutteita tai epätarkkuuksia esiintyy tai 
      joitakin tärkeitä termejä ei ole selitetty, tai luetellaan sanakirjamaisena luettelona. Opiskelija on ilmoittanut 
      käyttämänsä tuntimäärän.`,
    },
    {
      grade: 5,
      desc: `Termistöä on käytetty asiantuntevasti ja kattavasti. Opiskelijalla ei ole haasteita käyttää kurssin teknistä 
      termistöä lauseissa tai selittää käsitteitä omin sanoineen. Opiskelija on ilmoittanut käyttämänsä tuntimäärän, mieluiten
      nojaten selkeään kirjanpitoon kuten Clockify-ohjelmaan.`,
    },
  ],
};

export default criterion_termisto;
