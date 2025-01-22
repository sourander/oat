import { OatGradeType } from "../types/oat-grade-types";

import common_criterion_lahteet from "./oat-common/lahteet";
import common_criterion_asiatyyli from "./oat-common/asiatyyli";
import common_criterion_tietotaidot from "./oat-common/tietotaidot";
import common_criterion_toiminnallisuus from "./oat-common/toiminnallisuus";
import common_criterion_termisto from "./oat-common/termisto";
import common_criterion_code_quality from "./oat-common/code_quality";

import unique_self_assessment_tiimityo from "./oat-unique/self_assessment_tiimityo";
import unique_oppimispaivakirja_gitlog from "./oat-unique/oppimispaivakirja_gitlog";
import unique_video_structure_quality from "./oat-unique/video_structure_quality";
import unique_presentation_structure_quality from "./oat-unique/presentation_structure_quality";

const itsearviointi: OatGradeType = {
  id: "self_assessment",
  title: "📒 Tiimiläisen itsearviointi",
  description: `Itsearviointi on Oppimispäiväkirja 101:n ohjetta noudattaen 
  kirjoitettu tapa osoittaa omaa osaamistaan. Toisin kuin oppimispäiväkirja, itsearvointi ei
  sisällä kriteeriä viikoittain kirjoittamisesta. Työ tehdään tiimissä, mutta jokainen kirjoittaa itse 
  oman arvionsa.`,
  numerical_criteria: [
    { ...common_criterion_tietotaidot, weight: 50 },
    { ...common_criterion_asiatyyli, weight: 20 },
    { ...common_criterion_lahteet, weight: 20 },
    { ...unique_self_assessment_tiimityo, weight: 10},
  ],
};

const oppimispaivakirja: OatGradeType = {
  id: "remote_learning_journal",
  title: "📓🛜 Oppimispäiväkirja (monimuoto)",
  description: `Monimuoto-opiskelijoille tarkoitettu oppimispäiväkirja on opiskelijan itsenäinen kirjoitus, jota kirjoitetaan 
  viikko viikolta kurssin edetessä Oppimispäiväkirja 101 -ohjeistuksen mukaan. Kukin muutos tallennetaan versionhallintaan. 
  Yksittäinen merkintä edustaa kyseisen viikon aihetta ja opittuja asioita. Siinä näkyvät sekä tehdyt tehtävät että saavutettu ymmärrys.`,
  numerical_criteria: [
    { ...common_criterion_tietotaidot, weight: 40 },
    { ...common_criterion_asiatyyli, weight: 20 },
    { ...unique_oppimispaivakirja_gitlog, weight: 20 },
    { ...common_criterion_lahteet, weight: 20 },
  ],
};

const lahioppimispaivakirja: OatGradeType = {
  id: "local_learning_journal",
  title: "📓🏫 Oppimispäiväkirja (lähiopetus)",
  description: `Päiväopintoihin tarkoitettu oppimispäiväkirja on opiskelijan itsenäinen kirjoitus, jota kirjoitetaan viikko viikolta
  kurssin edetessä Oppimispäiväkirja 101 -ohjeistuksen mukaan. Työtä kirjoitetaan sekä opastetusti luokassa että omatoimisesti kotona harjoituksia tehdessä. Päiväkirja tallennetaan 
  versionhallintaan. Yksittäinen merkintä edustaa kyseisen viikon aihetta ja opittuja asioita. Siinä näkyvät sekä tehdyt tehtävät että 
  saavutettu ymmärrys.`,
  numerical_criteria: [
    { ...common_criterion_tietotaidot, weight: 50 },
    { ...common_criterion_asiatyyli, weight: 25 },
    { ...common_criterion_lahteet, weight: 25 },
  ],
  boolean_criteria: [
    {
      id: "local_learning_journal_attendance",
      title: "Välitarkastukset",
      description:
        `Opiskelija on esitellyt välivaiheet opettajalle vähintään KAHTENA eri opetuskertana. 
        Ideaali on, että opiskelija pyytää palautetta ja apua joka viikko.`,
    },
  ],
};

const videoesitys: OatGradeType = {
  id: "video_submission",
  title: "📹 Videoitu demo",
  description: `Demo on opiskelijan itsenäinen tuotos, jossa opiskelija esittelee jollakin kurssilla tehdyn 
  tuotoksen. Siitä tulee selvitä tuotteen vaatimukset, toiminnallisuus ja käyttö. Videoesityksen kesto määritellään 
  tehtävänannon yhteydessä. Ideaalitilanteessa opettajan ei tarvitse lukea repositoriosi koodia läpi, vaan tärkeät 
  seikat esitellään videolla. Opettajalla tulee kuitenkin olla pääsy repositorioon tarkempaa ja täydentävää 
  tarkastelua varten.`,
  numerical_criteria: [
    { ...common_criterion_termisto, weight: 30 },
    { ...common_criterion_toiminnallisuus, weight: 30 },
    { ...common_criterion_code_quality, weight: 30 },
    { ...unique_video_structure_quality, weight: 10},
  ],
  boolean_criteria: [
    {
      id: "video_submission_code",
      title: "Pääsy koodiin",
      description:
        `Opettajalla on realistinen pääsy siihen repositorioon, josta löytyy koodin ja dokumentaation palautusversio.`,
    },
  ],
};

const liveesitys: OatGradeType = {
  id: "live_submission",
  title: "🎤 Live-demo",
  description: `Live-esitys on käytössä lähiopetuksessa kursseilla, joilla tehdään projektimaisesti jokin tuote. Kurssi 
  voi koostua useista esiteltävistä tuotteista, jolloin kukin arvioidaan erikseen. Työ esitellään joko
  opettajalle tai koko ryhmälle live-tilanteessa. Esityksen kesto määritellään tehtävänannon yhteydessä.`,
  numerical_criteria: [
    { ...common_criterion_termisto, weight: 30 },
    { ...common_criterion_toiminnallisuus, weight: 30 },
    { ...common_criterion_code_quality, weight: 30 },
    { ...unique_presentation_structure_quality, weight: 10},
  ],
};

export const OAT_GRADE_TYPES: OatGradeType[] = [
  itsearviointi,
  oppimispaivakirja,
  lahioppimispaivakirja,
  videoesitys,
  liveesitys,
  // Additional grade types...
];
