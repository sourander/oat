import { NumericalCriteria } from "../../types/oat-grade-types";

const intermediateGradeDescription = (
  lowerGrade: number,
  upperGrade: number,
): string =>
  `Opiskelijan suoritus sijoittuu arviointikriteerien ${lowerGrade} ja ${upperGrade} väliin.`;

const criterion_loppuraportti: NumericalCriteria = {
  id: "criterion_loppuraportti",
  title: "Loppuraportti",
  description: `Loppuraportin tulee noudattaa raportointiohjeistusta. Raportissa käytetyn
  kielen, rakenteen, ulkoasun ja lähdeviittaustekniikan tulee muodostaa selkeä,
  johdonmukainen ja huoliteltu kokonaisuus.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Arvosanan 1 kriteerit eivät täyty tai työtunnit alittavat minimivaatimuksen.",
    },
    {
      grade: 1,
      desc: `Raportti sisältää epäjohdonmukaisuuksia, mutta noudattaa pääpiirteissään
      raportointiohjeistusta. Teksti on jäsentymätöntä ja siinä on toistuvia kieli-
      ja tyylivirheitä, mutta se on ymmärrettävää. Lähdeviitteiden merkintä on
      puutteellista.`,
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: `Raportti on jäsentynyt ja johdonmukainen ja noudattaa raportointiohjeistusta.
      Teksti on kieli- ja ulkoasultaan huoliteltua, täsmällistä ja selkeää asiatekstiä.
      Lähdeviittaustekniikka on ohjeiden mukainen.`,
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: `Raportti noudattaa raportointiohjeistusta ja osoittaa erinomaista kielen
      hallintaa välittäen opiskelijan ajattelun jäsentyneesti, kirkkaasti ja
      havainnollisesti. Opiskelija kirjoittaa argumentoivaa, oivaltavaa ja virheetöntä
      asiatyyliä. Lähdeviittaustekniikka on ohjeiden mukainen.`,
    },
  ],
};

const criterion_demot: NumericalCriteria = {
  id: "criterion_demot",
  title: "Demot",
  description: `Demoesityksissä esitellään kehitettävä tai valmis tuote toiminnassa.
  Esitysten tulee olla havainnollisia, kohderyhmälle suunnattuja ja opiskelijan
  asiantuntijuutta tukevia.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Arvosanan 1 kriteerit eivät täyty tai työtunnit alittavat minimivaatimuksen.",
    },
    {
      grade: 1,
      desc: "Opiskelija on pitänyt demoesitykset.",
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: `Demoesitykset ovat havainnollisia, vuorovaikutteisia ja kohderyhmälle
      suunnattuja. Demoissa on esitetty kehitettävä tai valmis tuote toiminnassa.`,
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: `Demoesitykset ovat vakuuttavia ja tuovat opiskelijan asiantuntijuuden hyvin
      esiin. Opiskelija osoittaa esityksessään kriittistä ajattelua ja kykyä liittää
      oman työnsä alan kehittämiseen. Demoihin sisällytetty kehitettävän tai valmiin
      tuotteen toiminnan esittely on ammattimaista ja tukee vahvasti esityksen
      kokonaisuutta.`,
    },
  ],
};

const criterion_tulokset: NumericalCriteria = {
  id: "criterion_tulokset",
  title: "Tulokset",
  description: `Projektissa käytetyt menetelmät ja työtavat sekä saavutetut tulokset
  tulee kuvata, perustella ja arvioida suhteessa kehittämistehtävän vaatimuksiin,
  tavoitteisiin ja tulosten hyödynnettävyyteen.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Arvosanan 1 kriteerit eivät täyty tai työtunnit alittavat minimivaatimuksen.",
    },
    {
      grade: 1,
      desc: `Menetelmien ja työtapojen käyttö on suppeaa ja puutteellista, eikä niiden
      valintaa ole perusteltu asianmukaisesti. Vaihtoehtoisia menetelmiä tai työtapoja
      ei ole tutkittu. Toteutuksen kuvaaminen sisältää puutteita. Tulosten esittäminen
      ja tulkinta on luettelomaista. Tulosten hyödynnettävyys ja tavoitteen
      saavuttaminen jää heikoksi.`,
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: `Käytettyjen menetelmien ja työtapojen käyttö ja kuvaus on tarkoituksenmukaista.
      Vaihtoehtoisia menetelmiä tai työtapoja on tutkittu. Tulokset vastaavat
      kehittämistehtävän vaatimuksiin tai tavoitteisiin ja ovat hyödynnettävissä.
      Toteutuksen ja tuloksen arvioinnissa näkyy perustellusti ainakin jonkin verran
      työn vahvuuksien ja mahdollisten puutteiden tunnistaminen.`,
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: `Menetelmien ja työtapojen hallinta ja käyttö on innovatiivista ja itsenäistä.
      Vaihtoehtoisia menetelmiä tai työtapoja on tutkittu monipuolisesti ja kriittisesti.
      Työssä näkyy innovatiivisuus, analyyttisyys ja vahva työelämää kehittävä ote.
      Työn tavoitteet on saavutettu luotettavasti, ja tulosten hyötyarvo on merkittävä.
      Luotettavuutta ja työn tuloksia on arvioitu kriittisesti ja vastuullisesti.
      Toteutuksessa on otettu huomioon koodin jatkokehitys ja ylläpito.`,
    },
  ],
};

const criterion_itse_ja_vertaisarviointi: NumericalCriteria = {
  id: "criterion_itse_ja_vertaisarviointi",
  title: "Itse- ja vertaisarviointi",
  description: `Opiskelijan tulee arvioida omaa ja muiden ryhmän jäsenten roolia,
  osaamista ja osaamisen kehittymistä projektissa sekä perustella antamansa arvosanat.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Arvosanan 1 kriteerit eivät täyty tai työtunnit alittavat minimivaatimuksen.",
    },
    {
      grade: 1,
      desc: "Opiskelija on laatinut itse- ja vertaisarvioinnin.",
    },
    {
      grade: 2,
      desc: intermediateGradeDescription(1, 3),
    },
    {
      grade: 3,
      desc: `Opiskelija kykenee arvioimaan omaa ja muiden ryhmän jäsenten roolia
      projektissa. Itse- ja vertaisarvioinnissa annetut arvosanat on perusteltu.`,
    },
    {
      grade: 4,
      desc: intermediateGradeDescription(3, 5),
    },
    {
      grade: 5,
      desc: `Opiskelija arvioi sekä oman että muiden projektiin osallistuneiden
      opiskelijoiden osaamisen kehittymistä monipuolisesti ja kriittisesti.`,
    },
  ],
};

export {
  criterion_loppuraportti,
  criterion_demot,
  criterion_tulokset,
  criterion_itse_ja_vertaisarviointi,
};
