function getInputTextValue(selector) {
    let textInput = document.querySelector(selector)
    let text = textInput.value

    resetInputValue(textInput)
    
    return text
}

function setMainPageText(text) {
    let mainTextWrapp = document.querySelector(".result-text h2")
    mainTextWrapp.innerHTML = text
    mainTextWrapp.classList.remove("valide-text")
    mainTextWrapp.classList.remove("error-text")
    if (resultTextValidation(text)) {
        if (!mainTextWrapp.classList.contains("valide-text")) {
            mainTextWrapp.classList.add("valide-text")
        }
    } else {
        if (!mainTextWrapp.classList.contains("error-text")) {
            mainTextWrapp.classList.add("error-text")
        }
    }
    
}

function resetInputValue(input) {
    input.value = ""
}

function resultTextValidation(text) {
    let isValide = false
    if (text.length > 3) {
       isValide = true 
    }
    
    if (/([!@#\$%*\^\&~\)\(+=_])/g.test(text)) {
        isValide = false
    }

    return isValide
}

let mainForm = document.querySelector("form#form")
mainForm.addEventListener("submit", (event) => {
    event.preventDefault()
    setMainPageText(getInputTextValue("#form #text"))
})

