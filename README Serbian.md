# Assignment
```
Svetsko prvenstvo u fudbalu Katar 2022.

Grupe su po uzoru na žreb za svetsko prvenstvo u Kataru 2022.

Svaku reprezentaciju definišu 2 parametra: Ime, Rang.
Reprezentacije ne mogu deliti isti rang.

Grupna faza se igra u 3 kola po principu svako sa svakim. Pobeda 3 boda, nerešeno 1 bod i poraz ne donosi bodove.
Prioriteti rangiranja ekipa u grupi:
  1. broj bodova
  2. broj bodova && gol razlika (dati/primljeni)
  3. broj bodova && gol razlika (dati/primljeni) && broj postignutih golova
Ako su ekipe izjednačene posle svih gore navedenih parametara, pobednik se bira nasumično.

  Grupa A: Katar, Ekvador, Senegal, Holandija
  Grupa B: Engleska, Iran, SAD, Ukrajina
  Grupa C: Argentina, Saudijska Arabija, Meksiko, Poljska
  Grupa D: Francuska, Peru, Danska, Tunis
  Grupa E: Španija, Novi Zeland, Nemačka, Japan
  Grupa F: Belgija, Kanada, Maroko, Hrvatska
  Grupa G: Brazil, Srbija, Švajcarska, Kamerun
  Grupa F: Portugal, Gana, Urugvaj, Južna Koreja

Prve dve ekipe iz grupe idu u eliminacionu fazu, s tim da te dve ekipe ne mogu biti direktni rivali u prvom eliminacionom kolu.
Tokom eliminacione faze ne može biti nerešenog ishoda meča.

Output sadrži:
  1. sve mečeve grupne faze po kolima i grupama
  2. konačne tabele grupa
  3. sve mečeve eliminacione faze po fazama
  4. pobednika

Za pokretanje otvorite index.html stranicu u svom browser-u.