import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_toiminnallisuus: NumericalCriteria = {
  id: "common_criterio_toiminnallisuus",
  title: "Toiminnallisuus",
  description: `Toimiva ratkaisu täyttää kurssitehtävänannon tai liiketoiminnan vaatimukset ja toimii 
  odotetusti. Toiminnallisuus on testattu kattavasti ja dokumentoitu selkeästi, jotta sen oikeellisuus 
  ja käyttökelpoisuus voidaan todentaa. Näytä toiminnallisuus, älä kerro siitä PowerPointissa!`,
  weight: -1,
  options: [
    { grade: 0, desc: "Toiminnallisuutta ei ole todistettu." },
    {
      grade: 1,
      desc: `Toiminnallisuudesta puuttuu merkittäviä osia. Irralliset palaset saattavat 
      toimia, tai tuote on toiminut joitakin inkrementtejä sitten, mutta kokonaisuus ei 
      pysy todistettavasti kasassa.`,
    },
    {
      grade: 2,
      desc: `Toiminnallisuus on vajavaista eikä täytä thetävänannon tai 
      liiketoiminnan vaatimuksia riittävissä määrin.`,
    },
    {
      grade: 3,
      desc: `Tuote toimii hyväksyttävästi, mutta sen istuvuus tehtävänantoon tai 
      liiketoiminnan vaatimuksiin on epäselvä.`,
    },
    {
      grade: 4,
      desc: `Tuote toimii ja komponentit täyttävät suurimman osan vaatimuksista, pienet 
      puutteet mahdollisia.`,
    },
    {
      grade: 5,
      desc: `Tuote toimii tehtävänannon tai liiketoiminnan vaatimuksien 
      mukaisesti ja se voidaan näyttää todeksi.`,
    },
  ],
};

export default common_criterion_toiminnallisuus;