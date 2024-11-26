//USO DOEMSTICO
var IconUD = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    stylePrefix: 'fas',
    // spinClass: 'fa-spin',
    // extraClasses: 'fa-light',  // para que sea light
    icon: 'house-user',
    markerColor: 'lightblue',
    iconColor: 'white',
});
// Contenido del popup para Sistema -UD
function popupContentUD(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha de Agua <br> Consumo Doméstico </h3></div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.UD_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.UD_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.UD_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.UD_VolRes + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/uso_domestico.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};
//Sistema Seguridad Alimentaria - SASI
var IconSASI = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-light',
    icon: 'seedling',
    markerColor: 'lightgray',
    iconColor: 'white',
});
// Contenido del popup para Sistema Seguridad Alimentaria - SASI 
function popupContentSASI(feature) {
    return (
        "<div id='Estilo1'><h3>Seguridad Alimentaria <br> Sistema Impermeable </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.SASI_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASI_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASI_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/segalimentaria_sup_imp.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};

//Sistema Seguridad Alimentaria - SASN
var IconSASN = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-light',
    icon: 'seedling',
    markerColor: 'darkgreen',
    iconColor: 'white',
});
// Contenido del popup para Sistema Seguridad Alimentaria - SASN
function popupContentSASN(feature) {
    return (
        "<div id='Estilo1'><h3>Seguridad Alimentaria <br> Suelo Natural </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.SASN_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASN_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASN_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/segalimentaria_suelo_desnudo.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};

//Sist. Ganaderia Suelo Impermeable
var IconGSI = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-solid',
    icon: 'horse',
    markerColor: 'lightgray',
    iconColor: 'white',
});
// Contenido del popup para Ganaderia Suelo Impermeable
function popupContentGSI(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha para <br> Ganaderia con Suelo Impermable </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.GSI_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSI_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSI_VolRes + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/ganaderia_impremeable.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};



//Sist. Ganaderia Suelo Natural
var IconGSN = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-solid',
    icon: 'horse',
    markerColor: 'darkgreen',
    iconColor: 'white',
});
// Contenido del popup para Ganaderia Suelo Natural
function popupContentGSN(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha para <br> Ganaderia con Suelo Natural </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.GSN_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSN_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSN_VolRes + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/ganaderia_suelodesnudo.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};


//Sist. Excedentes con Suelo Impermeable
var IconESI = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-thin',
    icon: 'boxes',
    markerColor: 'lightgray',
    iconColor: 'white',
});
// Contenido del popup Excedente con Suelo Impermable
function popupContentESI(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha con <br> Excedentes y Sist. Impermeable</h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.ECSI_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSI_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSI_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/exedentes_impermeables.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};


//Sist. Excedentes con Suelo Natural
var IconESN = L.AwesomeMarkers.icon({
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    // prefix: 'glyphicon',
    prefix: 'fa',
    // spinClass: 'fa-spin',
    extraClasses: 'fa-thin',
    icon: 'boxes',
    markerColor: 'darkgreen',
    iconColor: 'white',
});
// Contenido del popup Excedente con Suelo Impermable
function popupContentESN(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha con <br> Excedentes en Suelos Naturales</h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.ECSN_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSN_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSN_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/exedentes_suelonatural.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>" +
        "</div>"
    )
};



//// Leyenda
// Función para generar el HTML del ícono
// // Función para generar el HTML del ícono con fondo gris
// function getIconHTML(icon) {
//     return '<div style="background-color: #f0f0f0; opacity-color: 0.9 ;display: inline-block; padding: 5px; border-radius: 5px;">' +
//         '<i class="' + icon.options.icon + ' ' + icon.options.iconColor + '" style="background-color:' + icon.options.markerColor + '">' +
//         // '<i class="fa ' + icon.options.icon + '" style="background-color:' + icon.options.markerColor + ';"></i>' +
//         '</i>' +
//         '</div>';
// }

function getIconHTML(icon) {
    return '<div style="background-color: #f3f0f067; opacity-color: 0.9 ;display: inline-block; padding: 5px;">' +
        '<i class="fa fa-' + icon.options.icon + '" style="color:' + icon.options.markerColor + '; background-color:' + icon.options.markerColor + ' ; font-size: 24px;"></i>' +

        '</div>';
}



