# 5: Tekoälyn käyttö

Voit käyttää kirjoittamisen apuna erilaisia kielimalleihin perustuvia chatbotteja. Näitä ovat esimerkiksi ChatGPT, Claude ja Gemini. Muista, että oppimispäiväkirjan tulee olla **sinun** työsi. Älä siis anna tekoälyn kirjoittaa tekstiä puolestasi.

## Ohjeistus kielimallien käytöstä

Tämä ohjeistus perustuu suomenkielisen Wikipedian [Ohje:Tekoälyn käyttö](https://fi.wikipedia.org/wiki/Ohje:Teko%C3%A4lyn_k%C3%A4ytt%C3%B6) sekä Linux-kernelin ohjeistukseen [Kernel Guidelines for Tool-Generated Content](https://docs.kernel.org/_sources/process/generated-content.rst.txt). Ohjeet on muokattu soveltumaan oppimispäiväkirjan kirjoittamiseen, mutta periaatteet ovat samat. Tekoälyn vaikutuksesta oppimiseen oletkin jo lukenut Miksi oppimispäiväkirja? -luvun otsikon [Tekoäly sparraajana](03_miksi.md#tekoaly-sparraajana) alla.

Tekoälyn käytön suhteen läpinäkyvyys on tärkeää. Arvioijalle tulee olla selvää, jos esimerkiksi jokin koodi tai tekstikappale on tekoälyn generoima. Alla Linuxin ohjeistuksesta lainattu oiva sääntö, joka kannattaa pitää mielessä:

> "If in doubt, choose transparency"
>
> — The kernel development community [^linuxohje]

Tekoälyä – tarkemmin generatiivisia kielimalleja – saa käyttää Oppimispäiväkirja 101 -tehtävässä rajatusti apuvälineenä, mutta ei oman ajattelun, ymmärryksen tai lähdetyön korvaajana. Sen käyttö on hyväksyttävää esimerkiksi kielenhuollossa, tiivistämisessä ja rakenteen selkeyttämisessä, kunhan opiskelija itse vastaa siitä, että sisältö on paikkansapitävä, ymmärretty ja tehtävän tavoitteiden mukainen. Tekoälyn tuottamaa sisältöä ei tule käyttää uutena tietona tai lähteenä ilman omaa tarkistusta, ja merkittävästä käytöstä on oltava avoin. Alla teesejä:

1. **Tuutori**: Hyödynnä kielimallia ensisijaisesti kielenhuoltoon ja kirjoittamasi tekstin haastamiseen.
2. **Automatisoija:** On luontevaa käyttää kielimallia automatisoimaan toistuvia, kaavamaisia, helposti tarkistettavia tehtäviä. Mermaid-kuvaajien luominen on esimerkki tällaisesta tehtävästä.
3. **Vastuu ymmärtämisestä:** Jos et ymmärrä tekoälyn generoimaa koodia tai tekstiä, ==älä palauta sitä==.
4. **Läpinäkyvyys:** Ilmoita tekoälyn käytöstä. Mitä työkalua käytit, mihin tarkoitukseen ja miten tarkistit lopputuloksen? Älä peittele esimerkiksi `AGENTS.md`-tiedostojen olemassaoloa, jos käytit niitä.

Lyhennetty tarkistuslista Wikipediasta lainattuna:

- [x] "Jokainen fakta on tarkistettu alkuperäislähteestä." [^wikiohje]
- [x] "Jokainen lähde on olemassa ja luettu riittävästi."  [^wikiohje]
- [x] "Voisin puolustaa väitteitä ilman tekoälyä (ymmärrän aiheen riittävästi)."  [^wikiohje]

Lopulta vastuu palautuksesta on aina opiskelijalla itsellään. Tekoälyn käyttö ei vähennä velvollisuutta ymmärtää omaa tekstiä, arvioida sen luotettavuutta ja toimia akateemisesti rehellisesti. Tarvittaessa opettaja voi pyytää tarkempaa selvitystä tekoälyn käytöstä tai käynnistää vilppitutkinnan. Vilppi voi johtaa opintosuorituksen hylkäämiseen.

## Käytännön ohjeita

Kielimallien käyttämisessä hyvä puoli on se, että se opastaa sinua muotoilemaan hyvän kysymyksen. Kielimallit ovat huonoja vastaamaan epämääräisiin kysymyksiin, joten sinun tulee osata antaa kielimallille riittävästi kontekstia. Jos haluat kattavan ohjeen, katso alla oleva video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ysPbXH0LpIE?si=aGjRBsZ_KpmeA9cm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Video 1**: *Video Anthopic:n "Prompting 101 | Code w/ Claude" on luotu koodauksen näkökulmasta, mutta samoja context engineering -periaatteita voi soveltaa mihin tahansa aiheeseen.*

Video on pitkä, joten jos haluat vain tiivistelmän, tässä on muutama vinkki:

* Ole tarkka: vältä epämääräisiä kysymyksiä; näin minimoit hallusinaatiot.
* Anna relevantti koodi: jaa tiedostot, komennot tai snippetit, jotka ovat keskeisiä ongelman ymmärtämiseksi.
* Sisällytä laajempi kokonaisuus: selitä ongelman konteksti eli miksi teet mitä teet, millä työkalulla ja missä käyttöjärjestelmässä. Kerro myös, että kirjoitat oppimispäiväkirjaa opiskelua varten.
* Jaa virheilmoitukset: jos saat virheilmoituksia, jaa ne.
* Määrittele rajoitukset: kerro rajoitukset, kuten käytettävät työkalut tai teknologiat.

Yllä olevat vinkit ovat muotoiltu Andy Osmanin *Context Engineering*-seminaaripuheesta O'Reillyn Codecon-virtuaalitapahtumasta. [^andy] Hyvän kysymyksen muotoilussa menee aikaa. Joskus käy niin, että kun muotoilet kysymyksen hyvin, huomaat itsekin ratkaisun ongelmaasi ennen kuin ehdit lähettää kysymyksen.

Olennaista on tekoälylle annetun itsenäisyyden määrä. Jos tekoäly kirjoittaa sinun teemamerkintäsi, opit tuskin mitään. Jos sinä opiskelijana määräät tekoälyn toimimaan matalammalla itsenäisyyden tasolla, kuten antamaan palautetta tai vihjeitä, oppimiselle jää mahdollisuus. [^kasvatus2025himanka]

## Lähdeluettelo

[^linuxohje]: The kernel development community. *Linux Kernel Guidelines for Tool-Generated Content*. https://docs.kernel.org/_sources/process/generated-content.rst.txt
[^wikiohje]: Wikipedia. *Ohje:Tekoälyn käyttö*. https://fi.wikipedia.org/wiki/Ohje:Teko%C3%A4lyn_k%C3%A4ytt%C3%B6
[^andy]: Osman, A. *Context Engineering*. Puheenvuoro tapahtumassa AI Codecon: Coding for the Agentic World. O'Reilly. 2025. https://learning.oreilly.com/live-events/ai-codecon-coding-for-the-agentic-world/0642572207748/0642572207731/
[^kasvatus2025himanka]: Himanka, J. Tekoäly korkeakouluopetuksessa. Kasvatus 1/2025. https://journal.fi/kasvatus/issue/view/11970
