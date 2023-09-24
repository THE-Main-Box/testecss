function abrir(){
    alert(`.transitionopacity{
        transition:  opacity 1.5s;
    }
    .transitionopacity:hover{
        opacity: calc(30%);
    }`)
}
function abrir1(){
    alert(`.transitionbackground{
        transition:background-color  1s;
    }
    .transitionbackground:hover{
        background-color: aliceblue;
        border:1px solid black;
    }`)
}
function abrir2(){
    alert(`.transitionrotate{
        transition: transform 1.6s;
    }
    .transitionrotate:hover{
        transform:rotate(180deg);
    }`)
}
function abrir3(){
    alert(`.transitionscale{
        transition: transform 1s;
    }
    .transitionscale:hover{
        transform: scale(1.5);
    }`)
}
function abrir4(){
    alert(`.transitionscaleminus{
        transition: transform 1s 1s;
    }
    .transitionscaleminus:hover{
        transform: scale(0.5);
    }`)
}
function abrir5(){
    alert(`#animacao{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        border-top:2px solid blue;
        border-radius: 100%;
        height: 100px;
        animation: loading 1s infinite linear;
    }
    
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
        
    }`)
}
//botao acionador da animação

let btn2 = document.getElementById("btn2").addEventListener("click", carregament);



function carregament(){
    let btngnr= document.getElementById("animacao");
    btngnr.classList.add('anim')

    setTimeout(() =>{
        btngnr.classList.remove('anim')
    }, 9000)
   

}
   


/* let btn3= document.getElementById("load");
    btn3.innerHTML='<div id="animacao"></div>'*/

