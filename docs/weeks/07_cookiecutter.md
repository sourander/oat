# 7: Cookiecutter-templaatin käyttö

Oppimispäiväkirjaa ei tarvitse aluttaa aivan tyhjästä. Voit käyttää valmista Cookiecutter-templaattia, joka luo valmiin rakenteen oppimispäiväkirjalle. Riittää, että sinulla on asennettuna:

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

### Cookiecutter-komento uv:ssa

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

### Vaihtoehto: uv Dockerissa

Jos et jostain syystä voi tai halua asentaa `uv`-työkalua, voit ajaa Cookiecutter-komennon Dockerissa. Huomaa, että ei välttämättä vähennä vaikeustasoa millään tavalla. Saatat joutua korjaamaan esimerkiksi tiedostojen omistuksia tai newline-merkintöjä. Nämä vaiheet neuvotaan alla, mutta `uv`:n avulla voit välttyä niiltä kokonaan.

Mene projektikansioon (esim. `cd ~/Code/kurssin-nimi/etunimi-sukunimi`). Kun olet projektikansiossa, johon oppimispäiväkirjan haluat alustaa, aja käyttöjärjestelmästä riippuen oikea komento. Komennot löytyvät alla olevasta snippetistä; valitse käyttöjärjestelmäsi klikkaamalla koodisnippetin päällä olevaa välilehtivalikkoa. Samat komennot ja ohjeet löytyvät myös [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) -reposta.

=== "Windows (Git Bash)"

    ```bash
    winpty docker run -it --rm \
    -v "/$(pwd):/workspace" \
    -w '//workspace' \
    ghcr.io/astral-sh/uv:python3.11-bookworm \
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

    !!! warning "Windows-käyttäjä, huomioi 🚨"

        Antaako ensimmäinen `git add .`-komento herjan: `warning: in the working copy of '.gitlab-ci.yml', LF will be replaced by CRLF ...`. Jos on näin, niin käytä videolla esiteltyä apua ajaa seuraavat komennot heti `git push`-komennnon jälkeen:

        ```bash
        git rm --cached -r .
        git reset --hard
        ```

=== "Windows (PowerShell)"

    ```powershell
    docker run -it --rm `
    -v "${PWD}:/workspace" `
    -w /workspace `
    ghcr.io/astral-sh/uv:python3.11-bookworm `
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

    !!! warning "Windows-käyttäjä, huomioi 🚨"

        Antaako ensimmäinen `git add .`-komento herjan: `warning: in the working copy of '.gitlab-ci.yml', LF will be replaced by CRLF ...`. Jos on näin, niin käytä videolla esiteltyä apua ajaa seuraavat komennot heti `git push`-komennnon jälkeen:

        ```bash
        git rm --cached -r .
        git reset --hard
        ```

=== "macOS/Linux (Bash)"

    ```bash
    docker run -it --rm \
    -v "$(pwd):/workspace" \
    -w /workspace \
    ghcr.io/astral-sh/uv:python3.11-bookworm \
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

    !!! warning "Ajoitko sudona? 🚨"

        Huomaa, että jos olet syystä tai toisesta joutunut ajaa `docker run` -komennon `sudo`-käyttäjänä, aiheutuu tilanne, jossa sinä et omista templaatin perusteella luotuja tiedostoja. Ne omistaa `root:root`. Tämän voi korjata seuraavalla komennolla, joka siirtä omistukset komennon ajavalle käyttäjälle ja hänen primary-ryhmälleen:

        ```bash
        sudo chown -R $(id -u):$(id -g) .
        ```

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

