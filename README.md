# Oppimispäiväkirja, Arviointityökalu ja Tilpehööri (OAT)

Tämä repositorio sisältää:

* oppimispäiväkirjan arviontityökalun ("The A in OAT")
    * HTML+React+TypeScript -sovellus
    * Aja dockerilla (`docker compose up -d`)
* oppimispäiväkirjan kirjoitusohjeen ("The Big-O")
    * Material for Mkdocs
    * Aja lokaalisti (`uv run mkdocs serve`)
    * ... tai käy [Github Pages -hostatussa versiossa](https://sourander.github.io/oat).
 
Huomaa, että tässä repositoriossa annetut ohjeet ovat yleisiä. Kurssikohtaiset ohjeet löytyvät kurssin omasta repositoriosta ja menevät prioriteetissa näiden yleisten ohjeiden ohi. Mikäli kurssiohjeissa on ristiriitaa tämän repositorion ohjeiden kanssa, noudatetaan kurssikohtaisia ohjeita. Mikäli olet epävarma, kysy.


## Arviontityökalun ohjeistus

Arviointityökalua ajetaan Dokku-palvelimella osoitteessa [arviointi.munpaas.com](https://arviointi.munpaas.com). Github Actions vastaa sivuston päivittämisestä, mikäli `main`-haarassa on tapahtunut ko. tiedostoihin liittyviä muutoksia.

### Uusien arviointityyppien lisääminen

Uusia arviointityyppejä (`OatGradeType`) voit lisätä tiedostoon: `src/arviointi/src/data/oat-data.ts`. Tiedoston tietomalli on seuraava:

```typescript
type OatGradeType = {
    id: string;
    title: string;
    description: string;
    numerical_criteria?: NumericalCriteria[];  // Optional
    boolean_criteria?: BooleanCriteria[]; // Optional
};
```

### Test

Testit ajetaan automaattisesti Github Actionsin toimesta. Voit myös ajaa testit lokaalisti:

```bash
cd src/arviointi
npm test
```

Testi testaavat pääasiassa datan laatua `src/arviointi/src/data/oat-data.ts`-tiedostossa.

### Development

Development-tilassa sovellus käynnistyy osoitteeseen `http://localhost:3333` ja päivittyy automaattisesti muutosten yhteydessä.

```bash
docker compose up -d
```

Jos haluat, että VS Codessa toimii linter, niin varmista, että sinulla on lokaali node_modules-kansio. Tämä onnistuu ajamalla `src/arviointi/` hakemistossa `npm install`.

### Production

Jos haluat kokeilla sovellusta tuotantotilassa, voit käyttää seuraavaa komentoa:

```bash
docker buildx build -t arviointi -f arviointi-prd.Dockerfile .
docker run --rm --name arviointi -p 8888:80 arviointi
```
