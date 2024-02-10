# 6: Cookiecutter-templaatin käyttö

Tähän tulee ohjeistus siitä, kuinka voit luoda oman oppimispäiväkirjasi käyttämällä Cookiecutter-templaattia. Tarvitset siihen:

* Windows tai macOS
* Git (for Windows)
* Pythonin asennettuna

## Asennettavat komponentit

### Paketinhallinta

=== "Windows"

    Asennetaan Scoop-paketinhallinta. Seuraa [Scoop-sivuston ohjeita](https://scoop.sh/).

=== "macOS"

    Asenna Homebrew-paketinhallinta jos sinulla ei jo ole. Seuraa [Homebrew-sivuston ohjeita](https://brew.sh/).


### Python

=== "Windows"

    Asenna Python lataamalla sinun alustalle sopiva versio (esim. 3.11.x 64-bit) suoraan [Pythonin kotisivuilta](https://www.python.org/downloads/). Asennuksen aikana muista valita "Add Python to PATH" -valintaruutu. Tarkemmat ohjeet löydät [Python-Perusteet -kurssilta](https://sourander.github.io/python-perusteet/asennus/windows/).

    !!! warning

        Älä asenna Pythonia Windowsin omasta sovelluskaupasta.

=== "macOS"

    Suosittelen asentamaan sekä pyenv että Pythonin Homebrew-paketinhallinnan kautta. Tähän löytyy ohjeet [Python-Perusteet -kurssilta](https://sourander.github.io/python-perusteet/asennus/macOS/#asenna-pyenv)


### Pipx

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

!!! info

    Kun olet lisännyt `pipx`:n binäärit PATH:iin, käynnistyä terminaali uudelleen. Turvallisinta on käynnistää koko kone, jos et ole varma, mikä PATH on ja missä välissä se ladataan.

### Cookiecutter

Kun Python on asennettu, voit asentaa Cookiecutterin komentoriviltä. Tämä komento on sama kaikissa käyttöjärjestelmissä (koska `pipx` hoitaa alustariippuvuudet):

```bash
# Asenna Cookiecutter
pipx install cookiecutter

# Testaa asennus (missä tahansa hakemistossa)
cookiecutter --version

# Tarkista ihan sivistyksen vuoksi, että missä kyseinen executable sijaitsee
which cookiecutter
```

## Cookiecutter-templaatin käyttö

Mene projektikansioon ja aja seuraava komento:

```bash
cookiecutter <TODO: lisää tähän url myöhemmin>
```

Tämä komento kysyy sinulta muutamia kysymyksiä, kuten projektin nimen, tekijän nimen ja mahdollisesti muutaman muun kysymyksen. ==ÄLÄ RÄMPYTÄ ENTERIÄ.== Vastaa kysymyksiin huolella. Cookiecutter luo projektille rungon (boilerplate) näiden vastauksien perusteella. Syntyvä kansiorakenne muistuttaa alla olevaa. Tarkista yllä linkitetystä gitistä tarkka sisältö. Huomaa, että `{{cookiecutter._container}}` ja `{{cookiecutter._docker_container}}` ovat muuttujia, jotka korvataan vastauksillasi.

Myös tiedostojen sisällä on rivejä, joihin injektoidaan vastauksesi.

```
.
├── your.txt
├── current.txt
├── files.txt
├── ...
└── {{cookiecutter._container}}     <= new directory
    ├── Dockerfile
    ├── docs
    │   ├── docs
    │   │   ├── images
    │   │   │   └── placeholder.svg
    │   │   ├── index.md
    │   │   ├── self-evaluation.md
    │   │   └── weeks
    │   │       ├── {{cookiecutter.__week_nro_plus}}_entry.md
    │   │       └── {{cookiecutter.__week_nro}}_entry.md
    │   └── mkdocs.yml
    └── {{cookiecutter._docker_container}}
```