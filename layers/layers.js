var wms_layers = [];

var format_DistritoNo04_0 = new ol.format.GeoJSON();
var features_DistritoNo04_0 = format_DistritoNo04_0.readFeatures(json_DistritoNo04_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritoNo04_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritoNo04_0.addFeatures(features_DistritoNo04_0);
var lyr_DistritoNo04_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritoNo04_0, 
                style: style_DistritoNo04_0,
                interactive: true,
                title: '<img src="styles/legend/DistritoNo04_0.png" /> Distrito No. 04'
            });
var format_Manzanas_1 = new ol.format.GeoJSON();
var features_Manzanas_1 = format_Manzanas_1.readFeatures(json_Manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_1.addFeatures(features_Manzanas_1);
var lyr_Manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_1, 
                style: style_Manzanas_1,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_1.png" /> Manzanas'
            });
var format_D4_votaciones_secciones_rentables_diputados_2018_2 = new ol.format.GeoJSON();
var features_D4_votaciones_secciones_rentables_diputados_2018_2 = format_D4_votaciones_secciones_rentables_diputados_2018_2.readFeatures(json_D4_votaciones_secciones_rentables_diputados_2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D4_votaciones_secciones_rentables_diputados_2018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D4_votaciones_secciones_rentables_diputados_2018_2.addFeatures(features_D4_votaciones_secciones_rentables_diputados_2018_2);
var lyr_D4_votaciones_secciones_rentables_diputados_2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_D4_votaciones_secciones_rentables_diputados_2018_2, 
                style: style_D4_votaciones_secciones_rentables_diputados_2018_2,
                interactive: true,
    title: 'D4_votaciones_secciones_rentables_diputados_2018<br />\
    <img src="styles/legend/D4_votaciones_secciones_rentables_diputados_2018_2_0.png" /> 399 - 558 <br />\
    <img src="styles/legend/D4_votaciones_secciones_rentables_diputados_2018_2_1.png" /> 558 - 716 <br />\
    <img src="styles/legend/D4_votaciones_secciones_rentables_diputados_2018_2_2.png" /> 716 - 875 <br />\
    <img src="styles/legend/D4_votaciones_secciones_rentables_diputados_2018_2_3.png" /> 875 - 1033 <br />\
    <img src="styles/legend/D4_votaciones_secciones_rentables_diputados_2018_2_4.png" /> 1033 - 1192 <br />'
        });
var format_VotacionesDiputados2018_3 = new ol.format.GeoJSON();
var features_VotacionesDiputados2018_3 = format_VotacionesDiputados2018_3.readFeatures(json_VotacionesDiputados2018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VotacionesDiputados2018_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VotacionesDiputados2018_3.addFeatures(features_VotacionesDiputados2018_3);
var lyr_VotacionesDiputados2018_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VotacionesDiputados2018_3, 
                style: style_VotacionesDiputados2018_3,
                interactive: true,
    title: 'Votaciones Diputados 2018<br />\
    <img src="styles/legend/VotacionesDiputados2018_3_0.png" /> 166 - 371 <br />\
    <img src="styles/legend/VotacionesDiputados2018_3_1.png" /> 371 - 576 <br />\
    <img src="styles/legend/VotacionesDiputados2018_3_2.png" /> 576 - 782 <br />\
    <img src="styles/legend/VotacionesDiputados2018_3_3.png" /> 782 - 987 <br />\
    <img src="styles/legend/VotacionesDiputados2018_3_4.png" /> 987 - 1192 <br />'
        });
var format_Colonias_4 = new ol.format.GeoJSON();
var features_Colonias_4 = format_Colonias_4.readFeatures(json_Colonias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias_4.addFeatures(features_Colonias_4);
var lyr_Colonias_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias_4, 
                style: style_Colonias_4,
                interactive: true,
                title: '<img src="styles/legend/Colonias_4.png" /> Colonias'
            });

