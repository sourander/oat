---
hide:
    toc: true
---

#  Johdanto

!!! question "Mikä tämä sivu on?"

    Tämä on kirjoitus- ja tyyliohje oppimispäiväkirjaasi varten. Oppimispäiväkirja on viikkoteemoittain jäsennelty kokoelma teemamerkintöjä. Tutustu materiaaliin ja aloita tämän jälkeen oman oppimispäiväkirjasi kirjoittaminen. Jos et ole varma, kysy opettajaltasi.

    Tämän sivun takana olevat Markdown-tiedostot löydät [gf:sourander/oat repon docs-hakemistosta](https://github.com/sourander/oat/tree/master/docs). Voit käyttää niitä referenssinä Markdown-syntaksin oppimiseen.

Oppimispäiväkirja alkaa tämän ohjesivuston tavoin **Johdanto**-luvulla. Kirjoita se index-tiedostoon (`docs/index.md`) Ethän luo oppimispäiväkirjaa itse tyhjästä — käytä cookiecutter-templaattia, joka esitellään tässä materiaalissa! Se säästää sinulta aikaa. Sinun oppimispäiväkirjasi siis ==näyttää tältä sivustolta, jota juuri nyt luet==.

Oppimispäiväkirja koostuu useista eri **viikkotason** teemamerkinnöistä, joiden otsikointi noudattaa kalenteriviikkoja. Tässä ohjeessa myöhemmin neuvottu `cookiecutter`-templaatti alustaa päiväkirjan siten, että ensimmäinen merkintä saa oikean viikkonumeron. Päiväkirjasi sisällysluettelo voi olla esimerkiksi:

```plaintext
Hevospoolon perusteet
  Johdanto
  Viikkomerkinnät
    > 35: Yleistä hevospoolosta
    > 36: Hevonen pähkinänkuoressa
    > 39: Poolon etiketti
    > 40: Varusteet ja turvallisuus
    > 42: Poolo käytännössä
    > 43: Pelin läpikäynti ja oma kehitys
  Itsearviointi
```

!!! warning "Käytä kalenteriviikkoja"

    Lue tämä lause kolmesti ääneen: **Oppimispäiväkirjan viikkomerkinnän otsikkoon tulee viikkonumero**

    Yllä hevospooloesimerkissä viikot 37–38 ja 41 puuttuvat. Miksi? Tämä selviäisi lukemalla päiväkirjan merkinnät. Kenties viikon 36 aihe – Hevonen pähkinänkuoressa – oli poikkeuksellisen työläs, ja opiskelija käytti siinä 3 viikkoa. Kenties opiskelija kävi välissä 2 viikkoa Alpeilla laskettelemassa. On oletus, että tähän löytyisi vastaus joko seuraavan merkinnän (eli vko 39) alusta ja/tai Itsearvioinnista.

## Mitä kuuluu Johdantoon?

Voit listata Johdannossa asioita, jotka haluat oppia kurssin aikana eli odotukset kurssin suhteen. Johdannossa on hyvä myös sanallistaa aiemman kokemuksesi aihepiiristä. Tämä antaa lukijalle hieman kontekstia.

Johdanto on oppimispäiväkirjasi lukuohje. Johdannossa voi kuvata myös muodollisia seikkoja oppimispäiväkirjastasi, kuten lukijaa auttava kuvaus sivuston rakenteesta: *"Olen tehnyt itselleni aihepiiristöstä sanaston, johon kirjaan kaikki kurssilla oppimani uudet termit ja niiden selitykset. Se löytyy vasemmalta navigoinnista Sanasto-otsikon alta."* Näin lukija, eli opettaja, osaa reagoida templaattiin kuulumattomiin alasivuihin. Sinun omat, kurssin viralliseen palautukseen kuulumattomat muistiinpanosi eivät vaikuta negatiivisesti arvosanaan, vaikka niiden laajuus olisi kymmeniä tuhansia sanoja ja ne olisivat runomitassa tai latinaksi – kunhan opettaja tunnistaa viikkomerkinnän ja sinun omaan käyttöön tarkoitettujen sivujen eron.

## Arviointi

Oppimispäiväkirjaan liittyy myös arviointityökalu, joka on toteutettu React TypeScript -sovelluksena. Sen koodi on samassa repositoriossa kuin tämä Github Pages, eli [gh:sourander/oat](https://github.com/sourander/oat/). Voit tutustua koodiin oman mielenkiintosi mukaan.

🌐 Arviointityökalu löytyy online osoitteesta: [arviointi.munpaas.com](https://arviointi.munpaas.com/)
