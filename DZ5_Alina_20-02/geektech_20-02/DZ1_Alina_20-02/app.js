console.log('Dz_app.js');

// * //
// написать программу: нужно запрашивать у пользователя его
// имя и фамилию (отдельным prompt)
// и выводит приветствие в виде: Здравствуйте, Имя Фамилия!
// * //

// var name = prompt("Имя")
// console.log(name)
// var  lastName = prompt("Фамилия")
// console.log(lastName)
// alert("Здравствуйте,  " + name  + "  " + lastName )

// * //
// Написать программу которая спрашивает у пользователя 2 числа
// (через prompt) и выводит в консоль какое больше.
// Если числа равны, то вывести что они равны.
// * //


var a = + Number(prompt ("Введите первое число"));
var b = + Number(prompt ("Введите второе  число"));

if (a > b) {
    alert("первое число больше")
}
else if (a < b) {
    alert("второе число больше")
}
else if (a===b) {
    alert("число равны")
}

// // * //
// // написать программу "светофор":
// // программа спрашивает у пользователя цвет в текстовом виде,
// // и печатает в консоль действие согласно ПДД.
// // Например: красный : стой! желтый : жди и т.д.
// // * //

// var color = prompt("Выберите цвет светофора:\n красный,\n желтый,\n зеленый")
// if(color === "Красный" || color === "красный") {
//     alert("Движение запрещено!")
// } else if(color ==="Желтый" || color ==="желтый") {
//     alert("Предупреждение о смене сигнала!")
// }else if(color=== "Зеленый"|| color=== "зелёный") {
//     alert("Движение разрешено!")
// } else {
//     alert("неверный цвет!!!")
// }
// console.log(color);


