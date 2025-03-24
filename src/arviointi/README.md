# Arviointityökalu

The site is hosted online at: [arviointi.munpaas.com](https://arviointi.munpaas.com/).

The guide for writing learning diary is at [Github Pages: Oppimispäiväkirja 101](https://sourander.github.io/oat/).

This is currently only in Finnish. 🇫🇮

## Uusien arviointityyppien lisääminen

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

## Testit

Testit ajetaan automaattisesti Github Actionsin toimesta. Voit myös ajaa testit lokaalisti:

```bash
cd src/arviointi
npm test
```

Testi testaavat pääasiassa datan laatua `src/arviointi/src/data/oat-data.ts`-tiedostossa.

## Development

Development-tilassa sovellus käynnistyy osoitteeseen `http://localhost:3333` ja päivittyy automaattisesti muutosten yhteydessä.

```bash
docker compose up -d
```

Jos haluat, että VS Codessa toimii linter, niin varmista, että sinulla on lokaali node_modules-kansio. Tämä onnistuu ajamalla `src/arviointi/` hakemistossa `npm install`.

## Production (local test)

Jos haluat kokeilla sovellusta tuotantotilassa, voit käyttää seuraavaa komentoa:

```bash
docker buildx build -t arviointi -f arviointi-prd.Dockerfile .
docker run --rm --name arviointi -p 8888:80 arviointi
```

## Production (Dokku)

Varsinainen tuotantoon ajaminen tapahtuu Dokku-palvelimella. Tämä tehdään Github Actionsin toimesta (ks. `.github/workflows/dokku-arviointi-deploy.yml`). Dokku käyttää Gittiä nokkellalla tavalla uuden version puskemiseen tuotantoon. Alla esimerkki siitä, miten uusi versio puskettaisiin Dokkuun, jos Actions ei olisi käytössä.

<details>
<summary>Olettaen että nämä on ajettu dokku-hostissa... (click open)</summary>

```bash
app_name=arviointi
domain=munpaas.com

# -------- Dokku-palvelimella on pitänyt --------
# 1. Asettaa kaikkien sovellusten yhteinen domain
dokku domains:set-global $domain
# 2. Luoda sovellus
dokku apps:create $app_name
# 3. Asettaa sovellukselle Dockerfile
dokku builder-dockerfile:set $app_name dockerfile-path ./arviointi-prd.Dockerfile
```
</details>

... voit puskea uuden version Dokkuun seuraavasti:

```bash
git remote add dokku dokku@$domain:$app_name
git push dokku main
```

Sivusto julkaistana osoitteeseen `{app_name}.{domain}`, esimerkiksi `arviointi.munpaas.com`.