# 4: Lähdeviittausjärjestelmän käyttö

## 4.1 Yleistä lähteviittauksesta

Lähdeviittaukset tehdään Vancouver-tyyliä **mukaillen**. Huomaa sana **mukaillen**. Opinnäytetyössä, akateemisissa julkaisuissa ja muissa raporteissa tulet noudattamaan esimerkiksi APA tai Vancouver lähdeviittausta orjallisesti ohjeiden mukaisesti. Oppimimispäiväkirjassa on riittävää, että käytät lähdeviittauksia, jotka ovat ymmärrettäviä ja johdonmukaisia. Voit käyttää tämän dokumentin lähdeviittauksia tyylillisenä ohjenuorana. Oppimispäiväkirjassa jätetään muun muassa viittauspäivämäärä pois, koska se selviää kontekstista, ja sivunumerot, koska Markdown ei salli niiden sisällyttämistä Footnoten sisään.

## 4.2 OAT-spec

Kuten opinnäytetyön tekijän oppaassa neuvotaan [^fcfce3], lähdeviite koostuu kahdesta osasta: **tekstiviitteestä** ja **lähdeluettelon vastineesta**. Tekstiviittauksen sisällä on viittauksen tunniste, joka on tyypillisessä Vancoucer-lähdeviittauksessa numero, mutta meillä on käytössämme opinnäytetyön arviointityökalun aivan oma lähdeviittauksen spesifikaatio (lyh. OAT-spec). Saat käyttää numeroa, mutta numeroinnin ylläpito käsin on haastavaa. Meidän OAT-specin suositus on siis käyttää MD5-tiivisteeseen (eli "häshiin") perustuvaa lyhyttä merkkijonoa. Tätä on selvennetty alla olevassa taulukossa.

|                  | Vancouver                   | OAT-spec                             |
| ---------------- | --------------------------- | ------------------------------------ |
| Tekstin sisällä  | [1]                         | [^fff999]                            |
| Lähdeluettelossa | 1: Tekijä. Teos. Ynnä. Muut | [^fff999]: Tekijä. Teos. Ynnä. Muut. |

Huomaa, että lähdeviitteet voivat olla joko viitteitä, kuten edellä olevassa kappaleessa, tai suoria lainauksia, kuten tämä: *"Lähteet numeroidaan lähdeluetteloon juoksevasti eli siinä järjestyksessä, missä ne esiintyvät tekstissä."* [^fcfce3]

Jos pohdit, että miksi me poikkeamme Vancouver-speksistä näin rankasti, niin syy on selvä. Me emme tuota PDF-tiedostoa Theseukseen vaan staattisen Mkdocs-dokumentaatiosivuston. Material for MkDocs korvaa häshit numeroille meidän puolestamme ja tekee niistä tiedostonsisäiset linkit. Kokeile klikata jotakin tämän dokumentin tekstinsisäistä viitettä. Kokeile myös klikata lähdeluettelossa näkyviä viitteitä tai niiden perässä olevia nuolia.

## 4.3 Lähdeviitteet ja tieteellinen tieto

Tieteellisen tiedon suurin arvo ei johdu siitä, että tieto olisi totta [^40c08c]. Tieteellisen tiedon arvo on sen toistettavuudessa, läpinäkyvyydessä ja uusiutuvuudessa. Tämän vuoksi on tärkeää, että lähdeviitteet ja hypoteesin synty ovat yksiselitteisiä ja johdonmukaisia. Wikipedia on huono lähde: sillä on useita eri kirjoittajia, ja on vaikea sanoa, mitä siellä on milloinkin lukenut kenenkin sanomana. Wikipedia on hyvä lähde tiedon pläräilyyn *ensimmäisellä kerralla*, mutta tieto pitäisi varmistaa lähteistä - ja näihin Wikipedian artikkelit itsekin viittaavat. Suuret kielimallit kuten ChatGPT tai Bard ovat vielä huonompia lähteitä kuin Wikipedia. Kielimallin kanssa keskustelusta voi saada hyviä ideoita, näkökulmia ja jopa sattumanvaraisesti oikeita vastauksia kysymyksiisi, mutta tämä ei ole millään tavoin tieteellisesti pätevä tapa hankkia tietoa. Kielimalli luo lauseita, jotka vaikuttavat oikeilta. Kielimalli ei tarkista faktoja tai punnitse tutkimustapojaan: se vain liimailee sopivia asioita yhteen.

![image-20240107135006931](../images/chatgpt.png)

**Kuvio 3:** *ChatGPT vastaa väärin esimerkiksi tähän yksinkertaiseen matemaattiseen tehtävään. Se suoritti matemaattiset operaatiot sääntöjen mukaisessa järjestyksessä, mutta tyri lopulta yhteenlaskun. Oikea vastaus on 14691.*

HUOM! Ethän siis käytä kielimalleja lähteinä! Se laskee arvosanaasi.

## 4.2 Lähdeviittausesimerkki

Alla koodilohkossa on esimerkki lähdeviitteestä. Käytä tätä ohjetta apuna, kun kirjoitat omia lähdeviitteitäsi.

```md title="esimerkki.md"
# Tämä osuus on jossain runkotekstissä

Tämä kappale hyödyntää GitLab-maustettua Markdownia [^1739a4]. Markdown on sekä kehittäjäystävällinen merkintäkieli tai syntaksi että ohjelmisto, joka kääntää tätä kieltä HTML:ksi [^d1a7a7]. 

# Lähdeluettelo

[^1739a4]: GitLab Docs. GitLab Flavored Markdown (GLFM). https://docs.gitlab.com/ee/user/markdown.html

[^d1a7a7]: Gruber, J. Daring Fireball: Markdown. https://daringfireball.net/projects/markdown/
```


## Lähdeluettelo

[^fcfce3]: KAMK. *Opinnäytetyön tekijän opas: Lähdeviitteet ja lähdeluettelo 2023 (Vancouver)*. https://libguides.kamk.fi/c.php?g=657740&p=5157950
[^40c08c]: Hakkarainen, K., Lonka, K. & Lipponen, L. *Tutkiva oppiminen: Järki, tunteet ja kulttuuri oppimisen sytyttäjinä*. Helsinki: WSOY. 2004.