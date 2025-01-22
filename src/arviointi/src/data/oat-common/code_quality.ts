import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_code_quality: NumericalCriteria = {
  id: "common_criterio_code_quality",
  title: "Koodi",
  description: `Laadukas koodi ei pelkästään toimi vaan noudattaa konventioita ja on dokumentoitua. 
  Koodi on kommunikaatiota kirjoittajan ja lukijoiden välillä.`,
  weight: -1,
  options: [
    { grade: 0, desc: "Koodi puuttuu tai on suorituskelvotonta." },
    { grade: 1, desc: "Koodi on epäselvää, dokumentaatio puutteellista." },
    {
      grade: 2,
      desc: "Koodi on esimerkkien tasolla, mutta oma työpanos puuttuu suurelta osin.",
    },
    {
      grade: 3,
      desc: `Koodi myötäilee hyväksyttävällä tasolla tehtävänantoa ja sisältää selkeästi 
      opiskelijan omaa työtä. Dokumentaatio on hyväksyttävällä tasolla.`,
    },
    {
      grade: 4,
      desc: `Koodi on pääosin selkeää ja dokumentaatio on ymmärrettävällä tasolla. Koodissa ja/tai 
      siihen liittyvässä dokumentaatiossa esiintyy kuitenkin puutteita, jotka olisi vältettävissä, 
      mikäli opiskelija olisi noudattanut kurssin ohjeistusta tai pyytänyt apua.`,
    },
    {
      grade: 5,
      desc: `Koodi on konvention mukaista ja hyvin dokumentoitua. Kokonaisuus toimii hyvänä työnäyttönä. Koodin
      skooppi on tehtävänantoon suhteutettuna järkevä: ei liian helppo eikä toisaalta ole jäänyt puolitiehen
      liian suuren haasteen kanssa. Mahdolliset haasteet ja tulevaisuuden kehityskohteet on dokumentoitu.`,
    },
  ],
};

export default common_criterion_code_quality;