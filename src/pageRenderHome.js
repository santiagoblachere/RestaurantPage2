import Empanada from './empanadas.jpeg'

export default function pagerender(){

    const divContainer = document.getElementById('content');
    divContainer.innerHTML = ''

    const title = document.createElement('h1');
    title.innerText = "LO DE BLACHE";
    divContainer.appendChild(title)

    const logo = new Image();
    logo.src = Empanada;
    divContainer.appendChild(logo)

    const restaurantDescription = document.createElement('p');
    restaurantDescription.innerText = 'WE DO NOT USE REAL DOGS'
    divContainer.appendChild(restaurantDescription)

}
