let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map (button => { 
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = ''
                break;
            case "←":
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                if(display.innerText == "HT1+HT2") {
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+HT3") {
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+HT6"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+HT7"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+H10"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+H11"){
                    display.innerText = "0.25"
                }else if (display.innerText == "HT1+H12"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT1+H99"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT1+H70"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+H71"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT1+WLD"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT2+HT3"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT2+HT6"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT2+HT7"){
                    display.innerText = "0.58"
                } else if (display.innerText == "HT2+H10"){
                    display.innerText = "0.58"
                } else if (display.innerText == "HT2+H11"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT2+H12"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT2+H99"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT2+H70"){
                    display.innerText = "0.58"
                } else if (display.innerText == "HT2+H71"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT2+WLD"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT3+HT6"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT3+HT7"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT3+H10"){
                    display.innerText = "0.58"
                } else if (display.innerText == "HT3+H11"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT3+H12"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT3+H99"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT3+H70"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT3+H71"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT3+WLD"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT6+HT7"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT6+H10"){
                    display.innerText = "0.58"
                } else if (display.innerText == "HT6+H11"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT6+H12"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT6+H99"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT6+H70"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT6+H71"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT6+WLD"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT7+H10"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT7+H11"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT7+H12"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT7+H99"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT7+H70"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT7+H71"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT7+WLD"){
                    display.innerText = "0.33"
                }else if (display.innerText == "HT8+H13"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT9+HT8"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT9+H13"){
                    display.innerText = "0.17"
                }else if (display.innerText == "H10+H11"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H10+H12"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H10+H99"){
                    display.innerText = "0.5"
                } else if (display.innerText == "H10+H70"){
                    display.innerText = "0.5"
                } else if (display.innerText == "H10+H71"){
                    display.innerText = "0.42"
                } else if (display.innerText == "H10+WLD"){
                    display.innerText = "0.42"
                } else if (display.innerText == "H11+H12"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H11+H70"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H11+H71"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H11+H99"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H11+WLD"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H12+H70"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H12+H71"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H12+H99"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H12+WLD"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H99+H70"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H99+H71"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H99+WLD"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H71+WLD"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H70+WLD"){
                    display.innerText = "0.25"
                } else if (display.innerText == "H70+H71"){
                    display.innerText = "0.33"
                } else if (display.innerText == "HT1+HQ"){
                    display.innerText = "0.17"
                } else if (display.innerText == "HT2+HQ"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT3+HQ"){
                    display.innerText = "0.5"
                } else if (display.innerText == "HT6+HQ"){
                    display.innerText = "0.42"
                } else if (display.innerText == "HT7+HQ"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H10+HQ"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H11+HQ"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H12+HQ"){
                    display.innerText = "0.17"
                } else if (display.innerText == "H99+HQ"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H70+HQ"){
                    display.innerText = "0.33"
                } else if (display.innerText == "H71+HQ"){
                    display.innerText = "0.17"
                } else if (display.innerText == "WLD+HQ"){
                    display.innerText = "0.25"
                } else if (display.innerText == "HT1+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT2+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT3+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT6+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT7+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HQ+HT8"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT1+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT2+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT3+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT6+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT7+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HQ+HT9"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT1+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT2+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT3+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT6+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT7+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HQ+H13"){
                    display.innerText = "1.25"
                } else if (display.innerText == "HT1+HT4"){
                    display.innerText = "1.5"
                } else if (display.innerText == "HT2+HT4"){
                    display.innerText = "1.5"
                } else if (display.innerText == "HT3+HT4"){
                    display.innerText = "1.5"
                } else if (display.innerText == "HT6+HT4"){
                    display.innerText = "1.5"
                } else if (display.innerText == "HT7+HT4"){
                    display.innerText = "1.5"
                } else if (display.innerText == "HQ+HT4"){
                    display.innerText = "1.5"
                } else {
                    display.innerText = "Invalid Input"
                }
               break;
            default: 
                display.innerText += e.target.innerText;
        }
    })
 })