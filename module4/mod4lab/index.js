function addCard() {

    const template =
        document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = 'My Card Title';
        template.querySelector('.card-text').innerText = 'lorem ipsum ble bla';
        document.querySelector('#card-list').appendChild(template);
    }

    if ('content' in document.createElement('template')) {
        addCard();
        addCard();
    }