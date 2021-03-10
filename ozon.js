//Мне нужно: 1 - спросить кто ходит первым, если игрок, то пусть вводит в инпут, жмет, выводится значение, автоматический ход маш
//если машина - просто автоматический ход и ожидание ввода в инпут
//2 - зациклить предыдущий пункт - очередность ходов, при каждой итерации записывать введеные значения в соответствующие массивы
//2.1 - сверять эти массивы при каждой итерации на: наличие ключей из wins, количество введенных значений с table



let table = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

let wins = {
	win1: 'a1, b1, c1',
	win2: 'a2, b2, c2',
	win3: 'a3, b3, c3',
	win4: 'a1, a2, a3',
	win5: 'b1, b2, b3',
	win6: 'c1, c2, c3',
	win7: 'a1, b2, c3',
	win8: 'c1, b2, a3'
}

// let wins = [
// 	['a1, b1, c1']
// 	['a2, b2, c2']
//  ['a3, b3, c3']
// 	['a1, a2, a3']
// 	['b1, b2, b3']
// 	['c1, c2, c3']
// 	['a1, b2, c3']
// 	['c1, b2, a3']
// ];

let movesPlayer = [];
let movesMachine = [];
// let allMoves = movesMachine + movesPlayer;

document.body.style = 'display: flex; flex-direction: column; width: 200px;'

let welcome = prompt('Кто ходит первым?', '"1" - игрок, "2" - компьютер');
if(welcome === '1') {
    player();
} else if(welcome === '2') {
    machineStep();
} else {
    document.body.innerHTML = 'Введите одно из указанных значений';
}

//запретить ввод уже введенного, сверить с ответами, сверить на длину общего массива

function player() {
    document.querySelector('.enter').onclick = humanStep;
    function humanStep() {
        let inputValue = document.querySelector('.input_player').value;
        if(table.includes(inputValue) && allMoves.every(inputValue) != inputValue) {
            document.body.append('Вы: ' + inputValue);
            movesPlayer.push(inputValue);
            machineStep();
        } else {
            document.body.append('Введите одно из значений из таблицы');
        }
    }
}

function machineStep() {
    let move = table[Math.floor(Math.random()*table.length)];
    movesMachine.push(move);
    document.body.append('Машина: ' + move);
    player();
}
let allMoves = movesPlayer.concat(movesMachine);

//Теперь нужно зациклить эти действия до победы или конца поля. 

while(true) {
    
    if(movesPlayer.length < movesMachine.length) { 
        player(); 
    } else {
        machineStep();
    }
}

// function gameOver() {
//     if(movesPlayer.length < movesMachine.length) {
//         player();
//     } else if(movesPlayer.length > movesMachine.length) {
//         machineStep();
//     } else if((movesPlayer.length + movesMachine.length) === table.length) {
//         document.body.append('Ничья');
//     }
// }
// gameOver();




// function playerStep() {
//     let yourMove = document.body.innerHTML = 'Ваш ход';
//     let inputPlayer = document.body.innerHTML = '<input type="text">';
//     document.body.innerHTML = yourMove + inputPlayer;
//     let showMove = document.querySelector('.input_player').addEventListener('keydown', function(e) {
//         if(e.keyCode === 13) {
//             document.body.append(this.value);
//         }
//     })
//     document.createElement("input").enterKeyHint = function() {
//         document.body.append(this.innerHTML);
//     } 
//     document.querySelector('.enter').onclick = getVal;
//     function getVal() {
//         let getInput = document.querySelector('.input_player').value;
//         document.createElement("div").innerHTML = getInput;
//     }
//     movesPlayer.push(val);
// }; 



//после каждого хода игрока и после каждого хода машины, сверять их массивы с винс, а общий массив ходов проверять на количество
// function check() {
//     for (let arrWins of Object.values(wins)) {
//         //  let strWins = arrWins.join();

//         //  while (true) {
//         //      playerStep();
//              if(movesPlayer.includes(arrWins) === true) {
//                 alert('Вы победили!');
//                 // break
//              }
//             //  machineStep();
//              if(movesMachine.includes(arrWins) === true) {
//                  alert('Машина победила!');
//                 //  break
//              }
//              if(allMoves.length === table.length) {
//                  alert('ничья');
//                 //  break
//              }
//          }
//     }
    
// while(true) {
    //     player();
    //     for(let arrWins of Object.values(wins)) {
    //         if(movesPlayer.includes(arrWins) === true) {
    //             document.body.append('Вы выиграли!');
    //         }
    //     } break;
        
    // }