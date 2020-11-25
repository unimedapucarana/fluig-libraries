function Exibir(exibidor)   {
                              var display = document.getElementById(exibidor).style.display;
                              if (display == "none")
                              document.getElementById(exibidor).style.display = 'block';
                             }

function Ocultar(ocultador) {
                                var display = document.getElementById(ocultador).style.display;
                                if (display != "none")
                                 document.getElementById(ocultador).style.display = 'none';
                            }
$("#imagem").bind('mouseover',function(){
    
	   $(this).animate({height:"200px",width:"200px"});
   
});
$("#imagem").bind('mouseout',function(){
    
       $(this).animate({height:"76px",width:"75px"});
      
});
