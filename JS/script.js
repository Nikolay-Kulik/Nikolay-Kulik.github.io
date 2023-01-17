one.addEventListener('click', menuOne)
function menuOne(e) {
    if (e.target.closest('.one__button')) {
        one.classList.toggle('_active');
        Array.from(oneLi).map(item => item.classList.remove('_active'));
        hint.style.display = 'none'
    }
    // if (!e.target.closest('.one') && !e.target.closest('.two__button')) {
    //     one.classList.remove('_active');
    // }
}

two.addEventListener('click', menuTwo)
function menuTwo(e) {
    if (e.target.closest('.two__button')) {
        two.classList.toggle('_active')
        Array.from(output).map(item => item.classList.remove('_active'))
        num = 0
        Array.from(number).map(item => item.innerHTML = num)
    }
    if (!e.target.closest('.two') && !e.target.closest('.one__button')) {
        two.classList.remove('_active');
    }
}

// выбор 1-й единицы

document.addEventListener('click', closeOne)

function closeOne(e) {
    if (e.target.closest('#Cm')) {
        oneLi[0].classList.add('_active');
        M.style.display = 'none';
        In.style.display = 'none';
        Ft.style.display = 'none';
        hint.style.display = 'block';
        document.addEventListener('click', function s(e) {
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterCm_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterCm_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterCm_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterCm_Ft(num)
            }
        }
        )
    }
    if (e.target.closest('#M')) {
        oneLi[1].classList.add('_active');
        Cm.style.display = 'none';
        In.style.display = 'none';
        Ft.style.display = 'none';
        hint.style.display = 'block';
        document.addEventListener('click', function (e) {
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterM_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterM_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterM_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterM_Ft(num)
            }
        }
        )
    }
    if (e.target.closest('#In')) {
        oneLi[2].classList.add('_active');
        Cm.style.display = 'none';
        M.style.display = 'none';
        Ft.style.display = 'none';
        converterIn_Cm(num)
        hint.style.display = 'block';
        document.addEventListener('click', function (e) {
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterIn_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterIn_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterIn_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterIn_Ft(num)
            }
        }
        )
    }
    if (e.target.closest('#Ft')) {
        oneLi[3].classList.add('_active')
        Cm.style.display = 'none';
        M.style.display = 'none';
        In.style.display = 'none';
        converterFt_Cm(num)
        hint.style.display = 'block';
        document.addEventListener('click', function (e) {
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterFt_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterFt_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterFt_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterFt_Ft(num)
            }
        }
        )
    }
    if (e.target.closest('.one__button')) {
        Cm.style.display = 'block';
        M.style.display = 'block';
        In.style.display = 'block';
        Ft.style.display = 'block';
    }
}

// выбор 2-й единицы

// обнуление счетчиков

oneButton.addEventListener('click', zeroOne)
function zeroOne() {
    num = 0
    Array.from(number).map(item => item.innerHTML = 0)
    Array.from(arrowBack).map(item => item.classList.remove('_active'))
    Array.from(output).map(item => item.innerHTML = num.toFixed(2));
}
twoButton.addEventListener('click', zeroTwo)
function zeroTwo() {
    num = 0
    Array.from(number).map(item => item.innerHTML = 0)
    Array.from(twoLi).map(item => item.classList.remove('_active'));
    Array.from(arrowBack).map(item => item.classList.remove('_active'))
    Array.from(output).map(item => item.innerHTML = num.toFixed(2));

}
// запрет общего конвертирования

document.addEventListener('click', closeTwo)
function closeTwo(e) {
    if (e.target.closest('#Cm2')) {
        Array.from(twoLi).map(item => item.style.display = 'none');
        Array.from(twoLi)[0].style.display = 'block';
        Array.from(output)[0].style.display = 'block';
        twoLi[0].classList.add('_active')
    }
    if (e.target.closest('#M2')) {
        Array.from(twoLi).map(item => item.style.display = 'none');
        Array.from(twoLi)[1].style.display = 'block';
        Array.from(output)[1].style.display = 'block';
        twoLi[1].classList.add('_active')
    }
    if (e.target.closest('#In2')) {
        Array.from(twoLi).map(item => item.style.display = 'none');
        Array.from(twoLi)[2].style.display = 'block';
        Array.from(output)[2].style.display = 'block';
        twoLi[2].classList.add('_active')
    }
    if (e.target.closest('#Ft2')) {
        Array.from(twoLi).map(item => item.style.display = 'none');
        Array.from(twoLi)[3].style.display = 'block';
        Array.from(output)[3].style.display = 'block';
        twoLi[3].classList.add('_active')
    }
    if (e.target.closest('.two__button')) {
        Array.from(twoLi).map(item => item.style.display = 'block');
        Array.from(output).map(item => item.style.display = 'none');
    }
}

