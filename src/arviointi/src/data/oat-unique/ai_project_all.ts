import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_ai_proj_aihe: NumericalCriteria = {
  id: "ai_proj_aihe",
  title: "Projektin aihe",
  description: `Projektin aiheen tulee olla merkittävällä tavalla tekoälyyn tai dataputkiin liittyvä ja riittävän haastava.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Ei sisällä laisinkaan tekoälyä tai datan käsittelyä tai ei ole opintojen tasoa vastaava vaikeustasoltaan.",
    },
    {
      grade: 1,
      desc: `Ohjelmistokehitystä, jossa ei ole juurikaan datan käsittelyn tai tekoälyn vaatimuksia.`,
    },
    {
      grade: 2,
      desc: `Ohjelmistonkehitystä, jossa datan käsittelyllä tai tekoälyllä on pieni, sivuava rooli.`,
    },
    {
      grade: 3,
      desc: `Tekoälymalli tai dataputki toteuttaa referenssiesimerkin. Esimerkiksi kuvien 
      luokittelu ennaltamäärättyjen luokkien mukaisesti.`,
    },
    {
      grade: 4,
      desc: `Tekoälymalli tai dataputki toteuttaa referenssiesimerkin, mutta merkittävällä määrällä
      tiimin omaa ratkaisua.`,
    },
    {
      grade: 5,
      desc: `Uusien tekoälytekniikoiden testaamista tai automaattisen datapipelinen rakentaminen.`,
    },
  ],
};

const unique_ai_proj_dokumentointi: NumericalCriteria = {
  id: "ai_proj_dokumentointi",
  title: "Dokumentointi",
  description: `Dokumentaation tulee olla selkeää, perusteltua ja hyödyntää lähteitä, kuvia 
  ja taulukoita tarpeen mukaan.`,
  weight: 20,
  options: [
    {
      grade: 0,
      desc: "Dokumentaatio on riittämätön.",
    },
    { grade: 1, desc: "Dokumentointi suppeaa ja kirjoitettu minä-muodossa." },
    {
      grade: 2,
      desc: "Dokumentaatio sisältää perustiedot, mutta on osin sekava tai vailla lähteitä.",
    },
    {
      grade: 3,
      desc: "Dokumentointi on selkeää ja siinä on käytetty lähteitä, kuvia ja taulukoita.",
    },
    {
      grade: 4,
      desc: "Dokumentaatiossa on analysoitu eri menetelmiä ja pohdittu kehitysideoita.",
    },
    {
      grade: 5,
      desc: `Dokumentaatiossa on tutkittu vaihtoehtoisia menetelmiä, pohdittu saavutettuja tuloksia 
      ja käytetty projektisuunnitelmaa.`,
    },
  ],
};

const unique_ai_proj_koodi: NumericalCriteria = {
  id: "ai_proj_koodi",
  title: "Koodi",
  description: `Koodin tulee olla selkeää ja jäsenneltyä. Koodi on kommunikaatiota ja kirjoitettu luettavaksi.`,
  weight: 20,
  options: [
    { grade: 0, desc: "Ei koodia tai koodi täysin lukukelvotonta." },
    {
      grade: 1,
      desc: "Koodin rakenne sekavaa, eikä juuri sisällä kommentteja.",
    },
    {
      grade: 2,
      desc: "Koodi on osin ymmärrettävää, mutta siinä on rakenteellisia puutteita ja niukasti kommentteja.",
    },
    { grade: 3, desc: "Koodi selkeää ja kommentoitua." },
    {
      grade: 4,
      desc: "Koodin rakenne hyvin mietitty, ja se tukee jatkokehitystä, mutta pieniä puutteita voi olla.",
    },
    {
      grade: 5,
      desc: "Koodin rakenne mietitty ottaen huomioon myös mahdollinen jatkokehitys ja ylläpito.",
    },
  ],
};

const unique_ai_proj_tulokset: NumericalCriteria = {
  id: "ai_proj_tulokset",
  title: "Tulokset",
  description: `Tulokset tulee esittää selkeästi ja selventää, kuinka ne 
  täyttävät toimeksiannon vaatimukset.`,
  weight: 20,
  options: [
    { grade: 0, desc: "Saavutettu tulos jää epäselväksi." },
    { grade: 1, desc: "Saatuja tuloksia ei ole juuri esitelty." },
    {
      grade: 2,
      desc: "Saadut tulokset listattu ja tunnistettu mutta vailla perusteluja.",
    },
    {
      grade: 3,
      desc: `Saadut tulokset esitelty selkeästi, esimerkiksi testaamalla toteutus 
      erillisellä testidatalla ja raportoimalla sen tulokset.`,
    },
    {
      grade: 4,
      desc: "Tulokset analysoitu ja vertailtu eri toteutusvaihtoehtoihin.",
    },
    {
      grade: 5,
      desc: "Projektissa saatu tuloksia, joista on hyötyä projektin toimeksiantajalle ja tulokset on pohdittu suhteessa toimeksiannon vaatimuksiin.",
    },
  ],
};

const unique_ai_proj_itsearviointi: NumericalCriteria = {
  id: "ai_proj_itsearviointi",
  title: "Itsearviointi",
  description: `Opiskelijan tulee arvioida omaa ja tiimin toimintaa realistisesti.`,
  weight: 20,
  options: [
    { grade: 0, desc: "Ei itsearviointia." },
    {
      grade: 1,
      desc: "Omaa/tiimin tekemistä ei ole arvioitu kuin numerolla.",
    },
    {
      grade: 2,
      desc: "Omaa/tiimin tekemistä on arvioitu sanallisesti listaten tai toteavasti.",
    },
    { grade: 3, desc: "Omaa tai tiimin tekemistä arvioitu realistisesti." },
    {
      grade: 4,
      desc: `Omaa/tiimin tekemistä ja arvioitu realistisesti, mutta 
      parantamisen kohteet ja saavutetut opit ovat jääneet tunnistamatta.`,
    },
    {
      grade: 5,
      desc: "Mietitty miten omaa/tiimin tekemistä olisi voinut parantaa ja mitä opittiin.",
    },
  ],
};

// Export both
export {
  unique_ai_proj_aihe,
  unique_ai_proj_dokumentointi,
  unique_ai_proj_koodi,
  unique_ai_proj_tulokset,
  unique_ai_proj_itsearviointi,
};
