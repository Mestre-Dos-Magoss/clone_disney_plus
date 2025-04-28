document.addEventListener("DOMContentLoaded",()=>{
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click",function(botao){
            const botaoSelecionado = botao.target.dataset.tabButton;// aqui pegamos o o exato botao com suas informações no momento em que clicamos nele
            // console.log(botaoSelecionado);
            const aba = document.querySelector(`[data-tab-id=${botaoSelecionado}]`);//Aqui criamos uma variável para comparar o valor de atributo;
                                        //Se o valor for igual ao da aba, então ele chama a função para remover a classe das demais abas.
            removeAbas();
            aba.classList.add('shows__list--is-active'); //e aqui adicionamos a classe á aba que foi escolhida
             
            removeBotoes(); 
            botao.target.classList.add("shows__tab__button--is-active")
        })
    }
})

function removeBotoes(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    for(let i =0; i<buttons.length;i++){
        buttons[i].classList.remove("shows__tab__button--is-active");
    }
}

function removeAbas(){
    const abaEscolhida  = document.querySelectorAll("[data-tab-id");

    for(let i=0; i<abaEscolhida.length;i++){
        abaEscolhida[i].classList.remove("shows__list--is-active");
    }
}