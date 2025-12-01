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
      Esiintyy suuria määriä tyyli- ja/tai kielivirheitä, jotka vaikeuttavat tekstin lukemista.
      Vaihtoehtoisesti on teknisiä virheitä, jotka estävät dokumentaation lukemisen ilman opettajan korjausta.`,
    },
    {
      grade: 2,
      desc: `
      Teksti on tyylillisesti toteavaa, epätasaista tai lokikirjoitus.
      Ei edusta ohjeituksen Oppimispäiväkirja 101:n mukaista tyyliä ja laatua.`,
    },
    {
      grade: 3,
      desc: `
      Teksti on huoliteltua ja tehtävänannon mukaista asiatekstiä.
      Teksti referoi kurssimateriaalia ja lähteitä, mutta argumentaatio ja oma ääni puuttuvat.
      Noudattaa Oppimispäiväkirja 101 -ohjeistusta kauttaaltaan.
      Viikko ja päivämäärämerkinnät ovat oikein.`,
    },
    {
      grade: 4,
      desc: `
      Teksti on sujuvaa ja lähes virheetöntä asiatyyliä, jossa ammattisanasto on käytössä. 
      Argumentointi ja oivallus ovat ylätasolla, mutta oma ääni on läsnä vain osittain.
      Tekstiä on rikastettu kuvilla, koodiesimerkeillä, luetteloilla, väliotsikoilla ja muilla elementeillä.`,
    },
    {
      grade: 5,
      desc: `
      Teksti on argumentoivaa, oivaltavaa ja lähes virheetöntä asiatyyliä.
      Oma ääni on vahvasti läsnä tekstissä.
      Merkinnät olisivat valmiita julkaistaviksi sopivaan ammatilliseen kontekstiin.
      Tekstin, kuvien, koodin, luetteloiden, väliotsikoiden ja muiden elementtien käyttö on harkittua ja tasapainoista.`,
    },
  ],
};

export default common_criterion_asiatyyli;
