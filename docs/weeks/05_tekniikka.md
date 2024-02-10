# 5: Teknisiä vinkkejä kirjoittamiseen

Voit halutessasi käyttää kirjoittamisen apuna eri ohjelmia ja työkaluja. Voit esimerkiksi kirjoittaa runkotekstin **Microsoft Word**:ssa, jolloin käytössäsi on oikoluku ja muut kielentarkistusominaisuudet. Tämän jälkeen voit kopioida tekstin Markdown-muotoon.

Markdown-tiedostoja voi muokata ja esikatsella **Visual Studio Code**:lla, mutta siinä eivät toimi esimerkiksi alaviite tai Mermaid ainakaan ilman lisäosia. Yksi WYSIWYG (What You See Is What You Get) vaihtoehto on kevyt editori nimeltään [Typora](https://typora.io/). Ohjelma maksaa noin 15 euroa.

Lähdeviitteiden Mikäli lähdeviitteiden numeroinnin pitäminen järjestyksessä tuntuu haasteelliselta, voit käyttää kikkaa, jossa käytät satunnaisgeneroitua tai häshättyä tiivistettä. Tällöin jonkin lähteen tunniste voi olla esimerkiksi `[^fff000]`.  Voit myös sijoittaa lähdeluettelon aluksi eri tiedostoon, jolloin sen saa editorissa side-by-side näkymään tekstin kanssa. Tämä auttaa ylös-alas vierittelyn vähentämisessä.

Pitkä kappale näyttäytyy Visual Studio Codessa yhtenä rivinä, mikä tekee tekstin lukemisesta hankalaa. Tämän voi korjata lisäämällä word wrap -ominaisuuden. Tämä kannattaa asettaa siten, että se on aktiivinen nimenomaan Markdown-tiedostojen kanssa. Avaa `View => Command Palette` ja etsi `Preferences: Open User Settings (JSON)`. Lisää tiedostoon seuraavat rivit:

```js
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