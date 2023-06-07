let buttonSend = document.getElementById('button-send')
let popup = document.getElementById('popup')
let buttonClose =  document.getElementById('button-close')
buttonSend.addEventListener('click', function () {
    popup.classList.add('open-popup')
    inputs.forEach((input)=>{
        input.value =""
    })
    setTimeout(() => {
        popup.classList.remove('open-popup')
    }, 2000);
})

function ValidateEmail()
{
    let email= document.getElementById('email').value
    let email_error = document.getElementById('error')
    let mailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(mailFormat.test(email)){
        email_error.textContent = " "
        return true
    }else{
        email_error.textContent = "Невалидный email"
        return false
    }
}

let inputs = document.querySelectorAll('input');
let input = document.querySelector('input');
let inputValidator = {
    "name": false,
    "email": false,
    "surname": false
}


buttonClose.addEventListener("click", () => {
        popup.classList.remove('open-popup')
    })

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        let name = event.target.getAttribute('name');
        if (event.target.value.length > 0) {
            inputValidator[name] = true;
        } else {
            inputValidator[name] = false;
        };

        let allTrue = Object.keys(inputValidator).every((item) => {
            return inputValidator[item] === true
        });

        if (allTrue && ValidateEmail()) {
            buttonSend.disabled = false;
        } else {
            buttonSend.disabled = true;
        }
    })
})



