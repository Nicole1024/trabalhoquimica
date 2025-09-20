document.querySelector("#b1").addEventListener("click",verifica1);
function verifica1() {
    if (document.querySelector("#p1op1").checked) {
        document.querySelector("#resposta1").style.display = "block";
        document.querySelector("#pergunta2").style.display = "block";
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#erro1").style.display = "none";
        document.querySelector("#erro2").style.display = "none";
        document.querySelector("#resposta2").style.display = "none";
    } else {
        document.querySelector("#erro1").style.display = "block";
    }
}

document.querySelector("#b2").addEventListener("click",verifica2);
function verifica2() {
    if (document.querySelector("#p2op2").checked) {
        document.querySelector("#resposta2").style.display = "block";
        document.querySelector("#pergunta3").style.display = "block";
        document.querySelector("#b2").style.display = "none";''
        document.querySelector("#erro2").style.display = "none";
        document.querySelector("#erro3").style.display = "none";
        document.querySelector("#resposta3").style.display = "none";
    } else {
        document.querySelector("#erro2").style.display = "block";
    }
}

document.querySelector("#b3").addEventListener("click",verifica3);
function verifica3() {
    if (document.querySelector("#p3op2").checked) {
        document.querySelector("#resposta3").style.display = "block";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#erro3").style.display = "none";
    } else {
        document.querySelector("#erro3").style.display = "block";
    }
}