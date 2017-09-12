'use strict';
const aplicacion = 
{
    elemento:
    {
        latitud: undefined,
        longitud: undefined,
        mapa: undefined,
        miUbicacion: undefined,
        cajaTextoOrigen: undefined,
        cajaTextoDestino: undefined,
        servicioDirecciones: undefined,
        representacionDirecciones: undefined,
        marcadorAutomatico: undefined,
        detalleUbicacionAutomatico: undefined
    },
    
    inicio: function()
    {
        aplicacion.elemento.mapa = new google.maps.Map(document.getElementById("mapa"),
        {
            zoom: 5,
            center: {lat: -9.1191427, lng: -77.0349046},
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        });
    }
}
function initMap() 
{
    aplicacion.inicio();
}