window.onload = function() {
    function setBackgroundColor() {
        let sessao1 = document.querySelector('.sessao1');
        let botaoBackgroundColor = document.querySelector(".background");
        botaoBackgroundColor.addEventListener('click', setBackgroundColor);
        sessao1.style.backgroundColor = 'green';
        localStorage.setItem("backgroundColor", color)
      }
}