import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_self_assessment_tiimityo: NumericalCriteria = {
  id: "self_assessment_tiimityo",
  title: "Tiimityö",
  description: `Opiskelija arvioi omaa panostaan tiimissä ja tiimin toimintaa. 
    Opiskelija osoittaa, että hän on osallistunut tiimin toimintaan ja on tehnyt 
    sovitut tehtävät ajallaan yhtenä tiimin jäsenenä. Tämä kaikki on todistettavissa 
    Git Issueiden tai muiden dokumenttien avulla.`,
  weight: 10,
  options: [
    { grade: 0, desc: "Opiskelija ei mainitse tiimityöskentelyä." },
    {
      grade: 1,
      desc: `Opiskelija ei ole todistettuvasti osallistunut tiimin toimintaan. Tiimi on
      mainittuna, mutta yhteistyö ja työnjako jää epäselväksi. Jos tämä johtuu haasteita,
      niitä ei ole näytetty todeksi.`,
    },
    {
      grade: 2,
      desc: `Tiimin yhteistyö on kuvattu, mutta todisteita yhteistyöstä ei ole.`,
    },
    {
      grade: 3,
      desc: `Tiimityöskentely on itsearvioinnissa läsnä, mutta todisteita on niukasti tai ne 
      ovat puutteellisia tai täysin subjektiivisia.`,
    },
    {
      grade: 4,
      desc: `Tiimityöskentely on osin todistettu (esim. git-historia, roolitukset).`,
    },
    {
      grade: 5,
      desc: `Tiimityöskentely on osoitettu todisteiden avulla (esim. git-historia, 
      palaverimuistiot, työnjako, vastuut, Clockify-tunnit, selkeä Gitlab-tiketöinti). On selvää,
      että opiskelija on tehnyt parhaansa edistääkseen tiiminsä mahdollisuuksia saada hyvä arvosana.`,
    },
  ],
}

export default unique_self_assessment_tiimityo;