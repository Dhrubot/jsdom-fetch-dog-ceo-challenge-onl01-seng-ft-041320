console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json['message']))
}

function renderImages(images) {
    const dogImages = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('IMG') 
        img.src = image
        img.height = "250"
        dogImages.appendChild(img)
    });
}

function fetchBreeds() {
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
}

function renderBreeds(breeds) {
    const main = document.getElementById('dog-breeds')
    for (const breed in breeds.message) {
        const li = document.createElement('li')
        li.innerHTML = breed
        main.appendChild(li)
        //the event listener to change color
        li.addEventListener('click', function () {
            li.style.color = "blue"
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
})