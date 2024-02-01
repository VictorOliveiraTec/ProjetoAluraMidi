const ListaBottons = document.querySelectorAll('.tecla');
const ListaAudios = document.querySelectorAll('audio');


function Som(idAudio){
    const audiovalid = document.querySelector(idAudio);
    if(audiovalid != null && audiovalid.localName === 'audio'){
        console.log('Valid');
        audiovalid.play();
    }else{
        return console.log('Error | Elemento não encontrado');
    }
}

for (let cont=0; cont<ListaAudios.length; cont++) {
    const Base = ListaBottons[cont];
    const Bclass = Base.classList[1];
    const id = `#som_${Bclass}`;

    Base.onclick = function (){
        Som(id);
    };

    Base.onkeydown = function (event){
        if(event.code === 'Enter' || event.code === 'Space'){
            Base.classList.add('ativa');
        }
    }
    Base.onkeyup = function (){
        Base.classList.remove('ativa');
    }
}    