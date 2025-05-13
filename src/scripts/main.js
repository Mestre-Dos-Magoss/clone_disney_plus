document.addEventListener("DOMContentLoaded",()=>{
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");

    const hero = document.querySelector(".hero");
    const alturaHero = hero.clientHeight;
 
    window.addEventListener('scroll',()=>{
        const scroolMouse = (window.scrollY);
         
        if(scroolMouse < alturaHero){ //Desta maneira chamamos a função menas vezes e assim economizamos o processamento do processador do usuário
            mostraHeader();
        }
        else{
            esconderHeader();
        }
    })
    //Shoew, programação das abas
    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click",function(botao){
            const botaoSelecionado = botao.target.dataset.tabButton;// aqui pegamos o o exato botao com suas informações no momento em que clicamos nele
            console.log(botaoSelecionado);
            const aba = document.querySelector(`[data-tab-id=${botaoSelecionado}]`);//Aqui criamos uma variável para comparar o valor de atributo;
                                        //Se o valor for igual ao da aba, então ele chama a função para remover a classe das demais abas.
            removeAbas();
            aba.classList.add('shows__list--is-active'); //e aqui adicionamos a classe á aba que foi escolhida
             
            removeBotoes(); 
            botao.target.classList.add("shows__tab__button--is-active")
        })
    }
    //FAQ, perguntas e respostas intuitivas
    for(let i=0; i<questions.length;i++){
        questions[i].addEventListener('click',abreOuFechaRespostas)// a função sem as chaves é quando o parâmetro é 
    }                                                             //a própria função, como neste cado é o evento de click
})                                                                // caso eu quisesse passar um parâmetro então colocaria os parenteses
 
function mostraHeader(){
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
}

function esconderHeader(){
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
}

function abreOuFechaRespostas(elemento){
    // console.log(elemento.target.parentNode);
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

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