function createLeyendModelos() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Uso Doméstico', iconHTML: getIconHTML(IconUD) },
            { label: 'Seguridad Alimentaria con Suelo Impermeable', iconHTML: getIconHTML(IconSASI) },
            { label: 'Seguridad Alimentaria con Suelo Natural', iconHTML: getIconHTML(IconSASN) },
            { label: 'Ganadería con Suelo Impermeable', iconHTML: getIconHTML(IconGSI) },
            { label: 'Ganadería con Suelo Natural', iconHTML: getIconHTML(IconGSN) },
            { label: 'Excedentes con Suelo Impermeable', iconHTML: getIconHTML(IconESI) },
            { label: 'Excedentes con Suelo Natural', iconHTML: getIconHTML(IconESN) },


        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<div >' +
                style.iconHTML + ' ' + style.label +
                '</div>'
            );
        });

        div.innerHTML = labels.join('');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        // Revisar si alguna de las capas está activa
        if (map.hasLayer(UsoDom) || map.hasLayer(ExComSI) || map.hasLayer(ExComSN) || map.hasLayer(GanaderiaSN) || map.hasLayer(GanaderiaSI) || map.hasLayer(SASN) || map.hasLayer(SASI)) {
            // Si alguna capa está activa, agregar la leyenda
            legend.addTo(map);
        } else {
            // Si ninguna capa está activa, remover la leyenda
            legend.remove();
        }
    }

    // Eliminar la leyenda al inicio
    legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}




