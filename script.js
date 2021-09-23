let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.24009057123946, lng: -118.5295413751155 },
    zoom: 16.3,
    disableDefaultUI: true,
    zoomControl: false,
    scaleControl: false,
    gestureHandling: "none",
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    minZoom: 16.3,
    maxZoom: 16.3
  });

  //got from class powerpoint
  map.addListener("dblclick", e => {
    // placeMarkerAndPanTo(e.latLng, map);
    //  checkBounds(e.latLng, map);
    tester(e.latLng, map, index);
  });
  var array = [
    {
      ////rectangle for ART AND DESIGN CENTER
      north: 34.244,
      south: 34.2428,
      east: -118.528,
      west: -118.531
    },
    {
      // rectangle for OVIATT LIBRARY
      north: 34.2408,
      south: 34.2391,
      east: -118.5285557,
      west: -118.53
    },
    {
      // rectangle for ORANGE GROVE
      north: 34.2373,
      south: 34.2354,
      east: -118.52472551,
      west: -118.527
    },
    {
      // rectangle for DEPARTMENT OF MUSIC
      north: 34.2367,
      south: 34.2356,
      east: -118.528,
      west: -118.5304
    },
    {
      // rectangle for CSUN GYM
      north: 34.24063,
      south: 34.2392,
      east: -118.524632,
      west: -118.5269
    }
  ];

  var correct = 0;
  var wrong = 0;
  var rw;
  var answer;
  var question;
  var loop = 0;
  var index = array[loop];
  var rectangle;

  function tester(latLng, map, index) {
    rectangle = new google.maps.Rectangle();
    rectangle.setOptions({
      strokeColor: null,
      strokeOpacity: null,
      strokeWeight: null,
      fillColor: null,
      fillOpacity: null,
      map,
      bounds: index
    });

    if (
      latLng.lat() <= index.north &&
      latLng.lat() >= index.south &&
      latLng.lng() <= index.east &&
      latLng.lng() >= index.west
    ) {
      (rectangle.strokeColor = "#00ff00"),
        (rectangle.strokeOpacity = 0.8),
        (rectangle.strokeWeight = 2),
        (rectangle.fillColor = "#00ff00"),
        (rectangle.fillOpacity = 0.35),
        (rw = 0);
      endAns(rw);
    } else {
      (rectangle.strokeColor = "#ff0000"),
        (rectangle.strokeOpacity = 0.8),
        (rectangle.strokeWeight = 2),
        (rectangle.fillColor = "#ff0000"),
        (rectangle.fillOpacity = 0.35),
        (rw = 1);
      endAns(rw);
    }
    update();
  }

  function update() {
    //Increments array index value for looping
    if (loop <= 5) {
      loop++;
      index = array[loop];
      console.log(loop);
    }

    // Reveals results once loop reaches last question
    if (loop == 5) {
      document.getElementById("displayCorrect").innerHTML = correct;
      document.getElementsByClassName("correct")[0].style.visibility = "visible";
      document.getElementById("displayIncorrect").innerHTML = wrong;
      document.getElementsByClassName("incorrect")[0].style.visibility = "visible";
    }
  }

  function endAns(rw) {
    answer = "answer" + loop;
    question = "question" + (loop + 1);
    if (rw == 0) {
      document.getElementById(answer).style.color = "green";
      document.getElementById(answer).innerHTML = "Correct";
      document.getElementById(answer).style.visibility = "visible";
      document.getElementById(question).style.visibility = "visible";
      console.log(question);
      correct++;
    }
    if (rw == 1) {
      document.getElementById(answer).style.color = "red";
      document.getElementById(answer).innerHTML = "Incorrect";
      document.getElementById(answer).style.visibility = "visible";
      document.getElementById(question).style.visibility = "visible";
      wrong++;
    }
  }
}

/////////////////
// GET RID OF ///
//function placeMarkerAndPanTo(latLng, map) {
//  new google.maps.Marker({
//    position: latLng,
//    map: map
//  });
//  console.log(latLng.lat());
//  console.log(latLng.lng());
//}
