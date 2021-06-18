
//controls
var fullScreen = new ol.control.FullScreen();
var mouse = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(2)
});
// var overView = new ol.control.OverviewMap({
//   collapsed: false,
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.OSM()      
//     })
//   ]
// });
var zoom = new ol.control.ZoomSlider();
var zoomToExtent = new ol.control.ZoomToExtent();
var scale = new ol.control.ScaleLine({
  units: 'metric',
  minWidth: 75,
  bar: true,
  steps: 3,
  text: true
})


//loop through the buttons and apply event listner
// if the value attribute of the button has the same name as the value of the title parameter of the layer, make the layer active 
var button = document.querySelectorAll('.dropdown-menu > button[type=button]');
console.log(button);

for(var but of button){
  but.addEventListener('click', function(){
    var butValue = this .value;
    console.log(butValue);
    lyr_Group.getLayers().forEach(function(element, index, array){
      var butName = element.get('title');
      element.setVisible(butName === butValue)
    })
  });
}    



//bar_layer
bars = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:bar'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'bar'
})


//cafe_layer
cafes = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:cafe'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'cafe'
})

//hostel_layer
hostels = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:hostel'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'hostel'
})

//hotel_layer
hotels = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:hotel'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'hotel'
})

//cinema_layer
cinemas = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:cinema'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'cinema'
})

//camping_layer
camps = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:camp'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'camp'
})

//museum_layer
museums = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:museum'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'museum'
})

//nightclub_layer
nightclubs = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:nightclub'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'nightclub'
})

//park_layer
parks = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:park'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'park'
})

//restaurant_layer
restaurants = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:restaurant'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'restaurant'
})

//taxi_layer
taxis = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:taxi'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'taxi'
})

//theatre_layer
theatres = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:theatre'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'theatre'
})

//cafe_layer
zoos = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/TourApp/wms',
    params: {'LAYERS': 'TourApp:zoo'},
    serverType: 'geoserver',
    crossOrigin: 'null',
  }),
  visible:false,
  title:'zoo'
})

//array of layers
var lyr = [cafes, bars, hostels, hotels, cinemas, camps, museums, nightclubs, parks, restaurants, taxis, theatres, zoos]
console.log(lyr)

// create layergroup
var lyr_Group = new ol.layer.Group({
  layers:lyr
});
console.log(lyr_Group);

//map 
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }), lyr_Group
    ],
    view: new ol.View({
      center: [935493.3606256372, 6276031.966440891],
      zoom: 12
    }),
    keyboardEventTarget: document,
    controls: ol.control.defaults().extend([
      fullScreen,
      mouse,
      // overView,
      scale,
      zoom,
      zoomToExtent
    ])
  });

console.log(map.layerGroupPropertyListenerKeys_);

//overlayLayer
var overlay = document.querySelector('.overlay-container');
var overlayLayer = new ol.Overlay({
    element:overlay
});

//add overlay to map
map.addOverlay(overlayLayer);
//overlayLayer.setPosition(undefined);
var overlayName = document.getElementById('feature-name');
var overlayInfo = document.getElementById('feature-additionalinfo');

//
map.on('singleclick', function (evt) {
  console.log(evt); 
  overlayLayer.setPosition(undefined);
  for(var lyrPart of lyr){
    if(lyrPart.getVisible() === true){
          var viewResolution = map.getView().getResolution();
      console.log(lyrPart.getSource());
      var url = lyrPart.getSource().getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:3857',
        {'INFO_FORMAT': 'application/json'}
      );
      console.log(url);
      if (url) {
        fetch(url)
          .then(function (response) { 
            console.log(response);
            return  response.json();
            //return response.text();
          })
          .then(function (html) {
            var featureName = html.features[0].properties.name;
            var featureInfo =  html.features[0].properties.tags;
            overlayLayer.setPosition(html.features[0].geometry.coordinates);
            overlayName.innerHTML = JSON.stringify(featureName);
            overlayInfo.innerHTML = JSON.stringify(featureInfo);
            console.log(featureInfo);
          });
      }

    }
    
    
  }
    
});


//Geolocation
var viewProjection = map.getView().getProjection();
var geolocation = new ol.Geolocation({
  tracking: true,
  trackingOptions: {
    enableHighAccuracy: true
  },
  projection: viewProjection
})


var accuracyFeature = new ol.Feature();
geolocation.on('change:accuracyGeometry', function () {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

var positionFeature = new ol.Feature();
positionFeature.setStyle(
  new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      fill: new ol.style.Fill({
        color: '#3399CC',
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2,
      }),
    }),
  })
);




geolocation.on('change:position', function () {
  var coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
});

new ol.layer.Vector({
  map: map,
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature],
  }),
});



// var LongLat1 = [];
// console.log(LongLat1);
// geolocation.on('change:position', function(e){
//   var geoposition = this.getPosition();
//   var LongLat = ol.proj.toLonLat(geoposition, viewProjection);
  // LongLat1[0] = LongLat[0];
  // LongLat1[1] = LongLat[1];

  // console.log(ol.proj.toLonLat(geoposition, viewProjection))
  // console.log(e);
//   map.getView().setCenter(geoposition);
// })


// console.log(LongLat1);
// var myPosition = new ol.Feature({
//   geometry: new ol.geom.Point(LongLat1)
// });

// myPosition.setStyle(
//   new ol.style.Style({
//     fill: new ol.style.Fill({
//       color:'green'
//     }),
//     stroke: new ol.style.Stroke({
//       color:'red',
//       width: 5
//     }),
//     geometry: new ol.geom.Circle(LongLat1, 15)
//   })
// )

// var positionGeom = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     features: [myPosition],
//   }),
//   isBaseLayer: false
// })
// console.log(positionGeom);
// map.addLayer(positionGeom);