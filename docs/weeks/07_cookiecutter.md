# 7: Cookiecutter-templaatin käyttö

Oppimispäiväkirjaa ei tarvitse aluttaa aivan tyhjästä. Voit käyttää valmista Cookiecutter-templaattia, joka luo valmiin rakenteen oppimispäiväkirjalle.  Tarvitset siihen seuraavat ohjelmat:

* Git (for Windows)
* Python
* Docker (Desktop)

## Video-ohje

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=MXtB3dFRJiHQoBzj&amp;list=PL7AbISYtmmfhgUS3G77OcR1sdETJiQ6f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Video 1**: *Soittolista [Cookiecutter ja oppimispäiväkirja](https://youtube.com/playlist?list=PL7AbISYtmmfhgUS3G77OcR1sdETJiQ6f4&si=u33F0Kglh0tqy04c) sisältää useita videoita, jotka käsittelevät templaatin käyttöönottoa.*

Voit noudattaa myös alla olevaa tekstimuotoista, hieman tiiviimpää ohjetta. Huomaa, että opettajan kirjoittamat ohjeet vanhenevat, joten tarkista viimeisemmät ohjeet kunkin ohjelmiston omilta sivuilta. Jos esimerkiksi jokin `scoop`-komento antaa virheilmoituksen, niin se voi johtua siitä, että `scoop` on päivittynyt ja API on muuttunut. Ilmoitathan tästä opettajalle, jos huomaat jotain vanhentunutta, jotta opettaja osaa tiedottaa muutoksesta ja mahdollisesti päivittää ohjeet.


## Teksti-ohje

### Asennettavat komponentit

#### Paketinhallinta

=== "Windows"

    Asennetaan Scoop-paketinhallinta. Seuraa [Scoop-sivuston ohjeita](https://scoop.sh/). Komento pitää ajaa PowerShellissä. Jos et osaa, katso video-ohje yltä.

=== "macOS"

    Asenna Homebrew-paketinhallinta jos sinulla ei jo ole. Seuraa [Homebrew-sivuston ohjeita](https://brew.sh/).

=== "Ubuntu"

    Debian-pohjaisissa jakeluissa on apt-paketinhallinta valmiina. Aja kuitenkin seuraavat komennot päivittääksesi paketinhallinnan:

    ```bash
    sudo apt update && sudo apt upgrade -y
    ```


#### Python

=== "Windows"

    Asenna Python lataamalla sinun alustalle sopiva versio (esim. 3.11.x 64-bit) suoraan [Pythonin kotisivuilta](https://www.python.org/downloads/). Asennuksen aikana muista valita "Add Python to PATH" -valintaruutu. Tarkemmat ohjeet löydät [Python-Perusteet -kurssilta](https://sourander.github.io/python-perusteet/asennus/windows/).

    !!! warning

        Älä asenna Pythonia Windowsin omasta sovelluskaupasta.

=== "macOS"

    Suosittelen asentamaan **pyenv**:n, jolla asennat käyttämäsi Pythonin version. Asenna pyenv Homebrew-paketinhallinnan kautta. Tähän löytyy ohjeet [Python-Perusteet -kurssilta](https://sourander.github.io/python-perusteet/asennus/macOS/#asenna-pyenv)

=== "Ubuntu"

    Suosittelen asentamaan **pyenv**:n, jolla asennat käyttämäsi Pythonin version. Asenna pyenv apt-paketinhallinnan kautta. Tarkista päivitetyt ohjeet pyenv:n dokumentaatiosta. Alla komennot, jotka toimivat ainakin 2024:

    ```bash
    # Install suggested build environment
    sudo apt install build-essential libssl-dev \
        zlib1g-dev libbz2-dev libreadline-dev \
        libsqlite3-dev curl git libncursesw5-dev \
        xz-utils tk-dev libxml2-dev libxmlsec1-dev \
        libffi-dev liblzma-dev

    # Run installation script
    curl https://pyenv.run | bash
    ```


#### Pipx

=== "Windows"

    Asenna pipx komentoriviltä:

    ```bash
    # Asenna paketinhallinnalla
    scoop install pipx

    # Lisää pipx binäärit PATH:iin
    pipx ensurepath
    ```

=== "macOS"

    Asenna pipx komentoriviltä:

    ```bash
    # Asenna paketinhallinnalla
    brew install pipx

    # Lisää pipx binäärit PATH:iin
    pipx ensurepath
    ```

=== "Ubuntu"

    Asenna pipx apt:lla:

    ```bash
    # Install pipx
    sudo apt install pipx

    # Add to path
    pipx ensurepath
    ```

!!! info

    Kun olet lisännyt `pipx`:n binäärit PATH:iin, käynnistyä terminaali uudelleen. Turvallisinta on käynnistää koko kone, jos et ole varma, mikä PATH on ja missä välissä se ladataan.

#### Cookiecutter

Kun Python on asennettu, voit asentaa Cookiecutterin komentoriviltä. Tämä komento on sama kaikissa käyttöjärjestelmissä (koska `pipx` hoitaa alustariippuvuudet):

```bash
# Asenna Cookiecutter
pipx install cookiecutter

# Testaa asennus (missä tahansa hakemistossa)
cookiecutter --version

# Tarkista ihan sivistyksen vuoksi, että missä kyseinen executable sijaitsee
which cookiecutter
```

### Cookiecutter-templaatin käyttö

Mene projektikansioon (esim. `cd ~/Code/kurssin-nimi/etunimi-sukunimi`). Kun olet projektikansiossa, johon oppimispäiväkirjan haluat alustaa, aja seuraava komento:

=== "Windows"

    ```bash
    # Git Bash vaatii winpty-komennon eteen
    # Muutoin ääkköset eivät toimi
    winpty cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

=== "macOS"

    ```bash
    cookiecutter gh:sourander/kamk-cookiecutters -f
    ```

Tämä komento kysyy sinulta muutamia kysymyksiä, joista ensimmäisessä sinua pyydetään valitsemaan yksi templaatti monien joukosta. Kysymys ja oikea vastaus (tässä kontekstissa) näkyvät alla:

```plaintext
Select template:
1 - Oppimispäiväkirja (MkDocs learning diary)   <= Valitse tämä
2 - ... (...)
3 - ... (...)
4 - ... (...)
Choose from 1, 2 [1]:  <= Paina Enter
```

Oppimispäiväkirjan templaatti kysyy projektin nimen, tekijän nimen ja mahdollisesti muutaman muun kysymyksen. ==ÄLÄ RÄMPYTÄ ENTERIÄ.== Vastaa kysymyksiin huolella. Cookiecutter luo projektille rungon (boilerplate) näiden vastauksien perusteella. Syntyvä kansiorakenne muistuttaa alla olevaa. Tarkista yllä linkitetystä gitistä tarkka sisältö. Huomaa, että `{{cookiecutter._container}}` ovat muuttujia, jotka korvataan vastauksillasi.

!!! tip

    Lue tarkemmat ohjeet [kamk-cookiecutters](https://github.com/sourander/kamk-cookiecutters) -GitHub-reposta. Tutustu samalla repositorion rakenteeseen ja `cookiecutter.json`-tiedostoon. Cookiecutter on tehokas työkalu, joka auttaa sinua luomaan samankaltaisia projektirunkoja nopeasti.
