window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var button = document.getElementById("click_button");
    console.log(button)

    var armstr = document.getElementById("number_field")

    function validateInput() {

        var input = armstr.value;

        var numberLength = input.length;

        if (numberLength !== 3) {

            button.disabled = true;
        }
        else { button.disabled = false; }

    }

    armstr.oninput = validateInput

    function showOutput() {
        if ( button.disabled == true) {

            alert("Input value must contain three 3 digits!");
        }
        else checkArmstrong(input)
    }

    button.onclick = showOutput

    function checkArmstrong() {


    }

});