// рассчет из (см)
function converterCm_Cm(num) {
    let x = document.querySelector('.outputCm_Cm').innerHTML = (num * 1).toFixed(2)
    return x
}
function converterCm_M(num) {
    let x = document.querySelector('.outputCm_M').innerHTML = (num * 0.01).toFixed(2)
    return x
}
function converterCm_In(num) {
    let x = document.querySelector('.outputCm_In').innerHTML = (num * 0.3937).toFixed(2)
    return x
}
function converterCm_Ft(num) {
    let x = document.querySelector('.outputCm_Ft').innerHTML = (num * 0.0328).toFixed(2)
    return x
}
// рассчет из (м)
function converterM_M(num) {
    let x = document.querySelector('.outputM_M').innerHTML = (num * 1).toFixed(2)
    return x
}
function converterM_Cm(num) {
    let x = document.querySelector('.outputM_Cm').innerHTML = (num * 100).toFixed(2)
    return x
}
function converterM_In(num) {
    let x = document.querySelector('.outputM_In').innerHTML = (num * 39.3700).toFixed(2)
    return x
}
function converterM_Ft(num) {
    let x = document.querySelector('.outputM_Ft').innerHTML = (num * 3.2808).toFixed(2)
    return x
}
// расчет из (in)
function converterIn_M(num) {
    let x = document.querySelector('.outputIn_M').innerHTML = (num * 0.0254).toFixed(2)
    return x
}
function converterIn_Cm(num) {
    let x = document.querySelector('.outputIn_Cm').innerHTML = (num * 2.54).toFixed(2)
    return x
}
function converterIn_In(num) {
    let x = document.querySelector('.outputIn_In').innerHTML = (num * 1).toFixed(2)
    return x
}
function converterIn_Ft(num) {
    let x = document.querySelector('.outputIn_Ft').innerHTML = (num * 0.0833).toFixed(2)
    return x
}
// расчет из (Ft)
function converterFt_M(num) {
    let x = document.querySelector('.outputFt_M').innerHTML = (num * 0.3048).toFixed(2)
    return x
}
function converterFt_Cm(num) {
    let x = document.querySelector('.outputFt_Cm').innerHTML = (num * 30.48).toFixed(2)
    return x
}
function converterFt_In(num) {
    let x = document.querySelector('.outputFt_In').innerHTML = (num * 12).toFixed(2)
    return x
}
function converterFt_Ft(num) {
    let x = document.querySelector('.outputFt_Ft').innerHTML = (num * 1).toFixed(2)
    return x
}



// наведение курсора на меню

oneButton.addEventListener('mouseover', function (e) {
    if (e.target.closest('.one__button')) {
        oneButton.style.cssText = 'background-color: rgb(124, 225, 161);';
    };
})
oneButton.addEventListener('mouseout', function (e) {
    if (e.target.closest('.one__button')) {
        oneButton.style.cssText = 'background-color: rgb(94, 190, 94);';
    };
})



twoButton.addEventListener('mouseover', function (e) {
    if (e.target.closest('.two__button')) {
        twoButton.style.cssText = 'background-color: rgb(225, 203, 124);';
    };
})
twoButton.addEventListener('mouseout', function (e) {
    if (e.target.closest('.two__button')) {
        twoButton.style.cssText = 'background-color: rgb(227, 172, 84)';
    };
})

// изменение числа
let num = 0
function calcPlus() {
    return function () {
        return num += 1
    }
}
function calcMinus() {
    return function () {
        if (num <= 1) {
            Array.from(arrowBack).map(item => item.classList.remove('_active'))
            return num = 0
        }
        return num -= 1
    }
}
function calcTenPlus() {
    return function () {
        return num += 10
    }
}
function calcTenMinus() {
    return function () {
        if (num <= 10) {
            Array.from(arrowBack).map(item => item.classList.remove('_active'))
            return num = 0
        }
        return num -= 10
    }
}

let step = calcPlus()
let back = calcMinus()
let stepTen = calcTenPlus()
let backTen = calcTenMinus()

// клик на стрелку

Array.from(arrowStep).map(item => item.addEventListener('click', function (e) {
    let plus = number.innerHTML = step()
    Array.from(number).map(item => item.innerHTML = plus)
    Array.from(arrowBack).map(item => item.classList.add('_active'))
    keyNum1.style.visibility = 'visible';
    keyNum2.style.visibility = 'hidden';

}))

Array.from(arrowBack).map(item => item.addEventListener('click', function () {
    let minus = number.innerHTML = back()
    Array.from(number).map(item => item.innerHTML = minus)
    keyNum1.style.visibility = 'visible';
    keyNum2.style.visibility = 'hidden';
}))

