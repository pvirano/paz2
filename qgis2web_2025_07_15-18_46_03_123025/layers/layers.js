var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_1laguna_las_pascuales_1 = new ol.format.GeoJSON();
var features_1laguna_las_pascuales_1 = format_1laguna_las_pascuales_1.readFeatures(json_1laguna_las_pascuales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1laguna_las_pascuales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1laguna_las_pascuales_1.addFeatures(features_1laguna_las_pascuales_1);
var lyr_1laguna_las_pascuales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1laguna_las_pascuales_1, 
                style: style_1laguna_las_pascuales_1,
                popuplayertitle: '1.laguna_las_pascuales',
                interactive: true,
                title: '<img src="styles/legend/1laguna_las_pascuales_1.png" /> 1.laguna_las_pascuales'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_1laguna_las_pascuales_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_1laguna_las_pascuales_1];
lyr_1laguna_las_pascuales_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'video': 'video', });
lyr_1laguna_las_pascuales_1.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'video': '', });
lyr_1laguna_las_pascuales_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'video': 'inline label - visible with data', });
lyr_1laguna_las_pascuales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});