import { NumericalCriteria } from "../../types/oat-grade-types";

const intermediateGradeDescription = (
  lowerGrade: number,
  upperGrade: number,
): string =>
  `Opiskelijan suoritus sijoittuu arviointikriteerien ${lowerGrade} ja ${upperGrade} väliin.`;

const criterion_project2_unique: NumericalCriteria = {
  id: "criterion_projektisuunnitelma",
  title: "Projektisuunnitelma",
  description: `Loppuraporttiin sisällytetyn projektisuunnitelman tulee sisältää
  ohjeistuksen mukaiset osa-alueet, kuvata projektin toteutusta ja tukea
  projektin tulosten arviointia.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Arvosanan 1 kriteerit eivät täyty.",
    },
    {
      grade: 1,
      desc: `Loppuraportti sisältää projektisuunnitelman. Projektisuunnitelmaan
      on sisällytetty ohjeistuksen mukaiset osa-alueet eli otsikot.`,
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: `Loppuraporttiin sisällytetty projektisuunnitelma on kattava ja
      kuvaa projektin toteutusta.`,
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: `Loppuraporttiin sisällytetty projektisuunnitelma on kattava ja
      sitä on hyödynnetty projektin tulosten arvioinnissa.`,
    },
  ],
};

const criterion_ai_asiakasprojekti_unique: NumericalCriteria = {
  id: "criterion_ai_asiakasprojekti",
  title: "TODO tämä tarkentuu myöhemmin",
  description: "TODO tämä tarkentuu myöhemmin",
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "TODO tämä tarkentuu myöhemmin",
    },
    {
      grade: 1,
      desc: "TODO tämä tarkentuu myöhemmin",
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: "TODO tämä tarkentuu myöhemmin",
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: "TODO tämä tarkentuu myöhemmin",
    },
  ],
};

export { criterion_project2_unique, criterion_ai_asiakasprojekti_unique };
