import { OatGradeType } from "../types/oat-grade-types";

import common_criterion_lahteet from "./oat-common/lahteet";
import common_criterion_asiatyyli from "./oat-common/asiatyyli";
import common_criterion_tietotaidot from "./oat-common/tietotaidot";
import common_criterion_toiminnallisuus from "./oat-common/toiminnallisuus";
import common_criterion_termisto from "./oat-common/termisto";
import common_criterion_code_quality from "./oat-common/code_quality";

import unique_oppimispaivakirja_gitlog from "./oat-unique/oppimispaivakirja_gitlog";
import unique_video_structure_quality from "./oat-unique/video_structure_quality";
import {
  unique_ai_proj_aihe,
  unique_ai_proj_dokumentointi,
  unique_ai_proj_koodi,
  unique_ai_proj_tulokset,
  unique_ai_proj_itsearviointi,
  unique_ai_proj_hours,
} from "./oat-unique/ai_project_all";

const oppimispaivakirja: OatGradeType = {
  id: "remote_learning_journal",
  title: "📓🛜 Oppimispäiväkirja (monimuoto)",
  description: `
  Oppimispäiväkirja on opiskelijan itsenäinen kirjoitus, jota kirjoitetaan viikko viikolta kurssin edetessä 
  Oppimispäiväkirja 101 -ohjeistuksen mukaan. Kukin muutos tallennetaan versionhallintaan.
  Yksittäinen merkintä edustaa kyseisen viikon aihetta ja opittuja asioita. Siinä näkyvät sekä tehdyt tehtävät että 
  saavutettu ymmärrys. Keskeinen osa on itsearviointi, jossa opiskelija esittää itselleen arvosanan ja perustelee sen alla 
  olevien kriteereiden avulla. Opiskelijan on suositeltavaa ottaa kriteereistä kuvakaappaus tai tekstimuotoien kopio ja 
  perustella arvosanansa niiden pohjalta. Muista katsoa aloitusluento, jossa tätä käsitellään! Tutustu Oppimispäiväkirja 101
  -ohjeistukseen ennen aloittamista.`,
  numerical_criteria: [
    { ...common_criterion_tietotaidot, weight: 40 },
    { ...common_criterion_asiatyyli, weight: 20 },
    { ...unique_oppimispaivakirja_gitlog, weight: 20 },
    { ...common_criterion_lahteet, weight: 20 },
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
    { ...unique_video_structure_quality, weight: 10 },
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
    { ...unique_ai_proj_aihe, weight: 20 },
    { ...unique_ai_proj_dokumentointi, weight: 20 },
    { ...unique_ai_proj_koodi, weight: 20 },
    { ...unique_ai_proj_tulokset, weight: 20 },
    { ...unique_ai_proj_itsearviointi, weight: 20 },
  ],
  boolean_criteria: [unique_ai_proj_hours],
};

export const OAT_GRADE_TYPES: OatGradeType[] = [
  oppimispaivakirja,
  videoesitys,
  aiProject,
  // Additional grade types...
];
