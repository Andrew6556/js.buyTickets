"use strict";


let tickets = [
    {
        "1":{ticket: '1',path:'Москва -> Санкт-Петербург',passenge: ' Данила И. Павлов',passport: '93 48 232329'},
        "2":{ticket: '2',path:'Санкт-Петербург -> Крым',passenge: 'Михаил И. Карпов',passport: '35 23 584387'},
        "3":{ticket: '3',path:'Москва -> Финляндия',passenge: 'Андрей А. Сорокин',passport: '21 01 583244'},
        '4': {ticket: '4',path: 'Москва -> Омск',passenge: 'Валерий Д. Ушаковв',passport: '62 22 523237'},
        '5': {ticket: '5',path: 'Сочи -> Москва',passenge: 'Ян В. Крылов',passport: '88 06 666287'},
        '6': {ticket: '6',path: 'Финляндия -> Санкт-Петербург', passenge: 'Александра В. Ульянова', passport: '12 44 643287'}
    }
];

// let dom_tickets = document.querySelectorAll('.tickets__card');
// let index = 0;
// for (let item in tickets[0][key])
// for (let key in tickets[0]){
//     if (index < dom_tickets.length) {
//         dom_tickets[index].querySelector(".tickets__place").innerText = key;
//         dom_tickets[index].querySelector(".ticket").innerText = tickets[0][key]["ticket"];
//         dom_tickets[index].querySelector(".tickets__path").innerText = tickets[0][key]["path"];
//         dom_tickets[index].querySelector(".tickets__passenger").innerText = tickets[0][key]["passenge"];
//         dom_tickets[index].querySelector(".tickets__passport").innerText = tickets[0][key]["passport"];
//         ++index
//     }
// }
let dom_tickets = document.querySelector('.tickets');
let a = document.querySelector('.tickets__card');
let clon_div = a.cloneNode(true);

// let user = document.createElement(clon_div);
    // user.className = "tickets__card";

// user.innerText = "1";
dom_tickets.appendChild(clon_div);