// двойной клик
// const arrowDblStep = document.querySelector('.arrowStep').addEventListener('dblclick', function () {
//     number.innerHTML = stepTen()
//     document.querySelector('.arrowBack').classList.add('_active')
// })
// const arrowDblBack = document.querySelector('.arrowBack').addEventListener('dblclick', function () {
//     number.innerHTML = backTen()
// })


// изменения стрелками клавиатуры

document.addEventListener('keydown', function (e) {
    // Cm =>  
    if (oneLi[0].style.display == 'block') {
        if (e.code == 'ArrowRight') {
            let plus = number.innerHTML = step()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden';
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterCm_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterCm_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterCm_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterCm_Ft(num)
            }
        }
        if (e.code == 'ArrowLeft') {
            let minus = number.innerHTML = back()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden'
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterCm_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterCm_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterCm_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterCm_Ft(num)
            }
        }
        if (e.code == 'ArrowUp') {
            let plus = number.innerHTML = stepTen()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterCm_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterCm_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterCm_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterCm_Ft(num)
            }
        }
        if (e.code == 'ArrowDown') {
            let minus = number.innerHTML = backTen()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterCm_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterCm_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterCm_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterCm_Ft(num)
            }
        }
    }
    // M  => 
    if (oneLi[1].style.display == 'block') {
        if (e.code == 'ArrowRight') {
            let plus = number.innerHTML = step()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden';
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterM_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterM_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterM_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterM_Ft(num)
            }
        }
        if (e.code == 'ArrowLeft') {
            let minus = number.innerHTML = back()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden'
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterM_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterM_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterM_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterM_Ft(num)
            }
        }
        if (e.code == 'ArrowUp') {
            let plus = number.innerHTML = stepTen()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterM_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterM_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterM_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterM_Ft(num)
            }
        }
        if (e.code == 'ArrowDown') {
            let minus = number.innerHTML = backTen()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterM_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterM_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterM_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterM_Ft(num)
            }
        }


    }
    // In =>
    if (oneLi[2].style.display == 'block') {
        if (e.code == 'ArrowRight') {
            let plus = number.innerHTML = step()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden';
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterIn_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterIn_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterIn_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterIn_Ft(num)
            }
        }
        if (e.code == 'ArrowLeft') {
            let minus = number.innerHTML = back()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden'
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterIn_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterIn_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterIn_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterIn_Ft(num)
            }
        }
        if (e.code == 'ArrowUp') {
            let plus = number.innerHTML = stepTen()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterIn_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterIn_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterIn_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterIn_Ft(num)
            }
        }
        if (e.code == 'ArrowDown') {
            let minus = number.innerHTML = backTen()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterIn_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterIn_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterIn_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterIn_Ft(num)
            }
        }


    }
    // FT =>
    if (oneLi[3].style.display == 'block') {
        if (e.code == 'ArrowRight') {
            let plus = number.innerHTML = step()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden';
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterFt_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterFt_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterFt_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterFt_Ft(num)
            }
        }
        if (e.code == 'ArrowLeft') {
            let minus = number.innerHTML = back()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'visible';
            keyNum2.style.visibility = 'hidden'
            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterFt_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterFt_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterFt_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterFt_Ft(num)
            }
        }
        if (e.code == 'ArrowUp') {
            let plus = number.innerHTML = stepTen()
            Array.from(number).map(item => item.innerHTML = plus)
            Array.from(arrowBack).map(item => item.classList.add('_active'))
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterFt_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterFt_M(num)
            }
            if (output[2].style.display == 'block') {
                output[2].innerHTML = converterFt_In(num)
            }
            if (output[3].style.display == 'block') {
                output[3].innerHTML = converterFt_Ft(num)
            }
        }
        if (e.code == 'ArrowDown') {
            let minus = number.innerHTML = backTen()
            Array.from(number).map(item => item.innerHTML = minus)
            keyNum1.style.visibility = 'hidden'
            keyNum2.style.visibility = 'visible';

            if (output[0].style.display == 'block') {
                output[0].innerHTML = converterFt_Cm(num)
            }
            if (output[1].style.display == 'block') {
                output[1].innerHTML = converterFt_M(num)
            }
            if (output[2].style.display == 'block') {
                    output[2].innerHTML = converterFt_In(num)
            }
            if (output[3].style.display == 'block') {
                    output[3].innerHTML = converterFt_Ft(num)
            }
        }
    }
})
// мигание стрелки 'step'
// oneList.addEventListener('click', inp)

// function inp() {
//     Array.from(number).map(item => item.outerHTML = '<input type="number">')
// }














