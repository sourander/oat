import { OatGradeType } from "../types/oat-grade-types";

import criterion_lahteet from "./oat-oppimispaivakirja/lahteet";
import criterion_asiatyyli from "./oat-oppimispaivakirja/asiatyyli";
import criterion_tietotaidot from "./oat-oppimispaivakirja/tietotaidot";
import criterion_gitlog from "./oat-oppimispaivakirja/oppimispaivakirja_gitlog";

import criterion_termisto from "./oat-videoesitys/termisto";
import criterion_toiminnallisuus from "./oat-videoesitys/toiminnallisuus";
import criterion_code_quality from "./oat-videoesitys/code_quality";
import criterion_structure_quality from "./oat-videoesitys/video_structure_quality";

import {
  criterion_aihe,
  criterion_dokumentointi,
  criterion_koodi,
  criterion_tulokset,
  criterion_itsearviointi,
  criterion_hours,
} from "./oat-aiproject/ai_project_all";

const oppimispaivakirja: OatGradeType = {
  id: "learning_journal",
  title: "📓 Oppimispäiväkirja",
  description: `
  Oppimispäiväkirja on opiskelijan itsenäinen kirjoitus, jota kirjoitetaan viikko viikolta kurssin edetessä 
  Oppimispäiväkirja 101 -ohjeistuksen mukaan. Kukin muutos tallennetaan versionhallintaan.
  Yksittäinen merkintä edustaa kyseisen viikon aihetta ja opittuja asioita. Siinä näkyvät sekä tehdyt tehtävät että 
  saavutettu ymmärrys. Keskeinen osa on itsearviointi, jossa opiskelija esittää itselleen arvosanan ja perustelee sen alla 
  olevien kriteereiden avulla. Opiskelijan on suositeltavaa ottaa kriteereistä kuvakaappaus tai tekstimuotoien kopio ja 
  perustella arvosanansa niiden pohjalta. Muista katsoa aloitusluento, jossa tätä käsitellään! Tutustu Oppimispäiväkirja 101
  -ohjeistukseen ennen aloittamista.`,
  numerical_criteria: [
    { ...criterion_tietotaidot, weight: 40 },
    { ...criterion_asiatyyli, weight: 20 },
    { ...criterion_gitlog, weight: 20 },
    { ...criterion_lahteet, weight: 20 },
  ],
};

const videoesitys: OatGradeType = {
  id: "video_submission",
  title: "📹 Videoitu demo",
  description: `Demo on opiskelijan itsenäinen tuotos, jossa opiskelija esittelee jollakin kurssilla tehdyn
  tuotoksen. Siitä tulee selvitä tuotteen vaatimukset, toiminnallisuus ja käyttö. Videoesityksen kesto määritellään
  tehtävänannon yhteydessä. Ideaalitilanteessa opettajan ei tarvitse lukea repositoriosi koodia läpi, vaan tärkeät
  seikat esitellään videolla. Opettajalla tulee kuitenkin olla pääsy repositorioon tarkempaa ja täydentävää
  tarkastelua varten. Muista kirjata harjoitukseen käyttämäsi aika! Sen puute laskee arvosanaasi.`,
  numerical_criteria: [
    { ...criterion_termisto, weight: 40 },
    { ...criterion_toiminnallisuus, weight: 40 },
    { ...criterion_code_quality, weight: 10 },
    { ...criterion_structure_quality, weight: 10 },
  ],
  boolean_criteria: [
    {
      id: "video_submission_code",
      title: "Pääsy koodiin",
      description: `Opettajalla on realistinen pääsy siihen repositorioon, josta löytyy koodin ja dokumentaation palautusversio.`,
    },
  ],
};

const aiProject: OatGradeType = {
  id: "ai_project",
  title: "🤖 AI-projekti",
  description: `Datasta tekoälyyn ryhmän projekti esimerkiksi AI Asiakasprojekti X -kurssille. Jos data tai lähdekoodi on
  salassapidettävää, tulee opiskelijan esitellä ratkaistut ongelmat muilla keinoin. Raportoinnissa on tällöin
  suositeltavaa käyttää dummy-dataa, joka muistuttaa rakenteeltaan alkuperäistä paljastamatta yksityiskohtia.`,
  numerical_criteria: [
    { ...criterion_aihe, weight: 20 },
    { ...criterion_dokumentointi, weight: 20 },
    { ...criterion_koodi, weight: 20 },
    { ...criterion_tulokset, weight: 20 },
    { ...criterion_itsearviointi, weight: 20 },
  ],
  boolean_criteria: [criterion_hours],
};

export const OAT_GRADE_TYPES: OatGradeType[] = [
  oppimispaivakirja,
  videoesitys,
  aiProject,
  // Additional grade types...
];
