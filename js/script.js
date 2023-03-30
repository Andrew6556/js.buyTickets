"use strict";


let tickets = [
    {
        "1":{ticket: '1',path:'Москва -> Спб',passenge: ' Данила И. Павлов',passport: '93 48 232329'},
        "2":{ticket: '2',path:'Спб -> Крым',passenge: 'Михаил И. Карпов',passport: '35 23 584387'},
        "3":{ticket: '3',path:'Москва -> Финляндия',passenge: 'Андрей А. Сорокин',passport: '21 01 583244'},
        '4': {ticket: '4',path: 'Москва -> Омск',passenge: 'Валерий Д. Ушаковв',passport: '62 22 523237'},
        '5': {ticket: '5',path: 'Сочи -> Москва',passenge: 'Ян В. Крылов',passport: '88 06 666287'},
        '6': {ticket: '6',path: 'Финляндия -> Спб', passenge: 'Александра В. Ульянова', passport: '12 44 643287'}
    }
];

let index = 0;

function data_change(list=tickets, dom){
    for (let key in list[0]){
        if (index < dom.length) {
            dom[index].querySelector(".tickets__place").innerText = key;
            dom[index].querySelector(".ticket").innerText = list[0][key]["ticket"];
            dom[index].querySelector(".tickets__path").innerText = list[0][key]["path"];
            dom[index].querySelector(".tickets__passenger").innerText = list[0][key]["passenge"];
            dom[index].querySelector(".tickets__passport").innerText = list[0][key]["passport"];
            ++index
        }
    }

}

data_change(tickets,document.querySelectorAll('.tickets__card'));

alert("На текущий момент эти билеты раскуплены!");
alert("Вы хотите купить билет?\nНапишете `1` если да. И `2` если нет");
let user_choice = +prompt("Вы хотите купить билет?Напишете `1` если да. ");

if (user_choice == 1){
    let user_route_from    = prompt("Напишите от куда собираетесь ехать"),
        user_route_to      = prompt("Напишите от куда собираетесь ехать"),
        user_info          = prompt("Напишите ФИО"),
        user_passport      = prompt("Напишите ваши данные паспорта"),
        user_data_checking = (user_route_from != "" &&
                                user_route_to != "" && 
                                user_info     != "" && 
                                user_passport != "" ? 1 : 0);
                                
    if (user_data_checking){
        let user_path = `${user_route_from} -> ${user_route_to}`;
        tickets.forEach(el => {
            el[String(++index)] = {
                ticket: String(index),
                path:user_path,
                passenge:user_info,
                passport: user_passport,
            }
        })

        let div_tickets = document.querySelector('.tickets'),
            clon_ticket = document.querySelector('.tickets__card');

        div_tickets.appendChild(clon_ticket.cloneNode(true));


        index = 0;

        data_change(tickets,document.querySelectorAll('.tickets__card'));
        alert("Вы успешно купили билет")
    }else{
        alert("Вы где-то не ввели свои данные");
    }
}else{
    alert("Заходите еще :)")
}




