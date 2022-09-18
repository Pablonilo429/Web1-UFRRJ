function verificanull(){
    if(document.getElementById("opcao").checked && document.getElementById("opcao1").checked){
        if(document.getElementById("opcao").value == null && document.getElementById("opcao1") == null){
            alert("Clique em sim ou não!");
        }
    }
}

function validarproj(){
    if (document.getElementById("nome projeto").value == null || document.getElementById("nome projeto").value == "") {
        alert("Insira o nome do projeto!");
        // console.log("teste");
    }
    if (document.getElementById("resumo projeto").value == null || document.getElementById("resumo projeto").value == "") {
        alert("Insira o resumo do projeto!");
        // console.log("teste");
    }
}

function validaraluno(){
    if (document.getElementById("nome_aluno").value == null || document.getElementById("nome_aluno").value == "") {
        alert("Insira o nome do aluno!");
        // console.log("teste");
    }
    if (document.getElementById("matricula").value == null || document.getElementById("matricula").value == "") {
        alert("Insira a matrícula do aluno!");
        // console.log("teste");
    }
}

function validaatividade(){
    if (document.getElementById("titulo").value == null || document.getElementById("titulo").value == "") {
        alert("Insira o titulo da atividade!");
        // console.log("teste");
    }        
}