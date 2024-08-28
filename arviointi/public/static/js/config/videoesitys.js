const videoesitysConfig = [
    {
        title: "Termistö",
        questionText: "Termistön käyttö",
        options: [
            "Termistön käyttö on täysin puutteellista tai lähes kokonaan virheellistä.",
            "Termistön käyttö on suppeaa tai sisältää suurelta osin virheitä.",
            "Termistöä on käytetty oikein, mutta sisällön kannalta epärelevantilla tavalla.",
            "Termistö on pääosin oikein käytetty ja kattavaa, mutta esiintyy joitakin epäselvyyksiä.",
            "Termistöä on käytetty oikein ja kattavasti, pieniä puutteita tai epätarkkuuksia esiintyy.",
            "Termistöä on käytetty asiantuntevasti, virheettömästi ja kattavasti."
        ],
        weight: 100
    },
    {
        title: "Toiminnallisuus",
        questionText: "Tuotteen toiminnallisuus",
        options: [
            "Toiminnallisuutta ei ole todistettu.",
            "Toiminnallisuudesta puuttuu merkittäviä osia.",
            "Toiminnallisuus on vajavaista.",
            "Tuote toimii hyväksyttävästi, mutta sen istuvuus tehtävänantoon tai liiketoiminnan vaatimuksiin on epäselvä.",
            "Tuote toimii ja komponentit täyttävät suurimman osan vaatimuksista, pienet puutteet mahdollisia.",
            "Tuote toimii tehtävänannon tai liiketoiminnan vaatimuksien mukaisesti ja se voidaan näyttää todeksi."
        ],
        weight: 100
    },
    {
        title: "Koodi",
        questionText: "Koodikanta ja dokumentaatio",
        options: [
            "Koodi puuttuu tai on suorituskelvotonta.",
            "Koodi on epäselvää, dokumentaatio puutteellista.",
            "Koodi on esimerkkien tasolla, mutta oma työpanos puuttuu suurelta osin.",
            "Koodi myötäilee hyväksyttävällä tasolla tehtävänantoa, mutta laajalti puutteellista.",
            "Koodi on pääosin selkeää ja dokumentaatio on ymmärrettävällä tasolla.",
            "Koodi on todistettavasti selkeää ja hyvin dokumentoitua, ei selkeitä puutteita."
        ],
        weight: 100
    },
    {
        title: "Video",
        questionText: "Videon vastaanotettavuus",
        options: [
            "Video on katsojan kannalta mahdotonta vastaanottaa.",
            "Video on improttu, epäselkeä, hajavainen tai merkittävästi väärän mittainen.",
            "Video on osittain improttu, epäselkeä, hajanainen.",
            "Videon sisältö on pääosin vastaanotettavissa, mutta rakenne on hajanainen.",
            "Videon sisältö on enimmäkseen vastaanotettavissa ja jäsenneltyä.",
            "Videon sisältö on selkeää ja jäsenneltyä."
        ],
        weight: 100
    }
];

export { videoesitysConfig };
