var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_4C_Pipes_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Phase_4_C_ABANDONED/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L4c_pipes",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "4C_Pipes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_4C_Pipes_1, 1]);
var lyr_4C_Assets200708_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Phase_4_C_ABANDONED/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L4c_assets200708",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "4C_Assets200708",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_4C_Assets200708_2, 1]);
var lyr_4C_Nodes_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Phase_4_C_ABANDONED/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L4c_nodes",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "4C_Nodes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_4C_Nodes_3, 1]);

lyr_OpenStreetMap_0.setVisible(true);lyr_4C_Pipes_1.setVisible(true);lyr_4C_Assets200708_2.setVisible(true);lyr_4C_Nodes_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_4C_Pipes_1,lyr_4C_Assets200708_2,lyr_4C_Nodes_3];
