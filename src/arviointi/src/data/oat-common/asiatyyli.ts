import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_asiatyyli: NumericalCriteria = {
  id: "common_criterion_asiatyyli",
  title: "Asiatyyli",
  description: `Asiatyyliin kirjoitettu dokumentti muistuttaa opinnäytetyötä, ammattilaisille 
  kirjoitettua artikkelia (esim. Medium.com) tai raporttia. Palautusformaattina on Material for MkDocs -sivusto ellei kurssin
  tehtävänannossa erikseen toisin sanota. Noudata Oppimispäiväkirja 101 ohjeita.`,
  weight: -1,
  options: [
    { grade: 0, desc: "Teksti ei ole ymmärrettävää ja/tai asiatyylistä." },
    {
      grade: 1,
      desc: `Teksti on tyylillisesti jäsentymätöntä. Esiintyy suuria määriä tyyli- ja/tai 
        kielivirheitä, jotka vaikeuttavat tekstin lukemista, tai teknisiä virheitä, jotka estävät 
        dokumentaation lukemisen.`,
    },
    { grade: 2, desc: `Teksti on tyylillisesti toteavaa, epätasaista, lokikirjoitus 
      tai lista tai ei muutoin edusta ohjeituksen mukaista tyyliä ja laatua.` },
    {
      grade: 3,
      desc: `Teksti on huoliteltua ja tehtävänannon mukaista asiatekstiä. Markdown-kieltä ja
      asiatyyliä on käytetty Oppimispäiväkirja 101 -ohjeistuksen mukaisesti.`,
    },
    {
      grade: 4,
      desc: `Teksti on sujuvaa ja lähes virheetöntä asiatyyliä, jossa ammattisanasto on käytössä. 
      Puutteita kuitenkin esiintyy eikä teksti ole viimeisteltyä sisällön tai muodon puolesta.`,
    },
    {
      grade: 5,
      desc: `Teksti on argumentoivaa, oivaltavaa ja lähes virheetöntä asiatyyliä. Tekstin, kuvien, 
      koodin, luetteloiden, väliotsikoiden ja muiden elementtien käyttö on harkittua ja tasapainoista.`,
    },
  ],
};

export default common_criterion_asiatyyli;