const oppimispaivakirjaConfig = [
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
        weight: 40,
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
        title: "Opiskeluaktiivisuus",
        questionText: "Opiskeluaktiivisuus git commit logista",
        options: [
            "Työskentelyhistoriasta ei ole näyttöä",
            "Tehty viikossa",
            "Tehty kahdessa viikossa",
            "Noin joka toinen viikko",
            "Useimpina viikkoina",
            "Joka viikko",
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
    // Add more questions as needed
];

export { oppimispaivakirjaConfig };