/// DAtos de GeoJson con toda la info
var datamodelo =
{
    "type": "FeatureCollection",
    "name": "pto_MODELOS_COSECHA",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 13.0, "x": -66.706694112600005, "y": -23.0709851268, "fna": "Departamento Susques", "nam": "Susques", "NOMBRE_ECO": "Altos Andes", "precipitac": 250.0, "provincia": "Jujuy", "UsoDomesti": "SI", "UD_VolDem": 44.0, "UD_VCU": 109.0, "UD_SupCap": 410.0, "UD_VolRes": 27.0, "SASueloImp": "SI", "SASI_VolDe": 78.0, "SASI_VCU": 114.0, "SASI_SupCa": 880.0, "SASI_VolRe": 60.0, "SASueloNat": "SI", "SASN_VolDe": 78.0, "SASN_VCU": 36.0, "SASN_SupCa": 2800.0, "SASN_VolRe": 60.0, "GSueloInmp": "SI", "GSI_VolDem": 80.0, "GSI_VCU": 114.0, "GSI_SupCap": 850.0, "GSI_VolRes": 60.0, "GSueloNatu": "SI", "GSN_VolDem": 80.0, "GSN_VCU": 36.0, "GSN_SupCap": 2870.0, "GSN_VolRes": 65.0, "ECSueloImp": "NO", "ECSI_VolDe": null, "ECSI_VCU": null, "ECSI_SupCa": null, "ECSI_VolRe": null, "ECSueloNat": "NO", "ECSN_VolDe": null, "ECSN_VCU": null, "ECSN_SupCa": null, "ECSN_VolRe": null, "ppm75": 142.0, "SASI_SupRe": 40.0, "SASI_ProRe": null, "SASN_SupRe": 40.0, "SASN_ProRe": null, "GSI_SupRes": 30.0, "GSI_ProRes": null, "GSN_SupRes": 43.0, "GSN_ProRes": null, "ECSI_SupRe": null, "ECSN_SupRe": null }, "geometry": { "type": "Point", "coordinates": [-66.706694112631453, -23.070985126759865] } },
        { "type": "Feature", "properties": { "id": 16.0, "x": -65.131072148100003, "y": -24.3745651835, "fna": "Departamento El Carmen", "nam": "El Carmen", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 700.0, "provincia": "Jujuy", "UsoDomesti": "SI", "UD_VolDem": 57.0, "UD_VCU": 360.0, "UD_SupCap": 160.0, "UD_VolRes": 32.0, "SASueloImp": "SI", "SASI_VolDe": 77.0, "SASI_VCU": 369.0, "SASI_SupCa": 290.0, "SASI_VolRe": 70.0, "SASueloNat": "SI", "SASN_VolDe": 77.0, "SASN_VCU": 115.0, "SASN_SupCa": 900.0, "SASN_VolRe": 70.0, "GSueloInmp": "SI", "GSI_VolDem": 9.93, "GSI_VCU": 369.0, "GSI_SupCap": 32.35, "GSI_VolRes": 7.5, "GSueloNatu": "SI", "GSN_VolDem": 9.93, "GSN_VCU": 115.0, "GSN_SupCap": 102.0, "GSN_VolRes": 7.45, "ECSueloImp": "SI", "ECSI_VolDe": 19.02, "ECSI_VCU": 369.0, "ECSI_SupCa": 6.2, "ECSI_VolRe": 13.65, "ECSueloNat": "SI", "ECSN_VolDe": 19.02, "ECSN_VCU": 369.0, "ECSN_SupCa": 6.2, "ECSN_VolRe": 13.65, "ppm75": 461.0, "SASI_SupRe": 47.0, "SASI_ProRe": 1.5, "SASN_SupRe": 47.0, "SASN_ProRe": 1.5, "GSI_SupRes": 3000.0, "GSI_ProRes": 2.5, "GSN_SupRes": 2.98, "GSN_ProRes": 2.5, "ECSI_SupRe": 5.46, "ECSN_SupRe": 5.46 }, "geometry": { "type": "Point", "coordinates": [-65.131072148143772, -24.374565183537747] } },
        { "type": "Feature", "properties": { "id": 18.0, "x": -64.300553518800001, "y": -23.977182082, "fna": "Departamento Santa Bárbara", "nam": "Santa Bárbara", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 856.0, "provincia": "Jujuy", "UsoDomesti": "SI", "UD_VolDem": 53.0, "UD_VCU": 526.0, "UD_SupCap": 105.0, "UD_VolRes": 25.0, "SASueloImp": "SI", "SASI_VolDe": 148.0, "SASI_VCU": 538.0, "SASI_SupCa": 360.0, "SASI_VolRe": 120.0, "SASueloNat": "SI", "SASN_VolDe": 148.0, "SASN_VCU": 303.0, "SASN_SupCa": 600.0, "SASN_VolRe": 115.0, "GSueloInmp": "SI", "GSI_VolDem": 637.0, "GSI_VCU": 538.0, "GSI_SupCap": 142.0, "GSI_VolRes": 340.0, "GSueloNatu": "SI", "GSN_VolDem": 637.0, "GSN_VCU": 303.0, "GSN_SupCap": 2.5, "GSN_VolRes": 340.0, "ECSueloImp": "SI", "ECSI_VolDe": 15.115, "ECSI_VCU": 538.0, "ECSI_SupCa": 3.37, "ECSI_VolRe": 12.6, "ECSueloNat": "SI", "ECSN_VolDe": 15.115, "ECSN_VCU": 303.0, "ECSN_SupCa": 6.0, "ECSN_VolRe": 12.5, "ppm75": 673.0, "SASI_SupRe": 80.0, "SASI_ProRe": null, "SASN_SupRe": 58.0, "SASN_ProRe": null, "GSI_SupRes": 170.0, "GSI_ProRes": null, "GSN_SupRes": 170.0, "GSN_ProRes": null, "ECSI_SupRe": 5.04, "ECSN_SupRe": 5.0 }, "geometry": { "type": "Point", "coordinates": [-64.300553518813942, -23.977182081982612] } },
        { "type": "Feature", "properties": { "id": 29.0, "x": -64.853715114099998, "y": -24.2002846699, "fna": "Departamento San Pedro", "nam": "San Pedro", "NOMBRE_ECO": "Chaco Seco", "precipitac": 771.0, "provincia": "Jujuy", "UsoDomesti": "SI", "UD_VolDem": 54.0, "UD_VCU": 437.0, "UD_SupCap": 140.0, "UD_VolRes": 21.0, "SASueloImp": "SI", "SASI_VolDe": 136.0, "SASI_VCU": 454.0, "SASI_SupCa": 360.0, "SASI_VolRe": 55.0, "SASueloNat": "SI", "SASN_VolDe": 136.0, "SASN_VCU": 255.0, "SASN_SupCa": 640.0, "SASN_VolRe": 55.0, "GSueloInmp": "SI", "GSI_VolDem": 53.0, "GSI_VCU": 454.0, "GSI_SupCap": 140.0, "GSI_VolRes": 30.0, "GSueloNatu": "SI", "GSN_VolDem": 53.0, "GSN_VCU": 255.0, "GSN_SupCap": 250.0, "GSN_VolRes": 30.0, "ECSueloImp": "SI", "ECSI_VolDe": 13.814, "ECSI_VCU": 454.0, "ECSI_SupCa": 3.65, "ECSI_VolRe": 5.25, "ECSueloNat": "SI", "ECSN_VolDe": 13.814, "ECSN_VCU": 255.0, "ECSN_SupCa": 7.1, "ECSN_VolRe": 4.75, "ppm75": 568.0, "SASI_SupRe": 37.0, "SASI_ProRe": null, "SASN_SupRe": 37.0, "SASN_ProRe": null, "GSI_SupRes": 20.0, "GSI_ProRes": null, "GSN_SupRes": 15.0, "GSN_ProRes": null, "ECSI_SupRe": 2.625, "ECSN_SupRe": 1.9 }, "geometry": { "type": "Point", "coordinates": [-64.853715114148031, -24.200284669853581] } }
    ]
}
