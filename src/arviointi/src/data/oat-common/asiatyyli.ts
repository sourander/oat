import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_asiatyyli: NumericalCriteria = {
  id: "common_criterion_asiatyyli",
  title: "Asiatyyli",
  description: `Asiatyyliin kirjoitettu dokumentti muistuttaa opinnäytetyötä, ammattilaisille 
  kirjoitettua artikkelia (esim. Medium.com) tai raporttia. Palautusformaattina on Material for MkDocs -sivusto ellei kurssin
  tehtävänannossa erikseen toisin sanota. Noudata Oppimispäiväkirja 101 ohjeita. Viikkonumerot ja päivämäärät vastaavat 
  totisesti työskentelyaikoja.`,
  weight: -1,
  options: [
    { grade: 0, desc: "Teksti ei ole ymmärrettävää ja/tai asiatyylistä." },
    {
      grade: 1,
      desc: `
      Teksti on tyylillisesti jäsentymätöntä.
      Teksti ei tunnu liittyvän kurssimateriaaliin tai kurssin virallisiin lähteisiin.
      Esiintyy suuria määriä tyyli- ja/tai kielivirheitä, jotka vaikeuttavat tekstin lukemista.
      Vaihtoehtoisesti on teknisiä virheitä, jotka estävät dokumentaation lukemisen ilman opettajan korjausta.`,
    },
    {
      grade: 2,
      desc: `
      Teksti on tyylillisesti toteavaa, epätasaista tai lokikirjoitus.
      Lähes koko teksti on muodoltaan luettelo tai lista asioista.
      Sivusto on katsottavissa GitLab Pagesissa ilman teknisiä ongelmia.`,
    },
    {
      grade: 3,
      desc: `
      Teksti on huoliteltua ja tehtävänannon mukaista asiatekstiä.
      Teksti referoi kurssimateriaalia ja lähteitä ylätasolla.
      Argumentaatio ja oma ääni eivät kuitenkaan ole läsnä.
      Noudattaa Oppimispäiväkirja 101 -ohjeistusta kauttaaltaan.
      Viikko ja päivämäärämerkinnät ovat oikein.`,
    },
    {
      grade: 4,
      desc: `
      Teksti on sujuvaa ja lähes virheetöntä asiatyyliä, jossa ammattisanasto on käytössä.
      Teksti on osattu pitää tiiviinä ja ytimekkäänä: laatu on määrää tärkeämpää.
      Oma ääni on läsnä vain osittain. Aihetta käsitellään hieman ylätasolla ja toteavasti.
      Tekstiä on rikastettu kuvilla, koodiesimerkeillä, luetteloilla, väliotsikoilla ja muilla elementeillä.`,
    },
    {
      grade: 5,
      desc: `
      Teksti on argumentoivaa, oivaltavaa ja lähes virheetöntä asiatyyliä.
      Teksti on osattu pitää tiiviinä ja ytimekkäänä: laatu on määrää tärkeämpää.
      Oma ääni on vahvasti läsnä tekstissä.
      Merkinnät olisivat valmiita julkaistaviksi sopivaan ammatilliseen kontekstiin.
      Tekstin, kuvien, koodin, luetteloiden, väliotsikoiden ja muiden elementtien käyttö on harkittua ja tasapainoista.`,
    },
  ],
};

export default common_criterion_asiatyyli;
