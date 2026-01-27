# 1: Oppimispäiväkirjan rakenne

## Mikä on merkintä?

Oppimispäiväkirja koostuu useista eri **viikkotason** merkinnöistä. ==Tämä==, mitä luet nyt, on kuvitellusti viikon 1 merkintä eli kirjoitettu esimerkiksi perjantaina 2. tammikuuta 2026. Jos kurssi alkaa elokuussa, viikko voi olla esimerkiksi 31. Noudata kalenteriviikkoja. Tässä ohjeessa myöhemmin neuvottu `cookiecutter`-templaatti alustaa päiväkirjan siten, että ensimmäinen merkintä saa oikean viikkonumeron. Tiedostona viikkomerkintä löytyy lokaatiosta `docs/weeks/01_rakenne.md`.

!!! warning "Tärkeää"

    Etsin oppimispäiväkirjastasi **todisteita siitä, että sinä osaat ja ymmärrät** kurssin aihepiirin asiat. Oppimispäiväkirja ei voi olla pelkkä lista faktoja, ChatGPT:n tuottama teksti tai kasa suoria lainauksia jostakin kirjasta. Oppimispäiväkirja on **sinun** työsi, jossa **sinä** osoitat osaamisesi.

    * Kerro, **kuinka** olet työskennellyt ja mitä olet tehnyt.
    * Lisää **omia ajatuksiasi** eli niitä oivalluksia, joita olet kurssin aikana saanut.
    * Lisää **kuvakaappauksia**, joista käy ilmiselväksi, että sinä olet työskennellyt tehtävien parissa.

!!! tip "Nopeampi tai hitaampi suoritus"

    **Nopeampi suoritus 🏎️:** Jos olet jo etukäteen kurssin aihepiirien kanssa sinut, saatat kyetä suorittaa oppimispäiväkirjaa nopeammin kuin alunperin on tarkoitus. Noudata silti aitoa viikkonumerointia! Tämä luonnolliseesti rikkoo sivujen numeroihintiin perustuvan aakkosjärjestyksen. Kysy opettajalta neuvoa!

    **Hitaampi suoritus 🐌:** Joissain tapauksissa, kuten sairastumisen johdosta, sinulle saatetaan myöntää lisäaikaa eli työskentelet hitaammin kuin kurssin alkuperäinen aikataulu. Noudata tällöinkin aitoja viikkonumeroita. Kun aloitat uuden merkinnän, katso kalenterista, mikä viikko nyt on.

### Kuvien käyttö

Kuvien, graafien, listojen, koodilohkojen ja muiden runkotekstiä monimutkaisten elementtien käyttö on  ==pakollista==. Ethän palauta esseetekstiä, jossa tekoälyn generoima teksti kuvailee aihetta yleisluonteisesti. Käytä kuvia ja muita elementtejä osoittaaksesi, että olet työskennellyt kurssin aihepiirin parissa.

Käytä kuvia ja kuvaajia kuitenkin harkiten. Leipätekstin tulee rytmittää päiväkirjamerkintää ja pitää lukija perillä siitä, mihin kuvat liittyvät. Päiväkirjan pohjana on siis kokonaisia virkkeitä, jotka muodostavat kokonaisia kappaleita. Päiväkirja ei voi olla pelkkä kuvagalleria tai luettelo asioita.

### Merkinnän laajuus

Tämä ohjeistus on muuttunut 2026. Päiväkirjamerkinnöillä ei ole maksimipituutta, mutta älä odota, että määrä korvaa laadun. Mikäli teksti meinaa rönsyillä, tiivistä ja keskity olennaiseen. Kuka tahansa osaa kirjoittaa pitkästi; tiivisti kirjoittaminen vaatii harjoitusta. Tähän liittyen on edellä lainaus:

!!! quote

    "I would have written a shorter letter, but I did not have the time."

    — Blaise Pascal [^npr]

Vaihtoehtoisesti voit aluksi kirjoittaa aluksi vapaamuotoisemman, pidemmän oppimispäiväkirjan, ja editoida sen palautusviikolla sopivaan mittaan. Tällöin teet tärkeitä valintoja siitä, mikä on olennaista, mikä ei. Tämä on tärkeä taito opinnäytetyötä ja työelämääkin ajatellen.

Varmista kuitenkin, että kukin viikkotason merkintä on laajuudeltaan aivan vähimmillään noin **1 liuskan eli 500 sanaa**. 

Huomaa, että jos osaat kirjoittaa tiivisti, on täysin realistista, että voit saavuttaa täyden arvosanan (5/5) noin 500 sanalla. Jos pohdit, että 500 sanaa on suppea määrä sanoja prosessien kuvaamiseen, niin ota huomioon, että tähän ei lasketa kuvia ja koodilohkoja; niiden tehokas käyttö on oiva tapa sisällyttää paljon tietoa lyhyeen tekstiin.

!!! tip "Sanamäärän laskeminen (oat-tools)"

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

    Tämä komento pyrkii laskemaan vain leipätekstin sanat: koodilohkot jätetään laskematta. Menetelmä ei ole kuitenkaan aivan vedenpitävä. Esimerkiksi taulukot voivat vaikuttaa sanamäärään. Tarkemmat käyttöohjeet löydät [oat-tools](https://pypi.org/project/oat-tools/) -projektin sivulta.

[^npr]: Lombrozo, T. *This Could Have Been Shorter*. NPR. https://www.npr.org/sections/13.7/2014/02/03/270680304/this-could-have-been-shorter