const showChar = document.getElementById("add-char")
const list = document.querySelector('#card-list')

showChar.addEventListener("click", () =>{
    var x = document.getElementById("char-number").value
    fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=ccbe0d402e72c29b0e7ad5bb3a66a4b4&hash=4b8e06ffd8bd5b31dd33d93b94892036&ts=1675259668304&limit=${x}`)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        addCard(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    
    
    function addCard(data) {
        for (var i = 0; i < data.data.results.length; i++) {
            const template = document.getElementById("marvel-card").content.cloneNode(true);
            template.querySelector('#char-img').src=data.data.results[i].thumbnail.path+ "." + data.data.results[i].thumbnail.extension
            template.querySelector('.char-name').innerText="NAME: " + data.data.results[i].name;
            template.querySelector('.char-des').innerText="DESCRIPTION: " + data.data.results[i].description;
            document.querySelector('#card-list').appendChild(template);
        }
    };
    list.innerHTML="";
},)



