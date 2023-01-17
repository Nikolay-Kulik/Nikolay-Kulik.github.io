// let mul = () => {
//     let bitcoin = prompt('(₿) Введiть курс Bitcoin до доллара:', '20278.00')
//     let dollars = prompt('($) Введiть суму Dollars для обмiну:', '1000')
//     let sum = dollars / bitcoin 
//     if (bitcoin > 0 && dollars > 0 && bitcoin !== null && dollars !== null && isFinite(bitcoin) && isFinite(dollars)) {
//         return alert(`Ви можете купити: ${sum} BTC`)
//     }
//     alert(`Уважно!\nВводити дозволено лише числа бiльше '0',\nвикористовуйте крапку "." якщо число нецiле!`)
//     console.log(sum);
// }
// mul()

// const sect = document.querySelector('.sect')
// const div = document.querySelector('.div')
// const btn = document.querySelector('.btn')
// sect.addEventListener('click', () => {

//     console.log('sect')
// })
// div.addEventListener('click', () => {
//     console.log('div')
//     // e.stopPropagation()
// })
// btn.addEventListener('click', () => {
//     console.log('btn')
//     // e.stopPropagation()
// })

// const items = document.querySelectorAll('div')
// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.classList.toggle('greyclass')
//     })
// })

// const list = document.querySelector('ul')
// list.addEventListener('click', (e) => {
//     e.target.closest('li').classList.toggle('greyclass')

// })
// console.log(list);

// let number = 0;
// window.addEventListener('scroll', () => {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
//     if(distanceToBottom < document.documentElement.clientHeight + 1000) {
//         number++
//         const li = document.querySelector('li')


//         // const div1 = document.createElement('div')
//         li.innerHTML = `<p>${number}</p>`
//         document.body.append(li)
//     }
// })
// const menuBody = document.querySelector('.menu')
// document.addEventListener('click', menu)

// function menu(e) {
//     if (e.target.closest('.menu__button')) {
//         menuBody.classList.toggle('_active')
//     }    
//     if (!e.target.closest('.menu')) {
//         menuBody.classList.remove('_active')
//     }    
// }





// Створіть class Accumulator, конструктор якого прийматиме startingValue.

// Об'єкт, який клас створює, має вміти таке:
// - зберігати «поточне значення» у властивості value. Початкове значення передається аргументом конструктора як startingValue.
// - метод add(number) одержує число у аргументи та додає його до властивості value. Таким чином, властивість value є поточною сумою всього, що передав користувач під час викликів методу add(number), з урахуванням початкового значення startingValue.

// Приклади роботи коду:
class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;
    }

    add(number) {
        this.value += number;
    };
};

const accumulator = new Accumulator(1);
accumulator.add(2);
accumulator.add(3);
console.log(accumulator.value); //  6
console.log(accumulator);
console.log(Accumulator);

// Доповніть функціонал, що описано в робочій області.

// class Accumulator {
//     constructor(startingValue) {
//         // ваша реалізація
//     }

//     add(number) {
//         // ваша реалізація
//     };
// }


const person = {
    name: 'Nik',
    age: 39,
}
const printPers = ({ name }) => {
    console.log('Name: ', name);
}
// console.log(printPers);
printPers(person)

// функция-фабрика

const getBook = function (author, name, composition) {
    const book = {}
    book.author = author
    book.name = name
    book.composition = composition

    return book
}

const book1 = getBook('Пушкин', 'Дубровский', 'повесть')
const book2 = getBook('Толстой', 'Война и Мир', 'роман')
console.log(book1);
console.log(book2);

// функция-конструктор

function Book(author, name, composition) {
    this.author = author;
    this.name = name;
    this.composition = composition
}
Book.prototype.k6 = 'k6'

const book3 = new Book('Пушкин', 'Дубровский', 'повесть')
const book4 = new Book('Толстой', 'Война и Мир', 'роман')
console.log(book3);
console.log(book4);

// класс

class Books {
    constructor(author, name, composition) {
        this.author = author;
        this.name = name;
        this.composition = composition
    }
    books() {
        books = 'k6'
    }
}

const book5 = new Books('Пушкин', 'Дубровский', 'повесть')
const book6 = new Books('Толстой', 'Война и Мир', 'роман')
console.log(book5);
console.log(book6);

/////////////////////////////////

function bind(name, age, job) {
    return function plus() {
        return `Person: ${name}, ${age}, ${job}`
    }
}

const ff = bind('Vasya', 20, 'NKVD')
const jj = bind('Petya', 30, 'NKVD')
console.log(ff());
console.log(jj());



navigator.geolocation.getCurrentPosition(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error);
    }
)
