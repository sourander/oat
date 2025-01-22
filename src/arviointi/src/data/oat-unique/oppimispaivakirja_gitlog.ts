import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_oppimispaivakirja_gitlog: NumericalCriteria = {
  id: "oppimispaivakirja_gitlog",
  title: "Opiskeluaktiivisuus",
  description: `Aktiivinen opiskelu edistää oppimista ja samalla harjaannuttaa git-versionhallinnan 
  käytössä. Sinulta toivotaan viikoittaista työskentelyä, jonka tulee näkyä git-lokeissa.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Työskentelyhistoriasta ei ole näyttöä. Git-historiassa on vain yksi commit juuri ennen palautusta.",
    },
    {
      grade: 1,
      desc: `Työ on tehty viikossa. Git-historiasta löytyy myös toisilta viikoilta esimerkiksi typon korjaus, mutta 
      käytännössä koko työ on yhdeltä istumalta tehty.`,
    },
    {
      grade: 2,
      desc: `Työ on tehty noin kahdessa viikossa.`,
    },
    {
      grade: 3,
      desc: `Työskentely on ollut aktiivista läpi kurssin, mutta kausittaista. Työtä on tehty noin joka 
      toinen viikko.`,
    },
    {
      grade: 4,
      desc: `Opiskelija on tehnyt sisällön kannalta merkittäviä committeja lähes joka viikko. Commitit liittyvät 
      kyseisen viikon työksentelyyn. Jos viikkoja on hypitty yli, tähän löytyy selkeät syyt dokumentoituna, ja niistä 
      on keskustelu opettajan kanssa.`,
    },
    {
      grade: 5,
      desc: `Opiskelija on ollut erittäin aktiivinen ja git-lokit ovat selkeät ja täydelliset. Kunkin viikon merkinnän 
      suurin työ on commitoitu kyseisellä viikolla. Mahdolliset poikkeamat on dokumentoitu ja niistä on keskusteltu 
      opettajan kanssa.`,
    },
  ],
};

export default unique_oppimispaivakirja_gitlog;