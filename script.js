let tmp = ""; /* para ler o numero do botao */
let op = ""; /* para ler a operaçãod do botao */
let n1, n2, res = 0; /* 3 variaves globais */
let flag = 0;
let flag1 = 0;



function cl() {
    document.getElementById("visor").value = "";
    document.getElementById("visor2").value = "";
    flag = 0;
    flag1 = 0;
}
function opera(tmp) {
                /* v1=document.getElementById("visor").value;
                if (flag1==1 && v1!=""){
                    flag=1;
                }else{  */if (flag == 0) {

        document.getElementById("visor").value += tmp;
        document.getElementById("visor").style.color = "rgb(59, 157, 223)";

        document.activeElement.blur();//cada vez que pressionar um botão perde o focus, para ser possivel clicar enter e fazer a conta
    }
}
function calc(val) {
    flag = 0;
    if (flag1 == 0) {
        n1 = document.getElementById("visor").value;
        op = val;
        document.getElementById("visor2").value = n1 + op;
        n1 = parseFloat(n1);
        document.getElementById("visor").value = "";
    }
    flag1 = 1;
}


document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 8) {
            let bsp = document.getElementById("visor").value;
            bsp = bsp.slice(0, -1);
            document.getElementById("visor").value = bsp;
            if (document.getElementById("visor").value == "") {
                return cl();
            }
        }
    }
})
document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        cl();
    }
})

document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 13) {
            conta();
        }
    }
})

document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 48 || event.keyCode == 96) {
            return opera("0");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 49 || event.keyCode == 97) {
            return opera("1");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 50 || event.keyCode == 98) {
            return opera("2");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 51 || event.keyCode == 99) {
            return opera("3");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 52 || event.keyCode == 100) {
            return opera("4");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 53 || event.keyCode == 101) {
            return opera("5");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 54 || event.keyCode == 102) {
            return opera("6");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 55 || event.keyCode == 103) {
            return opera("7");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 56 || event.keyCode == 104) {
            return opera("8");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 57 || event.keyCode == 105) {
            return opera("9");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag == 0) {
        if (event.keyCode == 110 || event.keyCode == 188 || event.keyCode == 190) {
            return opera(".");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag1 == 0) {
        if (event.keyCode == 187 || event.keyCode == 171 || event.keyCode == 107) {
            return calc("+");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag1 == 0) {
        if (event.keyCode == 173 || event.keyCode == 189 || event.keyCode == 109) {
            return calc("-");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag1 == 0) {
        if (event.keyCode == 88 || event.keyCode == 106) {
            return calc("*");
        }
    }
})
document.addEventListener("keydown", event => {
    if (flag1 == 0) {
        if (event.keyCode == 111) {
            return calc("/");
        }
    }
})




function conta() {

    n2 = document.getElementById("visor").value;

    if (n2 == "") {
        alert("Falta ai qualquer coisa.");
    } else if ((op == "/") && (n2 == 0)) {
        s = "erro divisao por 0";
        document.getElementById("visor").value = s;
    }
    else {
        n2 = parseFloat(n2);
        res = 0;
        if ((op == "") || (n1 == "")) {
            alert("Falta ai qualquer coisa.");
        }
        else {

            switch (op) {
                case "+":
                    s = n1 + n2;

                    break;
                case "-":
                    s = n1 - n2;
                    break;
                case "*":
                    s = n1 * n2;
                    break;
                case "/":
                    s = n1 / n2;
                    break;
                default:
                    s = 0;
                    document.getElementById("n1").focus();
            }
            document.getElementById("visor2").value += n2 + "=";
            document.getElementById("visor").value = s.toFixed(9).toString().replace(/\.?0+$/, '');
            document.getElementById("visor").style.color = 'salmon';
            op = "";
            flag = 1;
            flag1 = 0;


        }

    }


}