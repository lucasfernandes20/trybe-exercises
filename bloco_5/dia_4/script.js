window.onload = function(){


    function setFontColor(){
        let fonte = document.getElementById('content');
        let botaoCorFonte = document.getElementById('corFonte');
        
        botaoCorFonte.addEventListener('click', function(){
            if (fonte.style.color === 'white') {
                fonte.style.color = 'black';
              } else {
                fonte.style.color = 'white';
              };
        })
    }
}