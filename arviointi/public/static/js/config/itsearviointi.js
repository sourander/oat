const itsearviointiConfig = [
  {
    title: "Taidot",
    questionText: "Tietotaidot",
    options: [
      "Ei näyttöä tarvittavista taidoista",
      "Listaa perustaitoja",
      "Esittelee perustaitoja",
      "Käyttää perustaitoja todistettavasti",
      "Hyödyntää taitoja ja kykenee noudattamaan löytämiään ohjeita",
      "Soveltaa taitoja, vertailee toimintatapoja ja luo johtopäätöksiä",
    ],
    weight: 50,
  },
  {
    title: "Asiatyyli",
    questionText: "Asiatyyli ja ammattisanasto",
    options: [
      "Ei ole ymmärrettävää ja asiatyylistä",
      "Jäsentymätöntä ja toistuvia tyyli- tai kielivirheitä",
      "Tyylillisesti epätasaista ja toteavaa",
      "Huoliteltua ja tehtävänannon mukaista asiatekstiä",
      "Sujuvaa ja lähes virheetöntä asiatyyliä, jossa ammattisanasto on käytössä",
      "Argumentoivaa, oivaltavaa ja virheetöntä asiatyyliä sekä ammattisanaston käsittelyä",
    ],
    weight: 20,
  },
  {
    title: "Lähteet",
    questionText: "Lähdeaineiston käyttö",
    options: [
      "Lähdeaineisto on riittämätön",
      "Lähdeaineistoa on listattu, mutta runko on kirjoitettu ilman lähteitä",
      "Lähdeaineistoa ja tekstin sisäiset viittaukset käytössä",
      "Lähdeaineiston käyttö on systemaattista ja lukijalle selkeää",
      "Lähdeaineisto on tarkoituksenmukaista ja monipuolista",
      "Lähdeaineisto on kriittisesti arvioitu ja punnittu",
    ],
    weight: 20,
  },
  {
    title: "Tiimityö",
    questionText: "Tiimityöskentely",
    options: [
      "Opiskelija ei mainitse tiimityöskentelyä",
      "Tiimi on mainittuna, mutta yhteistyö jää epäselväksi",
      "Tiimin yhteistyö on kuvattu, mutta todisteita ei ole",
      "Tiimityöskentely on itsearvioinnissa läsnä, mutta todisteita ei ole tai ne ovat puutteellisia",
      "Tiimityöskentely on osin todistettu (esim. git-historia)",
      "Tiimityöskentely on osoitettu todisteiden avulla (esim. git-historia, palaverimuistiot, työnjako, vastuut, Clockify-tunnit, selkeä Gitlab-tiketöinti)",
    ],
    weight: 10,
  },
  // Add more questions as needed
];

export { itsearviointiConfig };
