import _ from 'lodash';
import '../styles/style.css';

function component() {
    let element = document.createElement('div');
    element.classList.add('hello');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());