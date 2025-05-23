# 1: Oppimispäiväkirjan rakenne

## Mikä on merkintä?

Oppimispäiväkirja koostuu useista eri **viikkotason** merkinnöistä. ==Tämä==, mitä luet nyt, on kuvitellusti viikon 1 merkintä eli kirjoitettu esimerkiksi 2. tammikuuta 2024. Jos kurssi alkaa elokuussa, viikko voi olla esimerkiksi 31. Noudata kalenteriviikkoja. Tiedostona viikkomerkintä löytyy lokaatiosta `docs/weeks/01_rakenne.md`.

!!! warning "Tärkeää"

    Etsin oppimispäiväkirjastasi **todisteita siitä, että sinä osaat ja ymmärrät** kurssin aihepiirin asiat. Oppimispäiväkirja ei voi olla pelkkä lista faktoja, ChatGPT:n tuottama teksti tai kasa suoria lainauksia jostakin kirjasta. Oppimispäiväkirja on **sinun** työsi, jossa **sinä** osoitat osaamisesi.

    * Kerro, **kuinka** olet työskennellyt ja mitä olet tehnyt.
    * Lisää **omia ajatuksiasi** eli niitä oivalluksia, joita olet kurssin aikana saanut.
    * Lisää **kuvakaappauksia**, joista käy ilmiselväksi, että sinä olet työskennellyt tehtävien parissa.

!!! tip "Nopeampi tai hitaampi suoritus"

    **Nopeampi suoritus 🏎️:** Jos olet jo etukäteen kurssin aihepiirien kanssa sinut, saatat kyetä suorittaa oppimispäiväkirjaa nopeammin kuin alunperin on tarkoitus. Noudata silti viikkonumerointia ja tee jokaisesta viikosta oma merkintänsä. Kirjoita siis tulevaisuuteen!

    **Hitaampi suoritus 🐌:** Joissain tapauksissa, kuten sairastumisen johdosta, sinulle saatetaan myöntää lisäaikaa eli työskentelet hitaammin kuin kurssin alkuperäinen aikataulu. Noudata tällöin aitoja viikkonumeroita.

### Kuvien käyttö

Kuvien, graafien, listojen, koodilohkojen ja muiden runkotekstiä monimutkaisten elementtien käyttö on suositeltavaa ja ==käytännön kursseilla pakollista==. Esimerkki kummastakin alla: 

* 🧤 Käytännöllistä: Linux Perusteet -kurssi.
* 📖 Teoreettista: Big Data -analytiikka ja liiketoiminta -kurssi.

Käytä kuvia ja kuvaajia kuitenkin harkiten ja viittaa näihin tekstissä. Valtaosan päiväkirjamerkinnästä tulisi koostua kokonaisista lauseista, jotka muodostavat kokonaisia kappaleita. Päiväkirja ei siis voi olla pelkkä kuvagalleria tai luettelo asioita.

### Merkinnän laajuus

Seuraavat ohjeistukset ovat voimassa, ellei kurssin aloitusluennolla tai tehtävänannossa määritellä muuta. Kukin viikkotason merkintä on laajuudeltaan noin **1 liuskan eli 500 sanaa**. Voit ylittää tuon rajan, mutta älä kirjoita yli kahta liuskaa eli noin 1000 sanaa tekstiä. Mikäli tekstiä meinaa syntyä liikaa, tiivistä ja keskity olennaiseen. Kuka tahansa osaa kirjoittaa pitkästi; tiivisti kirjoittaminen vaatii harjoitusta. Huomaa, että kuvien, kuvaajien ja koodilohkojen käyttö on oiva tapa sisällyttää paljon tietoa lyhyeen tekstiin.

500 sanaa on melko suppea määrä sanoja prosessien kuvaamiseen. Jos koet kattavan oppimispäiväkirjan kirjoittamisen tärkeäksi, harkitse sitä, että kirjoitat koko oppimispäiväkirjan muualle, ja kirjoitat opettajalle palautettavaan oppimispäiväkirjaan tiiviimmän tekstin.

!!! tip

    Voit laskea sanojen määrän siten, että koodiblokit jäävät laskematta, käyttämällä alla olevaa komentoa. Komento olettaa, että koodilohkot alkavat ja loppuvat kolmella backtickillä ja ovat rivin alussa: eivät sisennettyjä.

    ```bash title="Bash tai Git Bash"
    sed '/^```/,/^```/d' path/to/file.md | wc -w
    ```