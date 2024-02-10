# Oppimispäiväkirjan arviointityökalu (OAT)

Tämä repositorio sisältää:

* oppimispäiväkirjan arviontityökalun (OAT)
    * HTML+JavaScript -sovellus
    * Aja dockerilla (`docker compose up --build`)
* oppimispäiväkirjan kirjoittamiseen liittyvät yleiset säännöt
    * Material for Mkdocs
    * Aja lokaalisti (`poetry run mkdocs serve`)
    * ... tai käy [Github Pages -hostatussa versiossa](https://sourander.github.io/oat).
 
Huomaa, että tässä repositoriossa annetut ohjeet ovat yleisiä ja kurssikohtaiset ohjeet löytyvät kurssin omasta repositoriosta. Mikäli kurssiohjeissa on ristiriitaa tämän repositorion ohjeiden kanssa, noudatetaan kurssikohtaisia ohjeita.

## OAT - käyttö

Arviointityökalu vaatii Dockerin ja Docker Composen asennuksen. Windowsilla ja macOS:lla helpoin tapa on asentaa Docker Desktop.

```bash
# Aja palvelin
# Palvelin sammuu ctrl+c näppäinyhdistelmällä
docker compose up
```

Tämän jälkeen voit navigoida verkkoselaimella kahteen eri osoitteeseen: 

* Oppimispäiväkirjan arviointityökalu: [localhost:3000](http://localhost:3000).
* Oppimispäiväkirjan kirjoitusohjeet: [localhost:8000](http://localhost:8000)

## Oppimispäiväkirja: yleiset säännöt

Oppimispäiväkirjan kirjoitusohjeet on kirjoitettu ulkonäöllisesti samaan muotoon, mihin sinun tulisi kirjoittaa oppimispäiväkirjasi.

Löydät sen täältä: [Oppimispäiväkirja 101 (Markdown)](docs/docs/oppimispaivakirja-101.md)

## Oppimispäiväkirjan lähteiden järjestäminen

Lähdeviitteet päätyvät helposti väärään järjestykseen tai lähdeluetteloon saattaa unohtua lähde, johon ei enää viitata runkotekstissä. GitLab järjestää lähteet esiintymisjärjestyksen mukaan automaattisesti `Display rendered file`- eli HTML-näkymässä ja antaa niille juoksevan numeron. 

GitLab ei kuitenkaan huolehti siitä, ovatko lähdeluettelon kaikki lähteet käytetty runkotekstissä. Tämä on opiskelijan vastuulla. Suosittelen kehittämään tavan testata tämän automaattisesti. Helppokäyttöinen keino on esiteltynä `scripts`-kansiossa. Sen käyttö ohjeistetaan alla.

### Vaihe 1: Uniikkien tunnisteiden käyttö

Unohda juoksevat lukujonot, jotka kuuluvat tyypilliseen Vancouver-lähdeviittausjärjestelmään. 

* Vaihtoehto A: Generoi lähteiden tunnisteet MD5 hashin avulla. Skripti pitää MD5-häshistä vain ensimmäiset 6 merkkiä. 
* Vaihtoehto B: Keksi tunnisteet eli lyhyet aliakset itse.

```bash
# Vaihetoehto A:ta varten löytyy skripti
$ python scripts/hash_ref.py 'Example. *Example Domain*. http://www.example.com'
d4c00b
```

### Vaihe 2: Lähdeluettelon otsikko

Tiedoston **täytyy sisältää** rivi, joka on muotoa `# Lähdeluettelo` tai `## Lähdeluettelo`. Tämä rivi on pakollinen, sillä vaiheessa kolme ajettava skripti etsii sen avulla lähdeluettelon alun.

### Vaihe 3: Lähdeluettelon tarkistaminen ja järjestäminen

Kun sinun lähdeviitteesi edustavat sopivaa muotoa, eli `[^tunniste]`, voit tarkistaa lähdeluettelon ja runkotekstin lähdeviitteiden yhteneväisyyden skriptillä. Skripti myös järjestää lähdeluettelon lähdeviitteiden esiintymisjärjestyksen mukaan.

```bash
# Skripti ajetaan näin:
$ python scripts/reorder_references.py $PATH_TO_FILE
```

Skriptin ajamisen jälkeen:

* In A but not in B:
    * Tekstissä esiintyvät lähteet, jotka eivät ole lähdeluettelossa, listataan terminaaliin. Niitä ei kuitenkaan poisteta tekstistä: tee tämä manuaalisesti tai lisää lähdeviite lähdeluetteloon.
* In B but not in A:
    * Lähdeluettelossa olevat lähteet, joita ei ole käytetty runkotekstissä, poistetaan lähdeluettelosta. Miksi? Koska näille ei voida määrittää järjestystä.
* Jäljelle jääneet lähdeluettelon lähteet ovat esiintymisjärjestyksessä

### Käytännön esimerkki

Alla näkyvän kuvitteellisen tiedoston (`example.md`) sisältö on kirjoitettu englanniksi, jotta se erottuu paremmin ohjetekstin sisällöstä. Tiedosto sisältää seuraavat rivit:

```markdown
# Example

This is an example for reordering references in a markdown file. [^abc123]

Containing a couple [^def456] of lines. This reference is not used in the reference list: [^unused].

Any containing multiple references. Note that the first occurance of [^ghi789] an reference ID mattes. For example, this appears for the second time: [^abc123].

# Lähdeluettelo

[^ghi789]: This occurs as the 3rd in the body text
[^def456]: This occurs as the 2nd in the body text
[^abc123]: This occurs as the 1st in the body text
[^nonexist]: This reference does not exist in the body text
```

Kun ajat skriptin `python reorder_references.py example.md`, näytöllesi tulostuu:

```bash
$ python reorder_references.py example.md
[INFO] Reading file: example.md
[Warning] Reference 'unused' found in the body text but not in the reference list.
[Warning] Reference 'nonexist' not found in the body text.
[INFO] Overwriting file: example.md
```

Tiedoston uusi sisältö näkyy alla.

```markdown
# Example

This is an example for reordering references in a markdown file. [^abc123]

Containing a couple [^def456] of lines. This reference is not used in the reference list: [^unused].

Any containing multiple references. Note that the first occurance of [^ghi789] an reference ID mattes. For example, this appears for the second time: [^abc123].

Operaation jälkeen tiedoston sisältö on seuraava:

# Lähdeluettelo

[^abc123]: This occurs as the 1st in the body text
[^def456]: This occurs as the 2nd in the body text
[^ghi789]: This occurs as the 3rd in the body text
```