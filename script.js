const botao = document.querySelector(".pix");

if(botao){

botao.addEventListener("click",()=>{

const chave="SUA_CHAVE_PIX";

navigator.clipboard.writeText(chave);

botao.innerHTML="✅ PIX Copiado!";

setTimeout(()=>{

botao.innerHTML="Copiar Chave PIX";

},2500);

});

}
