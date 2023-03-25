const resultElement = document.getElementById("result")
const resultFormulaElement = document.getElementById("result__formula")

const buttonElement = {
    AC: document.getElementById("btn__AC"),
    BACKSPACE: document.getElementById("btn__BACKSPACE"),
    PERCENT: document.getElementById("btn__PERCENT"),
    num0: {
        element: document.getElementById("btn__num0"),
        content: "0"
    },
    num1: {
        element: document.getElementById("btn__num1"),
        content: "1"
    },
    num2: {
        element: document.getElementById("btn__num2"),
        content: "2"
    },
    num3: {
        element: document.getElementById("btn__num3"),
        content: "3"
    },
    num4: {
        element: document.getElementById("btn__num4"),
        content: "4"
    },
    num5: {
        element: document.getElementById("btn__num5"),
        content: "5"
    },
    num6: {
        element: document.getElementById("btn__num6"),
        content: "6"
    },
    num7: {
        element: document.getElementById("btn__num7"),
        content: "7"
    },
    num8: {
        element: document.getElementById("btn__num8"),
        content: "8"
    },
    num9: {
        element: document.getElementById("btn__num9"),
        content: "9"
    }
}

buttonElement.AC.onclick = function () {
    showResultFormulaElement(false)
    printResultElement(String(0))
}

buttonElement.num0.element.onclick = function () {
    inputResultElement(buttonElement.num0.content)
}

buttonElement.num1.element.onclick = function () {
    inputResultElement(buttonElement.num1.content)
}

buttonElement.num2.element.onclick = function () {
    inputResultElement(buttonElement.num2.content)
}

buttonElement.num3.element.onclick = function () {
    inputResultElement(buttonElement.num3.content)
}

buttonElement.num4.element.onclick = function () {
    inputResultElement(buttonElement.num4.content)
}

buttonElement.num5.element.onclick = function () {
    inputResultElement(buttonElement.num5.content)
}

buttonElement.num6.element.onclick = function () {
    inputResultElement(buttonElement.num6.content)
}

buttonElement.num7.element.onclick = function () {
    inputResultElement(buttonElement.num7.content)
}

buttonElement.num8.element.onclick = function () {
    inputResultElement(buttonElement.num8.content)
}

buttonElement.num9.element.onclick = function () {
    inputResultElement(buttonElement.num9.content)
}

function getPadding(element) {
    var style = element.currentStyle || window.getComputedStyle(element);

    var result = {
        getLeft: function () {
            return parseInt(style.paddingLeft);
        },
        getTop: function () {
            return parseInt(style.paddingTop);
        },
        getRight: function () {
            return parseInt(style.paddingRight);
        },
        getBottom: function () {
            return parseInt(style.paddingBottom);
        }
    };

    return result;
}

function inputResultElement(paramContent) {
    if (!(String(getResultElement()).length >= 10)) {
        if (String(getResultElement()).split()[0] === "0") {
            printResultElement(paramContent)
        } else {
            const tempElement = document.querySelector('.ghost__element')
            const containerSafeWidth = Number(document.querySelector('.content__result').clientWidth) - (Number(getPadding(document.querySelector('.content__result')).getLeft()) * 2)
            const result = String(Number(getResultElement() + paramContent).toLocaleString("en-US"))
            tempElement.innerHTML = result
            console.info(String(containerSafeWidth) + " " + String(tempElement.clientWidth)
            printResultElement(result)
        }
    }
}

function printResultElement(paramContent) {
    resultElement.innerHTML = paramContent
}

function getResultElement() {
    let result = String(resultElement.innerHTML).split(",")
    result = result.join("")
    return result
}

function printResultFormulaElement(paramContent) {
    showResultFormulaElement(true)
    resultFormulaElement.innerHTML = `${paramContent} =`
}

function showResultFormulaElement(paramBoolean) {
    if (!paramBoolean) {
        resultFormulaElement.style.visibility = "hidden"
    } else {
        resultFormulaElement.style.visibility = "unset"
    }
}