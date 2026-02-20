import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_oppimispaivakirja_gitlog: NumericalCriteria = {
  id: "oppimispaivakirja_gitlog",
  title: "Opiskeluaktiivisuus",
  description: `Aktiivinen opiskelu edistää oppimista ja samalla harjaannuttaa git-versionhallinnan 
  käytössä. Sinulta toivotaan viikoittaista työskentelyä, jonka tulee näkyä git-lokeissa. Käytä selkeitä commit-viestejä. 
  Todista aktiivisuus myös itsearvioinnissa! Apuna voit käyttää GitLab:n tarjomia työkaluja kuten Code > Repository Graph.
  Aktiivisuus Teamsissä tai Discordissa ei korvaa git-lokeja, mutta lasketaan eduksi. Jos olet ollut aktiivinen, 
  mainitse se itsearvioinnissa.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: `
      Työskentelyhistoriasta ei ole näyttöä. Git-historiassa on vain yksi commit juuri ennen palautusta.`,
    },
    {
      grade: 1,
      desc: `Työ on tehty viikossa. Git-historiasta löytyy myös toisilta viikoilta esimerkiksi typon korjaus, mutta 
      käytännössä koko työ on yhdeltä istumalta tehty.`,
    },
    {
      grade: 2,
      desc: `Työ on tehty noin kahdessa viikossa, kuten kurssin aloitusviikolla ja lopetusviikolla.`,
    },
    {
      grade: 3,
      desc: `
      Työskentely on ollut aktiivista läpi kurssin, mutta kausittaista.
      Työtä on tehty noin joka toinen viikko.
      Työ on tehty pääasiassa kurssin aikataulun mukaisesti.
      Aikataulusta poikkeamat on sovittu opettajan kanssa ja dokumentoitu selkeästi.`,
    },
    {
      grade: 4,
      desc: `
      Opiskelija on tehnyt sisällön kannalta merkittäviä committeja lähes joka viikko.
      Commit-viesteistä on tulkittavissa, mitä kyseisellä viikolla on tehty.
      Aikataulusta poikkeamat on sovittu opettajan kanssa ja dokumentoitu selkeästi.
      Työ on palautettu saman lukukauden aikana kun kurssi on alkanut.`,
    },
    {
      grade: 5,
      desc: `
      Opiskelija on ollut erittäin aktiivinen ja git-lokit ovat selkeät ja kattavat.
      Kunkin viikon merkinnän suurin työ on commitoitu kyseisellä viikolla. 
      Aikataulusta poikkeamat on sovittu opettajan kanssa ja dokumentoitu selkeästi.
      Työ on palautettu määräaikaan mennessä ellei muuta ole sovittu opettajan kanssa.`,
    },
  ],
};

export default unique_oppimispaivakirja_gitlog;
