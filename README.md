# Oppimispäiväkirja, Arviointityökalu ja Tilpehööri (OAT)

Tämä repositorio sisältää:

* oppimispäiväkirjan arviontityökalun ("The A in OAT")
    * HTML+JavaScript -sovellus
    * Aja dockerilla (`docker compose up -d`)
* oppimispäiväkirjan kirjoitusohjeen ("The Big-O")
    * Material for Mkdocs
    * Aja lokaalisti (`uv run mkdocs serve`)
    * ... tai käy [Github Pages -hostatussa versiossa](https://sourander.github.io/oat).
 
Huomaa, että tässä repositoriossa annetut ohjeet ovat yleisiä. Kurssikohtaiset ohjeet löytyvät kurssin omasta repositoriosta ja menevät prioriteetissa näiden yleisten ohjeiden ohi. Mikäli kurssiohjeissa on ristiriitaa tämän repositorion ohjeiden kanssa, noudatetaan kurssikohtaisia ohjeita. Mikäli olet epävarma, kysy.


## Arviontityökalun ajaminen lokaalisti

Arviointityökalua ajetaan Dokku-palvelimella osoitteessa [arviointi.munpaas.com](https://arviointi.munpaas.com). Github Actions vastaa sivuston päivittämisestä, mikäli `main`-haarassa on tapahtunut ko. tiedostoihin liittyviä muutoksia.

### Development

Development-tilassa sovellus käynnistyy osoitteeseen `http://localhost:3333` ja päivittyy automaattisesti muutosten yhteydessä.

```bash
docker compose up -d
```

Jos haluat, että VS Codessa toimii linter, niin aja myös:

```bash
cd src/arviointi
npm install
```

### Production

Jos haluat kokeilla sovellusta tuotantotilassa, voit käyttää seuraavaa komentoa:

```bash
docker buildx build -t arviointi -f arviointi-prd.Dockerfile .
docker run --rm --name arviointi -p 8888:80 arviointi
```
