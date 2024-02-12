# 5: Teknisiä vinkkejä kirjoittamiseen

Voit halutessasi käyttää kirjoittamisen apuna eri ohjelmia ja työkaluja. Voit esimerkiksi kirjoittaa runkotekstin **Microsoft Word**:ssa, jolloin käytössäsi on oikoluku ja muut kielentarkistusominaisuudet. Tämän jälkeen voit kopioida tekstin Markdown-muotoon.

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