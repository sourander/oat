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
  title: "Projektin yhteys työelämään",
  description: `Projektin aihe on ajankohtainen ja tulokset ovat hyödynnettävissä 
  työelämässä joko yleisesti tai valitun toimeksiantajan näkökulmasta.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Työn tuloksilla ei ole selkeää hyötyä työelämälle tai toimeksiantajalle.",
    },
    {
      grade: 1,
      desc: "Työn tulosten hyödynnettävyys ja tavoitteen saavuttaminen jää heikoksi",
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: "Työn tulokset hyödyttävät työelämää tai toimeksiantajaa.",
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: "Työ ja sen tulokset ovat merkittävät työelämälle tai toimeksiantajalle. Työn avulla voi olla mahdollista saavuttaa prosessien tehostamista ja / tai taloudellista hyötyä",
    },
  ],
};

export { criterion_project2_unique, criterion_ai_asiakasprojekti_unique };
