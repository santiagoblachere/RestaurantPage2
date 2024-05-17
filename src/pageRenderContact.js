
export default function pageRender(){

    const divContainer = document.getElementById('content');
    divContainer.innerHTML = ''
    const title = document.createElement('h1');
    title.innerText = "CONTACT INFORMATION";
    divContainer.appendChild(title)
    
    const cellphoneInfo = document.createElement('p');
    cellphoneInfo.innerText = 'CELLPHONE: 1123590030';

    const mailInfo = document.createElement('p');
    mailInfo.innerText = 'EMAIL: blachere.asantiago@gmail.com';
    
   
    divContainer.appendChild(cellphoneInfo)
    divContainer.appendChild(mailInfo)
    
}