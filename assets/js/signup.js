'use strict';
const aplicacion = 
{
    elemento:
    {
        telefono: undefined,
        codigo: undefined,
        btnSiguiente: undefined,
        alerta: undefined
    },
    inicio: function()
    {
        aplicacion.elemento.telefono = document.getElementById("telefono");
        aplicacion.elemento.btnSiguiente = document.getElementById("btnSiguiente");
        aplicacion.elemento.codigo = document.getElementById("codigo");
        aplicacion.elemento.alerta = document.getElementById("alerta");
        aplicacion.establecer();
    },
    establecer: function()
    {
        aplicacion.elemento.btnSiguiente.addEventListener("click", aplicacion.crearCodigo);
    },
    
    crearCodigo: function()
    {
        let codigo = "LAB-"
        codigo += Math.floor(Math.random() * (1000 - 100)) + 100;
        aplicacion.elemento.codigo.innerHTML = codigo;
        aplicacion.elemento.alerta.classList.remove("oculto");
    },
}

function comenzar(){
 aplicacion.inicio();   
}
comenzar();
