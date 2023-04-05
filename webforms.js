
const startPopUp = document.getElementById("contact-form-initiatior");
const section1 = document.getElementById("contact-form-section-1");
const section2 = document.getElementById("contact-form-section-2");
const section3 = document.getElementById("contact-form-section-3");
const nextBtn1 = document.getElementById("contact-form-to-section-2");
const nextBtn2 = document.getElementById("contact-form-to-section-3");
const backBtn2 = document.getElementById("contact-form-back-to-section-1");
const backBtn3 = document.getElementById("contact-form-back-to-section-2");
const submitButton = document.getElementById("contact-form-submitter");


/* const errorDiv = emailForm.parentElement.querySelector(
    '[data-form=error]')

console.log('errorDiv', errorDiv) */
let section1IsValid = true
let section2IsValid = true
let section3IsValid = true

startPopUp.addEventListener("click", function() {
    section1.style.display = "none";
    section1.style.display = "flex";
    section1.style.height = "auto";
    section2.style.display = "none";
    section3.style.display = "none";
    console.log("starting")
    
});

nextBtn1.addEventListener("click", function() {
    validateSection1();
    if (section1IsValid === true) {
        section1.style.display = "none";
        section2.style.display = "flex";
        section2.style.height = "auto";
    }

});

nextBtn2.addEventListener("click", function() {
    validateSection2()
    if (section2IsValid === true) {
      section2.style.display = "none";
      section3.style.display = "flex";
      section3.style.height = "auto";
    }
});

submitButton.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    validateSection3()
    if (section3IsValid === true) {
            window.pagesense = window.pagesense || [];
            window.pagesense.push(['trackEvent', 'submit_success']);
            }
});

backBtn2.addEventListener("click", function() {
    section2.style.display = "none";
    section1.style.display = "flex";
    section1.style.height = "auto";
});

backBtn3.addEventListener("click", function() {
    section3.style.display = "none";
    section2.style.display = "flex";
    section2.style.height = "auto";
});

function validateSection1() {
    const selectFields = section1.querySelectorAll('select');

    selectFields.forEach(e => {
        var selectedOption = e.options[e.selectedIndex]
        var selectedOptionText = selectedOption.text;
        if (selectedOptionText === "Please select") {
            selectedOption.setAttribute('disabled', '');
        }
        if (selectedOptionText === "Please select") {
            if (selectedOption.parentElement.nextSibling.className === "form_error-message") {
                selectedOption.parentElement.nextSibling.innerHTML = "Required field"
            }
        }
        else {
            selectedOption.parentElement.nextSibling.innerHTML = ""
        }
      });

      selectFields.forEach(e => {
        var selectedOption = e.options[e.selectedIndex]
        var selectedOptionText = selectedOption.text;
        if (selectedOptionText === "Please select") {
            selectedOption.setAttribute('disabled', '');
        }
        if (selectedOptionText === "Please select") {
            if (selectedOption.parentElement.nextSibling.className === "form_error-message") {
                selectedOption.parentElement.nextSibling.innerHTML = "Required field"
            }
            section1IsValid = false;
            throw BreakException;
        }
        else {
            selectedOption.parentElement.nextSibling.innerHTML = ""
            section1IsValid = true;
        }
      });
      
}

function validateSection2() {
    const inputFields = section2.querySelectorAll('input[type="text"]');

    const emailInput = document.getElementById("contact-form-email");
    
    inputFields.forEach(function(inputFields) {
        const inputValue = inputFields.value.trim();
        if (inputValue === '') {
            if (inputFields.nextSibling.className === "form_error-message") {
                inputFields.nextSibling.innerHTML = "Required field";
            }
            section2IsValid = false;
            throw BreakException;
        }
        else {
            inputFields.nextSibling.innerHTML = "";
            section2IsValid = true;
        }
      });

}

function validateSection3() {
    const inputFields = section3.querySelectorAll('input[type="text"]');
    const selectFields = section3.querySelectorAll('select');

    
    inputFields.forEach(function(inputFields) {
        const inputValue = inputFields.value.trim();
        if (inputValue === '') {
            if (inputFields.nextSibling.className === "form_error-message") {
                inputFields.nextSibling.innerHTML = "Required field";
            }
            section3IsValid = false;
            /* throw BreakException; */
        }
        else {
            inputFields.nextSibling.innerHTML = "";
            section3IsValid = true;
        }
      });
    
    let stateSelect = selectFields.options[selectFields.selectedIndex]
    var stateText = stateSelect.text;
        if (stateText === "Please select") {
            if (stateSelect.parentElement.nextSibling.className === "form_error-message") {
                stateSelect.parentElement.nextSibling.innerHTML = "Required field"
            }
            section3IsValid = false;
            throw BreakException;
        }
        else {
            stateSelect.parentElement.nextSibling.innerHTML = ""
            section3IsValid = true;
    }
}