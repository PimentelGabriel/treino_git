const pincel = {
    movendo: false,
    ativo: false,
    posicao:{
        x: 0,
        y: 0
    },
    posicaoAnterior: {
        x: null,
        y: null
    }
}


const tela = document.querySelector('#tela');
const contexto = tela.getContext('2d');

tela.width = 700;
tela.height = 500;

const desenhaLinha = (linha) => {
    contexto.beginPath();
    contexto.moveTo(linha.posicaoAnterior.x, linha.posicaoAnterior.y);
    contexto.lineTo(linha.posicao.x, linha.posicao.y);
    contexto.stroke();
}

tela.onmousedown = ()=>{
    pincel.ativo = true;
};
tela.onmouseup = ()=>{
    pincel.ativo = false;
};

tela.onmousemove = (evento) => {
    pincel.posicao.y = evento.clientY;
    pincel.posicao.x = evento.clientX;
    pincel.movendo = true;
}

const ciclo = function(){
    if(pincel.movendo && pincel.ativo && pincel.posicaoAnterior){
        desenhaLinha({
            posicaoAnterior: pincel.posicaoAnterior,
            posicao: pincel.posicao 
        });
        pincel.movendo = false;
    }

    pincel.posicaoAnterior = {x: pincel.posicao.x, y: pincel.posicao.y};
    
    setInterval(ciclo, 10);
}

ciclo();
