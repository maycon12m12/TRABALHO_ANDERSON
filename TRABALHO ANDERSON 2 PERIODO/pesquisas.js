const btnXP = document.getElementById("btnXP");
const btnFDD = document.getElementById("btnFDD");
const btnCRYSTAL = document.getElementById("btnCRYSTAL");
const btnKANBAN = document.getElementById("btnKANBAN");
const btnMSG = document.getElementById("btnMSG");
const pesquisaLateral = document.getElementById("pesquisaLateral");
const conteudoPesquisa = document.getElementById("conteudoPesquisa");
const conteudoXP = document.getElementById("conteudoXP");
const conteudoFDD = document.getElementById("conteudoFDD");
const conteudocrystal = document.getElementById("conteudocrystal");
const conteudokanban = document.getElementById("conteudokanban");
const conteudomsg = document.getElementById("conteudomsg");

btnXP.addEventListener("click", function() {
    conteudoPesquisa.innerHTML = conteudoXP.innerHTML;
    pesquisaLateral.classList.add("open");
});

btnFDD.addEventListener("click", function() {
    conteudoPesquisa.innerHTML = conteudoFDD.innerHTML;
    pesquisaLateral.classList.add("open");
});
btnCRYSTAL.addEventListener("click", function() {
    conteudoPesquisa.innerHTML = conteudocrystal.innerHTML;
    pesquisaLateral.classList.add("open");
});
btnKANBAN.addEventListener("click", function() {
    conteudoPesquisa.innerHTML = conteudokanban.innerHTML;
    pesquisaLateral.classList.add("open");
});
btnMSG.addEventListener("click", function() {
    conteudoPesquisa.innerHTML = conteudomsg.innerHTML;
    pesquisaLateral.classList.add("open");
});

function fecharPesquisa() {
    pesquisaLateral.classList.remove("open");
}
