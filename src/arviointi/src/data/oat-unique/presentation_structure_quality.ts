import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_presentation_structure_quality: NumericalCriteria = {
  id: "presentation_structure_quality",
  title: "Esitys",
  description: `Esityksen tulee olla selkeä ja seurattava. Muistiinpanojen käyttö on sallittua, mutta suoraan 
  lapusta tai ruudusta lukeminen vähentää pisteitä. Esityksessä tulee näkyä aito, toimiva tuote: ei pelkkiä kalvoja tai kuvia.`,
  weight: 10,
  options: [
    {
      grade: 0,
      desc: `Esitys on täysin harjoittelematon. Materiaalit ovat hukassa ja esitys on sekava.`,
    },
    {
      grade: 1,
      desc: `Esitys on pääosin improttu, epäselvä, hajavainen tai merkittävästi väärän mittainen.`,
    },
    {
      grade: 2,
      desc: `Esitys on osittain rakenteeton, epäselkeä tai hajanainen.`,
    },
    {
      grade: 3,
      desc: `Esitys on pääosin vastaanotettavissa ja jäsenneltyä ja opiskelija kykenee vastaamaan pääpiirteittäin 
      opettajan tai ryhmäläisten kysymyksiin.`,
    },
    {
      grade: 4,
      desc: `Esitys on enimmäkseen vastaanotettavissa ja jäsenneltyä. Kysymyksiin vastaaminen ei tuota ongelmia.`,
    },
    { grade: 5, desc: `Esitys on selkeä, tiivis ja jäsennelty.` },
  ],
};

export default unique_presentation_structure_quality;