function surgirIncremento(){
    var navHeader = document.querySelector ("nav");
    navHeader.innerHTML = `
<label for="chave">Incremento</label>
<input type="number" id="chave" value="1" max="25" min="-25"/>

`
}

function sumirIncremento(){
    var navHeader = document.querySelector ("nav");
    navHeader.innerHTML = `
`
}

function mudaNomeBotao(){
    var navHeader = document.querySelector ("nav");
    navHeader.innerHTML = `
    <label for="chave">Incremento</label>
    <input type="number" id="chave" value="1" max="25" min="-25"/>
    `
}

function mudandoNomeBotao(){
    var cabecalho = document.querySelector("button");
    cabecalho.innerText = "DECODIFICAR MENSAGEM!";
}

function mudandoNomeBotao2(){
    var cabecalho = document.querySelector("button");
    cabecalho.innerText = "CODIFICAR MENSAGEM!";
}

surgirIncremento()
sumirIncremento()
mudandoNomeBotao()
mudandoNomeBotao2()