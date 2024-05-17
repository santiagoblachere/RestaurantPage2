import './style.css';
import pageRender from './pageRenderHome';
import contactRender from './pageRenderContact'


const buttons = document.getElementsByTagName('button')
console.log(buttons)
for (let i= 0; i < buttons.length; i++) {
    console.log(buttons[i])
    if (buttons[i].innerText === 'HOME') {
        buttons[i].onclick = (e) => {
            e.preventDefault();
            pageRender()
        }
    } else if (buttons[i].innerText === 'CONTACT') {
        buttons[i].onclick = (e) => {
            e.preventDefault();
            contactRender()
        }
    }
}
