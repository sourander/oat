# 6: Cookiecutter-templaatin käyttö

Oppimispäiväkirjaa ei tarvitse aloittaa aivan tyhjästä. Voit käyttää valmista Cookiecutter-templaattia, joka luo valmiin rakenteen oppimispäiväkirjalle. Riittää, että sinulla on asennettuna:

* Git (for Windows)
* uv

## Video-ohje

<iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/videoseries?si=ipndI-5pswSzKyr7&amp;list=PLXUWN0EaG9BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Video 1**: *Soittolista [Oppimispäiväkirja 2025](https://youtube.com/playlist?list=PLXUWN0EaG9BI) sisältää kolme videota. Ensimmäinen [1: Tekninen ohjeistus](https://youtu.be/gjv7WCU_dU4) ohjeistaa sinut alustamaan kurssin git-repositorion ja luomaan oppimispäiväkirjan Cookiecutter-templaatin avulla. Toinen, [2: Oppimispäiväkirja 101](https://youtu.be/Kuj8vS-YJqo), käy läpi tämän sivuston kirjoittamisohjeet. Kolmas, [3: Kirjoittaminen](https://youtu.be/g_Q4eUVRwaE?si=WAaLc30JFbCJxQQf), näyttää kuinka merkintöjä tehdään käytännön tasolla VS Coden ja gitin avulla.*


## Teksti-ohje

### Cookiecutter-templaatin käyttö

Käytä [astral-sh/uv](https://docs.astral.sh/uv/)-työkalua Cookiecutter-templaatin alustamiseen. Asenna `uv` ja sen kylkiäisenä tuleva `uvx` [Installing uv](https://docs.astral.sh/uv/getting-started/installation/)-ohjeita seuraten. Asennus hoituu yhdellä Bash/PowerShell komennolla eikä tarvitse admin-oikeuksia. Tämän jälkeen `uv version` komento vastaa ja on täten asennettu. Jos tietokone herjaa, että komentoa `uv` ei löydy, sulje ja avaa terminaali. Olettaen, että `uv` on asennettu, aja seuraavat komennot terminaalissa:

```bash
# Asenna uv:lle oma Python
uv python install 3.12

# Käytä cookiecutteria
uvx cookiecutter gh:sourander/kamk-cookiecutters -f
```

Jos kaikki sujui hyvin, voit siirtyä tässä artikkelissa kappaleeseen "Templaatin kysymyksiin vastaaminen"

### Templaatin kysymyksiin vastaaminen

Komento lataa [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) repositoriosta oppimispäiväkirjan templaatin ja kysyy sinulta kysymyksiä. Kysymykset vaikuttavat siihen, miten oppimispäiväkirjasi lopulta rakentuu. Templaatilla tarkoitetaan sitä, että Cookiecutter luo projektin rungon siten, että se täyttää valmiisiin kenttiin, kuten `{{ sinun_nimesi }}`, vastauksesi. Jos kuvittelet kaavaketta, jossa lukee `Sinun nimesi: _______`, niin ajattelet juurikin oikein Cookiecutterin toimintaa.

Ensimmäisessä kysymyksessä sinua pyydetään valitsemaan yksi templaatti monien joukosta. Oikea vastaus riippuu käymästäsi kurssista. Olethan tutustunut kurssin Reppu-sivuston **Aloista tästä**-osioon? Jos kurssilla on käytössä perinteinen oppimispäiväkirja, niin vastaus on vakiona 1, kuten alla esitellään:

```plaintext
Select template:
1 - Oppimispäiväkirja (MkDocs learning diary)   <= Valitse tämä
2 - ... (...)
3 - ... (...)
Choose from 1, 2, 3 [1]:  <= Paina Enter
```
Huomaa, että antamasi vastaukset täyttävät templaatin kentät, joten muutokset ovat sinänsä pysyviä. ==ÄLÄ RÄMPYTÄ ENTERIÄ.== Vastaa kysymyksiin huolella. Jos teet virheen, voit painaa ++ctrl+c++ ja aloittaa alusta ajamalla komennon uusiksi.

!!! warning

    Jos olet yhtään epävarma, toistan vielä: katso video-ohje. Se on tehty sinua varten.

## Mitä nyt?

### Ajaminen paikallisesti

Lue templaatin mukana saapunut `HOW-TO-DOCS.md`-tiedosto.

### Julkaiseminen etärepositorioon

Templaatin mukana on tullut GitLab:n CI/CI-tiedosto nimeltään `.gitlab-ci.yml`. Sinun ei tarvitse muokata sitä, vaan se toimii sellaisenaan. Kun olet tehnyt muutoksia oppimispäiväkirjaasi, on suositeltavaa kokeilla, että sivusto toimii paikallisesti ennen julkaisua (`--strict` option päällä). Tarkastamisen jälkeen tee tavalliset Git-komennot:

```bash
git add .
git commit -m "Kuvaava viesti tekemistäsi muutoksista"
git push
```

Kun `main`-branchiin tulee uusia muutoksia, GitLab CI/CD hoitaa oppimispäiväkirjasi julkaisemisen automaattisesti. Löydät julkaistun sivuston URL-osoitteen GitLab:n repositorion `Deploy -> Pages`-valikosta.
