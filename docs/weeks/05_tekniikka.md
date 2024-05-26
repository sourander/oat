# 5: Vinkkejä kirjoittamiseen

## Motivaatio

Kirjoittamisprosessissa aloittaminen tai joskus sen jatkaminen on vaikeaa. Tälle lamauttavalle tunteelle on jopa termi valkoisen paperin kammo (engl. writer's block.) Opinnäytetyö jumissa -kirja antaa muutamia askeleita, joilla voit yrittää voittaa tämän tunteen, ja näistä ensimmäinen on avata kirjoitettava dokumentti, tuijottaa sitä 10 sekuntia, ja analysoida omia tuntemuksiaan [^3582cf].

Minun motivaatiovinkkini ovat:

* **Aloita kirjoittaminen**: Kirjoita ensimmäinen lause. Se voi olla mikä tahansa. Se voi olla jopa `"TODO: Kirjoita tähän Linuxin asennusprosessista."`
* **Kirjoita usein**: Tee kirjoittamisesta tapa. Maksimoi ne kerrat, kun sinulla on oppimispäiväkirja auki tekstieditorissa.
* **Tee ensin, kirjoita sitten**: Lue alla olevasta infolaatikosta lisää.
* **Opi muilta**: Kysy kavereilta, mitä ja miten he kirjoittavat. Jaa kavereille omia kirjoituksiasi ja löytämiäsi vinkkejä kirjoitusprosessista.

!!! tip

    Jos sinulla olisi henkilökohtainen päiväkirja, jota kirjoittaisit päivittäin, mitä tekisit? Avaisitko sen aamulla miettien, että *"Mitähän tähän nyt pitikään kirjoittaa?"* Tuskin.

    Todennäköisemmin menisit ulos, tekisit jotakin ja kirjoittaisit kokemuksista päivän päätteeksi. Mitä aktiivisemman päivän eläisit, sitä enemmän sinulla olisi kirjoitettavaa. Kenties voisit mennä lounasravintolaan ruuhka-aikaan, kysyä "voiko tähän istua?", ja aloittaisit keskustelun tuntemattoman kanssa. Tai kenties päättäisit rohkeasti lähestyä LinkedIn-palvelussa henkilöä, joka työskentelee unelma-ammattisi parissa.
    
    Tee sama oppimispäiväkirjan kanssa. Jos sinulla ei ole mitään, mistä kirjoittaa, etsi kurssiin liittyviä harjoituksia, lue kurssikirjallisuutta, katso luentovideo, tee miellekartta tai aktivoi muutoin itseäsi. Kirjoita sitten.

## Prosessi

Kirjoititpa oppimispäiväkirjaa, opinnäytetyötä tai esseetä, massiivinen työ kannattaa pyrkiä purkaa pieniin osiin. Voit hyödyntää tässä ketterän ohjelmistokehityksen menetelmiä, kuten Scrumia, joka on sinulle esitelty KAMK:n kursseilla. Oppimispäiväkirjan kohdalla viikot ovat sprinttejä, ja jokaisella viikolla on jokin teema tai aihe. Voit kokeilla luoda TODO-listan viikoittaisista tehtävistä valitsemaasi työkaluun, kuten post-it -lappuihin, [Microsoft To-Do](https://to-do.office.com/tasks/today)-applikaatioon tai vaikkapa suoraan oppimispäiväkirjan kunkin viikon Markdown-tiedostoon.

Oman työn hallinta ja johtaminen on työelämässä tärkeä taito. Työterveyslaitoksen verkkolehdessä tarjotaan vinkkejä, jotka ovat tiivistetyssä muodossa seuraavat [^f65588]:

1. Aseta tavoitteita
2. Priorisoi
3. Suunnittele ajankäyttö
4. Työskentele silloin, kun olet tehokkaimmillasi
5. Tunnista stressi ja pidä yllä vireystilaa
6. Tunnustele hyvinvointiasi
7. Kannusta itseäsi 

## Työkalut

Voit halutessasi käyttää kirjoittamisen apuna eri ohjelmia ja työkaluja. Voit esimerkiksi kirjoittaa runkotekstin **Microsoft Word**:ssa, jolloin käytössäsi on oikoluku ja muut kielentarkistusominaisuudet. Tämän jälkeen voit kopioida tekstin Markdown-muotoon. Voit jopa kokeilla sanella tekstiä valitsemasi speech-to-text -ohjelman avulla; muista kuitenkin tarkistaa robotin litteroima teksti ennen sen julkaisemista.

Markdown-tiedostoja voi muokata ja esikatsella **Visual Studio Code**:lla, mutta siinä eivät toimi esimerkiksi alaviite tai Mermaid ainakaan ilman lisäosia. Jos kirjoitat Visual Studio Code:lla, kannattaa pitää MkDocs-palvelin ajossa ja tarkkailla sivua `localhost:8000`:ssa. 

!!! tip

    Jos käsittelet usein Markdown-tiedostoja ja haluat WYSIWYG (What You See Is What You Get) editorin, yksi vaihtoehto on [Typora](https://typora.io/). Ohjelma maksaa noin 15 euroa.

    Kyseinen ohjelma ei kuitenkaan tue aivan kaikkia samoja muotoiluita kuin MkDocs, mikä saattaa aiheuttaa ongelmia. Yksi esimerkki ei-tuetusta muotoilusta ovat `!!!`-tyyliset varoitukset eli `admonition`-tyyliset lohkot. ==Tämä==, mitä nyt luet, on sellainen.

Vakiona pitkä kappale näyttäytyy Visual Studio Codessa yhtenä rivinä, mikä tekee tekstin lukemisesta hankalaa. Tämän voi korjata lisäämällä word wrap -ominaisuuden. Tämä kannattaa asettaa siten, että se on aktiivinen nimenomaan Markdown-tiedostojen kanssa. Avaa `View => Command Palette` ja etsi `Preferences: Open User Settings (JSON)`. Lisää tiedostoon seuraavat rivit:

```json title="settings.json"
{
    // JSON:ssa voi olla aiemmin luomiasi asetuksia, esimerkiksi:
    // ...
    // "workbench.colorTheme": "Default Dark Modern",
    // "git.autofetch": false,
    // "editor.defaultFormatter": "esbenp.prettier-vscode",
    // ...

    // Lisää JSON:iin seuraavanlainen osuus: "[markdown]": { ... }
    "[markdown]": {
        "editor.wordWrap": "on",
        "editor.tabSize": 4,
        "editor.insertSpaces": true,
        // Jos haluat, asenna Markdown All in One -lisäosa ja lisää myös
        "editor.defaultFormatter": "yzhang.markdown-all-in-one",
        "editor.formatOnSave": true
    }
}
```

!!! warning

    Yllä oleva JSON-tiedosto olettaa, että sinulla on Extension Markdown All in One asennettuna. Jos sinulla ei ole tätä, jätä defaultFormatter -rivi pois.

## Lähdeluettelo

[^3582cf]: Ahonen, S. *Opinnäytetyö jumissa. Mitä tehdä kun homma ei etene.* Tampere: Vastapaino. 2023.
[^f65588]: Sarkkinen, M. *Ole itsellesi paras mahdollinen pomo! Seitsemän keinoa parantaa itsensä johtamisen taitoja*. Työpiste-verkkolehti. 2020. https://www.ttl.fi/tyopiste/ole-itsellesi-paras-mahdollinen-pomo-seitseman-keinoa-parantaa-itsensa-johtamisen-taitoja