import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_tietotaidot: NumericalCriteria = {
  id: "self_assessment_criterion1",
  title: "Tietotaidot",
  description: `Korkean tietotaidon omaava opiskelija hallitsee kurssilla käsitellyn käytännön ja teorian todistettavasti.
  Opiskelija tunnistaa oman osaamisensa. Muista antaa numeraalinen arvosana itsellesi!`,
  weight: -1,
  options: [
    { grade: 0, desc: "Ei näyttöä tarvittavista taidoista." },
    {
      grade: 1,
      desc: `Opiskelija listaa perustaitoja. Kurssin sanasto ja jotkin työvaiheet ovat 
      läsnä, mutta opiskelijan oma tietotaidon määrä ei ole vahvasti todistettuna.`,
    },
    {
      grade: 2,
      desc: `Opiskelija havainnollistaa perus tietotaitoja. Opiskelija ei tunnista omia taitojaan tai kykene yhdistämään 
      niitä siihen, miten ne liittyvät kurssin oppimistavoitteisiin.`,
    },
    {
      grade: 3,
      desc: `Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan siten,
       että aihepiirin ymmärrys ei jää epäselväksi. Opiskelija tunnistaa oman osaamisensa tason.`,
    },
    {
      grade: 4,
      desc: `Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan ja itse löytämiinsä 
      ohjeisiin siten, että tietotaito on selkeästi todistettuna. Opiskelija tunnistaa oman osaamisensa tason.`,
    },
    {
      grade: 5,
      desc: `Opiskelija soveltaa taitoja, vertailee toimintatapoja ja luo uusia johtopäätöksiä. On täysin selvää, että 
      opiskelija osaa kurssilla vaaditut asiat. Hän tunnistaa osaamisensa ja mahdolliset kehittämiskohteet itse.`,
    },
  ],
};

export default common_criterion_tietotaidot;