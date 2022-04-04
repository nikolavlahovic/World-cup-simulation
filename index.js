const main = () => {
  function getGoals(max) {
    return Math.floor(Math.random() * max);
  }

  function Team(name, rank, flag) {
    this.name = name;
    this.rank = rank;
    this.points = 0;
    this.goals = 0;
    this.goalsReceived = 0;
    this.gamesWon = 0;
    this.gamesLost = 0;
    this.drawGames = 0;
    this.flag = flag;
  }


  //Team declarations

  let katar = new Team('Katar', 51, 'qatar');
  let ekvador = new Team('Ekvador', 46, 'ecuador');
  let senegal = new Team('Senegal', 12, 'senegal');
  let holandija = new Team('Holandija', 22, 'netherlands');
  let engleska = new Team('Engleska', 8, 'england');
  let iran = new Team('Iran', 14, 'iran');
  let sad = new Team('SAD', 9, 'united-states-of-america');
  let ukrajina = new Team('Ukrajina', 21, 'ukraine');
  let argentina = new Team('Argentina', 26, 'argentina');
  let saudijskaArabija = new Team('Saudijska Arabija', 13, 'saudi-arabia');
  let meksiko = new Team('Meksiko', 6, 'mexico');
  let poljska = new Team('Poljska', 27, 'poland');
  let francuska = new Team('Francuska', 20, 'france');
  let peru = new Team('Peru', 15, 'peru');
  let danska = new Team('Danska', 10, 'denmark');
  let tunis = new Team('Tunis', 19, 'tunisia');
  let spanija = new Team('Španija', 29, 'spain');
  let noviZeland = new Team('Novi Zeland', 11, 'new-zealand');
  let nemacka = new Team('Nemačka', 2, 'germany');
  let japan = new Team('Japan', 23, 'japan');
  let belgija = new Team('Belgija', 7, 'belgium');
  let kanada = new Team('Kanada', 17, 'canada');
  let maroko = new Team('Maroko', 25, 'morocco');
  let hrvatska = new Team('Hrvatska', 28, 'croatia');
  let brazil = new Team('Brazil', 18, 'brazil');
  let srbija = new Team('Srbija', 1, 'serbia');
  let svajcarska = new Team('Švajcarska', 24, 'switzerland');
  let kamerun = new Team('Kamerun', 4, 'cameroon');
  let portugal = new Team('Portugal', 16, 'portugal');
  let gana = new Team('Gana', 3, 'ghana');
  let urugvaj = new Team('Urugvaj', 30, 'uruguay');
  let juznaKoreja = new Team('Južna Koreja', 5, 'south-korea');

  //Groups ---------
  let groupA = [katar, ekvador, senegal, holandija]; groupA.ID = 'A';
  let groupB = [engleska, iran, sad, ukrajina]; groupB.ID = 'B';
  let groupC = [argentina, saudijskaArabija, meksiko, poljska]; groupC.ID = 'C';
  let groupD = [francuska, peru, danska, tunis]; groupD.ID = 'D';
  let groupE = [spanija, noviZeland, nemacka, japan]; groupE.ID = 'E';
  let groupF = [belgija, kanada, maroko, hrvatska]; groupF.ID = 'F';
  let groupG = [brazil, srbija, svajcarska, kamerun]; groupG.ID = 'G';
  let groupH = [portugal, gana, urugvaj, juznaKoreja]; groupH.ID = 'H';

  let groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];
  let eliminationsGroupA = [];
  let eliminationsGroupB = [];

  groups.forEach(el => {
    el.forEach(team => {
      team.groupID = el.ID;
    });
  });

  //Variables----------------------------------------
  let roundOf16 = [];
  let quarterFinals = [];
  let semiFinals = [];
  let pairedQF = [];
  let finals = [];
  let pairedSF = [];
  let victor = [];
  let finalMatch = [];


  function getScore() {               //Racuna rezultat
    let a = getGoals(6);
    let b = getGoals(6);
    let score = [a, b];
    return score;
  }

  //Parovi---------------------------------------------  //Vraca sve kombinacije parova bez ponavljanja
  function Pairs(arr) {
    var res = [],
      l = arr.length;
    for (var i = 0; i < l; ++i)
      for (var j = i + 1; j < l; ++j)
        res.push([arr[i], arr[j]]);
    return res;
  }
  //Dodavanje BODOVA, POBEDA i PORAZA posle meca u grupnoj fazi

  groups.forEach(element => {


    //For petlja za simulaciju tri kola gupne faze

    let groupTableContent = `<div><h1>Grupa ${element.ID}</h1><table class="groupTable"><tr><th>#</th><th>Team A</th><th>rez</th><th>Team B</th><tr>`;


    for (let i = 0; i < 3; i++) {
      groupTableContent += `<th>Kolo ${i + 1}</th><tr>`;
      Pairs(element).forEach(pair => {
        let score = getScore();
        groupTableContent += `<tr><th></th><th>${pair[0].name} <th>${score[0]}:${score[1]}</th><th> ${pair[1].name}</th><tr>`;

        if (score[0] > score[1]) {

          pair[0].points += 3;
          pair[0].gamesWon += 1;
          pair[1].gamesLost += 1;

        } else if (score[0] < score[1]) {

          pair[1].points += 3;
          pair[1].gamesWon += 1;
          pair[0].gamesLost += 1;

        } else if (score[0] == score[1]) {

          pair[1].points += 1;
          pair[0].points += 1;
          pair[0].drawGames += 1;
          pair[1].drawGames += 1;

        }

        //Dodavanje GOLOVA posle meca u grupnoj fazi
        pair[0].goals += score[0];
        pair[0].goalsReceived += score[1];
        pair[1].goals += score[1];
        pair[1].goalsReceived += score[0];


        //Sortiranje po broju BODOVA
        element.sort((a, b) => {
          if (a.points > b.points) {
            return -1;
          }
          if (a.points < b.points) {
            return 1;
          }
          if (a.points == b.points) {
            //Provera po RAZLICI GOLOVA
            if (a.goalDiff > b.goalDiff) {
              return -1;
            }
            if (a.goalDiff < b.goalDiff) {
              return 1;
            }// Provera po BROJU GOLOVA
            if (a.goalDiff == b.goalDiff) {
              if (a.goals > b.goals) {
                return -1;
              }
              if (a.goals < b.goals) {
                return 1;
              }
              if (a.goals == b.goals) {
                return 0;
              }
            }
          }
        })


      });


    }
    groupTableContent += '</table></div>';

    document.getElementById('groupsTable').innerHTML += groupTableContent;



    eliminationsGroupA.push(element[0]);
    eliminationsGroupB.push(element[1]);
  });



  //Sesnaestina finala-----------------------------------------------------

  (function (array1, array2) {        // Mecevi sesnaestine finala
    let darray = array2
    array1.forEach(e => {
      let random = Math.floor(Math.random() * darray.length);
      roundOf16.push([e, darray[random]]);
      darray.splice(darray.indexOf(darray[random]), 1);
    });


  })(eliminationsGroupA, eliminationsGroupB);


  function Eliminations(previousComp, nextComp, id) {           // Funkcija za duele(gura pobednike duela u novi niz)

    let eliminationChild = document.createElement('div');
    eliminationChild.setAttribute('id', id);
    let parent = document.getElementById('eliminations');
    parent.appendChild(eliminationChild);
    let printTable = `<h1>${id} takmičenja</h1><table><tr><th>Tim A</th><th>rez</th><th>Tim B</th></tr>`;



    previousComp.forEach(pair => {
      let score = getScore();
      let a = score[0];
      let b = score[1];
      if (a > b) {
        nextComp.push(pair[0]);
      }
      if (a < b) {
        nextComp.push(pair[1]);
      }
      if (a == b) {
        if (Math.random > 0.5) {
          nextComp.push(pair[0]);
        } else {
          nextComp.push(pair[1]);
        }
      }
      printTable += `<tr><th>${pair[0].name}</th><th>${a}:${b}</th><th>${pair[1].name}</th></tr>`;
    });
    printTable += `</table>`;
    document.getElementById(id).innerHTML += printTable;

  }

  Eliminations(roundOf16, quarterFinals, 'Osmina');        // Mecevi osmine finala

  function PairUp(array, resultArray) {                    // Vraca nasumicne parove bez ponavljanja

    newArray = array;

    function getSecondPair() {
      let index = Math.floor(Math.random() * newArray.length);
      if (index == 0) {
        index += 1;
      }
      return index;
    }

    function NoSames() {
      let secondPair = newArray[getSecondPair()];
      resultArray.push([newArray[0], secondPair]);
      newArray.splice(0, 1);
      newArray.splice(newArray.indexOf(secondPair), 1);

    }
    while (newArray.length > 1) {
      NoSames();
    }


  }

  PairUp(quarterFinals, pairedQF);                   //Uparuje takmicare za cetvrt finale
  Eliminations(pairedQF, semiFinals, 'Četvrtina');   //Mecevi cetvrt finala
  PairUp(semiFinals, pairedSF);                      //uparuje takmicare za polu-finale
  Eliminations(pairedSF, finals, 'Polovina');        //mecevi polufinala
  finalMatch.push(finals);                           //Ubacuje takmicare finala u niz
  Eliminations(finalMatch, victor, 'Finale');        //Finalni mec

  //OUTPUT --------------------

  groups.forEach(group => { // Stampa tabele po zavrsetku grupne faze

    let rankingTable = `<div><h1>Grupa ${group.ID}</h1><table><tr><th>#</th><th>Tim</th><th>Rang</th><th>Pobeda</th><th>Nerešeno</th><th>Poraza</th><th>GD:GP</th><th>Poeni</th>`
    for (let i = 0; i < group.length; i++) {
      rankingTable += `<tr><th>${i + 1}.</th><th>${group[i].name}</th>
                        <th>${group[i].rank}</th><th>${group[i].gamesWon}</th>
                        <th>${group[i].drawGames}</th><th>${group[i].gamesLost}</th>
                        <th>${group[i].goals} : ${group[i].goalsReceived}</th>
                        <th>${group[i].points}</th></tr>`

    }
    rankingTable += `</table></div>`;
    document.getElementById('finalTables').innerHTML += rankingTable;
  });

  let parent = document.getElementById('eliminations');
  let winner = document.createElement('div');
  winner.setAttribute('id', 'winner');
  parent.appendChild(winner);
  let parent1 = document.getElementById('eliminations');
  winner.innerHTML = `<h1 id="winnerText">Pobednik je: ${victor[0].name} !!!</h1>
                      <img src="https://cdn.countryflags.com/thumbs/${victor[0].flag}/flag-square-250.png"/>`;








  //-------------------------------------------------------------
};
main();
