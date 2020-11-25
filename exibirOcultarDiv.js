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