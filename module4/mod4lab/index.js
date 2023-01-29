
    fetch('people.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myRanking");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].id;
        mainContainer.appendChild(div);
    }
    var mainContainerData = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].firstName + ' ' + data[i].lastName;
        mainContainerData.appendChild(div);
    }
    var mainContainerPoints = document.getElementById("myPoints");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].points;
        mainContainerPoints.appendChild(div);
    }
}
