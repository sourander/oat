import { NumericalCriteria } from "../../types/oat-grade-types";

const common_criterion_tietotaidot: NumericalCriteria = {
  id: "self_assessment_criterion1",
  title: "Tietotaidot",
  description: `Korkean tietotaidon omaava opiskelija hallitsee kurssilla käsitellyn käytännön ja teorian todistettavasti.
  Opiskelija tunnistaa oman osaamisensa. Muista antaa numeraalinen arvosana itsellesi! 
  Käytä Arviointityökalua apuna: ota kuvakaappaus ja liitä se itsearviointiin. Älä unohda perusteluja!`,
  weight: -1,
  options: [
    { grade: 0, desc: "Ei näyttöä tarvittavista taidoista." },
    {
      grade: 1,
      desc: `
      Opiskelija listaa perustaitoja. 
      Kurssin sanasto ja jotkin työvaiheet ovat läsnä. 
      Opiskelijan oma tietotaidon määrä ei ole vahvasti todistettuna.`,
    },
    {
      grade: 2,
      desc: `
      Opiskelija havainnollistaa perus tietotaitoja.
      Kurssin sanasto ja useimmat työvaiheet ovat läsnä.
      Opiskelija ei tunnista omia taitojaan tai kykene yhdistämään niitä kurssin oppimistavoitteisiin.`,
    },
    {
      grade: 3,
      desc: `
      Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan.
      Kaikki kurssin tehtävät on suoritettu vähintäänkin tyydyttävästi.
      Aihepiirin ymmärrys ei jää epäselväksi.
      Opiskelija tunnistaa oman osaamisensa tason numeraalisesti.`,
    },
    {
      grade: 4,
      desc: `
      Opiskelija käyttää kurssilla vaadittuja taitoja ja yhdistää ne teoriaan.
      Kurssin tehtävät on suoritettu hyvin.
      Opiskelija on omatoimisesti laajentanut tietotaitoaan viitoitettuun suuntaan.
      Tietotaito on selkeästi todistettuna ja omaäänisesti esitetty.
      Opiskelija tunnistaa oman osaamisensa tason numeraalisesti ja sanallisesti.`,
    },
    {
      grade: 5,
      desc: `
      Opiskelija soveltaa taitoja, vertailee toimintatapoja ja luo uusia johtopäätöksiä.
      Kurssin tehtävät on suoritettu erinomaisesti.
      Opiskelija on laajentanut tietotaitoaan omatoimisesti ja syvällisesti.
      On täysin selvää, että opiskelija osaa kurssilla vaaditut asiat. 
      Opiskelija tunnistaa osaamisensa numeraalisesti ja sanallisesti.
      Opiskelija tunnistaa omat kehityskohteensa.`,
    },
  ],
};

export default common_criterion_tietotaidot;
