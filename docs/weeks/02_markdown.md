# 2: Markdown

!!! tip

    Jos Markdown-kielen syntaksi ja Material for MkDocs -teema ovat sinulle entuudestaan tuttua kauraa, voit siirtyä seuraavaan lukuun.

## Opiskele perusteet

Markdown-koodiin tutustumiseen on monta tapaa. Suosittelen tapaa, jossa käytät tätä ==juuri nyt lukemaasi== sivustoa apuna. Tämän koodi löytyy [gh:sourander/oat](http://www.github.com/sourander/oat) -repositoriosta. Toimi alla olevien vaiheiden mukaisesti:

### :one: Basic Syntax

Käy lukemassa [Markdown Guide: Basic Syntax](https://www.markdownguide.org/basic-syntax/).

* Silmäile [juuri tämän dokumentin](https://raw.githubusercontent.com/sourander/oat/refs/heads/main/docs/weeks/02_markdown.md) lähdekoodia.
* Etsi koodista Basic Syntax -linkin mukaisia elementtejä (otsikot, kappaleet, listat, lihavointi)
* Aloita oppimispäiväkirjasi ja käytä näitä perusmuotoiluita.

### :two: Extended Syntax

Käy lukemassa [Markdown Guide: Extended Syntax](https://www.markdownguide.org/extended-syntax/).

* Etsi Oppimispäiväkirja 101:sta esimerkkejä Extended Syntax -elementeistä.
* Käytä niitä myös oppimispäiväkirjassasi.

### :three: Material for MkDocs

Tämä sivusto käyttää Material for MkDocs -teemaa (MkDocs:n päällä). Tutustu [Material for MkDocs: References](https://squidfunk.github.io/mkdocs-material/)-dokumentaatioon. Selvitä, mitä ainakin seuraavat ovat, ja kuinka niitä käytetään:

* admonitions
* code blocks
* footnotes

Etsi Oppimispäiväkirja 101:sta esimerkkejä näistä elementeistä. Käytä niitä myös oppimispäiväkirjassasi.

### :repeat: Testaa selaimella

Kun kirjoitat oppimispäiväkirjaa, aja Material for MkDocs -sivustoa lokaalisti. Tarkista, että sivusto renderöityy siten, kuten sen haluat renderöityvän. Jos ei, selvitä, mikä syntaksissa on pielessä: yleensä vika löytyy joko sisennyksestä tai puuttuvasta rivinvaihdosta. Palaa tarpeen mukaan aiemmin mainittujen ohjeiden pariin.

---

## Muotoiluvinkkejä

Voit käyttää kaikkia niitä Markdown-kielen ominaisuuksia, joita Material for MkDocs tukee, ja jotka sinä olet sivustolle aktivoinut [^115dd4] `mkdocs.yml` -tiedostossa. Yksi näistä ominaisuuksista on **Footnote**, joka mahdollistaa **Vancouver**-tyyliset lähdemerkinnät. Opiskelijoiden cookiecutter-templaatissa on vakiona aktivoituna tämä ominaisuus: katso tiedoston `mkdocs.yml` sisältö. Markdown-alaviitteitä tukee myös esimerkiksi Gitlab (GitLab Flavoured Markdown, GLFM) [^1739a4], kuten monet muutkin alustat ja sovellukset, jotka ymmärtävät Extended Markdownia [^e2a436]. Huomaa, että oppimispäiväkirjan rakenne on yksi arvosteluperusteista. Tee se huolella.

### :octicons-book-16: Otsikot

Material for MkDocs -sivuston `Table of Contents` -osio on hyvä apuväline otsikoiden hierarkisuuden tarkkailuun. Käytä otsikoita järkevästi. Liiallinen otsikointi hankaloittaa lukemista, mutta liian vähäinen otsikointi tekee tekstistä raskasta. Tasapaino on avain, ja tulevana asiantuntijana sinun tehtäväsi on etsiä tätä tasapainoa. Table of Contents löytyy tämän ikkunan oikeasta yläkulmasta. Löydät sen tuolta suunnasta :arrow_upper_right:

### :material-format-list-bulleted: Luetelmat

Käytä luetelmaa kun listaat asioita [^d1a7a7].

* Tämä
* On
* Luettelo

Ethän kirjoita kirjoita koko merkintää listamuodossa; korkeakouluopiskelijan tulee osata kirjoittaa kokonaisin lausein. Esimerkiksi pizzanteon vaiheet pääpiirteittäin ovat selkeä luettelo, mutta yksityiskohtaisten pizzanvalmistuksen vaiheiden listaaminen on jo liikaa.

### :octicons-code-square-16: Koodilohkot

Käytä koodilohkoja, kun kirjoitat koodia.

```python
# Tämä on koodilohko
print("Olen koodilohko!")
```

Koodilohko luodaan asettamalla koodi kolmen backtickin (tai joskus harvoin kolmen tilden sisään.) Backtick luodaan painamalla ++shift+"`"++ näppäimiä, joista jälkimmäinen löytyy tyypillisesti ++backspace++ -näppäimen eli askelpalauttimen vasemmalta puolelta. Koodilohkon aloittavan blokin perään tulee kirjoitettaa käytetyn koodin kieli, jotta syntaksin värikorostuvat toimivat oikein.

### :frame_photo: Kuvat

```markdown
![Kuvaus kuvasta](../images/kuvan_nimi.png)
```

Voit käyttää valokuvia tai kuvakaappauksia oppimispäiväkirjassasi. On suositeltavaa pienentää kuvia ennen niiden lataamista GitLabiin, mikäli kuvat ovat useita tuhansia pikseleitä kooltaan. Kuvan lisääminen hoituu yllä olevan koodisnippetin mukaisesti. Huomaa, että polku on relatiivinen.



### :chart_with_upwards_trend: Kuvaajat

```mermaid
pie
    "Pizza eaten" : 75
    "Pizza left" : 25
```

**Kuvio 1:** *Kuvitteellinen jäljellä olevan ja syödyn pizzan suhdetta kuvastava piirakkakuvaaja. Kuville ja kuvaajille on hyvä lisätä kuvateksti. Tämä tässä toimii esimerkkinä.*

Todella yksinkertaisiin kuvaajiin voit käyttää mermaidia. Mermaid on helppo ja nopea tapa luoda yksinkertaisia kuvaajia [^mermaid]. Kyseisellä kielellä on tehty yllä näkyvä piirakkakuvaaja.

Monimutkaisempiin kuvaajiin voit käyttää PNG- tai SVG-kuvia. Käytä kuvia harkiten. Noudata tekijänoikeuksia ja käytä kuvia, jotka ovat vapaasti käytettävissäsi. Käytä kuvien luomiseen haluamasi ohjelmia tai web-sovelluksia. Yksi suositeltu web-sovellus on [excalidraw](https://excalidraw.com/).

## Lähdeluettelo

[^115dd4]: Material for MkDocs. *Reference*. https://squidfunk.github.io/mkdocs-material/reference/
[^1739a4]: GitLab Docs. *GitLab Flavored Markdown (GLFM)*. https://docs.gitlab.com/ee/user/markdown.html
[^e2a436]: Markdown Guide. *Extended Syntax*. https://www.markdownguide.org/extended-syntax/
[^d1a7a7]: Kielitoimiston ohjepankki. *Luetelma*. https://kielitoimistonohjepankki.fi/ohje/luetelma/
[^mermaid]: Mermaid. *Pie chart diagrams*. https://mermaid.js.org/syntax/pie.html
