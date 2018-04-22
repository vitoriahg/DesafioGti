/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/
    


$(document).ready(function() {
//Inserir um comando para deixar a div #alerta movel  (Dica: função da jqueryui)
$('#alerta').draggable();
//chamar a funcão chamada "contador"
contador();
//Fazer a alerta aparecer depois de 5 segundos, chamando ã função toggleAlert
$('.fa').click(function(){
    $('#alerta').hide();
});
/*
$(function(){
    $("#imgHtml").tipsy();
});
$(function(){
    $("#imgHtml1").tipsy();
});
$(function(){
    $("#imgRuby").tipsy();
});
$(function(){
    $("#imgRails").tipsy();
});
$(function(){
    $("#imgHeroku").tipsy();
});
*/
$(document).ready(function(){

    $("a").on('click', function(event){

        if (this.hash != "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800, function(){
                window.location.hash=hash;
            });
        } 
    });
});
$("#novidadesform [type='submit']").click(function(e) {
    e.preventDefault();


//criar uma variavel e pegar o conteudo digitado na input
var area_email= $("input[type=text][name=email]").val();

//verificar se o campo não está vazio com if e else
//se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
// -- passando o paramentro "meuemail" e o dataType JSON
//se for vazio execultar o comando abaixo

if (area_email) {
    
     $.ajax({
        url : 'http://51.254.204.44/ti/enviar_email.php ',
        type : 'post',
        data : {'usuario':'Usuario','meuemail':area_email},
        dataType:'JSON',
       
        success: function(retorno){
            toastr.success(retorno.txt);
            $('.resultado').text("O seu email foi salvo em nossa lista de novidades");
            $("input[type=text][name=email]").val(null);
            contador2();

        },

        error: function(erro){
            toastr.error(erro.responseJSON.text,'Error!');
        } 
     })


    

} 
else {
     
     toastr.error('Preencha um email!', 'Error!');
    

}

        
        

       
        
        //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
        // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
        //limpar input
        //fechar a alerta depois de 2 segundos

        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor



    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5

var count=5;
function contador() {
   setInterval(function(){Timer()}, 1000);
    //Ocultar a div #contador qnd o cronometro ser menor ou igual a ZERO

    //Mudar a cor do texto da div #contador qnd o cronometro ser menor ou igual a TRES

    //Sinalizar contador. Ex: Alerta aparecendo em: __  (usar a div #contador)
}

function Timer(){
    
  if(count<=3){
        $('#contador').css("color", "#FF0000");
    }

    if (count==0){
       $('#contador').hide();
        toggleAlert();
    }

    document.getElementById('contador').innerText = "Alerta aparecendo em "+ count;

    count--;
   }

var count2 = 2;
   function contador2() {
   setInterval(function(){time()}, 1000);
}
function time(){
    if(count2==0){
        toggleAlert(null);

    }
    count2--;
}
   
