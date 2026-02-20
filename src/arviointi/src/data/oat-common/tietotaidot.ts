import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_tietotaidot: NumericalCriteria = {
  id: "self_assessment_criterion1",
  title: "Tietotaidot",
  description: `Korkean tietotaidon itsenäisesti osoittava opiskelija hallitsee kurssilla käsitellyn käytännön ja teorian todistettavasti.
  Opiskelija tunnistaa oman osaamisensa tason. Muista antaa numeraalinen arvosana itsellesi! 
  Käytä Arviointityökalua apuna: ota kuvakaappaus ja liitä se itsearviointiin. Älä unohda perusteluja!`,
  weight: -1,
  options: [
    { grade: 0, desc: "Ei näyttöä tarvittavista taidoista." },
    {
      grade: 1,
      desc: `
      Opiskelija listaa perustaitoja. 
      Kurssin sanasto ja jotkin työvaiheet ovat tunnistettavissa. 
      Opiskelijan oma tietotaidon määrä ei tule vahvasti esille.`,
    },
    {
      grade: 2,
      desc: `
      Opiskelija havainnollistaa perustietotaitoja.
      Kurssin sanasto ja useimmat työvaiheet on mainittu.
      Opiskelija ei tunnista omia taitojaan tai kykene yhdistämään niitä kurssin oppimistavoitteisiin.`,
    },
    {
      grade: 3,
      desc: `
      Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan.
      Kaikki kurssin tehtävät on suoritettu vähintäänkin tyydyttävästi.
      Aihepiirin ymmärrys on osoitettu selkeästi.
      Opiskelija tunnistaa oman osaamisensa tason sekä sanallisesti että numeraalisesti.`,
    },
    {
      grade: 4,
      desc: `
      Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan sujuvasti.
      Kurssin tehtävät on suoritettu hyvin.
      Opiskelija on omatoimisesti syventänyt tietotaitoaan annettuun suuntaan.
      Osaaminen on selkeästi todistettua ja esitetty persoonallisella otteella.
      Opiskelija arvioi oman osaamisensa tason sekä sanallisesti että numeraalisesti.`,
    },
    {
      grade: 5,
      desc: `
      Opiskelija soveltaa taitojaan, vertailee toimintatapoja ja tekee uusia johtopäätöksiä.
      Kurssin tehtävät on suoritettu erinomaisesti.
      Opiskelija on laajentanut osaamistaan omatoimisesti ja syvällisesti.
      On täysin selvää, että opiskelija hallitsee kurssilla vaaditut asiat. 
      Opiskelija arvioi osaamisensa realistisesti sekä sanallisesti että numeraalisesti.
      Opiskelija tunnistaa ja nimeää omat kehityskohteensa.`,
    },
  ],
};

export default common_criterion_tietotaidot;
