# 7: Cookiecutter-templaatin käyttö

Oppimispäiväkirjaa ei tarvitse aluttaa aivan tyhjästä. Voit käyttää valmista Cookiecutter-templaattia, joka luo valmiin rakenteen oppimispäiväkirjalle. Riittää, että sinulla on asennettuna:

* Git (for Windows)
* Docker (Desktop)

## Video-ohje

<iframe width="560" height="315" src="https://www.youtube.com/embed/-gewY4kEr_8?si=n6gz3XSDT2QlndAK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Video 1**: *Soittolista [Cookiecutter ja oppimispäiväkirja 2025](https://youtube.com/playlist?list=PL7AbISYtmmfiS1sozsGkZ266EE0NeQeJh&si=bsN8ztXR5lgGJ0IJ) sisältää yhden puolituntisen, chapter markereilla jaksotetun videon, jossa esitellään oppimispäiväkirjan templaatin käyttöönotto ja ensimmäisen merkinnän tekeminen.*

Voit noudattaa myös alla olevaa tekstimuotoista, hieman tiiviimpää ohjetta.

!!! note "Arkistojen aarteita 🗃️"

    Aiemmin vastaava ohje sisälsi ohjeistuksen Pythonin, Scoopin, Pipx ja Cookiecutter asennukseen. Ohje on päivittynyt 2025 vuonna käyttämään uv-työkalua. Mikäli haluat tutustua vanhaan ohjeistukseen, se löytyy yhä YouTubesta: [Cookiecutter ja oppimispäiväkirja 2024](https://youtube.com/playlist?list=PL7AbISYtmmfhgUS3G77OcR1sdETJiQ6f4&si=-KA3GPGVAJ76hBLI).

    Scoop:lle ja Pipx:lle on kummallekin yhä oma paikkansa, joten työkaluja ei kannata tyystin sivuuttaa, mikäli olet Windows-käyttäjä. Scoop on pakeettienhallintatyökalu, muistuttaen Ubuntusta tuttua apt:tä. Tutustu ihmeessä: [scoop.sh](https://scoop.sh/)

## Teksti-ohje

### Cookiecutter-komento Dockerissa

Mene projektikansioon (esim. `cd ~/Code/kurssin-nimi/etunimi-sukunimi`). Kun olet projektikansiossa, johon oppimispäiväkirjan haluat alustaa, aja käyttöjärjestelmästä riippuen oikea komento. Komennot löytyvät alla olevasta snippetistä; valitse käyttöjärjestelmäsi klikkaamalla koodisnippetin päällä olevaa välilehtivalikkoa. Samat komennot ja ohjeet löytyvät myös [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) -reposta.

=== "Windows (Git Bash)"

    ```bash
    winpty docker run -it --rm \
    -v "/$(pwd):/workspace" \
    -w '//workspace' \
    ghcr.io/astral-sh/uv:python3.11-bookworm \
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

=== "Windows (PowerShell)"

    ```powershell
    docker run -it --rm `
    -v "${PWD}:/workspace" `
    -w /workspace `
    ghcr.io/astral-sh/uv:python3.11-bookworm `
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

=== "macOS/Linux (Bash)"

    ```bash
    docker run -it --rm \
    -v "$(pwd):/workspace" \
    -w /workspace \
    ghcr.io/astral-sh/uv:python3.11-bookworm \
    uvx cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

??? warning "Ajoitko sudona?"

    Huomaa, että jos olet syystä tai toisesta joutunut ajaa `docker run` -komennon `sudo`-käyttäjänä, aiheutuu tilanne, jossa sinä et omista templaatin perusteella luotuja tiedostoja. Ne omistaa `root:root`. Tämän voi korjata seuraavalla komennolla, joka siirtä omistukset komennon ajavalle käyttäjälle ja hänen primary-ryhmälleen:

    ```bash
    sudo chown -R $(id -u):$(id -g) .
    ```

### Templaatin kysymyksiin vastaaminen

Komento lataa [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) repositoriosta oppimispäiväkirjan templaatin ja alustaa sen. Komento ajetaan interaktiivisessa tilassa (`-it`), jotta voit vastata kysymyksiin.

Tämä komento kysyy sinulta muutamia kysymyksiä, joista ensimmäisessä sinua pyydetään valitsemaan yksi templaatti monien joukosta. Kysymys ja oikea vastaus (tässä kontekstissa) näkyvät alla:

```plaintext
Select template:
1 - Oppimispäiväkirja (MkDocs learning diary)   <= Valitse tämä
2 - ... (...)
3 - ... (...)
4 - ... (...)
Choose from 1, 2 [1]:  <= Paina Enter
```

Oppimispäiväkirjan templaatti kysyy projektin nimen, tekijän nimen ja mahdollisesti muutaman muun kysymyksen. ==ÄLÄ RÄMPYTÄ ENTERIÄ.== Vastaa kysymyksiin huolella. Cookiecutter luo projektille rungon (boilerplate) näiden vastauksien perusteella. Syntyvä kansiorakenne muistuttaa alla olevaa. Tarkista yllä linkitetystä [gh:sourander/kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) repositoriosta, jos haluat tarkempaa tietoa. 

!!! tip "Videolla huomio 📽️"

    Repositoriosta löytyy jopa GIF-animaatio, jossa näkyy templaatin kysymyksiin vastaaminen.
