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

* 🧤 Käytännön kurssi: Linux Perusteet
* 📖 Teoreettinen kurssi: Big Data -analytiikka ja liiketoiminta

Käytä kuvia ja kuvaajia kuitenkin harkiten ja viittaa näihin tekstissä. Valtaosan päiväkirjamerkinnästä tulisi koostua kokonaisista lauseista, jotka muodostavat kokonaisia kappaleita. Päiväkirja ei siis voi olla pelkkä kuvagalleria tai luettelo asioita.

### Merkinnän laajuus

Seuraavat ohjeistukset ovat voimassa, ellei kurssin aloitusluennolla tai tehtävänannossa määritellä muuta. Kukin viikkotason merkintä on laajuudeltaan noin **1 liuskan eli 500 sanaa**. Voit ylittää tuon rajan, mutta älä kirjoita yli kahta liuskaa eli noin 1000 sanaa tekstiä. Mikäli tekstiä meinaa syntyä liikaa, tiivistä ja keskity olennaiseen. Kuka tahansa osaa kirjoittaa pitkästi; tiivisti kirjoittaminen vaatii harjoitusta. Tähän liittyen on edellä lainaus:

!!! quote

    "I would have written a shorter letter, but I did not have the time."

    — Blaise Pascal [^npr]

500 sanaa on melko suppea määrä sanoja prosessien kuvaamiseen. Kuvien, kuvaajien ja koodilohkojen käyttö on oiva tapa sisällyttää paljon tietoa lyhyeen tekstiin. Jos koet kattavan oppimispäiväkirjan kirjoittamisen tärkeäksi, harkitse sitä, että kirjoitat koko oppimispäiväkirjan muualle, ja kirjoitat opettajalle palautettavaan oppimispäiväkirjaan tiiviimmän tekstin. Tai vaihtoehtoisesti voit aluksi kirjoittaa pidemmän oppimispäiväkirjan, ja viimeisellä viikolla tiivistää sitä sopivaan mittaan. Tällöin teet tärkeitä valintoja siitä, mikä on olennaista, mikä ei.

!!! tip "Sanamäärän laskeminen"

    Voit laskea Markdown-tiedoston sanojen määrän käyttämällä `oat-tools`-työkalua. Olettaen että sinulla on [astral-sh/uv](https://docs.astral.sh/uv) asennettuna, voit asentaa `oat-tools`:n näin:

    ```bash
    uv tool install oat-tools
    ```

    Tämän jälkeen voit laskea sanojen määrän komennolla `oat wordcount path/to/file.md`. Työkalu jättää laskematta esimerkiksi koodilohkoissa olevat sanat, joten se on hyvä tapa laskea vain runkotekstin sanat. Alla olevan komennon avulla voit laskea **kaikkien** oppimispäiväkirjan Markdown-tiedostojen sanojen määrän kerralla:

    ```console
    $ oat wordcount docs/**/*.md
    File                           Word Count
    ---------------------------  ------------
    docs/docs/index.md                    252
    docs/docs/itsearviointi.md            340
    docs/docs/weeks/35_entry.md           580
    docs/docs/weeks/36_entry.md           635
    docs/docs/weeks/37_entry.md           554
    docs/docs/weeks/38_entry.md           622
    docs/docs/weeks/39_entry.md           534
    docs/docs/weeks/40_entry.md           602
    ```

    Tämä komento laskee kaikki sanat, mukaan lukien koodilohkoissa olevat sanat. Jos haluat laskea vain runkotekstin sanat, katso alla olevaa vinkkiä. Tarkemmat käyttöohjeet löydät [oat-tools](https://pypi.org/project/oat-tools/) -projektin sivulta.

!!! tip "Sanamäärän laskeminen ilman oat-toolsia"

    Voit laskea sanojen määrän siten, että koodiblokit jäävät laskematta, käyttämällä alla olevaa komentoa. Komento olettaa, että koodilohkot alkavat ja loppuvat kolmella backtickillä ja ovat rivin alussa: eivät sisennettyjä.

    ```bash title="Bash tai Git Bash"
    sed '/^```/,/^```/d' path/to/file.md | wc -w
    ```


[^npr]: Lombrozo, T. *This Could Have Been Shorter*. NPR. https://www.npr.org/sections/13.7/2014/02/03/270680304/this-could-have-been-shorter