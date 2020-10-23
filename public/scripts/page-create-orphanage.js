// create map
const map = L.map('mapid').setView([-21.5585676, -45.4405262], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68], 
    iconAnchor: [29,68]
})

// create and add marker
let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add field photo
function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.lenght - 1].cloneNode(true)
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    input.value = ""
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

function toggleSelect(event) {
    // remove the .active class (from the buttons)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    /*
    .forEach(function(button) {
        button.classList.remove('active')
    })
    */

    // puts class .active on the clicked button
    const button = event.currentTarget
    button.classList.add('active')

    // checks button clicked yes or no
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}