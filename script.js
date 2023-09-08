const image = document.getElementById('carimg');
const button = document.getElementById('btn');  
button.addEventListener('click', CarImage);

function CarImage() {
  fetch('https://api.unsplash.com/photos/random?client_id=W6d6aeCC5epbGpnYtnc6c9ppY6Xa9h_GLw-7Ndwn2rw&query=car')
    .then(response => response.json())
    .then(data => {
      image.innerHTML = `<img src="${data.urls.raw}"/>`;
  }) 
}