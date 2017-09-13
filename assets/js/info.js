'use strict';
const aplicacion = 
{
    elemento:
    {
        checkbox: undefined,
        btnInfoNext: undefined
    },
    inicio: function()
    {
        aplicacion.elemento.checkbox = document.getElementById("checkbox");
        aplicacion.elemento.btnInfoNext = document.getElementById("btnInfoNext");
        //aplicacion.validarFormulario();
        aplicacion.validarCheckbox();
    },
    /*
    validarFormulario: function()
    {
        
    $('#formulario').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor escriba su nombre'
                    }
                }
            },
             apellido: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor escriba su apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escriba su email'
                    },
                    emailAddress: {
                        message: 'Por favor escriba un email válido'
                    }
                }
            },
            }
        })
},*/
    validarCheckbox: function()
    {        aplicacion.elemento.checkbox.onclick = function()
        {
            if(aplicacion.elemento.checkbox.checked)
            {
                aplicacion.elemento.btnInfoNext.classList.remove("disabled");
            }
        else
        {
            aplicacion.elemento.btnInfoNext.classList.add("disabled");
        }
        }
    },
}

function comenzar(){
 aplicacion.inicio();   
}
comenzar();

