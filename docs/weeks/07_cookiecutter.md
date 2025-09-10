# 7: Cookiecutter-templaatin käyttö

Oppimispäiväkirjaa ei tarvitse aloittaa aivan tyhjästä. Voit käyttää valmista Cookiecutter-templaattia, joka luo valmiin rakenteen oppimispäiväkirjalle. Riittää, että sinulla on asennettuna:

* Git (for Windows)
* Docker (Desktop)

## Video-ohje

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=EVdBeMUuqLscP-ZN&amp;list=PL7AbISYtmmfiS1sozsGkZ266EE0NeQeJh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Video 1**: *Soittolista [Cookiecutter ja oppimispäiväkirja 2025](https://youtube.com/playlist?list=PL7AbISYtmmfiS1sozsGkZ266EE0NeQeJh&si=oa5TdiXjHwauc9Cl) sisältää kolme videota. Ensimmäinen Luento 0 on valinnainen, mutta suositeltu, ja se taustoittaa WSL2:ssä ajetun Ubuntun. Kaksi seuraavaa, Luennot 1 ja 2, neuvovat Cookiecutter-templaatin alustamisen tyhjään repositorioon ja Material for MkDocs templaatin käytön.*

Jos olet sinut Git ja käyttämäsi käyttöjärjestelmän kanssa, voit noudattaa myös alla olevaa tekstimuotoista, hieman tiiviimpää ohjetta. En suosittele tätä, jos olet tippaakaan epävarma.

!!! note "Arkistojen aarteita 🗃️"

    Aiemmin vastaava ohje sisälsi ohjeistuksen Pythonin, Scoopin, Pipx ja Cookiecutter asennukseen. Ohje on päivittynyt 2025 vuonna käyttämään uv-työkalua. Mikäli haluat tutustua vanhaan ohjeistukseen, se löytyy yhä YouTubesta: [Cookiecutter ja oppimispäiväkirja 2024](https://youtube.com/playlist?list=PL7AbISYtmmfhgUS3G77OcR1sdETJiQ6f4&si=-KA3GPGVAJ76hBLI).

    Scoop:lle ja Pipx:lle on kummallekin yhä oma paikkansa, joten työkaluja ei kannata tyystin sivuuttaa, mikäli olet Windows-käyttäjä. Scoop on pakeettienhallintatyökalu, muistuttaen Ubuntusta tuttua apt:tä. Tutustu ihmeessä: [scoop.sh](https://scoop.sh/)

## Teksti-ohje

### Cookiecutter-templaatin käyttö

On äärimmäisen suositeltavaa käyttää [astral-sh/uv](https://docs.astral.sh/uv/)-työkalua Cookiecutter-templaatin alustamiseen. Asenna `uv` ja sen kylkiäisenä tuleva `uvx` [Installing uv](https://docs.astral.sh/uv/getting-started/installation/)-ohjeita seuraten. Asennus hoituu yhdellä Bash/PowerShell komennolla eikä tarvitse admin-oikeuksia. Kun `uv` on asennettu, aja seuraavat komennot:

```bash
# Asenna uv:lle oma Python
uv python install 3.12

# Käytä cookiecutteria
uvx cookiecutter gh:sourander/kamk-cookiecutters -f
```

Jos kaikki sujui hyvin, voit siirtyä tässä artikkelissa kappaleeseen "Templaatin kysymyksiin vastaaminen"

!!! tip

    Jos tietokone herjaa, että komentoa `uv` ei löydy, sulje ja avaa terminaali. Ympäristömuuttuja PATH saattaa kaivata päivitystä – ja helpoin tapa päivittää se on tämä.

!!! note "Docker-vaihtoehto"

    Jos et jostain syystä voi tai halua asentaa `uv`-työkalua, voit ajaa Cookiecutter-komennon Dockerissa. Katso tähän ohjeet [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters)-repositotion README.md-tiedostosta.

### Templaatin kysymyksiin vastaaminen

Komento lataa [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) repositoriosta oppimispäiväkirjan templaatin ja alustaa sen. Komento ajetaan interaktiivisessa tilassa (`-it`), jotta voit vastata kysymyksiin. Templaatilla tarkoitetaan sitä, että Cookiecutter luo projektin rungon siten, että se täyttää valmiisiin kenttiin, kuten `{{ sinun_nimesi }}`, vastauksesi.

Ensimmäisessä kysymyksessä sinua pyydetään valitsemaan yksi templaatti monien joukosta. Oikea vastaus riippuu käymästäsi kurssista. Olethan tutustunut kurssin Reppu-sivuston **Aloista tästä**-osioon? Jos kurssilla on käytössä perinteinen oppimispäiväkirja, niin vastaus on vakiona 1, kuten alla esitellään:

```plaintext
Select template:
1 - Oppimispäiväkirja (MkDocs learning diary)   <= Valitse tämä
2 - ... (...)
3 - ... (...)
Choose from 1, 2, 3 [1]:  <= Paina Enter
```
Huomaa, että antamasi vastaukset täyttävät templaatin kentät, joten muutokset ovat sinänsä pysyviä. ==ÄLÄ RÄMPYTÄ ENTERIÄ.== Vastaa kysymyksiin huolella. Jos teet virheen, voit painaa ++ctrl+c++ ja aloittaa alusta ajamalla komennon uusiksi.

Jos olet yhtään epävarma, toistan vielä: katso video-ohje. Se on tehty sinua varten.

### Development server

Jos haluat tarkistaa, miltä oppimispäiväkirjasi näyttää selaimessa, voit ajaa MkDocs development serverin. Aja terminaalissa seuraavat komennot:

```bash
# Siirry hakemistoon, jossa on `mkdocs.yml` tiedosto
cd docs

# Aja development server
uvx --with mkdocs-material --with mkdocs-awesome-nav mkdocs serve
```

Huomaa, että nämä samat komennot on esitetty myös `HOW-TO-DOCS.md` tiedostossa, joka saapui Cookiecutter-templaatin mukana. Se löytyy projektin juuresta.

### Mitä nyt?

Nyt voit aloittaa kirjoittamisen tällä sivustolla esitellyllä tavalla. Mikäli haluat saada ohjeistusta videomuodossa, katso myös yllä linkitetyn YouTube-soittolistan videoita: soittolistan loppupään video(t) sisältää kirjoitukseen liittyviä ohjeita.

Muista pitää Git ajan tasalla. Kun olet saanut jonkin kokonaisuuden valmiiksi, kuten viikon merkinnän, tallenna työsi ja työnnä se etärepositorioon GitLabiin.