lyr_DistritoNo04_0.setVisible(true);lyr_Manzanas_1.setVisible(true);lyr_D4_votaciones_secciones_rentables_diputados_2018_2.setVisible(true);lyr_VotacionesDiputados2018_3.setVisible(true);lyr_Colonias_4.setVisible(true);
var layersList = [lyr_DistritoNo04_0,lyr_Manzanas_1,lyr_D4_votaciones_secciones_rentables_diputados_2018_2,lyr_VotacionesDiputados2018_3,lyr_Colonias_4];
lyr_DistritoNo04_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Manzanas_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'VIVTOT': 'VIVTOT', 'TVIVHAB': 'TVIVHAB', 'P_TVIVHAB': 'P_TVIVHAB', 'TVIVPAR': 'TVIVPAR', 'P_TVIVPAR': 'P_TVIVPAR', 'TVIVPARHAB': 'TVIVPARHAB', 'PVIVPARHAB': 'PVIVPARHAB', 'VIVPAR_DES': 'VIVPAR_DES', 'P_VIVPAR_D': 'P_VIVPAR_D', 'VIVPAR_UT': 'VIVPAR_UT', 'P_VIVPAR_U': 'P_VIVPAR_U', 'VIVNOHAB': 'VIVNOHAB', 'P_VIVNOHAB': 'P_VIVNOHAB', 'VPH_PISODT': 'VPH_PISODT', 'P_V_PISODT': 'P_V_PISODT', 'VPH_C_ELEC': 'VPH_C_ELEC', 'P_V_C_ELEC': 'P_V_C_ELEC', 'VPH_AGUADV': 'VPH_AGUADV', 'P_V_AGUADV': 'P_V_AGUADV', 'VPH_DRENAJ': 'VPH_DRENAJ', 'P_V_DRENAJ': 'P_V_DRENAJ', 'VPH_EXCUSA': 'VPH_EXCUSA', 'P_V_EXCUSA': 'P_V_EXCUSA', 'V_3MASOCUP': 'V_3MASOCUP', 'P_3MASOCUP': 'P_3MASOCUP', 'PROOCUP_C': 'PROOCUP_C', 'POBTOT': 'POBTOT', 'P0A14A': 'P0A14A', 'PP0A14A': 'PP0A14A', 'P15A29A': 'P15A29A', 'PP15A29A': 'PP15A29A', 'P30A59A': 'P30A59A', 'PP30A59A': 'PP30A59A', 'P_60YMAS': 'P_60YMAS', 'PP_60YMAS': 'PP_60YMAS', 'PCON_LIM': 'PCON_LIM', 'PPCON_LIM': 'PPCON_LIM', 'GRAPROES': 'GRAPROES', 'ACESOPER_': 'ACESOPER_', 'ACESOAUT_': 'ACESOAUT_', 'RECUCALL_': 'RECUCALL_', 'SENALIZA_': 'SENALIZA_', 'ALUMPUB_': 'ALUMPUB_', 'TELPUB_': 'TELPUB_', 'BANQUETA_': 'BANQUETA_', 'GUARNICI_': 'GUARNICI_', 'ARBOLES_': 'ARBOLES_', 'RAMPAS_': 'RAMPAS_', 'PUESSEMI_': 'PUESSEMI_', 'PUESAMBU_': 'PUESAMBU_', 'ACESOPER_C': 'ACESOPER_C', 'ACESOAUT_C': 'ACESOAUT_C', 'RECUCALL_C': 'RECUCALL_C', 'SENALIZA_C': 'SENALIZA_C', 'ALUMPUB_C': 'ALUMPUB_C', 'TELPUB_C': 'TELPUB_C', 'BANQUETA_C': 'BANQUETA_C', 'GUARNICI_C': 'GUARNICI_C', 'ARBOLES_C': 'ARBOLES_C', 'RAMPAS_C': 'RAMPAS_C', 'PUESSEMI_C': 'PUESSEMI_C', 'PUESAMBU_C': 'PUESAMBU_C', 'ENT': 'ENT', 'NOM_ENT': 'NOM_ENT', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'FECHA_POLI': 'FECHA_POLI', 'FECHA_INF': 'FECHA_INF', 'FECHA_CEU': 'FECHA_CEU', 'OID': 'OID', });
lyr_D4_votaciones_secciones_rentables_diputados_2018_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'CASILLA': 'CASILLA', 'PAN_PRD_PR': 'PAN_PRD_PR', 'PRI': 'PRI', 'PT': 'PT', 'VERDE': 'VERDE', 'MOVIMIENTO': 'MOVIMIENTO', 'NUEVA_ALIA': 'NUEVA_ALIA', 'MORENA': 'MORENA', 'ENCUENTRO_': 'ENCUENTRO_', 'BCS_COHERE': 'BCS_COHERE', 'MORENA_ENC': 'MORENA_ENC', 'VN': 'VN', 'CNR': 'CNR', 'VOTACIONES': 'VOTACIONES', });
lyr_VotacionesDiputados2018_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'CASILLA': 'CASILLA', 'PAN_PRD_PR': 'PAN_PRD_PR', 'PRI': 'PRI', 'PT': 'PT', 'VERDE': 'VERDE', 'MOVIMIENTO': 'MOVIMIENTO', 'NUEVA_ALIA': 'NUEVA_ALIA', 'MORENA': 'MORENA', 'ENCUENTRO_': 'ENCUENTRO_', 'BCS_COHERE': 'BCS_COHERE', 'MORENA_ENC': 'MORENA_ENC', 'VN': 'VN', 'CNR': 'CNR', 'VOTACIONES': 'VOTACIONES', });
lyr_Colonias_4.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CLASIFICAC': 'CLASIFICAC', 'CP': 'CP', 'OTROS_CP': 'OTROS_CP', 'CONTROL': 'CONTROL', 'Geometry1_': 'Geometry1_', 'CLASIFIC_1': 'CLASIFIC_1', 'CATEGORIA': 'CATEGORIA', 'ABREVIATUR': 'ABREVIATUR', 'CONTROL1': 'CONTROL1', });
lyr_DistritoNo04_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Manzanas_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'VIVTOT': 'TextEdit', 'TVIVHAB': 'TextEdit', 'P_TVIVHAB': 'TextEdit', 'TVIVPAR': 'TextEdit', 'P_TVIVPAR': 'TextEdit', 'TVIVPARHAB': 'TextEdit', 'PVIVPARHAB': 'TextEdit', 'VIVPAR_DES': 'TextEdit', 'P_VIVPAR_D': 'TextEdit', 'VIVPAR_UT': 'TextEdit', 'P_VIVPAR_U': 'TextEdit', 'VIVNOHAB': 'TextEdit', 'P_VIVNOHAB': 'TextEdit', 'VPH_PISODT': 'TextEdit', 'P_V_PISODT': 'TextEdit', 'VPH_C_ELEC': 'TextEdit', 'P_V_C_ELEC': 'TextEdit', 'VPH_AGUADV': 'TextEdit', 'P_V_AGUADV': 'TextEdit', 'VPH_DRENAJ': 'TextEdit', 'P_V_DRENAJ': 'TextEdit', 'VPH_EXCUSA': 'TextEdit', 'P_V_EXCUSA': 'TextEdit', 'V_3MASOCUP': 'TextEdit', 'P_3MASOCUP': 'TextEdit', 'PROOCUP_C': 'TextEdit', 'POBTOT': 'TextEdit', 'P0A14A': 'TextEdit', 'PP0A14A': 'TextEdit', 'P15A29A': 'TextEdit', 'PP15A29A': 'TextEdit', 'P30A59A': 'TextEdit', 'PP30A59A': 'TextEdit', 'P_60YMAS': 'TextEdit', 'PP_60YMAS': 'TextEdit', 'PCON_LIM': 'TextEdit', 'PPCON_LIM': 'TextEdit', 'GRAPROES': 'TextEdit', 'ACESOPER_': 'TextEdit', 'ACESOAUT_': 'TextEdit', 'RECUCALL_': 'TextEdit', 'SENALIZA_': 'TextEdit', 'ALUMPUB_': 'TextEdit', 'TELPUB_': 'TextEdit', 'BANQUETA_': 'TextEdit', 'GUARNICI_': 'TextEdit', 'ARBOLES_': 'TextEdit', 'RAMPAS_': 'TextEdit', 'PUESSEMI_': 'TextEdit', 'PUESAMBU_': 'TextEdit', 'ACESOPER_C': 'TextEdit', 'ACESOAUT_C': 'TextEdit', 'RECUCALL_C': 'TextEdit', 'SENALIZA_C': 'TextEdit', 'ALUMPUB_C': 'TextEdit', 'TELPUB_C': 'TextEdit', 'BANQUETA_C': 'TextEdit', 'GUARNICI_C': 'TextEdit', 'ARBOLES_C': 'TextEdit', 'RAMPAS_C': 'TextEdit', 'PUESSEMI_C': 'TextEdit', 'PUESAMBU_C': 'TextEdit', 'ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'FECHA_POLI': 'TextEdit', 'FECHA_INF': 'TextEdit', 'FECHA_CEU': 'TextEdit', 'OID': 'TextEdit', });
lyr_D4_votaciones_secciones_rentables_diputados_2018_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ID': 'TextEdit', 'CASILLA': 'TextEdit', 'PAN_PRD_PR': 'TextEdit', 'PRI': 'TextEdit', 'PT': 'TextEdit', 'VERDE': 'TextEdit', 'MOVIMIENTO': 'TextEdit', 'NUEVA_ALIA': 'TextEdit', 'MORENA': 'TextEdit', 'ENCUENTRO_': 'TextEdit', 'BCS_COHERE': 'TextEdit', 'MORENA_ENC': 'TextEdit', 'VN': 'TextEdit', 'CNR': 'TextEdit', 'VOTACIONES': 'TextEdit', });
lyr_VotacionesDiputados2018_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ID': 'TextEdit', 'CASILLA': 'TextEdit', 'PAN_PRD_PR': 'TextEdit', 'PRI': 'TextEdit', 'PT': 'TextEdit', 'VERDE': 'TextEdit', 'MOVIMIENTO': 'TextEdit', 'NUEVA_ALIA': 'TextEdit', 'MORENA': 'TextEdit', 'ENCUENTRO_': 'TextEdit', 'BCS_COHERE': 'TextEdit', 'MORENA_ENC': 'TextEdit', 'VN': 'TextEdit', 'CNR': 'TextEdit', 'VOTACIONES': 'TextEdit', });
lyr_Colonias_4.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'Range', 'MUNICIPIO': 'Range', 'NOMBRE': 'TextEdit', 'CLASIFICAC': 'Range', 'CP': 'TextEdit', 'OTROS_CP': 'TextEdit', 'CONTROL': 'TextEdit', 'Geometry1_': 'TextEdit', 'CLASIFIC_1': 'Range', 'CATEGORIA': 'TextEdit', 'ABREVIATUR': 'TextEdit', 'CONTROL1': 'TextEdit', });
lyr_DistritoNo04_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Manzanas_1.set('fieldLabels', {'CVEGEO': 'no label', 'VIVTOT': 'no label', 'TVIVHAB': 'no label', 'P_TVIVHAB': 'no label', 'TVIVPAR': 'no label', 'P_TVIVPAR': 'no label', 'TVIVPARHAB': 'no label', 'PVIVPARHAB': 'no label', 'VIVPAR_DES': 'no label', 'P_VIVPAR_D': 'no label', 'VIVPAR_UT': 'no label', 'P_VIVPAR_U': 'no label', 'VIVNOHAB': 'no label', 'P_VIVNOHAB': 'no label', 'VPH_PISODT': 'no label', 'P_V_PISODT': 'no label', 'VPH_C_ELEC': 'no label', 'P_V_C_ELEC': 'no label', 'VPH_AGUADV': 'no label', 'P_V_AGUADV': 'no label', 'VPH_DRENAJ': 'no label', 'P_V_DRENAJ': 'no label', 'VPH_EXCUSA': 'no label', 'P_V_EXCUSA': 'no label', 'V_3MASOCUP': 'no label', 'P_3MASOCUP': 'no label', 'PROOCUP_C': 'no label', 'POBTOT': 'no label', 'P0A14A': 'no label', 'PP0A14A': 'no label', 'P15A29A': 'no label', 'PP15A29A': 'no label', 'P30A59A': 'no label', 'PP30A59A': 'no label', 'P_60YMAS': 'no label', 'PP_60YMAS': 'no label', 'PCON_LIM': 'no label', 'PPCON_LIM': 'no label', 'GRAPROES': 'no label', 'ACESOPER_': 'no label', 'ACESOAUT_': 'no label', 'RECUCALL_': 'no label', 'SENALIZA_': 'no label', 'ALUMPUB_': 'no label', 'TELPUB_': 'no label', 'BANQUETA_': 'no label', 'GUARNICI_': 'no label', 'ARBOLES_': 'no label', 'RAMPAS_': 'no label', 'PUESSEMI_': 'no label', 'PUESAMBU_': 'no label', 'ACESOPER_C': 'no label', 'ACESOAUT_C': 'no label', 'RECUCALL_C': 'no label', 'SENALIZA_C': 'no label', 'ALUMPUB_C': 'no label', 'TELPUB_C': 'no label', 'BANQUETA_C': 'no label', 'GUARNICI_C': 'no label', 'ARBOLES_C': 'no label', 'RAMPAS_C': 'no label', 'PUESSEMI_C': 'no label', 'PUESAMBU_C': 'no label', 'ENT': 'no label', 'NOM_ENT': 'no label', 'MUN': 'no label', 'NOM_MUN': 'no label', 'LOC': 'no label', 'NOM_LOC': 'no label', 'AGEB': 'no label', 'MZA': 'no label', 'FECHA_POLI': 'no label', 'FECHA_INF': 'no label', 'FECHA_CEU': 'no label', 'OID': 'no label', });
lyr_D4_votaciones_secciones_rentables_diputados_2018_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'CASILLA': 'no label', 'PAN_PRD_PR': 'no label', 'PRI': 'no label', 'PT': 'no label', 'VERDE': 'no label', 'MOVIMIENTO': 'no label', 'NUEVA_ALIA': 'no label', 'MORENA': 'no label', 'ENCUENTRO_': 'no label', 'BCS_COHERE': 'no label', 'MORENA_ENC': 'no label', 'VN': 'no label', 'CNR': 'no label', 'VOTACIONES': 'no label', });
lyr_VotacionesDiputados2018_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'CASILLA': 'no label', 'PAN_PRD_PR': 'no label', 'PRI': 'no label', 'PT': 'no label', 'VERDE': 'no label', 'MOVIMIENTO': 'no label', 'NUEVA_ALIA': 'no label', 'MORENA': 'no label', 'ENCUENTRO_': 'no label', 'BCS_COHERE': 'no label', 'MORENA_ENC': 'no label', 'VN': 'no label', 'CNR': 'no label', 'VOTACIONES': 'no label', });
lyr_Colonias_4.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'no label', 'CLASIFICAC': 'no label', 'CP': 'no label', 'OTROS_CP': 'no label', 'CONTROL': 'no label', 'Geometry1_': 'no label', 'CLASIFIC_1': 'no label', 'CATEGORIA': 'no label', 'ABREVIATUR': 'no label', 'CONTROL1': 'no label', });
lyr_Colonias_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});